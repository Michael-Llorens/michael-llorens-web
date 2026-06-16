import type { Lang } from './config';

/**
 * Diccionario de textos de la interfaz en los 3 idiomas.
 * Edita aquí cualquier texto: está todo centralizado.
 */
export const ui = {
  es: {
    // --- Metadatos / SEO ---
    'meta.title': 'Diseño web y SEO en Xàtiva y Valencia | MetaLogic',
    'meta.description':
      'Diseño web y SEO en Xàtiva y Valencia. Creamos webs rápidas y optimizadas para Google que captan clientes y hacen crecer tu negocio. Presupuesto gratis.',

    // --- Navegación ---
    'nav.services': 'Servicios',
    'nav.work': 'Proyectos',
    'nav.process': 'Proceso',
    'nav.about': 'Nosotros',
    'nav.pricing': 'Precios',
    'nav.faq': 'Preguntas',
    'nav.contact': 'Contacto',
    'nav.home': 'Inicio',
    'nav.resources': 'Recursos',
    'nav.cta': 'Pide presupuesto',

    // --- Blog / Recursos ---
    'blog.kicker': 'Recursos',
    'blog.title': 'Aprende a sacarle partido a tu web',
    'blog.subtitle':
      'Guías claras sobre webs, SEO y captación de clientes para autónomos y pymes. Sin tecnicismos.',
    'blog.readingMin': 'min de lectura',
    'blog.backToList': '← Volver a Recursos',
    'blog.cta.title': '¿Hablamos de tu proyecto?',
    'blog.cta.text': 'Te hacemos un diagnóstico y presupuesto gratis, sin compromiso.',

    // --- Sectores ---
    'sectors.kicker': 'Sectores',
    'sectors.title': 'Webs pensadas para tu sector',
    'sectors.subtitle':
      'Cada sector tiene necesidades distintas. Diseñamos tu web pensando en las del tuyo.',
    'sectors.painTitle': 'Lo que suele fallar',
    'sectors.solutionTitle': 'Cómo lo resolvemos',
    'sectors.includesTitle': 'Qué incluye tu web',
    'sectors.cta': 'Quiero una web para mi negocio',
    'sectors.all': 'Ver todos los sectores',

    // --- Clientes ---
    'clients.title': 'Negocios que ya confían en MetaLogic',

    // --- Hero ---
    'hero.badge': 'Disponible para nuevos proyectos',
    'hero.title.1': 'Diseño web que',
    'hero.title.2': 'posiciona',
    'hero.title.3': 'y convierte',
    'hero.subtitle':
      'En MetaLogic diseñamos y desarrollamos webs rápidas, modernas y optimizadas para aparecer en Google y convertir visitas en clientes.',
    'hero.cta.primary': 'Empezar mi proyecto',
    'hero.cta.secondary': 'Ver proyectos',
    'hero.trust': 'Webs a medida · Rendimiento 100/100 · SEO desde el primer día',
    'hero.guarantee': 'Presupuesto sin compromiso · Sin permanencias · Hablamos antes de empezar',

    // --- Stats ---
    'stats.projects.value': '5+',
    'stats.projects.label': 'Proyectos reales entregados',
    'stats.performance.value': '100',
    'stats.performance.label': 'Objetivo en PageSpeed',
    'stats.languages.value': '3',
    'stats.languages.label': 'Idiomas de desarrollo web',
    'stats.response.value': '24 h',
    'stats.response.label': 'Tiempo de respuesta',

    // --- Servicios ---
    'services.kicker': 'Qué hacemos por ti',
    'services.title': 'Servicios de diseño web y SEO',
    'services.subtitle':
      'Todo lo que tu negocio necesita para tener una presencia online profesional y rentable.',

    // --- Proyectos ---
    'work.kicker': 'Portfolio',
    'work.title': 'Proyectos reales, resultados reales',
    'work.subtitle':
      'Una selección de webs que hemos diseñado y desarrollado para negocios reales.',
    'work.visit': 'Visitar web',
    'work.result': 'Resultado',
    'work.cta': '¿Quieres ser el siguiente proyecto?',
    'work.viewAll': 'Ver todos los proyectos',
    'work.prev': 'Proyecto anterior',
    'work.next': 'Proyecto siguiente',
    'work.goto': 'Ir al proyecto',

    // --- Precios ---
    'pricing.kicker': 'Precios',
    'pricing.title': 'Planes claros, sin sorpresas',
    'pricing.subtitle':
      'Elige el alcance que encaja con tu negocio. Cada proyecto es único: te pasamos un presupuesto a medida sin compromiso.',
    'pricing.note': '¿Tu proyecto no encaja en ningún plan? Cuéntanoslo y te preparamos una propuesta totalmente a medida.',
    'pricing.includes.title': 'Incluido en todos los planes',
    'pricing.includes.subtitle': 'La base de calidad que llevan todos nuestros proyectos, sin coste extra.',
    'pricing.details.title': 'Cómo trabajamos',
    'pricing.details.subtitle': 'Todo claro desde el principio: plazos, pagos y qué pasa tras el lanzamiento.',
    'pricing.popular': 'Más popular',

    // --- Comparativa ---
    'guarantees.kicker': 'Garantías',
    'guarantees.title': 'Nuestros compromisos contigo',
    'compare.kicker': 'Por qué MetaLogic',
    'compare.title': 'MetaLogic, plantilla o gran agencia',
    'compare.subtitle': 'Lo que ganas trabajando con MetaLogic frente a las alternativas.',
    'compare.feature': 'Qué comparamos',

    // --- Prueba de rendimiento ---
    'proof.title': 'Esta misma web es nuestra mejor carta de presentación',
    'proof.subtitle': 'Aplicamos en nuestra propia web lo que vendemos. Estos son sus resultados reales:',
    'proof.seo': 'SEO',
    'proof.best': 'Buenas prácticas',
    'proof.a11y': 'Accesibilidad',
    'proof.perf': 'Rendimiento',

    // --- Backend & APIs ---
    'backend.kicker': 'Más que webs',
    'backend.title': 'Backend, APIs y software a medida',
    'backend.subtitle':
      'No solo diseñamos webs bonitas: programamos la lógica que hace funcionar tu negocio por dentro, de los pedidos a los pagos. Somos full-stack.',
    'backend.proof': 'Lo aplicamos en El Buey Madurado: desarrollamos la gestión completa de pedidos, reservas y acceso seguro.',
    'backend.cta': 'Cuéntanos qué necesitas',

    // --- Proceso ---
    'process.kicker': 'Cómo trabajamos',
    'process.title': 'Un proceso claro, sin sorpresas',
    'process.subtitle':
      'Desde la primera idea hasta el lanzamiento y el crecimiento, sabes en todo momento qué pasa.',

    // --- Sobre mí ---
    'about.kicker': 'La empresa',
    'about.title': 'Esto es MetaLogic',
    'about.p1':
      'En MetaLogic somos un estudio de desarrollo web y SEO. Creamos webs y aplicaciones que no solo se ven increíbles, sino que están construidas con código limpio para ser rápidas, accesibles y posicionar en Google.',
    'about.p2':
      'Trabajamos con tecnología moderna como Astro para entregar webs ultrarrápidas y optimizadas al milímetro. Tratamos cada proyecto como si fuera nuestro: atención al detalle, comunicación cercana y un único objetivo, que tu negocio consiga más clientes.',
    'about.cta': 'Hablemos de tu proyecto',
    'about.skills.title': 'Tecnologías y herramientas',

    // --- Testimonios ---
    'testimonials.kicker': 'Confianza',
    'testimonials.title': 'Lo que dicen los clientes',
    'testimonials.subtitle':
      'La mejor publicidad es el trabajo bien hecho y un cliente contento.',

    // --- FAQ ---
    'faq.kicker': 'Preguntas frecuentes',
    'faq.title': 'Resuelve tus dudas',
    'faq.subtitle': '¿No encuentras tu respuesta? Escríbenos y te ayudamos encantados.',

    // --- Contacto ---
    'contact.kicker': 'Hablemos',
    'contact.title': 'Cuéntanos tu proyecto',
    'contact.subtitle':
      'Cuéntanos qué necesitas y te responderemos con una propuesta a medida. Sin compromiso.',
    'contact.form.name': 'Nombre',
    'contact.form.email': 'Email',
    'contact.form.message': 'Cuéntanos sobre tu proyecto',
    'contact.form.send': 'Enviar mensaje',
    'contact.form.namePlaceholder': 'Tu nombre',
    'contact.form.emailPlaceholder': 'tu@email.com',
    'contact.form.messagePlaceholder': '¿Qué tipo de web necesitas? ¿Tienes algún plazo o referencia?',
    'contact.book': 'Reserva una llamada gratis',
    'contact.book.sub': '15 minutos por videollamada, sin compromiso',
    'contact.direct': 'También puedes contactarnos',
    'contact.email.label': 'Email',
    'contact.phone.label': 'Teléfono',
    'contact.location.label': 'Ubicación',
    'contact.location.value': 'Xàtiva, Valencia · Trabajo en remoto',

    // --- Footer ---
    'footer.tagline': 'Desarrollo web y SEO para negocios que quieren crecer.',
    'footer.nav': 'Navegación',
    'footer.services': 'Servicios',
    'footer.contact': 'Contacto',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.madeWith': 'Diseñado y desarrollado por MetaLogic.',
    'legal.notice': 'Aviso legal',
    'legal.privacy': 'Privacidad',
    'legal.cookies': 'Cookies',
    'legal.back': 'Volver al inicio',
    'legal.updated': 'Última actualización',

    // --- Genéricos ---
    'cta.final.title': '¿Listo para tener la web que tu negocio merece?',
    'cta.final.subtitle':
      'Hablemos hoy y empieza a captar más clientes con una web rápida y bien posicionada.',
    'cta.final.button': 'Pide tu presupuesto gratis',
  },

  va: {
    'meta.title': 'Disseny web i SEO a Xàtiva i València | MetaLogic',
    'meta.description':
      'Disseny web i SEO a Xàtiva i València. Creem webs ràpides i optimitzades per a Google que capten clients i fan créixer el teu negoci. Pressupost gratis.',

    'nav.services': 'Serveis',
    'nav.work': 'Projectes',
    'nav.process': 'Procés',
    'nav.about': 'Nosaltres',
    'nav.pricing': 'Preus',
    'nav.faq': 'Preguntes',
    'nav.contact': 'Contacte',
    'nav.home': 'Inici',
    'nav.resources': 'Recursos',
    'nav.cta': 'Demana pressupost',

    // --- Blog / Recursos ---
    'blog.kicker': 'Recursos',
    'blog.title': 'Aprèn a traure-li partit a la teua web',
    'blog.subtitle':
      'Guies clares sobre webs, SEO i captació de clients per a autònoms i pimes. Sense tecnicismes.',
    'blog.readingMin': 'min de lectura',
    'blog.backToList': '← Tornar a Recursos',
    'blog.cta.title': 'Parlem del teu projecte?',
    'blog.cta.text': 'Et fem un diagnòstic i pressupost gratis, sense compromís.',

    // --- Sectors ---
    'sectors.kicker': 'Sectors',
    'sectors.title': 'Webs pensades per al teu sector',
    'sectors.subtitle':
      'Cada sector té necessitats distintes. Dissenyem la teua web pensant en les del teu.',
    'sectors.painTitle': 'El que sol fallar',
    'sectors.solutionTitle': 'Com ho resolem',
    'sectors.includesTitle': 'Què inclou la teua web',
    'sectors.cta': 'Vull una web per al meu negoci',
    'sectors.all': 'Veure tots els sectors',

    // --- Clients ---
    'clients.title': 'Negocis que ja confien en MetaLogic',

    'hero.badge': 'Disponible per a nous projectes',
    'hero.title.1': 'Disseny web que',
    'hero.title.2': 'posiciona',
    'hero.title.3': 'i converteix',
    'hero.subtitle':
      'En MetaLogic dissenyem i desenvolupem webs ràpides, modernes i optimitzades per a aparéixer en Google i convertir visites en clients. El teu soci de confiança en disseny web i SEO a Xàtiva i València.',
    'hero.cta.primary': 'Començar el meu projecte',
    'hero.cta.secondary': 'Veure projectes',
    'hero.trust': 'Webs a mida · Rendiment 100/100 · SEO des del primer dia',
    'hero.guarantee': 'Pressupost sense compromís · Sense permanències · Parlem abans de començar',

    'stats.projects.value': '5+',
    'stats.projects.label': 'Projectes reals entregats',
    'stats.performance.value': '100',
    'stats.performance.label': 'Objectiu en PageSpeed',
    'stats.languages.value': '3',
    'stats.languages.label': 'Idiomes de desenvolupament web',
    'stats.response.value': '24 h',
    'stats.response.label': 'Temps de resposta',

    'services.kicker': 'Què fem per tu',
    'services.title': 'Serveis de disseny web i SEO',
    'services.subtitle':
      'Tot el que el teu negoci necessita per a tindre una presència online professional i rendible.',

    'work.kicker': 'Portfolio',
    'work.title': 'Projectes reals, resultats reals',
    'work.subtitle':
      'Una selecció de webs que hem dissenyat i desenvolupat per a negocis reals.',
    'work.visit': 'Visitar web',
    'work.result': 'Resultat',
    'work.cta': 'Vols ser el pròxim projecte?',
    'work.viewAll': 'Veure tots els projectes',
    'work.prev': 'Projecte anterior',
    'work.next': 'Projecte següent',
    'work.goto': 'Anar al projecte',

    'pricing.kicker': 'Preus',
    'pricing.title': 'Plans clars, sense sorpreses',
    'pricing.subtitle':
      'Tria l’abast que encaixa amb el teu negoci. Cada projecte és únic: et passem un pressupost a mida sense compromís.',
    'pricing.note': 'El teu projecte no encaixa en cap pla? Conta-nos-ho i et preparem una proposta totalment a mida.',
    'pricing.includes.title': 'Inclòs en tots els plans',
    'pricing.includes.subtitle': 'La base de qualitat que porten tots els nostres projectes, sense cost extra.',
    'pricing.details.title': 'Com treballem',
    'pricing.details.subtitle': 'Tot clar des del principi: terminis, pagaments i què passa després del llançament.',
    'pricing.popular': 'Més popular',

    'guarantees.kicker': 'Garanties',
    'guarantees.title': 'Els nostres compromisos amb tu',
    'compare.kicker': 'Per què MetaLogic',
    'compare.title': 'MetaLogic, plantilla o gran agència',
    'compare.subtitle': 'El que guanyes treballant amb MetaLogic enfront de les alternatives.',
    'compare.feature': 'Què comparem',

    'proof.title': 'Aquesta mateixa web és la nostra millor carta de presentació',
    'proof.subtitle': 'Apliquem en la nostra pròpia web el que venem. Estos són els seus resultats reals:',
    'proof.seo': 'SEO',
    'proof.best': 'Bones pràctiques',
    'proof.a11y': 'Accessibilitat',
    'proof.perf': 'Rendiment',

    'backend.kicker': 'Més que webs',
    'backend.title': 'Backend, APIs i programari a mida',
    'backend.subtitle':
      'No només dissenyem webs boniques: programem la lògica que fa funcionar el teu negoci per dins, de les comandes als pagaments. Som full-stack.',
    'backend.proof': 'Ho vam aplicar en El Buey Madurado: vam desenvolupar la gestió completa de comandes, reserves i accés segur.',
    'backend.cta': 'Conta’ns què necessites',

    'process.kicker': 'Com treballem',
    'process.title': 'Un procés clar, sense sorpreses',
    'process.subtitle':
      'Des de la primera idea fins al llançament i el creixement, saps en tot moment què passa.',

    'about.kicker': 'L’empresa',
    'about.title': 'Açò és MetaLogic',
    'about.p1':
      'En MetaLogic som un estudi de desenvolupament web i SEO. Creem webs i aplicacions que no només es veuen increïbles, sinó que estan construïdes amb codi net per a ser ràpides, accessibles i posicionar en Google.',
    'about.p2':
      'Treballem amb tecnologia moderna com Astro per a entregar webs ultraràpides i optimitzades al mil·límetre. Tractem cada projecte com si fora nostre: atenció al detall, comunicació pròxima i un únic objectiu, que el teu negoci aconseguisca més clients.',
    'about.cta': 'Parlem del teu projecte',
    'about.skills.title': 'Tecnologies i ferramentes',

    'testimonials.kicker': 'Confiança',
    'testimonials.title': 'El que diuen els clients',
    'testimonials.subtitle':
      'La millor publicitat és el treball ben fet i un client content.',

    'faq.kicker': 'Preguntes freqüents',
    'faq.title': 'Resol els teus dubtes',
    'faq.subtitle': 'No trobes la teua resposta? Escriu-nos i t’ajudem encantats.',

    'contact.kicker': 'Parlem',
    'contact.title': 'Conta’ns el teu projecte',
    'contact.subtitle':
      'Conta’ns què necessites i et respondrem amb una proposta a mida. Sense compromís.',
    'contact.form.name': 'Nom',
    'contact.form.email': 'Email',
    'contact.form.message': 'Conta’ns sobre el teu projecte',
    'contact.form.send': 'Enviar missatge',
    'contact.form.namePlaceholder': 'El teu nom',
    'contact.form.emailPlaceholder': 'tu@email.com',
    'contact.form.messagePlaceholder': 'Quin tipus de web necessites? Tens algun termini o referència?',
    'contact.book': 'Reserva una trucada gratis',
    'contact.book.sub': '15 minuts per videotrucada, sense compromís',
    'contact.direct': 'També pots contactar amb nosaltres',
    'contact.email.label': 'Email',
    'contact.phone.label': 'Telèfon',
    'contact.location.label': 'Ubicació',
    'contact.location.value': 'Xàtiva, València · Treballe en remot',

    'footer.tagline': 'Desenvolupament web i SEO per a negocis que volen créixer.',
    'footer.nav': 'Navegació',
    'footer.services': 'Serveis',
    'footer.contact': 'Contacte',
    'footer.rights': 'Tots els drets reservats.',
    'footer.madeWith': 'Dissenyat i desenvolupat per MetaLogic.',
    'legal.notice': 'Avís legal',
    'legal.privacy': 'Privacitat',
    'legal.cookies': 'Cookies',
    'legal.back': 'Tornar a l’inici',
    'legal.updated': 'Última actualització',

    'cta.final.title': 'Preparat per a tindre la web que el teu negoci mereix?',
    'cta.final.subtitle':
      'Parlem hui i comença a captar més clients amb una web ràpida i ben posicionada.',
    'cta.final.button': 'Demana el teu pressupost gratis',
  },

  en: {
    'meta.title': 'Web design & SEO in Xàtiva and Valencia | MetaLogic',
    'meta.description':
      'Web design and SEO in Xàtiva and Valencia. We build fast, Google-optimized websites that capture clients and grow your business. Free quote.',

    'nav.services': 'Services',
    'nav.work': 'Work',
    'nav.process': 'Process',
    'nav.about': 'About us',
    'nav.pricing': 'Pricing',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.home': 'Home',
    'nav.resources': 'Resources',
    'nav.cta': 'Get a quote',

    // --- Blog / Resources ---
    'blog.kicker': 'Resources',
    'blog.title': 'Learn how to get the most out of your website',
    'blog.subtitle':
      'Clear guides on websites, SEO and winning clients for freelancers and small businesses. No jargon.',
    'blog.readingMin': 'min read',
    'blog.backToList': '← Back to Resources',
    'blog.cta.title': 'Shall we talk about your project?',
    'blog.cta.text': 'We’ll give you a free diagnosis and quote, no strings attached.',

    // --- Sectors ---
    'sectors.kicker': 'Sectors',
    'sectors.title': 'Websites built for your sector',
    'sectors.subtitle':
      'Every sector has different needs. We design your website around yours.',
    'sectors.painTitle': 'What usually goes wrong',
    'sectors.solutionTitle': 'How we solve it',
    'sectors.includesTitle': 'What your website includes',
    'sectors.cta': 'I want a website for my business',
    'sectors.all': 'See all sectors',

    // --- Clients ---
    'clients.title': 'Businesses that already trust MetaLogic',

    'hero.badge': 'Available for new projects',
    'hero.title.1': 'Web design that',
    'hero.title.2': 'ranks',
    'hero.title.3': 'and converts',
    'hero.subtitle':
      'At MetaLogic we design and build fast, modern websites engineered to rank on Google and turn visitors into customers. Your trusted partner in web design and SEO in Xàtiva and Valencia.',
    'hero.cta.primary': 'Start my project',
    'hero.cta.secondary': 'View work',
    'hero.trust': 'Custom-built · 100/100 performance · SEO from day one',
    'hero.guarantee': 'Free quote · No lock-in contracts · We talk before starting',

    'stats.projects.value': '5+',
    'stats.projects.label': 'Real projects delivered',
    'stats.performance.value': '100',
    'stats.performance.label': 'PageSpeed target',
    'stats.languages.value': '3',
    'stats.languages.label': 'Web languages',
    'stats.response.value': '24 h',
    'stats.response.label': 'Response time',

    'services.kicker': 'What we do for you',
    'services.title': 'Web design & SEO services',
    'services.subtitle':
      'Everything your business needs for a professional, profitable online presence.',

    'work.kicker': 'Portfolio',
    'work.title': 'Real projects, real results',
    'work.subtitle':
      'A selection of websites we’ve designed and developed for real businesses.',
    'work.visit': 'Visit site',
    'work.result': 'Result',
    'work.cta': 'Want to be the next project?',
    'work.viewAll': 'View all projects',
    'work.prev': 'Previous project',
    'work.next': 'Next project',
    'work.goto': 'Go to project',

    'pricing.kicker': 'Pricing',
    'pricing.title': 'Clear plans, no surprises',
    'pricing.subtitle':
      'Choose the scope that fits your business. Every project is unique: we’ll send you a tailored quote with no commitment.',
    'pricing.note': 'Your project doesn’t fit any plan? Tell us about it and we’ll prepare a fully tailored proposal.',
    'pricing.includes.title': 'Included in every plan',
    'pricing.includes.subtitle': 'The quality baseline every project ships with, at no extra cost.',
    'pricing.details.title': 'How we work',
    'pricing.details.subtitle': 'Clear from the start: timelines, payments and what happens after launch.',
    'pricing.popular': 'Most popular',

    'guarantees.kicker': 'Guarantees',
    'guarantees.title': 'Our commitments to you',
    'compare.kicker': 'Why MetaLogic',
    'compare.title': 'MetaLogic, template or big agency',
    'compare.subtitle': 'What you gain working with MetaLogic versus the alternatives.',
    'compare.feature': 'What we compare',

    'proof.title': 'This very website is our best business card',
    'proof.subtitle': 'We apply on our own site what we sell. These are its real results:',
    'proof.seo': 'SEO',
    'proof.best': 'Best practices',
    'proof.a11y': 'Accessibility',
    'proof.perf': 'Performance',

    'backend.kicker': 'Beyond websites',
    'backend.title': 'Backend, APIs & custom software',
    'backend.subtitle':
      'We don’t just design pretty websites: we build the logic that runs your business under the hood, from orders to payments. We’re full-stack.',
    'backend.proof': 'We applied it at El Buey Madurado: we built the full order management, reservations and secure access.',
    'backend.cta': 'Tell us what you need',

    'process.kicker': 'How we work',
    'process.title': 'A clear process, no surprises',
    'process.subtitle':
      'From the first idea to launch and growth, you always know what’s happening.',

    'about.kicker': 'The company',
    'about.title': 'This is MetaLogic',
    'about.p1':
      'MetaLogic is a web development and SEO studio. We build websites and apps that not only look incredible, but are written with clean code to be fast, accessible and to rank on Google.',
    'about.p2':
      'We work with modern technology like Astro to deliver ultra-fast, finely optimized websites. We treat every project as if it were our own: attention to detail, close communication, and one goal — getting your business more clients.',
    'about.cta': 'Let’s talk about your project',
    'about.skills.title': 'Technologies & tools',

    'testimonials.kicker': 'Trust',
    'testimonials.title': 'What clients say',
    'testimonials.subtitle':
      'The best advertising is great work and a happy client.',

    'faq.kicker': 'FAQ',
    'faq.title': 'Frequently asked questions',
    'faq.subtitle': 'Can’t find your answer? Drop us a line and we’ll be glad to help.',

    'contact.kicker': 'Let’s talk',
    'contact.title': 'Tell us about your project',
    'contact.subtitle':
      'Tell us what you need and we’ll reply with a tailored proposal. No commitment.',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Tell us about your project',
    'contact.form.send': 'Send message',
    'contact.form.namePlaceholder': 'Your name',
    'contact.form.emailPlaceholder': 'you@email.com',
    'contact.form.messagePlaceholder': 'What kind of website do you need? Any deadline or reference?',
    'contact.book': 'Book a free call',
    'contact.book.sub': '15 minutes by video call, no commitment',
    'contact.direct': 'Or contact us directly',
    'contact.email.label': 'Email',
    'contact.phone.label': 'Phone',
    'contact.location.label': 'Location',
    'contact.location.value': 'Xàtiva, Spain · Working remotely',

    'footer.tagline': 'Web development & SEO for businesses that want to grow.',
    'footer.nav': 'Navigation',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
    'footer.madeWith': 'Designed & built by MetaLogic.',
    'legal.notice': 'Legal notice',
    'legal.privacy': 'Privacy',
    'legal.cookies': 'Cookies',
    'legal.back': 'Back to home',
    'legal.updated': 'Last updated',

    'cta.final.title': 'Ready for the website your business deserves?',
    'cta.final.subtitle':
      'Let’s talk today and start capturing more clients with a fast, well-ranked website.',
    'cta.final.button': 'Get your free quote',
  },
} as const;

export type UIKey = keyof (typeof ui)['es'];

/** Devuelve una función traductora para el idioma dado. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return (ui[lang] as Record<string, string>)[key] ?? (ui.es as Record<string, string>)[key] ?? key;
  };
}
