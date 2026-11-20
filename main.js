// Título palabra por palabra
(function(){var h=document.getElementById('titulo');var w=h.textContent.split(' ');h.textContent='';
  w.forEach(function(t,i){var s=document.createElement('span');s.textContent=t;s.style.animationDelay=(0.3+i*0.4)+'s';h.appendChild(s);h.appendChild(document.createTextNode(' '));});})();

var T=[
{k:'Ansiedad',p:['Respirá lento: inhalá 4 segundos, sostené 4 y soltá en 6. Repetilo cinco veces.','Anotá la preocupación y separá lo que podés resolver hoy de lo que no.','Volvé al presente: nombrá tres cosas que ves y dos que oís.'],f:['Entregá la carga en oración, con nombre y apellido: cada preocupación.','Elegí un versículo y repetilo cuando venga el pensamiento acelerado.'],v:['«Por nada estéis afanosos, sino sean conocidas vuestras peticiones delante de Dios en toda oración.»','Filipenses 4:6']},
{k:'Miedos',p:['Un miedo evitado crece. Acercate de a poco, en pasos pequeños.','Preguntate qué es lo peor que puede pasar y qué harías si pasara.','Contáselo a alguien de confianza: acompañado pesa menos.'],f:['El valor no es no sentir miedo, es avanzar con Dios al lado.','Orá por una cosa concreta que hoy te da temor.'],v:['«No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te esfuerzo.»','Isaías 41:10']},
{k:'Traumas',p:['Lo que viviste no fue tu culpa. Sanar es un proceso y tiene su tiempo.','Buscá acompañamiento profesional: un trauma no se resuelve a fuerza de voluntad.','Cuidá lo básico: dormir, comer, moverte y tener rutinas previsibles.'],f:['Dios no te pide que olvides, te invita a que Él cure lo que duele.','Dejá que la comunidad te sostenga sin exigirte explicaciones.'],v:['«Él sana a los quebrantados de corazón, y venda sus heridas.»','Salmo 147:3']},
{k:'Peleas en casa',p:['Frená la discusión cuando suba el tono y retomen en 20 minutos.','Hablá desde lo que sentís («me dolió») y no desde el reproche («vos siempre»).','Escuchen sin interrumpir y repitan lo que entendieron antes de responder.'],f:['Oren juntos aunque sea una vez por semana, aun cuando cueste.','Pedir perdón primero no es perder: es cuidar el vínculo.'],v:['«La blanda respuesta quita la ira; mas la palabra áspera hace subir el furor.»','Proverbios 15:1']},
{k:'Ira y enojo',p:['Salí de la situación unos minutos antes de responder.','Preguntate qué hay debajo: dolor, miedo, cansancio, injusticia.','Movete: caminar o hacer ejercicio descarga la tensión.'],f:['Enojarse no es pecado; lo que se hace con el enojo, sí importa.','Pedile a Dios dominio propio para el momento exacto en que lo necesitás.'],v:['«Airaos, pero no pequéis; no se ponga el sol sobre vuestro enojo.»','Efesios 4:26']},
{k:'Angustia',p:['No te quedes con la angustia a solas: hablá con una persona hoy.','Hacé una sola cosa pequeña: bañarte, salir al sol, tomar agua.','Si dura semanas o te cuesta funcionar, consultá a un profesional.'],f:['Podés orar sin palabras bonitas. Decí exactamente cómo estás.','Dios está cerca de quien está roto por dentro.'],v:['«Cercano está Jehová a los quebrantados de corazón; y salva a los contritos de espíritu.»','Salmo 34:18'],al:1},
{k:'Duelo',p:['Llorar es parte del proceso. No hay un tiempo correcto para estar bien.','Hablá de la persona que perdiste, compartí recuerdos y fechas.','Evitá decisiones grandes en los primeros meses.'],f:['El duelo es amor que no tiene adónde ir. Dios lo recibe.','Dejate acompañar por la iglesia, la familia y los amigos.'],v:['«Bienaventurados los que lloran, porque ellos recibirán consolación.»','Mateo 5:4']}
];
var tabs=document.getElementById('tabs'),panel=document.getElementById('panel'),al=document.getElementById('alerta');
function show(i){
  [].forEach.call(tabs.children,function(b,j){b.setAttribute('aria-selected',j===i)});
  var t=T[i];
  function ul(a){return '<ul>'+a.map(function(x){return '<li>'+x+'</li>'}).join('')+'</ul>'}
  panel.innerHTML='<div><h3>Consejos psicológicos</h3>'+ul(t.p)+'</div><div><h3>Consejos de fe</h3>'+ul(t.f)+'</div><div class="verse">'+t.v[0]+'<small>'+t.v[1]+'</small></div>';
  al.hidden=!t.al;
}
T.forEach(function(t,i){var b=document.createElement('button');b.type='button';b.role='tab';b.textContent=t.k;b.onclick=function(){show(i)};tabs.appendChild(b)});
show(0);

