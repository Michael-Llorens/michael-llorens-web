import type { Lang } from '../i18n/config';

/* ──────────────────────────────────────────────────────────────────────────
   BLOG / RECURSOS
   Artículos de SEO local y desarrollo web para captar tráfico orgánico de
   alta intención ("cuánto cuesta una web", "SEO local Valencia"...).
   Cada artículo está traducido a los 3 idiomas y comparte el mismo `slug`.

   👉 Para añadir un artículo: copia un objeto de la lista y rellénalo en los
   tres idiomas. El cuerpo (`body`) admite HTML simple (<p>, <h2>, <ul>, <li>,
   <strong>, <a>). No hace falta tocar nada más: las rutas y el listado se
   generan solos.
   ────────────────────────────────────────────────────────────────────────── */

type Localized<T> = Record<Lang, T>;

export interface BlogPost {
  slug: string;
  /** Fecha ISO (YYYY-MM-DD) — usada para orden y datos estructurados. */
  date: string;
  /** Minutos de lectura aproximados. */
  readingMin: number;
  category: string;
  title: string;
  excerpt: string;
  /** Cuerpo del artículo en HTML simple. */
  body: string;
}

const posts: Localized<BlogPost[]> = {
  es: [
    {
      slug: 'cuanto-cuesta-una-pagina-web-xativa-valencia-2026',
      date: '2026-06-10',
      readingMin: 6,
      category: 'Precios',
      title: 'Cuánto cuesta una página web en Xàtiva y Valencia en 2026',
      excerpt:
        'Precios reales y transparentes de una web profesional para autónomos y pymes en la Comunidad Valenciana, según el tipo de proyecto. Sin letra pequeña.',
      body: `
<p>Es la primera pregunta que nos hace todo el mundo, y es lógica: <strong>¿cuánto cuesta una página web?</strong> La respuesta honesta es «depende», pero eso no ayuda. Así que vamos a darte rangos reales de 2026 para autónomos y pymes en Xàtiva, Valencia y alrededores.</p>

<h2>Rangos de precio en 2026</h2>
<ul>
  <li><strong>Landing o web de una página (300–800 €):</strong> ideal para presentar un servicio concreto o captar contactos. Una sola página bien diseñada y optimizada.</li>
  <li><strong>Web corporativa para pyme (800–2.000 €):</strong> varias páginas (inicio, servicios, proyectos, contacto), SEO de base, formularios y diseño a medida. Lo más habitual.</li>
  <li><strong>Tienda online / proyecto a medida (desde 2.000 €):</strong> ecommerce, reservas, calculadoras, integraciones o paneles de gestión. El precio depende de la funcionalidad.</li>
</ul>
<p>Como referencia, la media para pymes en la Comunidad Valenciana se sitúa entre 1.200 € y 2.500 €. Un mantenimiento posterior suele costar entre 30 € y 80 € al mes, e incluye actualizaciones, copias de seguridad y soporte.</p>

<h2>¿Por qué hay tanta diferencia de precio?</h2>
<p>Una web no es un producto cerrado. El precio cambia según tres cosas: <strong>cuántas páginas</strong> tiene, <strong>qué funcionalidad</strong> necesita (un formulario no es lo mismo que una tienda) y <strong>cuánto trabajo de diseño y contenido</strong> hace falta. Desconfía de quien te dé un precio cerrado sin preguntarte nada: o te está vendiendo una plantilla genérica, o habrá sorpresas después.</p>

<h2>Plantilla barata vs. web a medida</h2>
<p>Una plantilla de 50 € parece un chollo hasta que descubres que carga lenta, se parece a otras mil webs y no posiciona en Google. Una web a medida cuesta más al principio, pero está pensada para <strong>tu negocio</strong>: rápida, optimizada para SEO desde el primer día y preparada para crecer. A medio plazo, sale más rentable.</p>

<h2>¿Qué debería incluir siempre el presupuesto?</h2>
<ul>
  <li>Diseño adaptado a móvil (la mayoría de tus visitas vienen del móvil).</li>
  <li>Optimización de velocidad y Core Web Vitals.</li>
  <li>SEO técnico de base e indexación en Google.</li>
  <li>Aviso legal, privacidad y cookies conforme a la ley.</li>
  <li>Formación básica para que puedas gestionar tu web.</li>
</ul>

<p>En MetaLogic trabajamos con presupuesto cerrado y sin permanencias: te decimos el precio antes de empezar y no hay sorpresas. ¿Quieres saber cuánto costaría tu proyecto? Te hacemos un <strong>diagnóstico y presupuesto gratis</strong>, sin compromiso.</p>
`,
    },
    {
      slug: 'seo-local-aparecer-google-negocio-valencia',
      date: '2026-05-22',
      readingMin: 5,
      category: 'SEO local',
      title: 'SEO local: cómo hacer que tu negocio aparezca en Google',
      excerpt:
        'Si tienes un negocio en Xàtiva o Valencia, aparecer en Google y en Maps cuando alguien busca cerca de ti es lo que más clientes te traerá. Te contamos cómo.',
      body: `
<p>Cuando alguien busca «fontanero en Xàtiva» o «restaurante cerca de mí», Google enseña primero los negocios locales. Si el tuyo no está ahí, esos clientes se van a la competencia. El <strong>SEO local</strong> es el trabajo de conseguir aparecer en esas búsquedas. Y para una pyme, es la inversión en marketing más rentable que existe.</p>

<h2>1. Tu ficha de Google Business Profile</h2>
<p>Es gratis y es lo primero. Una ficha completa y verificada (con horarios, fotos, teléfono y categoría correcta) te hace aparecer en Google Maps y en el «paquete local» de resultados. Mantenla actualizada y pide reseñas a tus clientes contentos: las reseñas son uno de los factores que más pesan.</p>

<h2>2. Una web rápida y optimizada para tu zona</h2>
<p>Tu web debe dejar claro <strong>qué haces y dónde</strong>. Menciona de forma natural tu ciudad y tu zona de servicio, ten una página de contacto con tu dirección, y asegúrate de que carga rápido en el móvil: Google penaliza las webs lentas y los visitantes también las abandonan.</p>

<h2>3. Reseñas y reputación</h2>
<p>Las reseñas no solo convencen a quien duda: también le dicen a Google que eres un negocio fiable y activo. Pide reseñas de forma sistemática (un mensaje de WhatsApp tras dar el servicio funciona muy bien) y responde a todas, también a las negativas, con educación.</p>

<h2>4. Contenido útil para tu cliente</h2>
<p>Responder en tu web a las preguntas que hace tu cliente («cuánto cuesta», «cómo funciona», «cuánto tarda») atrae visitas y genera confianza. No hace falta ser escritor: basta con explicar con claridad lo que ya sabes de tu oficio.</p>

<h2>El error más común</h2>
<p>Pensar que «con tener una web ya está». Una web sin SEO local es como una tienda preciosa en un callejón sin salida: nadie la encuentra. Lo importante no es solo tener web, sino que <strong>te encuentren cuando te buscan</strong>.</p>

<p>En MetaLogic incluimos SEO local desde el primer día en todos los proyectos. Si quieres saber cómo está tu negocio en Google ahora mismo, te hacemos un diagnóstico gratuito.</p>
`,
    },
    {
      slug: 'por-que-mi-web-no-aparece-en-google',
      date: '2026-06-05',
      readingMin: 5,
      category: 'SEO',
      title: '¿Por qué mi web no aparece en Google? Causas y soluciones',
      excerpt:
        'Tienes web pero no la encuentra nadie. Repasamos las causas más habituales (y cómo solucionarlas) para que empieces a posicionar en Google.',
      body: `
<p>Tienes una web, pero cuando buscas tu negocio en Google no aparece por ningún lado. Es de las situaciones más frustrantes, y casi siempre se debe a una de estas causas. La buena noticia: todas tienen solución.</p>

<h2>1. Google todavía no la ha indexado</h2>
<p>Si tu web es nueva, Google puede tardar días o semanas en descubrirla. Date de alta en <strong>Google Search Console</strong> y envía tu sitemap: es gratis y acelera mucho la indexación. Sin esto, Google ni sabe que existes.</p>

<h2>2. No tiene SEO</h2>
<p>Una web sin trabajo de SEO es invisible. Faltan títulos y descripciones optimizados, textos con las palabras que busca tu cliente y una estructura que Google entienda. Tener web no es lo mismo que estar posicionado.</p>

<h2>3. Es demasiado lenta</h2>
<p>Google penaliza las webs lentas y los visitantes las abandonan. Si tarda más de 2-3 segundos en cargar (muy común en plantillas pesadas), tienes un problema de posicionamiento y de ventas.</p>

<h2>4. No tienes contenido relevante</h2>
<p>Google posiciona páginas que responden a lo que la gente busca. Si tu web solo tiene un «inicio» y un «contacto», hay poco que posicionar. Páginas de servicios, sectores y un blog te dan muchas más oportunidades de aparecer.</p>

<h2>5. La competencia está mejor trabajada</h2>
<p>Si tus competidores llevan años con SEO, partir de cero lleva tiempo. No es imposible, pero requiere una estrategia constante, no un esfuerzo puntual.</p>

<p>¿No sabes en cuál de estos casos estás? En MetaLogic te hacemos un <strong>diagnóstico gratuito</strong> de tu web y te decimos exactamente qué falla y cómo arreglarlo.</p>
`,
    },
    {
      slug: 'wordpress-o-web-a-medida',
      date: '2026-05-30',
      readingMin: 5,
      category: 'Desarrollo',
      title: 'WordPress o web a medida: ¿cuál le conviene a tu negocio?',
      excerpt:
        'La eterna duda al crear una web. Comparamos WordPress y el desarrollo a medida en velocidad, seguridad, SEO y coste para que elijas bien.',
      body: `
<p>Es la gran duda cuando vas a crear tu web: ¿WordPress, que «lo usa todo el mundo», o una web a medida? Las dos opciones sirven, pero para negocios distintos. Te lo explicamos claro, sin tecnicismos.</p>

<h2>WordPress: rápido de montar, pesado a la larga</h2>
<p>WordPress es popular porque es barato de empezar y hay miles de plantillas. El problema: esas plantillas cargan mucho código que no usas, lo que las hace <strong>lentas</strong>, y necesitan actualizaciones y plugins constantes que pueden romperse o tener fallos de <strong>seguridad</strong>. Para algo sencillo puede valer; para destacar, se queda corto.</p>

<h2>Web a medida: rápida, segura y única</h2>
<p>Una web a medida se construye con el código justo para tu negocio. Resultado: <strong>ultrarrápida</strong> (mejor SEO y menos abandono), más segura (sin plugins que mantener) y con un diseño que no se parece a ninguna otra. Cuesta algo más al principio, pero rinde más a medio plazo.</p>

<h2>¿En qué se nota para tu cliente?</h2>
<ul>
  <li><strong>Velocidad:</strong> una web a medida puede cargar en menos de un segundo.</li>
  <li><strong>SEO:</strong> código limpio = Google la entiende y la posiciona mejor.</li>
  <li><strong>Imagen:</strong> diseño propio, no una plantilla que han usado mil negocios.</li>
</ul>

<h2>Entonces, ¿qué elijo?</h2>
<p>Si necesitas algo muy básico y con poco presupuesto, WordPress puede servir. Si quieres una web rápida, segura y que posicione para captar clientes de verdad, la web a medida gana. En MetaLogic trabajamos a medida con tecnología moderna (Astro) justo por esto.</p>

<p>¿Dudas con tu caso? Te asesoramos sin compromiso y te decimos honestamente qué te conviene.</p>
`,
    },
    {
      slug: 'como-conseguir-clientes-con-tu-pagina-web',
      date: '2026-05-12',
      readingMin: 5,
      category: 'Captación',
      title: 'Cómo conseguir clientes con tu página web (y no solo tenerla)',
      excerpt:
        'Una web bonita no basta. Te contamos qué tiene que hacer tu web para convertir las visitas en clientes reales para tu negocio.',
      body: `
<p>Muchos negocios tienen web pero siguen sin recibir clientes por ella. El motivo casi nunca es la falta de visitas, sino que la web no está pensada para <strong>convertir</strong>. Tener web y captar clientes son cosas distintas. Aquí van las claves.</p>

<h2>1. Que se entienda en 3 segundos</h2>
<p>Cuando alguien entra, debe saber al instante qué ofreces y por qué tú. Un titular claro, sin rodeos ni palabras vacías. Si tiene que adivinar, se va.</p>

<h2>2. Una llamada a la acción visible</h2>
<p>¿Qué quieres que haga el visitante? ¿Que te llame, que rellene un formulario, que te escriba por WhatsApp? Pónselo fácil y repítelo a lo largo de la página. Un botón claro convierte mucho más que un «contacto» escondido.</p>

<h2>3. Generar confianza</h2>
<p>La gente compra a quien se fía. Muestra tu trabajo (proyectos reales), reseñas si las tienes, garantías y datos de contacto visibles. La confianza es lo que convierte una visita en un cliente.</p>

<h2>4. Que cargue rápido y se vea bien en el móvil</h2>
<p>La mayoría de tus visitas vienen del móvil. Si tu web carga lenta o se ve mal en pantalla pequeña, pierdes clientes antes de que lean nada.</p>

<h2>5. Aparecer cuando te buscan</h2>
<p>De nada sirve una web que convierte si nadie la encuentra. El SEO trae las visitas correctas; la web bien hecha las convierte. Las dos cosas juntas son las que llenan tu agenda.</p>

<p>En MetaLogic diseñamos cada web con un objetivo: que tu negocio consiga más clientes. ¿Quieres que revisemos la tuya? Diagnóstico gratis.</p>
`,
    },
    {
      slug: 'aparecer-en-google-maps-business-profile',
      date: '2026-04-28',
      readingMin: 4,
      category: 'SEO local',
      title: 'Cómo aparecer en Google Maps con tu ficha de empresa',
      excerpt:
        'Salir en Google Maps cuando alguien busca cerca de ti trae clientes a diario y es gratis. Guía práctica para optimizar tu Google Business Profile.',
      body: `
<p>Cuando alguien busca «peluquería en Xàtiva» o «cafetería cerca de mí», Google muestra un mapa con tres negocios destacados. Salir ahí trae clientes a diario, y es <strong>gratis</strong>. La clave es tu ficha de Google Business Profile. Te explicamos cómo optimizarla.</p>

<h2>1. Crea y verifica tu ficha</h2>
<p>Date de alta en Google Business Profile y verifica que el negocio es tuyo (Google suele enviar un código). Sin verificar, no apareces. Es el paso que muchos se saltan.</p>

<h2>2. Rellénala al 100%</h2>
<p>Completa todo: nombre exacto, categoría correcta, dirección, teléfono, horario y zona de servicio. Cuanta más información, mejor te posiciona Google y más confía el cliente.</p>

<h2>3. Sube fotos reales y de calidad</h2>
<p>Las fichas con buenas fotos reciben muchos más clics. Fotos del local, del equipo, de tus trabajos o productos. Actualízalas de vez en cuando.</p>

<h2>4. Consigue reseñas (y responde a todas)</h2>
<p>Las reseñas son el factor que más mueve el ranking local. Pide a tus clientes contentos que te valoren (un WhatsApp tras el servicio funciona genial) y responde a todas, también a las negativas, con educación.</p>

<h2>5. Conecta tu ficha con tu web</h2>
<p>Enlaza la ficha a tu página web y asegúrate de que tu dirección y teléfono coinciden en los dos sitios. Esa coherencia refuerza tu posicionamiento local.</p>

<p>En MetaLogic optimizamos tu presencia local (web + Google) para que aparezcas cuando tus clientes te buscan en tu zona. ¿Hablamos?</p>
`,
    },
    {
      slug: 'cuanto-se-tarda-en-hacer-una-pagina-web',
      date: '2026-04-15',
      readingMin: 4,
      category: 'Proceso',
      title: '¿Cuánto se tarda en hacer una página web?',
      excerpt:
        'Plazos reales para crear tu web según el tipo de proyecto, y de qué depende que vaya rápido. Sin promesas imposibles.',
      body: `
<p>«¿Para cuándo la tendré?» es de las primeras preguntas que hace todo el mundo. La respuesta honesta depende del tipo de web y de algo que mucha gente no espera: de ti. Te contamos los plazos reales y de qué dependen.</p>

<h2>Plazos según el tipo de web</h2>
<ul>
  <li><strong>Landing o web de una página:</strong> 1 a 2 semanas.</li>
  <li><strong>Web corporativa para pyme:</strong> 2 a 4 semanas.</li>
  <li><strong>Tienda online o proyecto a medida:</strong> a partir de 4-6 semanas, según funcionalidad.</li>
</ul>

<h2>¿De qué depende que vaya rápido?</h2>
<p>El factor que más influye no es el diseño ni el código: es <strong>el contenido</strong> (textos, fotos, logo) y la <strong>rapidez en dar el visto bueno</strong> a cada fase. Si tienes el material listo y respondes ágil, la web vuela. Si no, se alarga.</p>

<h2>El proceso, fase a fase</h2>
<p>En MetaLogic trabajamos en cuatro pasos: descubrimiento (entender tu negocio), diseño y prototipo (lo validas antes de programar), desarrollo + SEO, y lanzamiento. Así sabes en todo momento por dónde va.</p>

<h2>Cómo acelerarlo tú</h2>
<ul>
  <li>Ten claras tus páginas y qué quieres conseguir.</li>
  <li>Reúne textos, fotos y logo antes de empezar (o pídenos ayuda con ellos).</li>
  <li>Da feedback concreto y a tiempo en cada fase.</li>
</ul>

<h2>Lo importante: un plazo realista y cumplido</h2>
<p>Desconfía de quien te promete una web compleja «en 3 días». Nosotros acordamos un plazo realista al empezar y lo cumplimos. ¿Tienes una fecha en mente? Cuéntanosla y te decimos si es viable, sin compromiso.</p>
`,
    },
    {
      slug: 'pagina-web-o-redes-sociales-para-tu-negocio',
      date: '2026-04-02',
      readingMin: 5,
      category: 'Negocio',
      title: 'Página web o redes sociales: ¿qué necesita tu negocio?',
      excerpt:
        '¿Web o Instagram? No compiten, se complementan, pero hay una diferencia clave. Te explicamos por dónde empezar y por qué.',
      body: `
<p>«¿Para qué quiero una web si ya tengo Instagram?» Es una duda muy común entre autónomos y pequeños negocios. La respuesta corta: no compiten, se complementan. Pero hay una diferencia clave que conviene entender.</p>

<h2>Las redes son alquiler; la web es tuya</h2>
<p>En Instagram o Facebook construyes sobre terreno prestado: las reglas, el alcance y hasta tu cuenta dependen de la plataforma. Si mañana cambian el algoritmo o te bloquean la cuenta, lo pierdes todo. Tu <strong>web es tuya</strong> al 100%: nadie te la puede quitar.</p>

<h2>Te encuentran de formas distintas</h2>
<p>A las redes la gente entra a entretenerse. A Google entra <strong>buscando algo concreto</strong> («fontanero en Xàtiva», «restaurante para celebración»). Esa intención de compra es oro, y solo la captas con una web bien posicionada.</p>

<h2>La web da confianza profesional</h2>
<p>Un negocio con web propia transmite seriedad. Muchos clientes, antes de contratar, buscan tu web para informarse. Si no la tienen, dudan. Las redes enseñan tu día a día; la web cierra la venta.</p>

<h2>Lo ideal: trabajar juntas</h2>
<p>La estrategia ganadora es usar las redes para atraer y mostrar cercanía, y llevar a esa gente a tu web, donde explicas bien lo que ofreces y consigues que te contacten. Una alimenta a la otra.</p>

<h2>Entonces, ¿qué priorizo?</h2>
<p>Si solo puedes empezar por una cosa, empieza por la <strong>web</strong>: es la base, es tuya y trabaja por ti las 24 horas en Google. Las redes potencian, pero no sustituyen. ¿Hablamos de la tuya?</p>
`,
    },
    {
      slug: 'como-conseguir-resenas-de-google',
      date: '2026-03-20',
      readingMin: 4,
      category: 'SEO local',
      title: 'Cómo conseguir reseñas de Google para tu negocio',
      excerpt:
        'Las reseñas convencen a tus clientes y mejoran tu posicionamiento local. Te contamos cómo conseguir más, de forma honesta y sencilla.',
      body: `
<p>Las reseñas de Google son uno de los factores que más influyen en si un cliente te elige a ti o a la competencia, y en si Google te muestra arriba en las búsquedas locales. La buena noticia: conseguirlas es más fácil de lo que parece.</p>

<h2>Por qué importan tanto</h2>
<p>Hacen dos cosas a la vez: <strong>convencen al cliente</strong> (la gente confía en la opinión de otros) y <strong>mejoran tu posicionamiento local</strong> (Google interpreta muchas reseñas buenas como señal de negocio fiable). Más reseñas = más clientes y más visibilidad.</p>

<h2>La clave: pedirlas (sí, así de simple)</h2>
<p>La mayoría de clientes contentos no deja reseña porque nadie se la pide. El truco es <strong>pedirla en el momento adecuado</strong>: justo después de un buen servicio, cuando el cliente está satisfecho. Un mensaje de WhatsApp con el enlace directo funciona muy bien.</p>

<h2>Pónselo fácil</h2>
<p>Cuanto menos esfuerzo, más reseñas. Comparte el <strong>enlace directo</strong> a tu ficha (Google te lo da) para que solo tengan que poner las estrellas y dos palabras. Si tienen que buscarte, la mayoría no lo hará.</p>

<h2>Responde a todas</h2>
<p>Agradece las buenas y responde con educación las negativas (sin discutir, ofreciendo solución). Google valora los negocios que responden, y a futuros clientes les transmite que te importa.</p>

<h2>Lo que NO debes hacer</h2>
<p>Nunca compres reseñas falsas ni las incentives con regalos: Google lo detecta y penaliza, y se nota. Mejor pocas y reales que muchas y sospechosas. ¿Quieres que te ayudemos a montar el sistema para pedirlas? Te lo dejamos listo.</p>
`,
    },
  ],
  va: [
    {
      slug: 'cuanto-cuesta-una-pagina-web-xativa-valencia-2026',
      date: '2026-06-10',
      readingMin: 6,
      category: 'Preus',
      title: 'Quant costa una pàgina web a Xàtiva i València en 2026',
      excerpt:
        'Preus reals i transparents d’una web professional per a autònoms i pimes a la Comunitat Valenciana, segons el tipus de projecte. Sense lletra menuda.',
      body: `
<p>És la primera pregunta que ens fa tothom, i és lògica: <strong>quant costa una pàgina web?</strong> La resposta honesta és «depèn», però això no ajuda. Així que et donarem rangs reals de 2026 per a autònoms i pimes a Xàtiva, València i rodalia.</p>

<h2>Rangs de preu en 2026</h2>
<ul>
  <li><strong>Landing o web d’una pàgina (300–800 €):</strong> ideal per a presentar un servei concret o captar contactes. Una sola pàgina ben dissenyada i optimitzada.</li>
  <li><strong>Web corporativa per a pime (800–2.000 €):</strong> diverses pàgines (inici, serveis, projectes, contacte), SEO de base, formularis i disseny a mida. El més habitual.</li>
  <li><strong>Botiga en línia / projecte a mida (des de 2.000 €):</strong> ecommerce, reserves, calculadores, integracions o panells de gestió. El preu depèn de la funcionalitat.</li>
</ul>
<p>Com a referència, la mitjana per a pimes a la Comunitat Valenciana se situa entre 1.200 € i 2.500 €. Un manteniment posterior sol costar entre 30 € i 80 € al mes, i inclou actualitzacions, còpies de seguretat i suport.</p>

<h2>Per què hi ha tanta diferència de preu?</h2>
<p>Una web no és un producte tancat. El preu canvia segons tres coses: <strong>quantes pàgines</strong> té, <strong>quina funcionalitat</strong> necessita (un formulari no és el mateix que una botiga) i <strong>quant treball de disseny i contingut</strong> cal. Desconfia de qui et done un preu tancat sense preguntar-te res: o et ven una plantilla genèrica, o hi haurà sorpreses després.</p>

<h2>Plantilla barata vs. web a mida</h2>
<p>Una plantilla de 50 € sembla una ganga fins que descobreixes que carrega lenta, s’assembla a mil webs més i no posiciona a Google. Una web a mida costa més al principi, però està pensada per al <strong>teu negoci</strong>: ràpida, optimitzada per a SEO des del primer dia i preparada per a créixer. A mitjà termini, ix més rendible.</p>

<h2>Què hauria d’incloure sempre el pressupost?</h2>
<ul>
  <li>Disseny adaptat a mòbil (la majoria de les teues visites venen del mòbil).</li>
  <li>Optimització de velocitat i Core Web Vitals.</li>
  <li>SEO tècnic de base i indexació a Google.</li>
  <li>Avís legal, privacitat i galetes conforme a la llei.</li>
  <li>Formació bàsica perquè pugues gestionar la teua web.</li>
</ul>

<p>A MetaLogic treballem amb pressupost tancat i sense permanències: et diem el preu abans de començar i no hi ha sorpreses. Vols saber quant costaria el teu projecte? Et fem un <strong>diagnòstic i pressupost gratis</strong>, sense compromís.</p>
`,
    },
    {
      slug: 'seo-local-aparecer-google-negocio-valencia',
      date: '2026-05-22',
      readingMin: 5,
      category: 'SEO local',
      title: 'SEO local: com fer que el teu negoci aparega a Google',
      excerpt:
        'Si tens un negoci a Xàtiva o València, aparèixer a Google i a Maps quan algú busca prop de tu és el que més clients et portarà. T’expliquem com.',
      body: `
<p>Quan algú busca «fontaner a Xàtiva» o «restaurant prop de mi», Google mostra primer els negocis locals. Si el teu no hi és, eixos clients se’n van a la competència. El <strong>SEO local</strong> és la faena d’aconseguir aparèixer en eixes cerques. I per a una pime, és la inversió en màrqueting més rendible que hi ha.</p>

<h2>1. La teua fitxa de Google Business Profile</h2>
<p>És gratis i és el primer. Una fitxa completa i verificada (amb horaris, fotos, telèfon i categoria correcta) et fa aparèixer a Google Maps i al «paquet local» de resultats. Mantín-la actualitzada i demana ressenyes als teus clients contents: les ressenyes són un dels factors que més pesen.</p>

<h2>2. Una web ràpida i optimitzada per a la teua zona</h2>
<p>La teua web ha de deixar clar <strong>què fas i on</strong>. Menciona de forma natural la teua ciutat i la teua zona de servei, tin una pàgina de contacte amb la teua adreça, i assegura’t que carrega ràpid al mòbil: Google penalitza les webs lentes i els visitants també les abandonen.</p>

<h2>3. Ressenyes i reputació</h2>
<p>Les ressenyes no sols convencen qui dubta: també li diuen a Google que eres un negoci fiable i actiu. Demana ressenyes de forma sistemàtica (un missatge de WhatsApp després de donar el servei funciona molt bé) i respon-les totes, també les negatives, amb educació.</p>

<h2>4. Contingut útil per al teu client</h2>
<p>Respondre a la teua web les preguntes que fa el teu client («quant costa», «com funciona», «quant tarda») atrau visites i genera confiança. No cal ser escriptor: només cal explicar amb claredat el que ja saps del teu ofici.</p>

<h2>L’error més comú</h2>
<p>Pensar que «amb tindre una web ja està». Una web sense SEO local és com una botiga preciosa en un carreró sense eixida: ningú la troba. L’important no és sols tindre web, sinó que <strong>et troben quan et busquen</strong>.</p>

<p>A MetaLogic incloem SEO local des del primer dia en tots els projectes. Si vols saber com està el teu negoci a Google ara mateix, et fem un diagnòstic gratuït.</p>
`,
    },
    {
      slug: 'por-que-mi-web-no-aparece-en-google',
      date: '2026-06-05',
      readingMin: 5,
      category: 'SEO',
      title: 'Per què la meua web no apareix a Google? Causes i solucions',
      excerpt:
        'Tens web però no la troba ningú. Repassem les causes més habituals (i com solucionar-les) perquè comences a posicionar a Google.',
      body: `
<p>Tens una web, però quan busques el teu negoci a Google no apareix enlloc. És de les situacions més frustrants, i quasi sempre es deu a una d’aquestes causes. La bona notícia: totes tenen solució.</p>

<h2>1. Google encara no l’ha indexada</h2>
<p>Si la teua web és nova, Google pot tardar dies o setmanes a descobrir-la. Dona’t d’alta a <strong>Google Search Console</strong> i envia el teu sitemap: és gratis i accelera molt la indexació. Sense això, Google ni sap que existeixes.</p>

<h2>2. No té SEO</h2>
<p>Una web sense treball de SEO és invisible. Falten títols i descripcions optimitzats, textos amb les paraules que busca el teu client i una estructura que Google entenga. Tindre web no és el mateix que estar posicionat.</p>

<h2>3. És massa lenta</h2>
<p>Google penalitza les webs lentes i els visitants les abandonen. Si tarda més de 2-3 segons a carregar (molt comú en plantilles pesades), tens un problema de posicionament i de vendes.</p>

<h2>4. No tens contingut rellevant</h2>
<p>Google posiciona pàgines que responen al que la gent busca. Si la teua web només té un «inici» i un «contacte», hi ha poc a posicionar. Pàgines de serveis, sectors i un blog et donen moltes més oportunitats d’aparéixer.</p>

<h2>5. La competència està millor treballada</h2>
<p>Si els teus competidors porten anys amb SEO, partir de zero porta temps. No és impossible, però requereix una estratègia constant, no un esforç puntual.</p>

<p>No saps en quin d’aquests casos estàs? A MetaLogic et fem un <strong>diagnòstic gratuït</strong> de la teua web i et diem exactament què falla i com arreglar-ho.</p>
`,
    },
    {
      slug: 'wordpress-o-web-a-medida',
      date: '2026-05-30',
      readingMin: 5,
      category: 'Desenvolupament',
      title: 'WordPress o web a mida: quina li convé al teu negoci?',
      excerpt:
        'L’etern dubte en crear una web. Comparem WordPress i el desenvolupament a mida en velocitat, seguretat, SEO i cost perquè tries bé.',
      body: `
<p>És el gran dubte quan vas a crear la teua web: WordPress, que «ho usa tothom», o una web a mida? Les dues opcions servixen, però per a negocis diferents. T’ho expliquem clar, sense tecnicismes.</p>

<h2>WordPress: ràpid de muntar, pesat a la llarga</h2>
<p>WordPress és popular perquè és barat de començar i hi ha milers de plantilles. El problema: eixes plantilles carreguen molt codi que no uses, cosa que les fa <strong>lentes</strong>, i necessiten actualitzacions i plugins constants que poden trencar-se o tindre fallos de <strong>seguretat</strong>. Per a una cosa senzilla pot valdre; per a destacar, es queda curt.</p>

<h2>Web a mida: ràpida, segura i única</h2>
<p>Una web a mida es construïx amb el codi just per al teu negoci. Resultat: <strong>ultraràpida</strong> (millor SEO i menys abandó), més segura (sense plugins que mantindre) i amb un disseny que no s’assembla a cap altra. Costa una mica més al principi, però rendix més a mitjà termini.</p>

<h2>En què es nota per al teu client?</h2>
<ul>
  <li><strong>Velocitat:</strong> una web a mida pot carregar en menys d’un segon.</li>
  <li><strong>SEO:</strong> codi net = Google l’entén i la posiciona millor.</li>
  <li><strong>Imatge:</strong> disseny propi, no una plantilla que han usat mil negocis.</li>
</ul>

<h2>Aleshores, què tria?</h2>
<p>Si necessites una cosa molt bàsica i amb poc pressupost, WordPress pot servir. Si vols una web ràpida, segura i que posicione per a captar clients de veritat, la web a mida guanya. A MetaLogic treballem a mida amb tecnologia moderna (Astro) justament per això.</p>

<p>Dubtes amb el teu cas? T’assessorem sense compromís i et diem honestament què et convé.</p>
`,
    },
    {
      slug: 'como-conseguir-clientes-con-tu-pagina-web',
      date: '2026-05-12',
      readingMin: 5,
      category: 'Captació',
      title: 'Com aconseguir clients amb la teua pàgina web (i no només tindre-la)',
      excerpt:
        'Una web bonica no basta. Et contem què ha de fer la teua web per a convertir les visites en clients reals per al teu negoci.',
      body: `
<p>Molts negocis tenen web però seguixen sense rebre clients per ella. El motiu quasi mai és la falta de visites, sinó que la web no està pensada per a <strong>convertir</strong>. Tindre web i captar clients són coses diferents. Ací van les claus.</p>

<h2>1. Que s’entenga en 3 segons</h2>
<p>Quan algú entra, ha de saber a l’instant què oferixes i per què tu. Un titular clar, sense rodejos ni paraules buides. Si ha d’endevinar-ho, se’n va.</p>

<h2>2. Una crida a l’acció visible</h2>
<p>Què vols que faça el visitant? Que et telefone, que òmpliga un formulari, que t’escriga per WhatsApp? Posa-li-ho fàcil i repetix-ho al llarg de la pàgina. Un botó clar convertix molt més que un «contacte» amagat.</p>

<h2>3. Generar confiança</h2>
<p>La gent compra a qui es fia. Mostra el teu treball (projectes reals), ressenyes si en tens, garanties i dades de contacte visibles. La confiança és el que convertix una visita en un client.</p>

<h2>4. Que carregue ràpid i es veja bé al mòbil</h2>
<p>La majoria de les teues visites venen del mòbil. Si la teua web carrega lenta o es veu malament en pantalla menuda, perds clients abans que lligen res.</p>

<h2>5. Aparéixer quan et busquen</h2>
<p>De res servix una web que convertix si ningú la troba. El SEO porta les visites correctes; la web ben feta les convertix. Les dues coses juntes són les que omplin la teua agenda.</p>

<p>A MetaLogic dissenyem cada web amb un objectiu: que el teu negoci aconseguisca més clients. Vols que revisem la teua? Diagnòstic gratis.</p>
`,
    },
    {
      slug: 'aparecer-en-google-maps-business-profile',
      date: '2026-04-28',
      readingMin: 4,
      category: 'SEO local',
      title: 'Com aparéixer a Google Maps amb la teua fitxa d’empresa',
      excerpt:
        'Eixir a Google Maps quan algú busca prop de tu porta clients cada dia i és gratis. Guia pràctica per a optimitzar el teu Google Business Profile.',
      body: `
<p>Quan algú busca «perruqueria a Xàtiva» o «cafeteria prop de mi», Google mostra un mapa amb tres negocis destacats. Eixir ahí porta clients cada dia, i és <strong>gratis</strong>. La clau és la teua fitxa de Google Business Profile. T’expliquem com optimitzar-la.</p>

<h2>1. Crea i verifica la teua fitxa</h2>
<p>Dona’t d’alta a Google Business Profile i verifica que el negoci és teu (Google sol enviar un codi). Sense verificar, no apareixes. És el pas que molts es salten.</p>

<h2>2. Òmpli-la al 100%</h2>
<p>Completa-ho tot: nom exacte, categoria correcta, adreça, telèfon, horari i zona de servei. Com més informació, millor et posiciona Google i més confia el client.</p>

<h2>3. Puja fotos reals i de qualitat</h2>
<p>Les fitxes amb bones fotos reben molts més clics. Fotos del local, de l’equip, dels teus treballs o productes. Actualitza-les de tant en tant.</p>

<h2>4. Aconseguix ressenyes (i respon-les totes)</h2>
<p>Les ressenyes són el factor que més mou el rànquing local. Demana als teus clients contents que et valoren (un WhatsApp després del servei funciona genial) i respon-les totes, també les negatives, amb educació.</p>

<h2>5. Connecta la fitxa amb la teua web</h2>
<p>Enllaça la fitxa a la teua pàgina web i assegura’t que la teua adreça i telèfon coincidixen als dos llocs. Eixa coherència reforça el teu posicionament local.</p>

<p>A MetaLogic optimitzem la teua presència local (web + Google) perquè aparegues quan els teus clients et busquen a la teua zona. Parlem?</p>
`,
    },
    {
      slug: 'cuanto-se-tarda-en-hacer-una-pagina-web',
      date: '2026-04-15',
      readingMin: 4,
      category: 'Procés',
      title: 'Quant es tarda a fer una pàgina web?',
      excerpt:
        'Terminis reals per a crear la teua web segons el tipus de projecte, i de què depèn que vaja ràpid. Sense promeses impossibles.',
      body: `
<p>«Per a quan la tindré?» és de les primeres preguntes que fa tothom. La resposta honesta depèn del tipus de web i d’una cosa que molta gent no espera: de tu. Et contem els terminis reals i de què depenen.</p>

<h2>Terminis segons el tipus de web</h2>
<ul>
  <li><strong>Landing o web d’una pàgina:</strong> 1 a 2 setmanes.</li>
  <li><strong>Web corporativa per a pime:</strong> 2 a 4 setmanes.</li>
  <li><strong>Botiga en línia o projecte a mida:</strong> a partir de 4-6 setmanes, segons funcionalitat.</li>
</ul>

<h2>De què depèn que vaja ràpid?</h2>
<p>El factor que més influïx no és el disseny ni el codi: és <strong>el contingut</strong> (textos, fotos, logo) i la <strong>rapidesa a donar el vistiplau</strong> a cada fase. Si tens el material llest i respons àgil, la web vola. Si no, s’allarga.</p>

<h2>El procés, fase a fase</h2>
<p>A MetaLogic treballem en quatre passos: descobriment (entendre el teu negoci), disseny i prototip (el valides abans de programar), desenvolupament + SEO, i llançament. Així saps en tot moment per on va.</p>

<h2>Com accelerar-ho tu</h2>
<ul>
  <li>Tin clares les teues pàgines i què vols aconseguir.</li>
  <li>Reunix textos, fotos i logo abans de començar (o demana’ns ajuda amb ells).</li>
  <li>Dona feedback concret i a temps en cada fase.</li>
</ul>

<h2>L’important: un termini realista i complit</h2>
<p>Desconfia de qui et promet una web complexa «en 3 dies». Nosaltres acordem un termini realista en començar i el complim. Tens una data en ment? Conta-nos-la i et diem si és viable, sense compromís.</p>
`,
    },
    {
      slug: 'pagina-web-o-redes-sociales-para-tu-negocio',
      date: '2026-04-02',
      readingMin: 5,
      category: 'Negoci',
      title: 'Pàgina web o xarxes socials: què necessita el teu negoci?',
      excerpt:
        'Web o Instagram? No competixen, es complementen, però hi ha una diferència clau. T’expliquem per on començar i per què.',
      body: `
<p>«Per a què vull una web si ja tinc Instagram?» És un dubte molt comú entre autònoms i xicotets negocis. La resposta curta: no competixen, es complementen. Però hi ha una diferència clau que convé entendre.</p>

<h2>Les xarxes són lloguer; la web és teua</h2>
<p>A Instagram o Facebook construïxes sobre terreny prestat: les regles, l’abast i fins i tot el teu compte depenen de la plataforma. Si demà canvien l’algoritme o et bloquegen el compte, ho perds tot. La teua <strong>web és teua</strong> al 100%: ningú te la pot llevar.</p>

<h2>Et troben de maneres diferents</h2>
<p>A les xarxes la gent entra a entretindre’s. A Google entra <strong>buscant una cosa concreta</strong> («fontaner a Xàtiva», «restaurant per a celebració»). Eixa intenció de compra és or, i només la captes amb una web ben posicionada.</p>

<h2>La web dona confiança professional</h2>
<p>Un negoci amb web pròpia transmet serietat. Molts clients, abans de contractar, busquen la teua web per a informar-se. Si no la tenen, dubten. Les xarxes ensenyen el teu dia a dia; la web tanca la venda.</p>

<h2>L’ideal: treballar juntes</h2>
<p>L’estratègia guanyadora és usar les xarxes per a atraure i mostrar proximitat, i portar eixa gent a la teua web, on expliques bé el que oferixes i aconseguixes que et contacten. Una alimenta l’altra.</p>

<h2>Aleshores, què prioritze?</h2>
<p>Si només pots començar per una cosa, comença per la <strong>web</strong>: és la base, és teua i treballa per tu les 24 hores a Google. Les xarxes potencien, però no substituïxen. Parlem de la teua?</p>
`,
    },
    {
      slug: 'como-conseguir-resenas-de-google',
      date: '2026-03-20',
      readingMin: 4,
      category: 'SEO local',
      title: 'Com aconseguir ressenyes de Google per al teu negoci',
      excerpt:
        'Les ressenyes convencen els teus clients i milloren el teu posicionament local. Et contem com aconseguir-ne més, de forma honesta i senzilla.',
      body: `
<p>Les ressenyes de Google són un dels factors que més influïxen en si un client et tria a tu o a la competència, i en si Google et mostra amunt en les cerques locals. La bona notícia: aconseguir-les és més fàcil del que sembla.</p>

<h2>Per què importen tant</h2>
<p>Fan dues coses alhora: <strong>convencen el client</strong> (la gent confia en l’opinió d’altres) i <strong>milloren el teu posicionament local</strong> (Google interpreta moltes ressenyes bones com a senyal de negoci fiable). Més ressenyes = més clients i més visibilitat.</p>

<h2>La clau: demanar-les (sí, així de simple)</h2>
<p>La majoria de clients contents no deixa ressenya perquè ningú la hi demana. El truc és <strong>demanar-la en el moment adequat</strong>: just després d’un bon servei, quan el client està satisfet. Un missatge de WhatsApp amb l’enllaç directe funciona molt bé.</p>

<h2>Posa-li-ho fàcil</h2>
<p>Com menys esforç, més ressenyes. Comparteix l’<strong>enllaç directe</strong> a la teua fitxa (Google te’l dona) perquè només hagen de posar les estrelles i dues paraules. Si t’han de buscar, la majoria no ho farà.</p>

<h2>Respon-les totes</h2>
<p>Agraïx les bones i respon amb educació les negatives (sense discutir, oferint solució). Google valora els negocis que responen, i als futurs clients els transmet que t’importa.</p>

<h2>El que NO has de fer</h2>
<p>Mai compres ressenyes falses ni les incentives amb regals: Google ho detecta i penalitza, i es nota. Millor poques i reals que moltes i sospitoses. Vols que t’ajudem a muntar el sistema per a demanar-les? T’ho deixem llest.</p>
`,
    },
  ],
  en: [
    {
      slug: 'cuanto-cuesta-una-pagina-web-xativa-valencia-2026',
      date: '2026-06-10',
      readingMin: 6,
      category: 'Pricing',
      title: 'How much does a website cost in Xàtiva and Valencia in 2026',
      excerpt:
        'Real, transparent prices for a professional website for freelancers and small businesses in the Valencia region, by project type. No fine print.',
      body: `
<p>It’s the first thing everyone asks, and it makes sense: <strong>how much does a website cost?</strong> The honest answer is «it depends», but that doesn’t help. So here are real 2026 ranges for freelancers and small businesses in Xàtiva, Valencia and the surrounding area.</p>

<h2>Price ranges in 2026</h2>
<ul>
  <li><strong>Landing or one-page site (€300–800):</strong> ideal to present a specific service or capture leads. A single, well-designed and optimized page.</li>
  <li><strong>Small-business website (€800–2,000):</strong> several pages (home, services, work, contact), baseline SEO, forms and custom design. The most common choice.</li>
  <li><strong>Online store / custom project (from €2,000):</strong> e-commerce, bookings, calculators, integrations or management panels. The price depends on the functionality.</li>
</ul>
<p>As a reference, the average for small businesses in the Valencia region sits between €1,200 and €2,500. Ongoing maintenance usually costs €30–80 a month and includes updates, backups and support.</p>

<h2>Why is there such a price difference?</h2>
<p>A website isn’t an off-the-shelf product. The price changes based on three things: <strong>how many pages</strong> it has, <strong>what functionality</strong> it needs (a form isn’t the same as a store) and <strong>how much design and content work</strong> is involved. Be wary of anyone who quotes a fixed price without asking you anything: either they’re selling a generic template, or there’ll be surprises later.</p>

<h2>Cheap template vs. custom website</h2>
<p>A €50 template looks like a bargain until you find out it loads slowly, looks like a thousand other sites and doesn’t rank on Google. A custom website costs more upfront, but it’s built for <strong>your business</strong>: fast, SEO-optimized from day one and ready to grow. In the medium term, it pays off.</p>

<h2>What should every quote always include?</h2>
<ul>
  <li>Mobile-friendly design (most of your visits come from mobile).</li>
  <li>Speed and Core Web Vitals optimization.</li>
  <li>Baseline technical SEO and Google indexing.</li>
  <li>Legal notice, privacy and cookies in line with the law.</li>
  <li>Basic training so you can manage your own site.</li>
</ul>

<p>At MetaLogic we work with fixed quotes and no lock-in: we tell you the price before we start and there are no surprises. Want to know what your project would cost? We’ll give you a <strong>free diagnosis and quote</strong>, no strings attached.</p>
`,
    },
    {
      slug: 'seo-local-aparecer-google-negocio-valencia',
      date: '2026-05-22',
      readingMin: 5,
      category: 'Local SEO',
      title: 'Local SEO: how to get your business to show up on Google',
      excerpt:
        'If you run a business in Xàtiva or Valencia, showing up on Google and Maps when someone searches nearby is what brings you the most clients. Here’s how.',
      body: `
<p>When someone searches «plumber in Xàtiva» or «restaurant near me», Google shows local businesses first. If yours isn’t there, those clients go to the competition. <strong>Local SEO</strong> is the work of getting you to appear in those searches. And for a small business, it’s the most cost-effective marketing investment there is.</p>

<h2>1. Your Google Business Profile</h2>
<p>It’s free and it comes first. A complete, verified profile (with hours, photos, phone and the right category) gets you onto Google Maps and into the «local pack» of results. Keep it up to date and ask happy clients for reviews: reviews are one of the heaviest-weighted factors.</p>

<h2>2. A fast website optimized for your area</h2>
<p>Your website must make clear <strong>what you do and where</strong>. Mention your city and service area naturally, have a contact page with your address, and make sure it loads fast on mobile: Google penalizes slow sites and visitors abandon them too.</p>

<h2>3. Reviews and reputation</h2>
<p>Reviews don’t just convince the undecided: they also tell Google you’re a trustworthy, active business. Ask for reviews systematically (a WhatsApp message after delivering the service works very well) and reply to all of them, including the negative ones, politely.</p>

<h2>4. Useful content for your customer</h2>
<p>Answering on your website the questions your customer asks («how much does it cost», «how does it work», «how long does it take») attracts visits and builds trust. You don’t need to be a writer: just clearly explain what you already know about your trade.</p>

<h2>The most common mistake</h2>
<p>Thinking that «just having a website is enough». A website without local SEO is like a beautiful shop in a dead-end alley: nobody finds it. What matters isn’t just having a site, but <strong>being found when people search for you</strong>.</p>

<p>At MetaLogic we include local SEO from day one in every project. If you want to know where your business stands on Google right now, we’ll give you a free diagnosis.</p>
`,
    },
    {
      slug: 'por-que-mi-web-no-aparece-en-google',
      date: '2026-06-05',
      readingMin: 5,
      category: 'SEO',
      title: 'Why isn’t my website showing up on Google? Causes and fixes',
      excerpt:
        'You have a website but nobody finds it. We go through the most common causes (and how to fix them) so you start ranking on Google.',
      body: `
<p>You have a website, but when you search for your business on Google it shows up nowhere. It’s one of the most frustrating situations, and it almost always comes down to one of these causes. The good news: they all have a fix.</p>

<h2>1. Google hasn’t indexed it yet</h2>
<p>If your site is new, Google can take days or weeks to discover it. Set up <strong>Google Search Console</strong> and submit your sitemap: it’s free and speeds up indexing a lot. Without it, Google doesn’t even know you exist.</p>

<h2>2. It has no SEO</h2>
<p>A website with no SEO work is invisible. It’s missing optimized titles and descriptions, copy with the words your customer searches for, and a structure Google understands. Having a site isn’t the same as ranking.</p>

<h2>3. It’s too slow</h2>
<p>Google penalizes slow sites and visitors abandon them. If it takes more than 2-3 seconds to load (very common with heavy templates), you have a ranking and a sales problem.</p>

<h2>4. You don’t have relevant content</h2>
<p>Google ranks pages that answer what people search for. If your site only has a «home» and a «contact» page, there’s little to rank. Service pages, sector pages and a blog give you many more chances to show up.</p>

<h2>5. The competition is better optimized</h2>
<p>If your competitors have been doing SEO for years, starting from scratch takes time. It’s not impossible, but it needs a consistent strategy, not a one-off effort.</p>

<p>Not sure which of these is your case? At MetaLogic we give you a <strong>free audit</strong> of your website and tell you exactly what’s failing and how to fix it.</p>
`,
    },
    {
      slug: 'wordpress-o-web-a-medida',
      date: '2026-05-30',
      readingMin: 5,
      category: 'Development',
      title: 'WordPress or a custom website: which suits your business?',
      excerpt:
        'The eternal question when building a site. We compare WordPress and custom development on speed, security, SEO and cost so you choose well.',
      body: `
<p>It’s the big question when building your site: WordPress, which «everyone uses», or a custom website? Both work, but for different businesses. Here’s the clear, jargon-free version.</p>

<h2>WordPress: quick to set up, heavy in the long run</h2>
<p>WordPress is popular because it’s cheap to start and there are thousands of templates. The catch: those templates load lots of code you don’t use, which makes them <strong>slow</strong>, and they need constant updates and plugins that can break or have <strong>security</strong> holes. For something simple it can do; to stand out, it falls short.</p>

<h2>Custom website: fast, secure and unique</h2>
<p>A custom website is built with exactly the code your business needs. The result: <strong>ultra-fast</strong> (better SEO and less drop-off), more secure (no plugins to maintain) and with a design that looks like no other. It costs a bit more upfront, but pays off in the medium term.</p>

<h2>What does your customer actually notice?</h2>
<ul>
  <li><strong>Speed:</strong> a custom site can load in under a second.</li>
  <li><strong>SEO:</strong> clean code = Google understands and ranks it better.</li>
  <li><strong>Image:</strong> your own design, not a template used by a thousand businesses.</li>
</ul>

<h2>So, which do I pick?</h2>
<p>If you need something very basic on a small budget, WordPress can do. If you want a fast, secure site that ranks and actually wins clients, custom wins. At MetaLogic we build custom with modern technology (Astro) for exactly this reason.</p>

<p>Unsure about your case? We’ll advise you with no commitment and tell you honestly what suits you.</p>
`,
    },
    {
      slug: 'como-conseguir-clientes-con-tu-pagina-web',
      date: '2026-05-12',
      readingMin: 5,
      category: 'Growth',
      title: 'How to win clients with your website (not just have one)',
      excerpt:
        'A pretty website isn’t enough. We explain what your site needs to do to turn visits into real clients for your business.',
      body: `
<p>Many businesses have a website but still get no clients from it. The reason is almost never a lack of visits, but that the site isn’t built to <strong>convert</strong>. Having a website and winning clients are two different things. Here are the keys.</p>

<h2>1. Make it clear in 3 seconds</h2>
<p>When someone lands, they should instantly know what you offer and why you. A clear headline, no fluff or empty words. If they have to guess, they leave.</p>

<h2>2. A visible call to action</h2>
<p>What do you want the visitor to do? Call you, fill in a form, message you on WhatsApp? Make it easy and repeat it down the page. A clear button converts far better than a hidden «contact» link.</p>

<h2>3. Build trust</h2>
<p>People buy from those they trust. Show your work (real projects), reviews if you have them, guarantees and visible contact details. Trust is what turns a visit into a client.</p>

<h2>4. Load fast and look good on mobile</h2>
<p>Most of your visits come from mobile. If your site loads slowly or looks bad on a small screen, you lose clients before they read anything.</p>

<h2>5. Show up when people search</h2>
<p>A converting website is useless if nobody finds it. SEO brings the right visits; a well-built site converts them. The two together are what fill your calendar.</p>

<p>At MetaLogic we design every website with one goal: getting your business more clients. Want us to review yours? Free audit.</p>
`,
    },
    {
      slug: 'aparecer-en-google-maps-business-profile',
      date: '2026-04-28',
      readingMin: 4,
      category: 'Local SEO',
      title: 'How to appear on Google Maps with your business profile',
      excerpt:
        'Appearing on Google Maps when someone searches nearby brings clients every day and it’s free. A practical guide to optimize your Google Business Profile.',
      body: `
<p>When someone searches «hairdresser in Xàtiva» or «coffee shop near me», Google shows a map with three featured businesses. Appearing there brings clients every day, and it’s <strong>free</strong>. The key is your Google Business Profile. Here’s how to optimize it.</p>

<h2>1. Create and verify your profile</h2>
<p>Sign up for Google Business Profile and verify the business is yours (Google usually sends a code). Without verifying, you don’t appear. It’s the step many skip.</p>

<h2>2. Fill it in 100%</h2>
<p>Complete everything: exact name, correct category, address, phone, hours and service area. The more information, the better Google ranks you and the more the customer trusts you.</p>

<h2>3. Upload real, quality photos</h2>
<p>Profiles with good photos get far more clicks. Photos of your premises, team, work or products. Update them now and then.</p>

<h2>4. Get reviews (and reply to all of them)</h2>
<p>Reviews are the biggest driver of local ranking. Ask happy customers to rate you (a WhatsApp after the service works great) and reply to all of them, including the negative ones, politely.</p>

<h2>5. Connect your profile with your website</h2>
<p>Link the profile to your website and make sure your address and phone match on both. That consistency strengthens your local ranking.</p>

<p>At MetaLogic we optimize your local presence (website + Google) so you show up when customers search for you in your area. Shall we talk?</p>
`,
    },
    {
      slug: 'cuanto-se-tarda-en-hacer-una-pagina-web',
      date: '2026-04-15',
      readingMin: 4,
      category: 'Process',
      title: 'How long does it take to build a website?',
      excerpt:
        'Real timelines to build your website by project type, and what makes it go fast. No impossible promises.',
      body: `
<p>«When will it be ready?» is one of the first questions everyone asks. The honest answer depends on the type of site and on something many don’t expect: on you. Here are the real timelines and what they depend on.</p>

<h2>Timelines by type of site</h2>
<ul>
  <li><strong>Landing or one-page site:</strong> 1 to 2 weeks.</li>
  <li><strong>Small-business website:</strong> 2 to 4 weeks.</li>
  <li><strong>Online store or custom project:</strong> from 4-6 weeks, depending on functionality.</li>
</ul>

<h2>What makes it go fast?</h2>
<p>The biggest factor isn’t the design or the code: it’s the <strong>content</strong> (copy, photos, logo) and how <strong>quickly you sign off</strong> each phase. If your material is ready and you reply promptly, the site flies. If not, it drags.</p>

<h2>The process, step by step</h2>
<p>At MetaLogic we work in four steps: discovery (understanding your business), design and prototype (you validate before we code), development + SEO, and launch. So you always know where things stand.</p>

<h2>How you can speed it up</h2>
<ul>
  <li>Be clear on your pages and what you want to achieve.</li>
  <li>Gather copy, photos and logo before starting (or ask us for help with them).</li>
  <li>Give specific, timely feedback at each phase.</li>
</ul>

<h2>What matters: a realistic timeline, met</h2>
<p>Be wary of anyone promising a complex website «in 3 days». We agree a realistic timeline at the start and meet it. Have a date in mind? Tell us and we’ll say if it’s feasible, no commitment.</p>
`,
    },
    {
      slug: 'pagina-web-o-redes-sociales-para-tu-negocio',
      date: '2026-04-02',
      readingMin: 5,
      category: 'Business',
      title: 'Website or social media: what does your business need?',
      excerpt:
        'Website or Instagram? They don’t compete, they complement each other, but there’s a key difference. We explain where to start and why.',
      body: `
<p>«Why do I need a website if I already have Instagram?» It’s a very common question among freelancers and small businesses. The short answer: they don’t compete, they complement each other. But there’s a key difference worth understanding.</p>

<h2>Social media is rented; your website is yours</h2>
<p>On Instagram or Facebook you build on borrowed land: the rules, the reach and even your account depend on the platform. If tomorrow they change the algorithm or block your account, you lose everything. Your <strong>website is 100% yours</strong>: nobody can take it away.</p>

<h2>People find you in different ways</h2>
<p>People go to social media to be entertained. They go to Google <strong>looking for something specific</strong> («plumber in Xàtiva», «restaurant for a celebration»). That buying intent is gold, and you only capture it with a well-ranked website.</p>

<h2>A website builds professional trust</h2>
<p>A business with its own website looks serious. Many customers, before hiring, look for your website to learn more. If there isn’t one, they hesitate. Social shows your day-to-day; the website closes the sale.</p>

<h2>The ideal: working together</h2>
<p>The winning strategy is to use social to attract and show personality, and bring those people to your website, where you explain what you offer and get them to contact you. One feeds the other.</p>

<h2>So, what do I prioritize?</h2>
<p>If you can only start with one thing, start with the <strong>website</strong>: it’s the foundation, it’s yours and it works for you 24/7 on Google. Social amplifies, but doesn’t replace it. Shall we talk about yours?</p>
`,
    },
    {
      slug: 'como-conseguir-resenas-de-google',
      date: '2026-03-20',
      readingMin: 4,
      category: 'Local SEO',
      title: 'How to get Google reviews for your business',
      excerpt:
        'Reviews convince your customers and improve your local ranking. We explain how to get more, honestly and simply.',
      body: `
<p>Google reviews are one of the biggest factors in whether a customer chooses you over the competition, and in whether Google shows you at the top of local searches. The good news: getting them is easier than it seems.</p>

<h2>Why they matter so much</h2>
<p>They do two things at once: they <strong>convince the customer</strong> (people trust others’ opinions) and they <strong>improve your local ranking</strong> (Google reads lots of good reviews as a sign of a trustworthy business). More reviews = more clients and more visibility.</p>

<h2>The key: ask for them (yes, that simple)</h2>
<p>Most happy customers don’t leave a review because nobody asks. The trick is to <strong>ask at the right moment</strong>: right after a good service, when the customer is satisfied. A WhatsApp message with the direct link works very well.</p>

<h2>Make it easy</h2>
<p>The less effort, the more reviews. Share the <strong>direct link</strong> to your profile (Google gives it to you) so they only have to add the stars and a couple of words. If they have to search for you, most won’t.</p>

<h2>Reply to all of them</h2>
<p>Thank the good ones and reply politely to the negative ones (without arguing, offering a solution). Google values businesses that respond, and it shows future customers that you care.</p>

<h2>What NOT to do</h2>
<p>Never buy fake reviews or incentivize them with gifts: Google detects and penalizes it, and it shows. Better few and real than many and suspicious. Want us to help you set up a system to ask for them? We’ll get it ready for you.</p>
`,
    },
  ],
};

export const getBlogPosts = (lang: Lang): BlogPost[] =>
  [...posts[lang]].sort((a, b) => (a.date < b.date ? 1 : -1));

export const getBlogPost = (lang: Lang, slug: string): BlogPost | undefined =>
  posts[lang].find((p) => p.slug === slug);

/** Slugs únicos (compartidos entre idiomas) para generar rutas estáticas. */
export const getBlogSlugs = (): string[] => posts.es.map((p) => p.slug);
