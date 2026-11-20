// Cloudflare Pages Function: proxy del asistente de apoyo.
// La clave de la API NO va en el navegador: se guarda como secreto ANTHROPIC_API_KEY en Cloudflare.

const SYSTEM = `Sos el asistente virtual del sitio "Volver a Empezar" de Norberto Timoteo Holubicki, consultor psicólogo, pastor y conferencista de Lomas de Zamora, Argentina. Hablás en español rioplatense (vos), con calidez, calma y respeto.
Reglas:
- Aclarás, si hace falta, que sos una IA y no una persona; no hacés diagnósticos, no indicás medicación ni reemplazás una consulta.
- Respondés breve (máx. 120 palabras): validás lo que siente la persona, ofrecés 1 o 2 ideas concretas y simples, y hacés como mucho una pregunta.
- Podés citar un versículo bíblico breve si encaja, sin imponer creencias.
- Si hay riesgo (ideas de hacerse daño o de suicidio, violencia, abuso en curso), respondé con contención, indicá llamar al 135 (Buenos Aires y GBA) o al 911 y sugerí avisar a alguien cercano. Para violencia de género, el 144.
- Para profundizar, invitá a pedir una sesión con Norberto por WhatsApp (+54 9 11 5456-8541).
- No inventes datos sobre Norberto ni precios ni horarios. Si te piden algo ajeno a bienestar emocional, decí amablemente que no podés ayudar con eso.`;

const HEADERS = { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' };
const hits = new Map(); // límite simple por IP (por instancia); para un límite firme usá una regla de Rate Limiting de Cloudflare

const json = (obj, status = 200) => new Response(JSON.stringify(obj), { status, headers: HEADERS });

export async function onRequestPost({ request, env }) {
  if (!env.ANTHROPIC_API_KEY) return json({ error: 'sin_config' }, 503);

  // Solo desde la misma página
  const origin = request.headers.get('Origin');
  if (origin && new URL(origin).host !== new URL(request.url).host) return json({ error: 'origen' }, 403);

  // 30 mensajes por hora por visitante
  const ip = request.headers.get('CF-Connecting-IP') || 'x';
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => t > now - 3600_000);
  if (recent.length >= 30) return json({ error: 'limite' }, 429);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();

  let body;
  try { body = await request.json(); } catch { return json({ error: 'json' }, 400); }
  const msgs = (Array.isArray(body.messages) ? body.messages : []).slice(-10)
    .map((m) => ({ role: m && m.role === 'assistant' ? 'assistant' : 'user', content: String((m && m.content) || '').trim().slice(0, 600) }))
    .filter((m) => m.content);
  if (!msgs.length || msgs[0].role !== 'user' || msgs[msgs.length - 1].role !== 'user') return json({ error: 'mensajes' }, 400);

  let res;
  try {
    res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-api-key': env.ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({ model: env.MODEL || 'claude-haiku-5-5', max_tokens: 400, system: SYSTEM, messages: msgs }),
    });
  } catch { return json({ error: 'ia' }, 502); }

  const data = await res.json().catch(() => null);
  const text = data && data.content && data.content[0] && data.content[0].text;
  if (!res.ok || !text) return json({ error: 'ia' }, 502);
  return json({ reply: text, crisis: /\b(135|911)\b/.test(text) });
}

export const onRequest = () => json({ error: 'metodo' }, 405);