var F=['Hoy no tenés que resolver toda tu vida, solo este día.','Pedir ayuda no es debilidad. Es el primer acto de valentía.','Lo que hoy duele no define lo que viene.','Descansar también es avanzar.','Podés estar roto y aun así ser amado.','Cada amanecer es una invitación a empezar de nuevo.','No estás solo, aunque hoy no lo sientas.','Un paso pequeño sigue siendo un paso.'];
var q=document.getElementById('quotes');F.forEach(function(t){var f=document.createElement('figure');f.textContent=t;q.appendChild(f)});

document.getElementById('form').addEventListener('submit',function(e){
  e.preventDefault();
  var n=document.getElementById('n').value.trim(),m=document.getElementById('m').value.trim();
  var txt='Hola Norberto, soy '+(n||'...')+'. '+m;
  var u='https://wa.me/5491154568541?text='+encodeURIComponent(txt);
  document.getElementById('ok').innerHTML='Listo. <a href="'+u+'" target="_blank" rel="noopener">Tocá acá para abrir WhatsApp con tu mensaje</a>.';
});

// Video: si subís video/presentacion.mp4 (tu propio video) reemplaza al video de versículos.
(function(){
  var v=document.getElementById('vid');
  if(!v||!window.fetch)return;
  fetch('video/presentacion.mp4',{method:'HEAD'}).then(function(r){
    if(!r.ok)return;
    v.removeAttribute('poster');v.src='video/presentacion.mp4';v.load();
    v.setAttribute('aria-label','Video de presentación de Norberto Timoteo Holubicki');
    var c=document.getElementById('vidCap');if(c)c.textContent='Presentación de Norberto Timoteo Holubicki.';
  }).catch(function(){});
})();

