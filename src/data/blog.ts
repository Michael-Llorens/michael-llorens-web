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
  ],
};

export const getBlogPosts = (lang: Lang): BlogPost[] =>
  [...posts[lang]].sort((a, b) => (a.date < b.date ? 1 : -1));

export const getBlogPost = (lang: Lang, slug: string): BlogPost | undefined =>
  posts[lang].find((p) => p.slug === slug);

/** Slugs únicos (compartidos entre idiomas) para generar rutas estáticas. */
export const getBlogSlugs = (): string[] => posts.es.map((p) => p.slug);
