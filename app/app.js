/* Volver a Empezar · Mi espacio. Todo se guarda solo en este dispositivo (localStorage). */
(function () {
  'use strict';
  var WA = 'https://wa.me/5491154568541';
  var KEY = 'vae_app_v1';

  var GROUPS = [
    { id: 'emociones', n: 'Emociones' },
    { id: 'heridas', n: 'Heridas del pasado' },
    { id: 'vinculos', n: 'Vínculos' },
    { id: 'interior', n: 'Tu mundo interior' }
  ];

  var TOPICS = [
    { id: 'ansiedad', g: 'emociones', n: 'Ansiedad', b: 'Preocupación que no se apaga y un cuerpo en alerta.',
      q: 'La ansiedad es una alarma que se activa de más. No es debilidad: es el cuerpo intentando protegerte. Se calma cuando bajás el ritmo y ordenás lo que sí depende de vos.',
      s: ['Mi mente anticipa lo peor', 'Siento el corazón acelerado o el pecho apretado', 'Me cuesta dormir por los pensamientos', 'Evito cosas por miedo a que salgan mal'],
      p: 'Señor, te entrego lo que no puedo controlar. Cada preocupación la dejo en tus manos. Dame paz en el cuerpo y claridad en la mente. Amén.',
      w: 'Escribí la preocupación que más pesa hoy.',
      a: ['Respirá lento (4-4-6) tres veces al día', 'Anotá la preocupación y separá lo que podés resolver hoy de lo que no', 'Cuando la mente se acelere, nombrá 3 cosas que ves y 2 que oís', 'Caminá 15 minutos y reducí la cafeína'],
      v: ['«Por nada estéis afanosos, sino sean conocidas vuestras peticiones delante de Dios en toda oración.»', 'Filipenses 4:6'],
      h: 'Si dura semanas, te impide trabajar o dormir, o tenés ataques de pánico, consultá a un profesional.' },
    { id: 'miedos', g: 'emociones', n: 'Miedos', b: 'Temores que frenan lo que querés hacer.',
      q: 'Un miedo evitado crece; uno enfrentado de a poco se achica. El valor no es no sentir miedo: es avanzar con él al lado.',
      s: ['Evito situaciones por temor', 'Me imagino lo peor antes de que pase', 'Siento que no voy a poder', 'Me da vergüenza que otros lo noten'],
      p: 'Señor, vos conocés mi miedo. Dame valentía para dar un paso pequeño hoy y confianza en que estás conmigo. Amén.',
      w: '¿A qué le tenés miedo, con nombre y apellido?',
      a: ['Elegí un paso pequeño hacia eso que evitás', 'Preguntate: ¿qué es lo peor que puede pasar y qué haría yo?', 'Contáselo a alguien de confianza: acompañado pesa menos', 'Orá por una cosa concreta que hoy te da temor'],
      v: ['«No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te esfuerzo.»', 'Isaías 41:10'],
      h: 'Si el miedo te impide salir, trabajar o hacer tu vida con normalidad, pedí ayuda profesional.' },
    { id: 'ira', g: 'emociones', n: 'Ira y enojo', b: 'Enojo que sube rápido y cuesta bajar.',
      q: 'Debajo del enojo suele haber dolor, miedo, cansancio o injusticia. Enojarse no es el problema: lo que hacés con el enojo, sí.',
      s: ['Exploto por cosas pequeñas', 'Siento tensión en la mandíbula, las manos o el pecho', 'Digo cosas de las que después me arrepiento', 'Me cuesta perdonar o soltar'],
      p: 'Señor, dame dominio propio en el momento justo. Calmá mi corazón antes de hablar y enseñame a decir lo que siento sin herir. Amén.',
      w: '¿Qué hay debajo de tu enojo? ¿Dolor, miedo, injusticia?',
      a: ['Salí de la situación unos minutos antes de responder', 'Movete: caminá o hacé ejercicio para descargar la tensión', 'Hablá desde lo que sentís («me dolió») y no desde el reproche', 'Pedile a Dios dominio propio para el momento exacto'],
      v: ['«Airaos, pero no pequéis; no se ponga el sol sobre vuestro enojo.»', 'Efesios 4:26'],
      h: 'Si el enojo lleva a gritos, golpes o rupturas frecuentes, consultá a un profesional.' },
    { id: 'angustia', g: 'emociones', n: 'Angustia', b: 'Un peso en el pecho, sin ganas ni salida.',
      q: 'La angustia aparece cuando el dolor no encuentra palabras. No hace falta resolverlo todo hoy: hace falta no quedarte solo con eso.',
      s: ['Siento un nudo o presión en el pecho', 'Lloro o quiero llorar sin un motivo claro', 'Me cuesta hacer cosas simples', 'Siento que nada va a mejorar'],
      p: 'Señor, estoy roto por dentro y no tengo palabras bonitas. Vos estás cerca de los quebrantados: quedate conmigo ahora. Amén.',
      w: 'Decí con tus palabras cómo estás, sin filtro.',
      a: ['Hablá con una persona hoy', 'Hacé una sola cosa pequeña: bañarte, salir al sol, tomar agua', 'Orá sin palabras bonitas: decí exactamente cómo estás', 'Si dura semanas o te cuesta funcionar, pedí cita con un profesional'],
      v: ['«Cercano está Jehová a los quebrantados de corazón; y salva a los contritos de espíritu.»', 'Salmo 34:18'],
      h: 'Si pensás en hacerte daño, llamá ahora al 135 o al 911.' },
    { id: 'tristeza', g: 'emociones', n: 'Tristeza y desánimo', b: 'Desgano, vacío o falta de ilusión.',
      q: 'La tristeza es parte de la vida, pero cuando se queda mucho tiempo roba la energía. Los pasos pequeños y constantes la mueven más que la fuerza de voluntad.',
      s: ['Perdí el interés en lo que antes disfrutaba', 'Me cuesta levantarme y arrancar el día', 'Duermo demasiado o muy poco', 'Me siento sin esperanza'],
      p: 'Señor, mi alma está abatida. Levantame con tu esperanza y mandame personas que me acompañen. Amén.',
      w: '¿Qué cosa buena, aunque sea pequeña, pasó esta semana?',
      a: ['Armá una rutina mínima: levantarte, bañarte, comer a horario', 'Salí al sol o caminá 10 minutos', 'Hablá con alguien en lugar de aislarte', 'Hacé 10 minutos de algo que antes disfrutabas'],
      v: ['«¿Por qué te abates, oh alma mía, y te turbas dentro de mí? Espera en Dios; porque aún he de alabarle.»', 'Salmo 42:11'],
      h: 'Si pasan más de dos semanas con esta tristeza, o aparecen ideas de no querer vivir, pedí ayuda profesional.' },
    { id: 'estres', g: 'emociones', n: 'Estrés y agotamiento', b: 'Cansancio, exceso de carga y un cuerpo agotado.',
      q: 'El estrés sostenido gasta el cuerpo. Descansar no es perder tiempo: es parte de poder seguir.',
      s: ['Me siento agotado aunque duerma', 'Estoy irritable o disperso', 'Tengo dolor de cabeza o tensión en el cuello', 'Siento que todo me desborda'],
      p: 'Señor, vengo cansado y cargado. Enseñame a descansar en vos y a soltar lo que no me corresponde. Amén.',
      w: '¿Qué carga estás llevando que no te corresponde?',
      a: ['Hacé una lista y elegí las 3 cosas realmente importantes de hoy', 'Poné pausas de 5 minutos cada dos horas', 'Decí que no a una cosa esta semana', 'Dormí a horario y guardá un rato sin pantallas'],
      v: ['«Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.»', 'Mateo 11:28'],
      h: 'Si el agotamiento te impide trabajar o aparecen síntomas físicos, consultá a un médico o a un psicólogo.' },
    { id: 'traumas', g: 'heridas', n: 'Traumas', b: 'Heridas que el cuerpo y la mente siguen recordando.',
      q: 'Lo que viviste no fue tu culpa. Un trauma no se resuelve a fuerza de voluntad: necesita seguridad, tiempo y acompañamiento.',
      s: ['Tengo recuerdos o pesadillas que vuelven', 'Me sobresalto o me pongo en alerta con facilidad', 'Evito lugares, personas o temas que me recuerdan lo vivido', 'Me siento desconectado o entumecido'],
      p: 'Señor, curá lo que duele y no puedo olvidar. Mostrame que hoy estoy a salvo y rodeame de personas seguras. Amén.',
      w: 'Escribí solo lo que te sientas seguro de escribir. Podés parar cuando quieras.',
      a: ['Cuidá lo básico: dormir, comer, moverte y tener rutinas previsibles', 'Buscá acompañamiento profesional: un trauma no se trabaja a solas', 'Elegí un lugar o una actividad que te dé calma y volvé a ella', 'Dejá que la comunidad te sostenga sin exigirte explicaciones'],
      v: ['«Él sana a los quebrantados de corazón, y venda sus heridas.»', 'Salmo 147:3'],
      h: 'Un trauma conviene tratarlo con un profesional. Esta aplicación es un apoyo, no un tratamiento.' },
    { id: 'duelo', g: 'heridas', n: 'Duelo', b: 'La pérdida de alguien o de algo que amabas.',
      q: 'El duelo es amor que no tiene adónde ir. No hay un tiempo correcto para estar bien: cada persona tiene su ritmo.',
      s: ['Extraño mucho y a veces no lo puedo creer', 'Tengo olas de llanto o de enojo', 'Me cuesta concentrarme o comer', 'Siento culpa por lo que no dije o no hice'],
      p: 'Señor, consolame en mi pérdida. Guardá en tu amor a quien ya no está y dame fuerzas para seguir. Amén.',
      w: 'Escribile unas líneas a quien perdiste.',
      a: ['Hablá de la persona que perdiste y compartí recuerdos', 'Evitá decisiones grandes en los primeros meses', 'Dejate acompañar por la familia, la iglesia y los amigos', 'Armá un gesto de recuerdo: una foto, una vela, una carta'],
      v: ['«Bienaventurados los que lloran, porque ellos recibirán consolación.»', 'Mateo 5:4'],
      h: 'Si pasan muchos meses y no podés retomar tu vida diaria, un acompañamiento profesional puede ayudarte.' },
    { id: 'culpa', g: 'heridas', n: 'Culpa y perdón', b: 'Remordimiento que pesa y cuesta soltar.',
      q: 'La culpa sana te lleva a reparar; la culpa que te aplasta te paraliza. Perdonarte no es justificar lo que pasó: es dejar de castigarte.',
      s: ['Repaso una y otra vez lo que hice', 'Siento que no merezco ser perdonado', 'Me cuesta perdonar a otros', 'Me trato con dureza en mis pensamientos'],
      p: 'Señor, reconozco lo que hice y te pido perdón. Limpiame y enseñame a perdonarme y a perdonar. Amén.',
      w: '¿Qué querés reconocer y soltar hoy?',
      a: ['Reconocé con claridad qué hiciste y qué no estuvo en tu control', 'Si hace falta, pedí perdón o reparás de forma concreta', 'Hablalo con alguien de confianza o con tu pastor', 'Cambiá el castigo por una acción: ¿qué podés hacer distinto desde hoy?'],
      v: ['«Si confesamos nuestros pecados, él es fiel y justo para perdonar nuestros pecados, y limpiarnos de toda maldad.»', '1 Juan 1:9'],
      h: 'Si la culpa es constante, intrusiva o te lleva a hacerte daño, hablalo con un profesional.' },
    { id: 'familia', g: 'vinculos', n: 'Peleas en casa', b: 'Discusiones y distancia en la pareja o la familia.',
      q: 'Las peleas repetidas suelen mostrar necesidades que nadie escuchó. Se corrigen con pausas, palabras claras y ganas de reparar.',
      s: ['Discutimos por lo mismo una y otra vez', 'Alguien termina gritando o callándose', 'Me cuesta escuchar sin defenderme', 'Siento distancia en casa'],
      p: 'Señor, traé paz a mi casa. Enseñame a hablar con mansedumbre y a escuchar con humildad. Amén.',
      w: '¿Qué necesitás de la otra persona, dicho sin reproche?',
      a: ['Frená la discusión cuando suba el tono y retomen en 20 minutos', 'Hablá desde lo que sentís («me dolió»), no desde el reproche', 'Escuchá sin interrumpir y repetí lo que entendiste', 'Oren juntos aunque sea una vez por semana; animate a pedir perdón primero'],
      v: ['«La blanda respuesta quita la ira; mas la palabra áspera hace subir el furor.»', 'Proverbios 15:1'],
      h: 'Si hay violencia, miedo o amenazas, pedí ayuda ya: 144 (violencia de género) o 911. Si los conflictos no ceden, consultá con un profesional o con terapia familiar.' },
    { id: 'limites', g: 'vinculos', n: 'Límites y comunicación', b: 'Decir que no, pedir lo que necesitás y ser escuchado.',
      q: 'Poner límites es cuidar el vínculo, no romperlo. Se aprende diciendo lo que sentís con claridad y sin culpa.',
      s: ['Digo que sí cuando quiero decir que no', 'Me cuesta pedir lo que necesito', 'Guardo el enojo hasta explotar', 'Siento que los demás deciden por mí'],
      p: 'Señor, dame firmeza y mansedumbre para decir la verdad con amor. Enseñame a cuidar mi vida y mis vínculos. Amén.',
      w: '¿Dónde te cuesta decir que no?',
      a: ['Practicá una frase corta: «hoy no puedo»', 'Elegí una situación y definí qué límite necesitás', 'Pedí lo que necesitás con «yo necesito…»', 'Tolerá la incomodidad: un límite sano puede molestar al principio'],
      v: ['«Sea, pues, vuestro hablar: Sí, sí; no, no; porque lo que es más de esto, de mal procede.»', 'Mateo 5:37'],
      h: 'Si decir que no te genera mucho miedo o culpa, un acompañamiento psicológico puede ayudarte.' },
    { id: 'soledad', g: 'vinculos', n: 'Soledad', b: 'Sentirte solo, incluso rodeado de gente.',
      q: 'La soledad duele porque somos seres de vínculo. Se alivia más con pequeños contactos constantes que con grandes cambios.',
      s: ['Siento que nadie me entiende', 'Paso días sin hablar con nadie', 'Me cuesta pedir compañía', 'Me siento solo aunque esté con gente'],
      p: 'Señor, no me dejes solo. Mandame personas buenas y ayudame a animarme a acercarme. Amén.',
      w: '¿Con quién te gustaría hablar esta semana?',
      a: ['Escribile o llamá hoy a una persona', 'Sumate a un grupo, una iglesia o una actividad semanal', 'Salí a un lugar con gente, aunque sea 20 minutos', 'Hablale a Dios con tus palabras: no estás solo'],
      v: ['«Jehová tu Dios es el que va contigo; no te dejará, ni te desamparará.»', 'Deuteronomio 31:6'],
      h: 'Si la soledad viene con una tristeza profunda que no cede, hablalo con un profesional.' },
    { id: 'autoestima', g: 'interior', n: 'Autoestima', b: 'Cómo te ves y cuánto te valorás.',
      q: 'Tu valor no depende de tus logros ni de la opinión de otros. Se fortalece cambiando el trato que te das.',
      s: ['Me comparo y salgo perdiendo', 'Me critico con dureza', 'Me cuesta aceptar un elogio', 'Siento que no soy suficiente'],
      p: 'Señor, ayudame a verme como me ves vos: valioso y amado. Sanás las palabras duras que me dijeron y las que me digo. Amén.',
      w: '¿Qué le dirías a un amigo que se sintiera como vos?',
      a: ['Anotá 3 cosas que hiciste bien hoy', 'Cambiá una crítica por una frase amable', 'Evitá compararte: mirá tu propio avance', 'Agradecé en voz alta algo de vos'],
      v: ['«Te alabaré; porque formidables, maravillosas son tus obras; estoy maravillado, y mi alma lo sabe muy bien.»', 'Salmo 139:14'],
      h: 'Si te sentís sin valor la mayor parte del tiempo, un acompañamiento psicológico puede ayudarte.' },
    { id: 'fe', g: 'interior', n: 'Fe y dudas', b: 'Vacío espiritual, dudas o sentir lejos a Dios.',
      q: 'Dudar no es dejar de creer: muchas veces es el inicio de una fe más honesta. Se reconstruye con pasos pequeños: una oración sencilla, la Palabra y la comunidad.',
      s: ['Siento que Dios está lejos', 'Tengo dudas que me incomodan', 'Oro y siento que nada pasa', 'Perdí las ganas de ir a la iglesia o de leer la Biblia'],
      p: 'Señor, creo; ayuda mi incredulidad. Acercate a mí en este momento y mostrame el próximo paso. Amén.',
      w: '¿Qué duda o pregunta querés poner delante de Dios?',
      a: ['Orá con palabras simples, aunque sientas poco', 'Leé un salmo por día, despacio', 'Hablá tus dudas con tu pastor o con alguien de confianza', 'Volvé a una comunidad: la fe se sostiene en compañía'],
      v: ['«Creo; ayuda mi incredulidad.»', 'Marcos 9:24'],
      h: 'Una conversación con Norberto, como pastor y psicólogo, puede ayudarte a ordenar lo que sentís.' },
    { id: 'proposito', g: 'interior', n: 'Propósito y decisiones', b: 'Encrucijadas, cambios y falta de rumbo.',
      q: 'Las decisiones importantes se toman mejor con calma, con información y con consejo. Un próximo paso pequeño aclara más que una respuesta perfecta.',
      s: ['No sé qué camino tomar', 'Postergo decisiones importantes', 'Siento que perdí el rumbo', 'Me paraliza equivocarme'],
      p: 'Señor, mostrame el camino. Dame sabiduría, calma y personas sabias que me aconsejen. Amén.',
      w: '¿Qué decisión tenés pendiente y qué te frena?',
      a: ['Escribí pros y contras y ordená qué valorás más', 'Pedí consejo a dos personas sabias', 'Elegí el próximo paso más pequeño y hacelo esta semana', 'Orá y dejá pasar unos días antes de decidir lo grande'],
      v: ['«Fíate de Jehová de todo tu corazón, y no te apoyes en tu propia prudencia. Reconócelo en todos tus caminos, y él enderezará tus veredas.»', 'Proverbios 3:5-6'],
      h: 'Si la indecisión te angustia mucho o paraliza tu vida, conversalo con un profesional.' }
  ];

  var MOODS = ['Muy mal', 'Mal', 'Más o menos', 'Bien', 'Muy bien'];
  var CRISIS = ['suicid', 'matarme', 'quitarme la vida', 'no quiero vivir', 'quiero morir', 'quiero morirme', 'hacerme dano', 'lastimarme', 'acabar con todo', 'mejor muerto', 'mejor muerta', 'no vale la pena vivir'];
  var SAFETY = 'Si pensás en hacerte daño, pedí ayuda ahora: llamá al 135 (Buenos Aires y Gran Buenos Aires) o al 911. Si podés, avisale a alguien cercano que esté con vos.';

  /* ---------- Guía: versículos, tips, rutina y recomendaciones ---------- */
  var VERSES = [
    ['«Jehová es mi pastor; nada me faltará.»', 'Salmo 23:1'],
    ['«Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes, porque Jehová tu Dios estará contigo en dondequiera que vayas.»', 'Josué 1:9'],
    ['«Dios es nuestro amparo y fortaleza, nuestro pronto auxilio en las tribulaciones.»', 'Salmo 46:1'],
    ['«Los que esperan a Jehová tendrán nuevas fuerzas; levantarán alas como las águilas; correrán, y no se cansarán; caminarán, y no se fatigarán.»', 'Isaías 40:31'],
    ['«Nuevas son cada mañana; grande es tu fidelidad.»', 'Lamentaciones 3:23'],
    ['«Mi socorro viene de Jehová, que hizo los cielos y la tierra.»', 'Salmo 121:2'],
    ['«La paz os dejo, mi paz os doy; yo no os la doy como el mundo la da. No se turbe vuestro corazón, ni tenga miedo.»', 'Juan 14:27'],
    ['«Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal, para daros el fin que esperáis.»', 'Jeremías 29:11'],
    ['«Encomienda a Jehová tu camino, y confía en él; y él hará.»', 'Salmo 37:5'],
    ['«Bástate mi gracia; porque mi poder se perfecciona en la debilidad.»', '2 Corintios 12:9'],
    ['«Sobre toda cosa guardada, guarda tu corazón; porque de él mana la vida.»', 'Proverbios 4:23'],
    ['«Este es el día que hizo Jehová; nos gozaremos y alegraremos en él.»', 'Salmo 118:24'],
    ['«No os afanéis por el día de mañana, porque el día de mañana traerá su afán. Basta a cada día su propio mal.»', 'Mateo 6:34'],
    ['«Echando toda vuestra ansiedad sobre él, porque él tiene cuidado de vosotros.»', '1 Pedro 5:7'],
    ['«Echa sobre Jehová tu carga, y él te sustentará; no dejará para siempre caído al justo.»', 'Salmo 55:22'],
    ['«Todo lo puedo en Cristo que me fortalece.»', 'Filipenses 4:13'],
    ['«Por la noche durará el lloro, y a la mañana vendrá la alegría.»', 'Salmo 30:5'],
    ['«Gozosos en la esperanza; sufridos en la tribulación; constantes en la oración.»', 'Romanos 12:12'],
    ['«He aquí, yo hago nuevas todas las cosas.»', 'Apocalipsis 21:5'],
    ['«Cercano está Jehová a los quebrantados de corazón; y salva a los contritos de espíritu.»', 'Salmo 34:18']
  ];
  var TIPS = [
    ['Espiritual', 'Antes de mirar el celular, orá dos minutos con tus palabras. No hace falta que sea lindo: alcanza con que sea sincero.'],
    ['Psicológico', 'Cuando una preocupación te dé vueltas, anotala. Lo escrito ocupa menos lugar en la cabeza que lo repetido.'],
    ['Cuerpo', 'Tomá un vaso de agua y movete 10 minutos. El cuerpo y el ánimo se influyen más de lo que parece.'],
    ['Psicológico', 'Ponele nombre a lo que sentís: «estoy cansado», «estoy triste», «estoy enojado». Nombrarlo lo vuelve más manejable.'],
    ['Espiritual', 'Leé un salmo despacio, en voz baja. Quedate con una sola frase para todo el día.'],
    ['Vínculos', 'Escribile hoy a una persona que quieras. Un mensaje corto también es compañía.'],
    ['Psicológico', 'Elegí una sola prioridad para hoy. Una cosa terminada pesa más que diez empezadas.'],
    ['Cuerpo', 'Apagá las pantallas 30 minutos antes de dormir. El sueño es una de las mejores medicinas para el ánimo.'],
    ['Espiritual', 'Antes de dormir, agradecé tres cosas del día, aunque sean pequeñas.'],
    ['Psicológico', 'Si te criticás, preguntate: ¿le hablaría así a un amigo? Cambiá la frase por una más amable.'],
    ['Vínculos', 'Escuchá sin interrumpir y repetí lo que entendiste antes de responder. Evita muchas peleas.'],
    ['Cuerpo', 'Respirá 4 segundos adentro, 4 sostener, 6 afuera. Repetilo tres veces cuando sientas tensión.'],
    ['Espiritual', 'Entregá en oración una carga concreta, con nombre y apellido. Después soltala: no es tuya sola.'],
    ['Psicológico', 'Separá lo que depende de vos de lo que no. Poné tu energía solo en lo primero.'],
    ['Cuerpo', 'Salí a la luz natural unos minutos por la mañana. Ayuda a ordenar el sueño y el ánimo.'],
    ['Vínculos', 'Pedí lo que necesitás con «yo necesito…» en lugar de reproches. Se entiende mucho mejor.'],
    ['Espiritual', 'Si dudás, decíselo a Dios tal cual: «ayuda mi incredulidad». La honestidad es un buen comienzo.'],
    ['Psicológico', 'Hacé una pausa de 5 minutos sin pantalla. Mirá por la ventana y respirá.'],
    ['Cuerpo', 'Comé algo real a horario. Un cuerpo en ayunas o con mucha cafeína vive todo más intenso.'],
    ['Espiritual', 'Perdonar es un proceso: empezá por pedir en oración las ganas de perdonar, aunque todavía no las sientas.'],
    ['Psicológico', 'Anotá tres cosas que hiciste bien hoy. El cerebro recuerda más lo que falla; entrenalo a ver también lo que sale bien.'],
    ['Vínculos', 'Agradecé hoy a alguien por algo concreto. Fortalece a quien lo recibe y a vos.'],
    ['Psicológico', 'Dejá un horario para preocuparte (15 minutos) y fuera de ese horario, anotá y postergá.'],
    ['Espiritual', 'Sumate a una comunidad o grupo. La fe y el ánimo se sostienen mejor en compañía.'],
    ['Cuerpo', 'Estirá cuello y hombros un minuto cada dos horas. La tensión del cuerpo alimenta la del ánimo.'],
    ['Psicológico', 'Pedir ayuda es un acto de valentía. Contale a alguien de confianza o a un profesional lo que te pasa.']
  ];
  var ROUTINE = [
    { n: 'Mañana', icon: '☀', items: ['Orá dos minutos antes de mirar el celular', 'Respirá 4-4-6, tres veces', 'Leé el versículo de hoy y quedate con una frase', 'Elegí tu prioridad del día (una sola cosa)'] },
    { n: 'Tarde', icon: '◐', items: ['Movete 10 o 15 minutos: caminá o estirá', 'Tomá agua y comé algo real', 'Hacé una pausa de 5 minutos sin pantalla', 'Escribile o llamá a una persona'] },
    { n: 'Noche', icon: '☾', items: ['Anotá tres cosas buenas del día', 'Escribí lo que quedó pendiente y dejalo para mañana', 'Orá agradeciendo y entregando el día', 'Apagá las pantallas 30 minutos antes de dormir'] }
  ];
  var GUIDE = [
    { n: 'Cuerpo', d: 'El ánimo se apoya en el cuerpo.', t: ['Dormí 7 a 8 horas y acostate a horario.', 'Movete todos los días, aunque sea una caminata corta.', 'Tomá agua y comé a horario; evitá el exceso de cafeína y de alcohol.', 'Usá la respiración 4-4-6 cuando sientas tensión.', 'Salí a la luz natural por la mañana.'] },
    { n: 'Mente', d: 'Ordená lo que pensás, sin pelearte con vos.', t: ['Anotá las preocupaciones y separá lo que podés resolver de lo que no.', 'Ponele nombre a lo que sentís: lo que se nombra pesa menos.', 'Reemplazá la crítica dura por una frase como la que le dirías a un amigo.', 'Limitá las noticias y las redes cuando estés sensible.', 'Dividí lo grande en pasos pequeños y hacé solo el próximo.'] },
    { n: 'Espíritu', d: 'Un hábito simple sostiene más que un esfuerzo grande.', t: ['Orá todos los días con palabras sencillas, sin apuro.', 'Leé un salmo por día, despacio.', 'Agradecé tres cosas antes de dormir.', 'Guardá cinco minutos de silencio: sin pedir, solo estar.', 'Participá de una comunidad: la fe se sostiene en compañía.', 'Pedí en oración las ganas de perdonar, aunque todavía no las sientas.'] },
    { n: 'Vínculos', d: 'Nadie sana del todo solo.', t: ['Escuchá sin interrumpir y repetí lo que entendiste.', 'Hablá desde lo que sentís («me dolió»), no desde el reproche.', 'Pedí lo que necesitás con «yo necesito…».', 'Pedí perdón primero cuando corresponda.', 'Reservá un rato de calidad con quien querés, sin pantallas.'] },
    { n: 'Cuándo pedir ayuda profesional', d: 'Pedir ayuda es un acto de valentía, no de debilidad.', t: ['Si lo que sentís dura semanas o te impide trabajar, dormir o vincularte.', 'Si hay ataques de pánico, recuerdos que vuelven o miedo constante.', 'Si perdiste las ganas de vivir o pensás en hacerte daño: llamá ya al 135 (Buenos Aires y GBA) o al 911.', 'Si hay violencia en casa: 144 (violencia de género) o 911.', 'Podés escribirle a Norberto por WhatsApp para coordinar una sesión.'] }
  ];
  var PLAN_DAYS = [
    { n: 'Ponerle nombre', f: function (t) { return ['Hacé el paso 1 de este tema (marcá lo que te pasa y medí la intensidad)', 'Anotá en una frase qué es lo que más pesa', 'Contáselo a una persona de confianza o a Dios en oración']; } },
    { n: 'Soltar la carga', f: function (t) { return ['Hacé el ejercicio de respiración 4-4-6', t.w + ' (escribilo y soltalo)', 'Leé la oración del tema en voz alta']; } },
    { n: 'Cuidar el cuerpo', f: function (t) { return ['Caminá o movete 15 minutos', 'Tomá agua y comé a horario', 'Apagá las pantallas 30 minutos antes de dormir']; } },
    { n: 'Acercarte a alguien', f: function (t) { return ['Escribile o llamá a una persona de confianza', 'Contale cómo estás con una frase honesta', 'Agradecé a quien te escuchó']; } },
    { n: 'Tu palabra', f: function (t) { return ['Leé tres veces: ' + t.v[0] + ' (' + t.v[1] + ')', 'Orá con tus palabras, aunque sea corto', 'Anotá qué frase te llegó más']; } },
    { n: 'Un paso concreto', f: function (t) { return [t.a[0], t.a[1], 'Reconocé y celebrá lo que lograste hoy']; } },
    { n: 'Revisar y seguir', f: function (t) { return ['Releé lo que fuiste haciendo esta semana', 'Volvé a medir la intensidad (0 a 10) y compará', 'Decidí: seguir otra semana, elegir otro tema o pedir una sesión']; } }
  ];

  /* ---------- almacenamiento ---------- */
  var memo = null;
  function blank() { return { moods: {}, logs: [], done: {}, acts: {}, active: {}, day: {}, plan: null }; }
  function load() {
    if (memo) return memo;
    try { var raw = localStorage.getItem(KEY); memo = raw ? Object.assign(blank(), JSON.parse(raw)) : blank(); } catch (e) { memo = blank(); }
    return memo;
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(memo)); } catch (e) { /* sin almacenamiento: la app sigue funcionando */ } }
  function wipe() { memo = blank(); try { localStorage.removeItem(KEY); } catch (e) { /* nada */ } }
  function dkey(d) { d = d || new Date(); var m = d.getMonth() + 1, day = d.getDate(); return d.getFullYear() + '-' + (m < 10 ? '0' : '') + m + '-' + (day < 10 ? '0' : '') + day; }
  function mark() { load().active[dkey()] = 1; }
  function streak() {
    var a = load().active, d = new Date(), n = 0;
    if (!a[dkey(d)]) d.setDate(d.getDate() - 1);
    while (a[dkey(d)]) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }

  /* ---------- utilidades ---------- */
  var $view = document.getElementById('view');
  var timers = [];
  function clearTimers() { timers.forEach(clearTimeout); timers = []; }
  function norm(s) { return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  function risky(t) { var n = norm(t); return CRISIS.some(function (k) { return n.indexOf(k) > -1; }); }
  function byId(id) { return TOPICS.filter(function (t) { return t.id === id; })[0]; }
  function el(html) { var t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstChild; }
  function waLink(topic) {
    var txt = topic ? 'Hola Norberto, usé la aplicación de Volver a Empezar (tema: ' + topic + ') y me gustaría agendar una sesión.' : 'Hola Norberto, usé la aplicación de Volver a Empezar y me gustaría agendar una sesión.';
    return WA + '?text=' + encodeURIComponent(txt);
  }
  function doneCount(id) { var d = load().done[id]; return d ? [d.s1, d.s2, d.s3].filter(Boolean).length : 0; }
  function setNav(name) {
    [].forEach.call(document.querySelectorAll('.tabs a'), function (a) {
      if (a.getAttribute('data-nav') === name) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
  }
  function watchRisk(area, box) {
    area.addEventListener('input', function () {
      if (risky(area.value)) { box.hidden = false; box.textContent = SAFETY; } else { box.hidden = true; }
    });
  }

  /* ---------- Hoy (día a día) ---------- */
  function dayIndex(d) { return Math.floor((d - new Date(d.getFullYear(), 0, 0)) / 864e5); }
  function planDay() {
    var pl = load().plan; if (!pl) return 0;
    var a = new Date(pl.s + 'T00:00:00'), n = Math.floor((new Date(dkey() + 'T00:00:00') - a) / 864e5) + 1;
    return Math.max(1, Math.min(7, n));
  }
  function planDone() { var pl = load().plan, c = 0; if (!pl) return 0; Object.keys(pl.done || {}).forEach(function () { c++; }); return c; }
  function planTask(v, day, i, text, checked) {
    return '<li><label><input type="checkbox" data-plan="' + day + '_' + i + '"' + (checked ? ' checked' : '') + '><span>' + text + '</span></label></li>';
  }
  function bindPlan(root) {
    [].forEach.call(root.querySelectorAll('[data-plan]'), function (c) {
      c.addEventListener('change', function () {
        var st = load(); if (!st.plan) return; st.plan.done = st.plan.done || {};
        var k = c.getAttribute('data-plan'); if (c.checked) st.plan.done[k] = 1; else delete st.plan.done[k]; mark(); save();
        var o = root.querySelector('#plancount'); if (o) o.textContent = planDone();
      });
    });
  }

  function today() {
    setNav('hoy');
    var s = load(), now = new Date(), tk = dkey(now), mood = s.moods[tk];
    var v = el('<div></div>');
    var verse = VERSES[dayIndex(now) % VERSES.length], tip = TIPS[dayIndex(now) % TIPS.length];
    var dateTxt = now.toLocaleDateString('es-AR', { weekday: 'long', day: 'numeric', month: 'long' });
    var html = '<section class="hero"><div class="eyebrow">Hoy · ' + dateTxt + '</div><h1>Tu día, paso a paso</h1>' +
      '<p>Una guía espiritual y psicológica para el día a día: una palabra, un consejo y pequeñas acciones que podés hacer hoy.</p></section>';
    html += '<section class="card" aria-labelledby="mh"><h2 id="mh" style="font-size:1.3rem">¿Cómo estás hoy?</h2><div class="mood" role="group" aria-label="Cómo estás hoy">';
    MOODS.forEach(function (m, i) { html += '<button type="button" data-mood="' + (i + 1) + '" aria-pressed="' + (mood === i + 1) + '">' + m + '</button>'; });
    html += '</div><p id="moodmsg" class="help" aria-live="polite" style="border:0;margin:10px 0 0;padding:0">' + (mood ? 'Registraste tu día. Podés cambiarlo cuando quieras.' : 'Un registro por día te ayuda a ver tu avance.') + '</p></section>';
    html += '<section class="card"><div class="eyebrow">Versículo de hoy</div><blockquote class="verse" style="margin:10px 0 0">' + verse[0] + '<cite>' + verse[1] + '</cite></blockquote></section>';
    html += '<section class="card"><div class="eyebrow">Consejo de hoy · ' + tip[0] + '</div><p style="margin:8px 0 0;font-size:1.08rem">' + tip[1] + '</p></section>';
    // rutina
    var chk = s.day[tk] || [], total = 0; ROUTINE.forEach(function (b) { total += b.items.length; });
    html += '<section class="card" style="margin-top:16px"><div class="row" style="justify-content:space-between;align-items:baseline"><h2 style="font-size:1.3rem">Tu rutina de hoy</h2><span class="help" style="border:0;margin:0;padding:0" aria-live="polite"><b id="rcount">' + chk.length + '</b> de ' + total + '</span></div>' +
      '<p style="color:var(--muted);margin:6px 0 0">No hace falta hacerlo todo. Con una o dos cosas por momento del día ya estás cuidándote.</p>';
    var n = 0;
    ROUTINE.forEach(function (bl) {
      html += '<h3 class="blk">' + bl.n + '</h3><ul class="acts">';
      bl.items.forEach(function (it) { html += '<li><label><input type="checkbox" data-r="' + n + '"' + (chk.indexOf(n) > -1 ? ' checked' : '') + '><span>' + it + '</span></label></li>'; n++; });
      html += '</ul>';
    });
    html += '</section>';
    // plan de 7 días
    var pl = s.plan;
    if (pl && byId(pl.t)) {
      var t = byId(pl.t), pd = planDay(), tasks = PLAN_DAYS[pd - 1].f(t);
      html += '<section class="card"><div class="eyebrow">Tu plan de 7 días · ' + t.n + '</div><h2 style="font-size:1.3rem;margin-top:4px">Día ' + pd + ': ' + PLAN_DAYS[pd - 1].n + '</h2><ul class="acts">';
      tasks.forEach(function (x, i) { html += planTask(v, pd, i, x, pl.done && pl.done[pd + '_' + i]); });
      html += '</ul><p class="help" style="border:0;margin:0;padding:0"><b id="plancount">' + planDone() + '</b> de 21 tareas hechas</p><div class="row" style="margin-top:12px"><a class="btn alt" href="#plan">Ver los 7 días</a></div></section>';
    } else {
      html += '<section class="card"><div class="eyebrow">Plan de 7 días</div><h2 style="font-size:1.3rem;margin-top:4px">Elegí un tema y empezá un plan</h2><p style="color:var(--muted)">Cada día de la semana tiene tareas pequeñas para ese tema: ponerle nombre, soltar, cuidar el cuerpo, acercarte a alguien, tu palabra, un paso concreto y una revisión.</p><a class="btn" href="#temas">Elegir un tema</a></section>';
    }
    html += '<p class="foot"><b>Importante:</b> esta aplicación es una guía de apoyo. No hace diagnósticos ni reemplaza una consulta. ' + SAFETY + '</p>';
    v.innerHTML = html;
    [].forEach.call(v.querySelectorAll('[data-mood]'), function (b) {
      b.addEventListener('click', function () {
        load().moods[tk] = +b.getAttribute('data-mood'); mark(); save();
        [].forEach.call(v.querySelectorAll('[data-mood]'), function (o) { o.setAttribute('aria-pressed', o === b); });
        v.querySelector('#moodmsg').textContent = 'Listo, anotamos tu día: ' + MOODS[+b.getAttribute('data-mood') - 1] + '.';
      });
    });
    [].forEach.call(v.querySelectorAll('[data-r]'), function (c) {
      c.addEventListener('change', function () {
        var st = load(), arr = st.day[tk] || [], k = +c.getAttribute('data-r'), i = arr.indexOf(k);
        if (c.checked && i < 0) arr.push(k); if (!c.checked && i > -1) arr.splice(i, 1);
        st.day[tk] = arr; mark(); save(); v.querySelector('#rcount').textContent = arr.length;
        var keys = Object.keys(st.day); if (keys.length > 120) { keys.sort(); delete st.day[keys[0]]; }
      });
    });
    bindPlan(v);
    return v;
  }

  function home() { return today(); }

  /* ---------- Temas ---------- */
  function topicsView() {
    setNav('temas');
    var v = el('<div></div>');
    var html = '<section class="hero"><div class="eyebrow">Temas</div><h1>¿Qué estás viviendo?</h1>' +
      '<p>Elegí un tema y recorré el método de las sesiones: <b>poner nombre</b> a lo que sentís, <b>soltar la carga</b> y <b>reconstruir</b>. También podés empezar un plan de 7 días para ese tema.</p></section>';
    GROUPS.forEach(function (g) {
      html += '<section class="group"><div class="eyebrow">' + g.n + '</div><h2>' + (g.id === 'emociones' ? '¿Qué estás sintiendo?' : g.id === 'heridas' ? '¿Qué te dejó una herida?' : g.id === 'vinculos' ? '¿Cómo están tus vínculos?' : '¿Qué necesita tu interior?') + '</h2><div class="grid">';
      TOPICS.filter(function (t) { return t.g === g.id; }).forEach(function (t) {
        var c = doneCount(t.id), pl = load().plan;
        html += '<a class="topic" href="#t-' + t.id + '"><strong>' + t.n + '</strong><span>' + t.b + '</span>' + (c ? '<em>' + (c === 3 ? 'Completado' : c + ' de 3 pasos') + '</em>' : '') + (pl && pl.t === t.id ? '<em>Plan de 7 días en curso</em>' : '') + '</a>';
      });
      html += '</div></section>';
    });
    html += '<p class="foot"><b>Importante:</b> esta aplicación es una guía de apoyo. No hace diagnósticos ni reemplaza una consulta. ' + SAFETY + '</p>';
    v.innerHTML = html;
    return v;
  }

  /* ---------- Guía ---------- */
  function guideView() {
    setNav('guia');
    var v = el('<div></div>');
    var html = '<section class="hero"><div class="eyebrow">Guía</div><h1>Tips y recomendaciones</h1><p>Hábitos simples para el cuerpo, la mente, el espíritu y los vínculos. Elegí uno y empezá hoy.</p></section>';
    GUIDE.forEach(function (g, gi) {
      html += '<details class="acc"' + (gi === 0 ? ' open' : '') + '><summary><b>' + g.n + '</b><span>' + g.d + '</span></summary><ul class="tips">';
      g.t.forEach(function (x) { html += '<li>' + x + '</li>'; });
      html += '</ul></details>';
    });
    html += '<section class="card" style="margin-top:20px"><h2 style="font-size:1.25rem">¿Querés acompañamiento?</h2><p style="color:var(--muted)">La guía te acompaña entre sesiones, pero no reemplaza hablar con una persona.</p><a class="btn wa" href="' + waLink('') + '" target="_blank" rel="noopener">Escribirle a Norberto por WhatsApp</a></section>';
    html += '<p class="foot"><b>Importante:</b> ' + SAFETY + '</p>';
    v.innerHTML = html;
    return v;
  }

  /* ---------- Plan de 7 días ---------- */
  function planView() {
    setNav('hoy');
    var s = load(), pl = s.plan, v = el('<div></div>');
    if (!pl || !byId(pl.t)) { location.hash = '#temas'; return el('<div></div>'); }
    var t = byId(pl.t), pd = planDay();
    var html = '<a class="back" href="#hoy">← Volver a hoy</a><div class="eyebrow">Plan de 7 días</div><h1 style="font-size:clamp(1.8rem,5vw,2.6rem);margin:4px 0 8px">' + t.n + '</h1><p style="color:var(--muted)">Una semana, un paso por día. Hacé lo que puedas: lo importante es volver mañana. <b id="plancount">' + planDone() + '</b> de 21 tareas hechas.</p>';
    PLAN_DAYS.forEach(function (d, i) {
      var day = i + 1, tasks = d.f(t);
      html += '<details class="acc"' + (day === pd ? ' open' : '') + '><summary><b>Día ' + day + (day === pd ? ' · hoy' : '') + '</b><span>' + d.n + '</span></summary><ul class="acts" style="margin:10px 0 0">';
      tasks.forEach(function (x, k) { html += planTask(v, day, k, x, pl.done && pl.done[day + '_' + k]); });
      html += '</ul></details>';
    });
    html += '<div class="row" style="margin-top:20px"><a class="btn wa" href="' + waLink(t.n) + '" target="_blank" rel="noopener">Agendar una sesión por WhatsApp</a><button type="button" class="btn alt" id="resetplan">Cambiar o reiniciar el plan</button></div><div id="resetmsg"></div>';
    v.innerHTML = html;
    bindPlan(v);
    var rm = v.querySelector('#resetmsg');
    v.addEventListener('click', function (e) {
      if (e.target.id === 'resetplan') rm.innerHTML = '<p class="note">¿Seguro? Se borra el avance de este plan.</p><div class="row"><button type="button" class="btn" id="yesplan">Sí, reiniciar</button><button type="button" class="btn alt" id="noplan">Cancelar</button></div>';
      else if (e.target.id === 'noplan') rm.innerHTML = '';
      else if (e.target.id === 'yesplan') { load().plan = null; save(); location.hash = '#temas'; }
    });
    return v;
  }

  /* ---------- Tema ---------- */
  var cur = { id: null, step: 1, intensity: 5, signs: [] };

  function topicView(id) {
    var t = byId(id);
    if (!t) return home();
    setNav('temas');
    if (cur.id !== id) cur = { id: id, step: 1, intensity: 5, signs: [] };
    var v = el('<div></div>');
    function render() {
      clearTimers();
      var d = load().done[id] || {};
      var html = '<a class="back" href="#temas">← Todos los temas</a><div class="eyebrow">Tema</div><h1 style="font-size:clamp(1.8rem,5vw,2.6rem);margin:4px 0 8px">' + t.n + '</h1><p style="color:var(--muted)">' + t.q + '</p>' +
        '<div class="row" style="margin:0 0 4px"><button type="button" class="btn alt" id="startplan">' + ((load().plan && load().plan.t === id) ? 'Ver mi plan de 7 días' : 'Empezar un plan de 7 días') + '</button></div><div id="planmsg"></div>';
      html += '<div class="steps" role="group" aria-label="Pasos">';
      [['Ponerle nombre', 1], ['Soltar la carga', 2], ['Reconstruir', 3]].forEach(function (s) {
        html += '<button type="button" data-step="' + s[1] + '" class="' + (d['s' + s[1]] ? 'done' : '') + '"' + (cur.step === s[1] ? ' aria-current="step"' : '') + '><b>' + s[1] + '</b>' + s[0] + '</button>';
      });
      html += '</div><div id="stepbody"></div>';
      html += '<p class="help"><b>Cuándo pedir ayuda profesional:</b> ' + t.h + '</p>';
      v.innerHTML = html;
      [].forEach.call(v.querySelectorAll('[data-step]'), function (b) { b.addEventListener('click', function () { cur.step = +b.getAttribute('data-step'); render(); window.scrollTo({ top: 0 }); }); });
      v.querySelector('#startplan').addEventListener('click', function () {
        var st = load();
        if (st.plan && st.plan.t === id) { location.hash = '#plan'; return; }
        if (st.plan && byId(st.plan.t)) {
          v.querySelector('#planmsg').innerHTML = '<p class="note">Ya tenés un plan en curso (' + byId(st.plan.t).n + '). ¿Querés cambiarlo por este?</p><div class="row"><button type="button" class="btn" id="swap">Sí, cambiar</button><button type="button" class="btn alt" id="keep">No, dejarlo</button></div>';
          v.querySelector('#swap').addEventListener('click', function () { st.plan = { t: id, s: dkey(), done: {} }; mark(); save(); location.hash = '#hoy'; });
          v.querySelector('#keep').addEventListener('click', function () { v.querySelector('#planmsg').innerHTML = ''; });
          return;
        }
        st.plan = { t: id, s: dkey(), done: {} }; mark(); save(); location.hash = '#hoy';
      });
      var body = v.querySelector('#stepbody');
      if (cur.step === 1) step1(body); else if (cur.step === 2) step2(body); else step3(body);
    }

    function advance(n) {
      var s = load(); s.done[id] = s.done[id] || {}; s.done[id]['s' + n] = 1; s.done[id].d = dkey(); mark(); save();
    }

    function step1(body) {
      var html = '<section class="card"><h2 style="font-size:1.3rem">Ponerle nombre</h2><p style="color:var(--muted)">Lo que se nombra pesa menos. Marcá lo que te pasa:</p><ul class="checks">';
      t.s.forEach(function (x, i) { html += '<li><label><input type="checkbox" data-sign="' + i + '"' + (cur.signs.indexOf(i) > -1 ? ' checked' : '') + '><span>' + x + '</span></label></li>'; });
      html += '</ul><label for="int" style="font-weight:600;display:block;margin-top:14px">¿Qué intensidad tiene hoy? <output id="intout">' + cur.intensity + '</output> de 10</label>' +
        '<input id="int" class="slider" type="range" min="0" max="10" value="' + cur.intensity + '"><div class="scale"><span>Leve</span><span>Muy fuerte</span></div>' +
        '<div id="refl" class="note" aria-live="polite"></div>' +
        '<label for="own" style="font-weight:600;display:block;margin-top:8px">Con tus palabras (opcional, no se guarda)</label><textarea id="own" placeholder="Escribí lo que te pasa"></textarea>' +
        '<div id="risk" class="alert" role="alert" hidden></div>' +
        '<div class="row" style="margin-top:14px"><button type="button" class="btn" id="next1">Listo, seguir al paso 2</button></div></section>';
      body.innerHTML = html;
      var out = body.querySelector('#intout'), slider = body.querySelector('#int'), refl = body.querySelector('#refl');
      function reflect() {
        var i = +slider.value; cur.intensity = i; out.textContent = i;
        refl.textContent = i <= 3 ? 'Es un nivel manejable. Seguí con los pasos y cuidate.' : i <= 6 ? 'Hay un peso importante. Hacé los tres pasos con calma, a tu ritmo.' : 'Es una intensidad alta. Los pasos pueden aliviarte, pero no tenés que cargarlo solo: considerá hablar con Norberto o con un profesional.';
      }
      slider.addEventListener('input', reflect); reflect();
      [].forEach.call(body.querySelectorAll('[data-sign]'), function (c) {
        c.addEventListener('change', function () { var n = +c.getAttribute('data-sign'), i = cur.signs.indexOf(n); if (c.checked && i < 0) cur.signs.push(n); if (!c.checked && i > -1) cur.signs.splice(i, 1); });
      });
      watchRisk(body.querySelector('#own'), body.querySelector('#risk'));
      body.querySelector('#next1').addEventListener('click', function () {
        var s = load(); s.logs.push({ d: dkey(), t: id, i: cur.intensity }); if (s.logs.length > 300) s.logs.shift();
        advance(1); cur.step = 2; render(); window.scrollTo({ top: 0 });
      });
    }

    function step2(body) {
      var html = '<section class="card"><h2 style="font-size:1.3rem">Soltar la carga</h2>' +
        '<h3 style="font-size:1.05rem;margin:14px 0 4px">1. Respirá</h3><p style="color:var(--muted);margin:0">Inhalá 4 segundos, sostené 4 y exhalá 6. Cuatro vueltas.</p>' +
        '<div class="orb-wrap"><div class="orb" id="orb" aria-live="polite"><span id="orbt">Listo</span></div></div><div class="row" style="justify-content:center"><button type="button" class="btn alt" id="bgo">Empezar</button></div>' +
        '<h3 style="font-size:1.05rem;margin:24px 0 4px">2. Escribí y soltá</h3><p style="color:var(--muted);margin:0 0 8px">' + t.w + ' Después tocá «Soltar»: lo escrito desaparece y no se guarda.</p>' +
        '<textarea id="rel" placeholder="Escribí acá"></textarea><div id="risk2" class="alert" role="alert" hidden></div>' +
        '<div class="row" style="margin-top:10px"><button type="button" class="btn alt" id="bdrop">Soltar</button></div><p id="dropmsg" class="help" style="border:0;margin:8px 0 0;padding:0" aria-live="polite"></p>' +
        '<h3 style="font-size:1.05rem;margin:24px 0 8px">3. Orá</h3><p class="prayer">' + t.p + '</p>' +
        '<div class="row" style="margin-top:14px"><button type="button" class="btn" id="next2">Listo, seguir al paso 3</button></div></section>';
      body.innerHTML = html;
      var orb = body.querySelector('#orb'), orbt = body.querySelector('#orbt'), go = body.querySelector('#bgo'), running = false;
      var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
      function setOrb(txt, scale, secs) { orbt.textContent = txt; if (!reduce) { orb.style.transition = 'transform ' + secs + 's ease-in-out'; orb.style.transform = 'scale(' + scale + ')'; } }
      function stop(msg) { running = false; clearTimers(); setOrb(msg || 'Listo', .8, 1); go.textContent = 'Empezar'; }
      function run(cycle) {
        if (!running) return;
        if (cycle > 4) { stop('Bien hecho'); return; }
        var phases = [['Inhalá', 1.3, 4], ['Sostené', 1.3, 4], ['Exhalá', .8, 6]], i = 0;
        (function phase() {
          if (!running) return;
          if (i >= phases.length) { run(cycle + 1); return; }
          var p = phases[i++]; setOrb(p[0], p[1], p[2]);
          timers.push(setTimeout(phase, p[2] * 1000));
        })();
      }
      go.addEventListener('click', function () { if (running) { stop(); } else { running = true; go.textContent = 'Parar'; run(1); } });
      var rel = body.querySelector('#rel'), drop = body.querySelector('#bdrop'), msg = body.querySelector('#dropmsg');
      watchRisk(rel, body.querySelector('#risk2'));
      drop.addEventListener('click', function () {
        if (!rel.value.trim()) { msg.textContent = 'Primero escribí algo para soltar.'; return; }
        rel.classList.add('fade'); msg.textContent = '';
        timers.push(setTimeout(function () { rel.value = ''; rel.classList.remove('fade'); msg.textContent = 'Lo soltaste. Respirá hondo. No quedó guardado en ningún lado.'; body.querySelector('#risk2').hidden = true; }, 2100));
      });
      body.querySelector('#next2').addEventListener('click', function () { stop(); advance(2); cur.step = 3; render(); window.scrollTo({ top: 0 }); });
    }

    function step3(body) {
      var s = load(), saved = s.acts[id] || [];
      var html = '<section class="card"><h2 style="font-size:1.3rem">Reconstruir</h2><p style="color:var(--muted)">Elegí uno o dos pasos pequeños para esta semana:</p><ul class="acts">';
      t.a.forEach(function (x, i) { html += '<li><label><input type="checkbox" data-act="' + i + '"' + (saved.indexOf(i) > -1 ? ' checked' : '') + '><span>' + x + '</span></label></li>'; });
      html += '</ul><h3 style="font-size:1.05rem;margin:20px 0 0">Una palabra para sostenerte</h3><blockquote class="verse" style="margin-left:0">' + t.v[0] + '<cite>' + t.v[1] + '</cite></blockquote>' +
        '<div class="row"><button type="button" class="btn" id="fin">Terminé este tema</button></div><div id="fmsg" aria-live="polite"></div></section>';
      body.innerHTML = html;
      [].forEach.call(body.querySelectorAll('[data-act]'), function (c) {
        c.addEventListener('change', function () {
          var st = load(), arr = st.acts[id] || [], n = +c.getAttribute('data-act'), i = arr.indexOf(n);
          if (c.checked && i < 0) arr.push(n); if (!c.checked && i > -1) arr.splice(i, 1); st.acts[id] = arr; mark(); save();
        });
      });
      body.querySelector('#fin').addEventListener('click', function () {
        advance(3);
        var f = body.querySelector('#fmsg');
        f.innerHTML = '<div class="note"><b>Completaste este tema.</b> Cada paso cuenta. Volvé a este espacio cuando lo necesites. Si querés trabajarlo en profundidad, podés pedir una sesión.</div>' +
          '<div class="row"><a class="btn wa" href="' + waLink(t.n) + '" target="_blank" rel="noopener">Agendar una sesión por WhatsApp</a><a class="btn alt" href="#temas">Elegir otro tema</a><a class="btn alt" href="#camino">Ver mi camino</a></div>';
        f.scrollIntoView({ behavior: 'smooth', block: 'center' });
        [].forEach.call(v.querySelectorAll('.steps button'), function (b) { b.classList.add('done'); });
      });
    }

    render();
    return v;
  }

  /* ---------- Mi camino ---------- */
  function progress() {
    setNav('camino');
    var s = load(), v = el('<div></div>');
    var days = Object.keys(s.active).length;
    var worked = TOPICS.filter(function (t) { return doneCount(t.id) === 3; });
    var started = TOPICS.filter(function (t) { var c = doneCount(t.id); return c > 0 && c < 3; });
    var html = '<section class="hero"><div class="eyebrow">Mi camino</div><h1>Tu avance, a tu ritmo</h1><p>Acá ves lo que fuiste haciendo. Todo está guardado solo en este dispositivo.</p></section>';
    html += '<div class="stats"><div class="stat"><b>' + streak() + '</b><span>días seguidos</span></div><div class="stat"><b>' + days + '</b><span>días activos</span></div><div class="stat"><b>' + worked.length + '</b><span>temas completados</span></div></div>';
    html += '<section class="card" style="margin-top:16px"><h2 style="font-size:1.25rem">Cómo estuviste estos 14 días</h2><div class="bars" role="img" aria-label="Estado de ánimo de los últimos 14 días">';
    var d = new Date(); d.setDate(d.getDate() - 13);
    for (var i = 0; i < 14; i++) {
      var k = dkey(d), m = s.moods[k], w = d.getDate();
      html += '<div title="' + k + (m ? ': ' + MOODS[m - 1] : ': sin registro') + '"><i class="' + (m ? '' : 'none') + '" style="height:' + (m ? m * 20 : 4) + '%"></i><small>' + w + '</small></div>';
      d.setDate(d.getDate() + 1);
    }
    html += '</div><p class="help" style="border:0;margin:8px 0 0;padding:0">Más alto = mejor día. Las barras grises son días sin registro.</p></section>';
    html += '<section class="card"><h2 style="font-size:1.25rem">Temas que trabajaste</h2>';
    if (!worked.length && !started.length) html += '<p style="color:var(--muted)">Todavía no empezaste ningún tema. Elegí uno desde el inicio.</p>';
    else {
      html += '<ul class="list">';
      worked.concat(started).forEach(function (t) {
        var c = doneCount(t.id), logs = s.logs.filter(function (l) { return l.t === t.id; }), tr = '';
        if (logs.length > 1) tr = ' · intensidad ' + logs[0].i + ' → ' + logs[logs.length - 1].i;
        else if (logs.length === 1) tr = ' · intensidad ' + logs[0].i;
        html += '<li><a href="#t-' + t.id + '" style="font-weight:600">' + t.n + '</a><span>' + (c === 3 ? 'Completado' : c + ' de 3 pasos') + tr + '</span></li>';
      });
      html += '</ul>';
    }
    if (s.plan && byId(s.plan.t)) html += '</section><section class="card"><h2 style="font-size:1.25rem">Plan de 7 días</h2><p style="color:var(--muted);margin:0 0 10px">' + byId(s.plan.t).n + ' · ' + planDone() + ' de 21 tareas hechas · día ' + planDay() + ' de 7</p><a class="btn alt" href="#plan">Ver mi plan</a>';
    html += '</section><section class="card"><h2 style="font-size:1.25rem">¿Querés acompañamiento?</h2><p style="color:var(--muted)">La aplicación te acompaña entre sesiones, pero no reemplaza hablar con una persona.</p><a class="btn wa" href="' + waLink('') + '" target="_blank" rel="noopener">Escribirle a Norberto por WhatsApp</a></section>';
    html += '<section class="card"><h2 style="font-size:1.25rem">Tus datos</h2><p style="color:var(--muted)">Se guardan solo en este navegador. Nadie más puede verlos y no se envían a ningún servidor.</p><div id="wipearea"><button type="button" class="btn alt" id="wipe">Borrar todos mis datos</button></div></section>';
    v.innerHTML = html;
    var wa = v.querySelector('#wipearea');
    wa.addEventListener('click', function (e) {
      if (e.target.id === 'wipe') wa.innerHTML = '<p class="note">¿Seguro? Se borran tus registros, tus pasos y tu avance de este dispositivo.</p><div class="row"><button type="button" class="btn" id="yes">Sí, borrar todo</button><button type="button" class="btn alt" id="no">Cancelar</button></div>';
      else if (e.target.id === 'no') wa.innerHTML = '<button type="button" class="btn alt" id="wipe">Borrar todos mis datos</button>';
      else if (e.target.id === 'yes') { wipe(); cur = { id: null, step: 1, intensity: 5, signs: [] }; wa.innerHTML = '<p class="note">Listo. Se borró todo de este dispositivo.</p>'; }
    });
    return v;
  }

  /* ---------- ruteo ---------- */
  function route() {
    clearTimers();
    var h = (location.hash || '#hoy').slice(1), node;
    if (h.indexOf('t-') === 0) node = topicView(h.slice(2));
    else if (h === 'camino') node = progress();
    else if (h === 'temas' || h === 'inicio') node = topicsView();
    else if (h === 'guia') node = guideView();
    else if (h === 'plan') node = planView();
    else node = today();
    $view.innerHTML = ''; $view.appendChild(node);
    window.scrollTo({ top: 0 });
    document.title = (h.indexOf('t-') === 0 && byId(h.slice(2)) ? byId(h.slice(2)).n + ' · ' : h === 'camino' ? 'Mi camino · ' : h === 'guia' ? 'Guía · ' : h === 'temas' ? 'Temas · ' : h === 'plan' ? 'Plan de 7 días · ' : '') + 'Mi espacio · Volver a Empezar';
  }
  window.addEventListener('hashchange', route);
  route();
})();