// ---- Asistente de apoyo ----
(function(){
  var WA='https://wa.me/5491154568541';
  var fab=document.getElementById('botFab'),panel=document.getElementById('botPanel'),msgs=document.getElementById('botMsgs'),chips=document.getElementById('botChips'),form=document.getElementById('botForm'),input=document.getElementById('botInput');
  if(!fab)return;
  var history=[],aiDown=false,busy=false,started=false;
  function norm(s){return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'')}
  function add(text,cls){var p=document.createElement('p');p.className=cls;p.textContent=text;msgs.appendChild(p);msgs.scrollTop=msgs.scrollHeight;return p}
  function addLink(){var a=document.createElement('a');a.href=WA;a.target='_blank';a.rel='noopener';a.textContent='Escribirle a Norberto por WhatsApp';msgs.appendChild(a);msgs.scrollTop=msgs.scrollHeight}
  var CRISIS=['suicid','matarme','quitarme la vida','no quiero vivir','quiero morir','quiero morirme','hacerme dano','lastimarme','acabar con todo','mejor muerto','mejor muerta','no vale la pena vivir'];
  var KEYS=[['ansied','ansios','nervio','panico','preocup','taquicard'],['miedo','temor','fobia','asust'],['trauma','abuso','maltrato','violencia','pesadilla','flashback'],['pelea','discu','pareja','espos','conflicto','grit'],['ira','enojo','enoj','rabia','furia','bronca'],['angusti','tristez','triste','depre','vacio','soledad','llorar'],['duelo','muri','falleci','perdi','luto','extran']];
  function crisis(t){var n=norm(t);return CRISIS.some(function(k){return n.indexOf(k)>-1})}
  function topic(t){var n=norm(t);for(var i=0;i<KEYS.length;i++){if(KEYS[i].some(function(k){return n.indexOf(k)>-1}))return i}return -1}
  function crisisReply(){
    var p=add('Lo que contás es importante y no tenés que pasarlo solo. Si pensás en hacerte daño, pedí ayuda ahora: llamá al 135 (Buenos Aires y Gran Buenos Aires) o al 911. Si podés, avisale a alguien cercano que esté con vos.','bot-m bot-alert');addLink()}
  function fallback(t){
    var i=topic(t);
    if(i<0){add('Gracias por contarme. Para orientarte mejor, elegí un tema de los botones o contame con más detalle qué te pasa. Si preferís hablarlo con una persona, Norberto puede acompañarte.','bot-m');addLink();return}
    var d=T[i];
    add('Gracias por confiar en contarlo. Sobre '+d.k.toLowerCase()+', te propongo:\n\n• '+d.p[0]+'\n• '+d.p[1]+'\n\nDesde la fe:\n• '+d.f[0]+'\n\n'+d.v[0]+' ('+d.v[1]+')\n\nEsto es orientación general. Si querés trabajarlo en profundidad, podés pedir una sesión.','bot-m');addLink();
  }
  function reply(t){
    if(crisis(t)){crisisReply();return}
    history.push({role:'user',content:t});
    if(aiDown){fallback(t);return}
    busy=true;var wait=add('Escribiendo…','bot-m');
    var ctl=window.AbortController?new AbortController():null;var to=setTimeout(function(){ctl&&ctl.abort()},20000);
    fetch('api/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({messages:history.slice(-10)}),signal:ctl?ctl.signal:undefined})
      .then(function(r){if(!r.ok)throw new Error('http');return r.json()})
      .then(function(j){if(!j||!j.reply)throw new Error('vacio');wait.textContent=j.reply;history.push({role:'assistant',content:j.reply});if(j.crisis)addLink()})
      .catch(function(){aiDown=true;wait.remove();fallback(t)})
      .then(function(){clearTimeout(to);busy=false;msgs.scrollTop=msgs.scrollHeight});
  }
  function send(t){t=t.trim();if(!t||busy)return;add(t,'bot-u');reply(t)}
  function open(v){panel.hidden=!v;fab.setAttribute('aria-expanded',v);fab.textContent=v?'Cerrar':'Asistente';
    if(v&&!started){started=true;add('Hola, soy el asistente virtual de Norberto. No soy una persona ni hago diagnósticos: te ofrezco orientación general y un lugar donde ordenar lo que sentís. ¿Qué te está pasando?','bot-m')}
    if(v)input.focus()}
  T.forEach(function(d){var b=document.createElement('button');b.type='button';b.textContent=d.k;b.onclick=function(){send(d.k)};chips.appendChild(b)});
  fab.onclick=function(){open(panel.hidden)};
  document.getElementById('botClose').onclick=function(){open(false);fab.focus()};
  form.addEventListener('submit',function(e){e.preventDefault();var v=input.value;input.value='';send(v)});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!panel.hidden)open(false)});
})();

// Reels: al reproducir uno se pausan los demás
(function(){
  var vs=[].slice.call(document.querySelectorAll('.reel video'));
  vs.forEach(function(v){v.addEventListener('play',function(){vs.forEach(function(o){if(o!==v)o.pause()});var m=document.getElementById('vid');if(m)m.pause()})});
})();
