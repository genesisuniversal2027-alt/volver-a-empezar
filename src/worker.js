// Cloudflare Workers (con archivos estáticos): sirve la página y atiende /api/chat.
import { onRequestPost } from '../functions/api/chat.js';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/api/chat') {
      if (request.method !== 'POST') {
        return new Response(JSON.stringify({ error: 'metodo' }), { status: 405, headers: { 'Content-Type': 'application/json' } });
      }
      return onRequestPost({ request, env });
    }
    return env.ASSETS.fetch(request);
  },
};
