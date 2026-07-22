import type { Lang } from '../i18n/config';

/* ──────────────────────────────────────────────────────────────────────────
   CONTENIDO DEL SITIO
   Todo el contenido editable (servicios, proyectos, proceso, FAQ...) vive aquí,
   traducido a los 3 idiomas. Edita los textos con total libertad.
   ────────────────────────────────────────────────────────────────────────── */

type Localized<T> = Record<Lang, T>;

/* ───────────────── SERVICIOS (3 pilares) ─────────────────
   Antes eran 6 tarjetas sueltas (una por servicio). Se agrupan en 3
   bloques con sentido de negocio: cómo se construye la web, cómo se
   encuentra, y el diferenciador de IA. Cada pilar lleva unas etiquetas
   cortas para no perder el detalle de qué incluye. */
export interface Pillar {
  icon: string; // nombre del icono (ver Icon.astro)
  // Ancla estable (no traducida) para enlazar desde el footer:
  // /servicios#<slug>.
  slug: string;
  title: string;
  description: string;
  tags: string[];
  // Etiqueta corta opcional (solo la lleva el pilar de IA/GEO).
  badge?: string;
}

const pillars: Localized<Pillar[]> = {
  es: [
    {
      icon: 'code',
      slug: 'desarrollo-web',
      title: 'Una web a medida',
      tags: ['Desarrollo a medida', 'Diseño UX/UI', 'Rendimiento 100/100'],
      description:
        'Diseño, programo y optimizo tu web a medida — sin plantillas ni relleno, pensada para que cada pantalla lleve a una acción.',
    },
    {
      icon: 'search',
      slug: 'seo',
      title: 'Que te encuentren',
      tags: ['SEO técnico', 'SEO local', 'Google Business'],
      description:
        'Trabajo el SEO técnico, de contenidos y local para que aparezcas en Google justo cuando alguien busca lo que ofreces — en tu ciudad y en tu sector.',
    },
    {
      icon: 'spark',
      slug: 'geo-ia',
      title: 'El futuro de las búsquedas',
      badge: 'Ventaja competitiva',
      tags: ['ChatGPT', 'Gemini', 'Google IA'],
      description:
        'Preparo tu web para que ChatGPT, Gemini y las respuestas con IA de Google te recomienden cuando alguien pregunta por tu servicio. Casi nadie lo hace bien todavía: es ventaja mientras dure.',
    },
  ],
  va: [
    {
      icon: 'code',
      slug: 'desarrollo-web',
      title: 'Una web a mida',
      tags: ['Desenvolupament a mida', 'Disseny UX/UI', 'Rendiment 100/100'],
      description:
        'Dissenye, programe i optimitze la teua web a mida — sense plantilles ni farciment, pensada perquè cada pantalla porte a una acció.',
    },
    {
      icon: 'search',
      slug: 'seo',
      title: 'Que et troben',
      tags: ['SEO tècnic', 'SEO local', 'Google Business'],
      description:
        'Treballe el SEO tècnic, de continguts i local perquè aparegues en Google justament quan algú busca el que ofereixes — en la teua ciutat i en el teu sector.',
    },
    {
      icon: 'spark',
      slug: 'geo-ia',
      title: 'El futur de les cerques',
      badge: 'Avantatge competitiu',
      tags: ['ChatGPT', 'Gemini', 'Google IA'],
      description:
        'Preparo la teua web perquè ChatGPT, Gemini i les respostes amb IA de Google et recomanen quan algú pregunta pel teu servei. Quasi ningú ho fa bé encara: és avantatge mentre dure.',
    },
  ],
  en: [
    {
      icon: 'code',
      slug: 'desarrollo-web',
      title: 'A website built for you',
      tags: ['Custom development', 'UX/UI design', '100/100 performance'],
      description:
        'I design, build and optimize your website from scratch — no templates, no filler, every screen built to drive one action.',
    },
    {
      icon: 'search',
      slug: 'seo',
      title: 'Get found',
      tags: ['Technical SEO', 'Local SEO', 'Google Business'],
      description:
        'I handle technical, content and local SEO so you show up on Google exactly when someone searches for what you offer — in your city and your niche.',
    },
    {
      icon: 'spark',
      slug: 'geo-ia',
      title: 'The future of search',
      badge: 'Competitive edge',
      tags: ['ChatGPT', 'Gemini', 'Google AI'],
      description:
        'I prepare your website so ChatGPT, Gemini and Google’s AI answers recommend you when someone asks about your service. Almost nobody does this well yet: it’s an edge while it lasts.',
    },
  ],
};

export const getPillars = (lang: Lang) => pillars[lang];

/* ───────────────── EXTRAS (funciones que se pueden sumar a la web) ─────────────────
   Sección de home "Tu web puede crecer con tu negocio": NO es un catálogo de
   software a medida, son piezas concretas y frecuentes en pymes/negocios
   locales. Deliberadamente fuera: PDAs de restaurante, marketplaces, ERPs —
   si un proyecto los necesita, se habla aparte (ver extras.note), no se
   promocionan aquí como oferta principal. */
const extras: Localized<Service[]> = {
  es: [
    {
      icon: 'calendar',
      title: 'Reservas y citas online',
      description:
        'Que tus clientes reserven mesa, cita o servicio sin llamarte. Tú solo confirmas y organizas tu agenda desde un único sitio.',
    },
    {
      icon: 'cart',
      title: 'Pedidos, carta y tienda online',
      description:
        'Carta digital, pedidos para recoger o entregar, o una tienda sencilla para un catálogo concreto de productos — sin la complejidad de un ecommerce gigante.',
    },
    {
      icon: 'mail',
      title: 'Formularios inteligentes y captación de leads',
      description:
        'Formularios con los campos justos que filtran quién te interesa de verdad. Cada contacto te llega ordenado y listo para responder.',
    },
    {
      icon: 'whatsapp',
      title: 'Automatizaciones con WhatsApp',
      description:
        'Confirmaciones de reserva, recordatorios de cita o avisos de pedido, automáticos y por el canal donde tus clientes ya te escriben.',
    },
    {
      icon: 'lock',
      title: 'Áreas privadas y paneles de gestión',
      description:
        'Una zona con acceso solo para tus clientes o tu equipo, y un panel sencillo para ver reservas, pedidos o mensajes sin depender de hojas de cálculo.',
    },
    {
      icon: 'globe',
      title: 'Reseñas, multiidioma y analítica',
      description:
        'Pido reseñas de forma automática después de cada servicio, preparo tu web en varios idiomas si tienes clientes fuera de tu zona, y dejo medido lo importante para saber qué funciona de verdad.',
    },
  ],
  va: [
    {
      icon: 'calendar',
      title: 'Reserves i cites en línia',
      description:
        'Que els teus clients reserven taula, cita o servei sense telefonar-te. Tu només confirmes i organitzes la teua agenda des d’un únic lloc.',
    },
    {
      icon: 'cart',
      title: 'Comandes, carta i botiga en línia',
      description:
        'Carta digital, comandes per a recollir o repartir, o una botiga senzilla per a un catàleg concret de productes — sense la complexitat d’un ecommerce gegant.',
    },
    {
      icon: 'mail',
      title: 'Formularis intel·ligents i captació de leads',
      description:
        'Formularis amb els camps justos que filtren qui t’interessa de veres. Cada contacte t’arriba ordenat i preparat per a respondre.',
    },
    {
      icon: 'whatsapp',
      title: 'Automatitzacions amb WhatsApp',
      description:
        'Confirmacions de reserva, recordatoris de cita o avisos de comanda, automàtics i pel canal on els teus clients ja et parlen.',
    },
    {
      icon: 'lock',
      title: 'Àrees privades i panells de gestió',
      description:
        'Una zona amb accés només per als teus clients o el teu equip, i un panell senzill per a veure reserves, comandes o missatges sense dependre de fulls de càlcul.',
    },
    {
      icon: 'globe',
      title: 'Ressenyes, multiidioma i analítica',
      description:
        'Demane ressenyes de manera automàtica després de cada servei, preparo la teua web en diversos idiomes si tens clients fora de la teua zona, i deixe mesurat el que importa per a saber què funciona de veres.',
    },
  ],
  en: [
    {
      icon: 'calendar',
      title: 'Online bookings and appointments',
      description:
        'Let clients book a table, appointment or service without calling you. You just confirm and manage your schedule from one place.',
    },
    {
      icon: 'cart',
      title: 'Orders, menus and simple online stores',
      description:
        'A digital menu, pickup or delivery orders, or a simple store for a focused product catalog — without the complexity of a huge e-commerce platform.',
    },
    {
      icon: 'mail',
      title: 'Smart forms and lead capture',
      description:
        'Forms with just the right fields that filter who’s genuinely interested. Every contact reaches you organized and ready to answer.',
    },
    {
      icon: 'whatsapp',
      title: 'WhatsApp automations',
      description:
        'Booking confirmations, appointment reminders or order alerts, automatic and through the channel your clients already message you on.',
    },
    {
      icon: 'lock',
      title: 'Private areas and management dashboards',
      description:
        'A members-only area for your clients or team, and a simple dashboard to see bookings, orders or messages without relying on spreadsheets.',
    },
    {
      icon: 'globe',
      title: 'Reviews, multilingual sites and analytics',
      description:
        'I request reviews automatically after each service, prepare your website in several languages if you have clients outside your area, and set up the tracking that matters so you know what’s actually working.',
    },
  ],
};

export const getExtras = (lang: Lang) => extras[lang];

/* ───────────────── BACKEND & APIs ─────────────────
   Lenguaje orientado a beneficios para clientes NO técnicos. */
const backend: Localized<Service[]> = {
  es: [
    {
      icon: 'cart',
      title: 'Pedidos online',
      description:
        'Tus clientes piden y pagan desde el móvil; los pedidos llegan directos a tu negocio, las 24 horas.',
    },
    {
      icon: 'layers',
      title: 'Panel de gestión',
      description:
        'Una pantalla sencilla para controlar pedidos, reservas, productos y clientes. Sin hojas de cálculo.',
    },
    {
      icon: 'plug',
      title: 'APIs e integraciones',
      description:
        'Conecto tu web con pagos, ERPs y las herramientas que ya usas para que todo funcione solo.',
    },
    {
      icon: 'lock',
      title: 'Reservas y acceso seguro',
      description:
        'Reservas sin solapamientos y áreas privadas con acceso seguro y permisos por roles.',
    },
  ],
  va: [
    {
      icon: 'cart',
      title: 'Comandes online',
      description:
        'Els teus clients demanen i paguen des del mòbil; les comandes arriben directes al teu negoci, les 24 hores.',
    },
    {
      icon: 'layers',
      title: 'Panell de gestió',
      description:
        'Una pantalla senzilla per a controlar comandes, reserves, productes i clients. Sense fulls de càlcul.',
    },
    {
      icon: 'plug',
      title: 'APIs i integracions',
      description:
        'Connecte la teua web amb pagaments, ERPs i les ferramentes que ja uses perquè tot funcione sol.',
    },
    {
      icon: 'lock',
      title: 'Reserves i accés segur',
      description:
        'Reserves sense solapaments i àrees privades amb accés segur i permisos per rols.',
    },
  ],
  en: [
    {
      icon: 'cart',
      title: 'Online ordering',
      description:
        'Your customers order and pay from their phone; orders land straight in your business, 24/7.',
    },
    {
      icon: 'layers',
      title: 'Management dashboard',
      description:
        'One simple screen to manage orders, bookings, products and customers. No spreadsheets.',
    },
    {
      icon: 'plug',
      title: 'APIs & integrations',
      description:
        'We connect your site with payments, ERPs and the tools you already use so everything runs itself.',
    },
    {
      icon: 'lock',
      title: 'Bookings & secure access',
      description:
        'Bookings with no double-booking and private areas with secure, role-based access.',
    },
  ],
};

export const getBackend = (lang: Lang) => backend[lang];

/* ───────────────── PROYECTOS ───────────────── */
export interface Project {
  slug: string;
  name: string;
  category: string;
  description: string;
  result: string;
  url: string;
  tags: string[];
  featured?: boolean;
  // Colores del mockup (degradado). Cámbialos o sustituye por capturas reales en /public/projects.
  gradient: [string, string];
  image?: string; // ruta opcional a una captura real: '/projects/taxi.jpg'
  // Métricas reales del caso (opcional). Se muestran solo si las rellenas.
  metrics?: { value: string; label: string }[];
}

const projectsBase = [
  {
    slug: 'beply',
    name: 'Beply',
    url: 'https://beply.es',
    tags: ['Astro', 'Vue', 'Tailwind', 'SEO'],
    gradient: ['#6366F1', '#22D3EE'] as [string, string],
    image: '/projects/beply.webp',
    featured: true,
  },
  {
    slug: 'taxi-xativa',
    name: 'Taxi Xàtiva',
    url: 'https://taxixativa.es',
    tags: ['Astro', 'SEO local', 'Calculadora', 'JS'],
    gradient: ['#FACC15', '#F97316'] as [string, string],
    image: '/projects/taxi-xativa.webp',
  },
  {
    slug: 'clinica-laura-serra',
    name: 'Clínica Veterinària Laura Serra',
    url: 'https://clinicalauraserra.com',
    tags: ['Web local', 'SEO', 'WhatsApp', 'Responsive'],
    gradient: ['#22D3EE', '#3B82F6'] as [string, string],
    image: '/projects/clinica-laura-serra.webp',
  },
  {
    slug: 'onllum',
    name: 'Onllum',
    url: 'https://onllum.es',
    tags: ['Astro', 'Vue', 'Calculadora', 'Energía'],
    gradient: ['#34D399', '#10B981'] as [string, string],
    image: '/projects/onllum.webp',
  },
  {
    slug: 'el-buey-madurado',
    name: 'El Buey Madurado',
    url: 'https://www.restauranteelbueymadurado.com',
    tags: ['Next.js', 'React', 'Node.js', 'MongoDB'],
    gradient: ['#F472B6', '#A855F7'] as [string, string],
    image: '/projects/el-buey-madurado.webp',
  },
] as const;

const projectCopy: Localized<Record<string, { category: string; description: string; result: string }>> = {
  es: {
    beply: {
      category: 'Web corporativa · Software de gestión (SaaS)',
      description:
        'Web corporativa para un software de gestión empresarial (ERP): facturación, contabilidad, CRM, stock y TPV. Decenas de páginas optimizadas para SEO, con integraciones de ecommerce y documentación para desarrolladores.',
      result: 'Explica un ERP complejo en un lenguaje que entiende cualquier pyme, con decenas de páginas pensadas para posicionar cada función por separado en Google.',
    },
    'taxi-xativa': {
      category: 'Web de servicios · Transporte',
      description:
        'Web rápida para un servicio de taxi local con calculadora de tarifas en tiempo real, reserva por WhatsApp y SEO local optimizado para destacar en su zona.',
      result: 'Calculadora de tarifa en tiempo real + reserva directa por WhatsApp: el cliente sabe el precio antes de pedir el taxi.',
    },
    'clinica-laura-serra': {
      category: 'Web local · Salud animal',
      description:
        'Página para una clínica veterinaria de barrio: servicios, horarios, contacto directo por WhatsApp y un diseño cercano que transmite confianza.',
      result: 'Una web de barrio que no parece "una web de barrio": cercana, rápida y con el WhatsApp siempre a un toque.',
    },
    onllum: {
      category: 'Web corporativa · Energía',
      description:
        'Web de asesoría energética con calculadora de ahorro interactiva, pensada para generar leads y explicar servicios complejos de forma sencilla.',
      result: 'Una calculadora convierte una explicación técnica en un número que el cliente entiende en diez segundos.',
    },
    'el-buey-madurado': {
      category: 'App full-stack · Restaurante',
      description:
        'Aplicación completa de gestión para un restaurante: carta digital, gestión de pedidos, reservas de mesa y autenticación segura con JWT. Frontend y backend a medida.',
      result: 'Carta digital, reservas y gestión de pedidos en una sola plataforma a medida, sin depender de apps de terceros.',
    },
  },
  va: {
    beply: {
      category: 'Web corporativa · Programari de gestió (SaaS)',
      description:
        'Web corporativa per a un programari de gestió empresarial (ERP): facturació, comptabilitat, CRM, estoc i TPV. Desenes de pàgines optimitzades per a SEO, amb integracions d’ecommerce i documentació per a desenvolupadors.',
      result: 'Una web SaaS ràpida i orientada a SEO que explica un producte complex i converteix visites en clients.',
    },
    'taxi-xativa': {
      category: 'Web de serveis · Transport',
      description:
        'Web ràpida per a un servei de taxi local amb calculadora de tarifes en temps real, reserva per WhatsApp i SEO local optimitzat per a destacar en la seua zona.',
      result: 'Reserves directes per WhatsApp i major visibilitat en les cerques locals de taxi.',
    },
    'clinica-laura-serra': {
      category: 'Web local · Salut animal',
      description:
        'Pàgina per a una clínica veterinària de barri: serveis, horaris, contacte directe per WhatsApp i un disseny pròxim que transmet confiança.',
      result: 'Contacte immediat per WhatsApp i una imatge professional que genera confiança.',
    },
    onllum: {
      category: 'Web corporativa · Energia',
      description:
        'Web d’assessoria energètica amb calculadora d’estalvi interactiva, pensada per a generar leads i explicar serveis complexos de forma senzilla.',
      result: 'Calculadora que capta leads qualificats i explica serveis complexos amb claredat.',
    },
    'el-buey-madurado': {
      category: 'App full-stack · Restaurant',
      description:
        'Aplicació completa de gestió per a un restaurant: carta digital, gestió de comandes, reserves de taula i autenticació segura amb JWT. Frontend i backend a mida.',
      result: 'Gestió integral del restaurant en una sola plataforma, de la carta a les reserves.',
    },
  },
  en: {
    beply: {
      category: 'Corporate website · Business software (SaaS)',
      description:
        'Corporate website for a business management software (ERP): invoicing, accounting, CRM, stock and POS. Dozens of SEO-optimized pages, with e-commerce integrations and developer documentation.',
      result: 'A fast, SEO-focused SaaS website that explains a complex product and turns visits into clients.',
    },
    'taxi-xativa': {
      category: 'Service website · Transport',
      description:
        'Fast website for a local taxi service with a real-time fare calculator, WhatsApp booking and local SEO optimized to stand out in its area.',
      result: 'Direct WhatsApp bookings and stronger visibility in local taxi searches.',
    },
    'clinica-laura-serra': {
      category: 'Local website · Animal health',
      description:
        'Website for a neighborhood vet clinic: services, opening hours, direct WhatsApp contact and a warm design that builds trust.',
      result: 'Instant WhatsApp contact and a professional image that builds trust.',
    },
    onllum: {
      category: 'Corporate website · Energy',
      description:
        'Energy advisory website with an interactive savings calculator, designed to generate leads and explain complex services simply.',
      result: 'A calculator that captures qualified leads and explains complex services clearly.',
    },
    'el-buey-madurado': {
      category: 'Full-stack app · Restaurant',
      description:
        'Complete management app for a restaurant: digital menu, order processing, table reservations and secure JWT authentication. Custom frontend and backend.',
      result: 'Full restaurant management in a single platform, from menu to reservations.',
    },
  },
};

/* Traducción de las etiquetas no universales (las técnicas como Astro, Vue,
   React… se quedan igual). Evita que aparezcan en español en /va y /en. */
const tagI18n: Record<string, Partial<Record<Lang, string>>> = {
  'SEO local': { en: 'Local SEO' },
  Calculadora: { en: 'Calculator' },
  'Web local': { en: 'Local site' },
  Energía: { va: 'Energia', en: 'Energy' },
  Responsive: {},
};
const translateTag = (tag: string, lang: Lang): string => tagI18n[tag]?.[lang] ?? tag;

/* ───────────────── MÉTRICAS DE LOS CASOS (RELLENA CON DATOS REALES) ─────────────────
   👉 Aquí van los resultados MEDIBLES de cada proyecto. Se muestran como cifras
   destacadas en la tarjeta del proyecto SOLO si las rellenas (si el array está
   vacío, no se muestra nada — nunca se inventan números).

   Ejemplo de cómo rellenarlo (pon tus datos reales y descomenta):
     beply: [
       { value: '+65%', label: 'tráfico orgánico' },
       { value: '100', label: 'PageSpeed móvil' },
       { value: '−40%', label: 'tiempo de carga' },
     ],

   Pon 2-3 métricas por proyecto. Tradúcelas en los 3 idiomas (es/va/en). */
const projectMetrics: Localized<Record<string, { value: string; label: string }[]>> = {
  es: {
    beply: [],
    'taxi-xativa': [],
    'clinica-laura-serra': [],
    onllum: [],
    'el-buey-madurado': [],
  },
  va: {
    beply: [],
    'taxi-xativa': [],
    'clinica-laura-serra': [],
    onllum: [],
    'el-buey-madurado': [],
  },
  en: {
    beply: [],
    'taxi-xativa': [],
    'clinica-laura-serra': [],
    onllum: [],
    'el-buey-madurado': [],
  },
};

export const getProjects = (lang: Lang): Project[] =>
  projectsBase.map((p) => ({
    slug: p.slug,
    name: p.name,
    url: p.url,
    tags: p.tags.map((tg) => translateTag(tg, lang)),
    gradient: p.gradient,
    featured: 'featured' in p ? p.featured : false,
    image: 'image' in p ? p.image : undefined,
    category: projectCopy[lang][p.slug].category,
    description: projectCopy[lang][p.slug].description,
    result: projectCopy[lang][p.slug].result,
    metrics: projectMetrics[lang][p.slug] ?? [],
  }));

/* ───────────────── PROCESO ───────────────── */
export interface Step {
  number: string;
  title: string;
  description: string;
}

const process: Localized<Step[]> = {
  es: [
    {
      number: '01',
      title: 'Descubrimiento',
      description:
        'Hablamos de tu negocio, tus objetivos y tu competencia. Entendemos qué necesitas para definir la estrategia adecuada.',
    },
    {
      number: '02',
      title: 'Diseño y prototipo',
      description:
        'Diseñamos la estructura y el aspecto de tu web. Validamos juntos el resultado antes de escribir una sola línea de código.',
    },
    {
      number: '03',
      title: 'Desarrollo y SEO',
      description:
        'Programamos tu web con código optimizado y la preparamos para Google desde el primer momento: velocidad, semántica y contenido.',
    },
    {
      number: '04',
      title: 'Lanzamiento y crecimiento',
      description:
        'Publicamos tu web y la monitorizamos. Te damos soporte y proponemos mejoras para que sigas captando más clientes mes a mes.',
    },
  ],
  va: [
    {
      number: '01',
      title: 'Descobriment',
      description:
        'Parlem del teu negoci, els teus objectius i la teua competència. Entenem què necessites per a definir l’estratègia adequada.',
    },
    {
      number: '02',
      title: 'Disseny i prototip',
      description:
        'Dissenyem l’estructura i l’aspecte de la teua web. Validem junts el resultat abans d’escriure una sola línia de codi.',
    },
    {
      number: '03',
      title: 'Desenvolupament i SEO',
      description:
        'Programem la teua web amb codi optimitzat i la preparem per a Google des del primer moment: velocitat, semàntica i contingut.',
    },
    {
      number: '04',
      title: 'Llançament i creixement',
      description:
        'Publiquem la teua web i la monitoritzem. Et donem suport i proposem millores perquè sigues captant més clients mes a mes.',
    },
  ],
  en: [
    {
      number: '01',
      title: 'Discovery',
      description:
        'We talk about your business, your goals and your competition. We understand what you need to define the right strategy.',
    },
    {
      number: '02',
      title: 'Design & prototype',
      description:
        'We design the structure and look of your website. We validate the result together before writing a single line of code.',
    },
    {
      number: '03',
      title: 'Development & SEO',
      description:
        'We build your website with optimized code and prepare it for Google from the start: speed, semantics and content.',
    },
    {
      number: '04',
      title: 'Launch & growth',
      description:
        'We launch your website and monitor it. We provide support and propose improvements so you keep capturing more clients month after month.',
    },
  ],
};

export const getProcess = (lang: Lang) => process[lang];

/* ───────────────── TESTIMONIOS ─────────────────
   ⚠️ PLACEHOLDER: sustituye estos textos por testimonios reales de tus clientes
   (con su permiso). Mientras tanto, sirven de ejemplo del formato. */
export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

const testimonials: Localized<Testimonial[]> = {
  es: [
    {
      quote:
        'En MetaLogic entendieron perfectamente lo que necesitábamos. La web quedó preciosa, rápida y ya nos llegan clientes nuevos gracias a Google.',
      author: 'Cliente · Ejemplo',
      role: 'Sector servicios (Xàtiva)',
    },
    {
      quote:
        'Profesional, cercano y con las cosas claras. Nos explicó todo el proceso y cumplió los plazos. Muy recomendable.',
      author: 'Cliente · Ejemplo',
      role: 'Restauración (Valencia)',
    },
    {
      quote:
        'Notamos la diferencia desde el primer mes. Más visitas, más llamadas y una web de la que estamos orgullosos.',
      author: 'Cliente · Ejemplo',
      role: 'Comercio local',
    },
  ],
  va: [
    {
      quote:
        'A MetaLogic van entendre perfectament el que necessitàvem. La web va quedar preciosa, ràpida i ja ens arriben clients nous gràcies a Google.',
      author: 'Client · Exemple',
      role: 'Sector serveis (Xàtiva)',
    },
    {
      quote:
        'Professional, pròxim i amb les coses clares. Ens va explicar tot el procés i va complir els terminis. Molt recomanable.',
      author: 'Client · Exemple',
      role: 'Restauració (València)',
    },
    {
      quote:
        'Notàrem la diferència des del primer mes. Més visites, més telefonades i una web de la qual estem orgullosos.',
      author: 'Client · Exemple',
      role: 'Comerç local',
    },
  ],
  en: [
    {
      quote:
        'The MetaLogic team understood exactly what we needed. The website turned out beautiful, fast, and we’re already getting new clients thanks to Google.',
      author: 'Client · Example',
      role: 'Service business (Xàtiva)',
    },
    {
      quote:
        'Professional, approachable and clear. He explained the whole process and met every deadline. Highly recommended.',
      author: 'Client · Example',
      role: 'Restaurant (Valencia)',
    },
    {
      quote:
        'We noticed the difference from the first month. More visits, more calls and a website we’re proud of.',
      author: 'Client · Example',
      role: 'Local business',
    },
  ],
};

export const getTestimonials = (lang: Lang) => testimonials[lang];

/* ───────────────── FAQ ───────────────── */
export interface Faq {
  question: string;
  answer: string;
}

const faqs: Localized<Faq[]> = {
  es: [
    {
      question: '¿Cuánto cuesta una página web?',
      answer:
        'Depende de lo que necesites. Cada proyecto es único, así que preparamos un presupuesto a medida según tus objetivos, el número de páginas y las funcionalidades. Escríbenos y te damos una cifra clara y sin compromiso.',
    },
    {
      question: '¿Cuánto tarda en estar lista?',
      answer:
        'Una web corporativa suele estar lista en 2 a 4 semanas, dependiendo del contenido y de la rapidez en validar las fases. Siempre acordamos un plazo realista al empezar.',
    },
    {
      question: '¿Qué es el SEO y por qué lo necesito?',
      answer:
        'El SEO es el conjunto de técnicas para que tu web aparezca en Google cuando alguien busca tus servicios. Sin SEO, tu web es invisible. Lo integramos desde el principio para que captes clientes de forma orgánica.',
    },
    {
      question: '¿Trabajas con WordPress o haces webs a medida?',
      answer:
        'Hacemos webs a medida con tecnología moderna (como Astro), lo que las hace mucho más rápidas, seguras y fáciles de posicionar que una plantilla de WordPress. Si necesitas WordPress, también lo hablamos.',
    },
    {
      question: '¿Ofreces mantenimiento después?',
      answer:
        'Sí. Podemos encargarnos de mantener tu web actualizada, segura y mejorándola con el tiempo, con planes de mantenimiento adaptados a tus necesidades.',
    },
    {
      question: '¿Trabajas solo en Xàtiva o también en remoto?',
      answer:
        'Estamos en Xàtiva (Valencia), pero trabajamos en remoto con clientes de toda España. La distancia no es problema: nos coordinamos por videollamada, email o WhatsApp.',
    },
    {
      question: '¿De quién es la web y el dominio?',
      answer:
        'Tuyos. Al finalizar el proyecto, la web, el código y el dominio quedan 100% a tu nombre. Sin ataduras ni dependencias: si algún día quieres llevártela, es completamente tuya.',
    },
    {
      question: '¿Cómo funciona el pago?',
      answer:
        'Normalmente con un anticipo para reservar el proyecto y el resto a la entrega, según los hitos que acordemos. Todo claro desde el principio, sin sorpresas ni costes ocultos.',
    },
  ],
  va: [
    {
      question: 'Quant costa una pàgina web?',
      answer:
        'Depén del que necessites. Cada projecte és únic, així que preparem un pressupost a mida segons els teus objectius, el nombre de pàgines i les funcionalitats. Escriu-nos i et donem una xifra clara i sense compromís.',
    },
    {
      question: 'Quant tarda a estar llesta?',
      answer:
        'Una web corporativa sol estar llesta en 2 a 4 setmanes, depenent del contingut i de la rapidesa a validar les fases. Sempre acordem un termini realista en començar.',
    },
    {
      question: 'Què és el SEO i per què el necessite?',
      answer:
        'El SEO és el conjunt de tècniques perquè la teua web aparega en Google quan algú busca els teus serveis. Sense SEO, la teua web és invisible. L’integrem des del principi perquè captes clients de forma orgànica.',
    },
    {
      question: 'Treballes amb WordPress o fas webs a mida?',
      answer:
        'Fem webs a mida amb tecnologia moderna (com Astro), cosa que les fa molt més ràpides, segures i fàcils de posicionar que una plantilla de WordPress. Si necessites WordPress, també ho parlem.',
    },
    {
      question: 'Oferixes manteniment després?',
      answer:
        'Sí. Podem encarregar-nos de mantindre la teua web actualitzada, segura i millorant-la amb el temps, amb plans de manteniment adaptats a les teues necessitats.',
    },
    {
      question: 'Treballes només a Xàtiva o també en remot?',
      answer:
        'Estem a Xàtiva (València), però treballem en remot amb clients de tota Espanya. La distància no és problema: ens coordinem per videocrida, email o WhatsApp.',
    },
    {
      question: 'De qui és la web i el domini?',
      answer:
        'Teus. En finalitzar el projecte, la web, el codi i el domini queden 100% al teu nom. Sense lligams ni dependències: si algun dia vols emportar-te-la, és completament teua.',
    },
    {
      question: 'Com funciona el pagament?',
      answer:
        'Normalment amb un avançament per a reservar el projecte i la resta a l’entrega, segons les fites que acordem. Tot clar des del principi, sense sorpreses ni costos ocults.',
    },
  ],
  en: [
    {
      question: 'How much does a website cost?',
      answer:
        'It depends on what you need. Every project is unique, so we prepare a tailored quote based on your goals, the number of pages and the features. Get in touch and we’ll give you a clear figure with no commitment.',
    },
    {
      question: 'How long does it take?',
      answer:
        'A corporate website is usually ready in 2 to 4 weeks, depending on content and how quickly we validate each phase. We always agree on a realistic timeline at the start.',
    },
    {
      question: 'What is SEO and why do I need it?',
      answer:
        'SEO is the set of techniques that make your website appear on Google when someone searches for your services. Without SEO, your website is invisible. We build it in from the start so you capture clients organically.',
    },
    {
      question: 'Do you use WordPress or build custom sites?',
      answer:
        'We build custom websites with modern technology (like Astro), which makes them far faster, more secure and easier to rank than a WordPress template. If you need WordPress, we can talk about that too.',
    },
    {
      question: 'Do you offer maintenance afterwards?',
      answer:
        'Yes. We can keep your website updated, secure and improving over time, with maintenance plans tailored to your needs.',
    },
    {
      question: 'Do you only work in Xàtiva or remotely too?',
      answer:
        'We’re based in Xàtiva (Spain), but we work remotely with clients all over the country. Distance is no problem: we coordinate by video call, email or WhatsApp.',
    },
    {
      question: 'Who owns the website and domain?',
      answer:
        'You do. When the project is finished, the website, the code and the domain are 100% in your name. No lock-in: if you ever want to move it, it’s entirely yours.',
    },
    {
      question: 'How does payment work?',
      answer:
        'Usually a deposit to book the project and the rest on delivery, based on the milestones we agree. Everything clear from the start — no surprises or hidden costs.',
    },
  ],
};

export const getFaqs = (lang: Lang) => faqs[lang];

/* ───────────────── PRECIOS / PLANES ─────────────────
   ⚠️ AJUSTA LOS PRECIOS a lo que quieras cobrar. Son "desde" orientativos.
   El plan con highlighted:true se muestra destacado como "más popular". */
export interface Plan {
  name: string;
  price: string;
  priceNote: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
  cta: string;
}

const pricing: Localized<Plan[]> = {
  es: [
    {
      name: 'Web Esencial',
      price: 'A medida',
      priceNote: 'pago único',
      description: 'Perfecta para empezar con una presencia profesional.',
      features: [
        'Landing page a medida (1 página)',
        'SEO básico + Google Business',
        'Formulario de contacto y WhatsApp',
        'Entrega en 1–2 semanas',
      ],
      cta: 'Empezar',
    },
    {
      name: 'Web Profesional',
      price: 'A medida',
      priceNote: 'pago único',
      description: 'La opción más elegida por negocios que quieren crecer.',
      features: [
        'Web completa (hasta 6 páginas)',
        'Diseño premium a medida',
        'SEO on-page + rendimiento 100/100',
        'Analítica (GA4 + Search Console)',
        'Blog opcional para posicionar',
        'Soporte 30 días incluido',
      ],
      highlighted: true,
      badge: 'Más popular',
      cta: 'Quiero esta',
    },
    {
      name: 'Web + SEO Pro',
      price: 'A medida',
      priceNote: 'web + plan SEO',
      description: 'Para quien quiere dominar Google (y la IA) en su sector.',
      features: [
        'Todo lo del plan Profesional',
        'Estrategia SEO continua',
        'Posicionamiento en IA (GEO/AEO)',
        'Redacción de contenidos optimizados',
        'Informes mensuales de resultados',
        'Mantenimiento y soporte prioritario',
      ],
      cta: 'Hablemos',
    },
  ],
  va: [
    {
      name: 'Web Essencial',
      price: 'A mida',
      priceNote: 'pagament únic',
      description: 'Perfecta per a començar amb una presència professional.',
      features: [
        'Landing page a mida (1 pàgina)',
        'SEO bàsic + Google Business',
        'Formulari de contacte i WhatsApp',
        'Entrega en 1–2 setmanes',
      ],
      cta: 'Començar',
    },
    {
      name: 'Web Professional',
      price: 'A mida',
      priceNote: 'pagament únic',
      description: 'L’opció més triada per negocis que volen créixer.',
      features: [
        'Web completa (fins a 6 pàgines)',
        'Disseny premium a mida',
        'SEO on-page + rendiment 100/100',
        'Analítica (GA4 + Search Console)',
        'Blog opcional per a posicionar',
        'Suport 30 dies inclòs',
      ],
      highlighted: true,
      badge: 'Més popular',
      cta: 'La vull',
    },
    {
      name: 'Web + SEO Pro',
      price: 'A mida',
      priceNote: 'web + pla SEO',
      description: 'Per a qui vol dominar Google (i la IA) al seu sector.',
      features: [
        'Tot el del pla Professional',
        'Estratègia SEO contínua',
        'Posicionament en IA (GEO/AEO)',
        'Redacció de continguts optimitzats',
        'Informes mensuals de resultats',
        'Manteniment i suport prioritari',
      ],
      cta: 'Parlem',
    },
  ],
  en: [
    {
      name: 'Essential',
      price: 'Custom',
      priceNote: 'one-time',
      description: 'Perfect to start with a professional presence.',
      features: [
        'Custom landing page (1 page)',
        'Basic SEO + Google Business',
        'Contact form and WhatsApp',
        'Delivery in 1–2 weeks',
      ],
      cta: 'Get started',
    },
    {
      name: 'Professional',
      price: 'Custom',
      priceNote: 'one-time',
      description: 'The favorite choice for businesses that want to grow.',
      features: [
        'Full website (up to 6 pages)',
        'Premium custom design',
        'On-page SEO + 100/100 performance',
        'Analytics (GA4 + Search Console)',
        'Optional blog to rank',
        '30 days support included',
      ],
      highlighted: true,
      badge: 'Most popular',
      cta: 'I want this',
    },
    {
      name: 'Web + SEO Pro',
      price: 'Custom',
      priceNote: 'web + SEO plan',
      description: 'For those who want to dominate Google (and AI) in their niche.',
      features: [
        'Everything in Professional',
        'Ongoing SEO strategy',
        'AI search optimization (GEO/AEO)',
        'Optimized content writing',
        'Monthly results reports',
        'Maintenance & priority support',
      ],
      cta: 'Let’s talk',
    },
  ],
};

export const getPricing = (lang: Lang) => pricing[lang];

/* ── Incluido en TODOS los planes (evita repetir lo común en cada tarjeta) ── */
const pricingIncludes: Localized<string[]> = {
  es: [
    'Diseño responsive (perfecto en el móvil)',
    'Código limpio, rápido y optimizado',
    'Certificado de seguridad (HTTPS)',
    'Optimización de velocidad y Core Web Vitals',
    'Formación para que la gestiones tú',
    'El código y el dominio son 100% tuyos',
  ],
  va: [
    'Disseny responsive (perfecte al mòbil)',
    'Codi net, ràpid i optimitzat',
    'Certificat de seguretat (HTTPS)',
    'Optimització de velocitat i Core Web Vitals',
    'Formació perquè la gestiones tu',
    'El codi i el domini són 100% teus',
  ],
  en: [
    'Responsive design (perfect on mobile)',
    'Clean, fast, optimized code',
    'Security certificate (HTTPS)',
    'Speed & Core Web Vitals optimization',
    'Training so you can manage it yourself',
    'The code and domain are 100% yours',
  ],
};

export const getPricingIncludes = (lang: Lang) => pricingIncludes[lang];

/* ── Detalle de cómo trabajamos (plazos, pago, revisiones, después) ── */
const pricingDetails: Localized<Service[]> = {
  es: [
    { icon: 'bolt', title: 'Plazos claros', description: 'Entrega típica de 1 a 4 semanas según el alcance. Acordamos una fecha realista antes de empezar.' },
    { icon: 'shield', title: 'Forma de pago', description: '30% para reservar el proyecto y 70% a la entrega. Sin sorpresas ni costes ocultos.' },
    { icon: 'check', title: 'Revisiones incluidas', description: 'Validamos cada fase contigo, con rondas de cambios para dejar la web justo como la imaginas.' },
    { icon: 'spark', title: 'Qué pasa después', description: 'Soporte tras el lanzamiento y planes de mantenimiento opcionales para seguir creciendo.' },
  ],
  va: [
    { icon: 'bolt', title: 'Terminis clars', description: 'Entrega típica d’1 a 4 setmanes segons l’abast. Acordem una data realista abans de començar.' },
    { icon: 'shield', title: 'Forma de pagament', description: '30% per a reservar el projecte i 70% a l’entrega. Sense sorpreses ni costos ocults.' },
    { icon: 'check', title: 'Revisions incloses', description: 'Validem cada fase amb tu, amb rondes de canvis per a deixar la web tal com la imagines.' },
    { icon: 'spark', title: 'Què passa després', description: 'Suport després del llançament i plans de manteniment opcionals per a seguir creixent.' },
  ],
  en: [
    { icon: 'bolt', title: 'Clear timelines', description: 'Typical delivery of 1 to 4 weeks depending on scope. We agree on a realistic date before starting.' },
    { icon: 'shield', title: 'Payment terms', description: '30% to book the project and 70% on delivery. No surprises, no hidden costs.' },
    { icon: 'check', title: 'Revisions included', description: 'We validate each phase with you, with rounds of changes to get the site exactly as you imagine it.' },
    { icon: 'spark', title: 'What happens next', description: 'Post-launch support and optional maintenance plans so you keep growing.' },
  ],
};

export const getPricingDetails = (lang: Lang) => pricingDetails[lang];

/* ───────────────── COMPARATIVA ───────────────── */
export interface CompareRow {
  feature: string;
  me: string;
  template: string;
  agency: string;
}

const comparison: Localized<{ cols: [string, string, string]; rows: CompareRow[] }> = {
  es: {
    cols: ['Con MetaLogic', 'Plantilla barata', 'Agencia grande'],
    rows: [
      { feature: 'Diseño', me: 'A medida y único', template: 'Genérico y repetido', agency: 'A medida (caro)' },
      { feature: 'Rendimiento', me: '100/100, ultrarrápida', template: 'Lenta y pesada', agency: 'Variable' },
      { feature: 'SEO incluido', me: 'Desde el día 1', template: 'Casi nulo', agency: 'Coste aparte' },
      { feature: 'Trato', me: 'Directo y cercano', template: 'Tú solo', agency: 'Comerciales y becarios' },
      { feature: 'Precio', me: 'Justo y claro', template: 'Barato (sale caro)', agency: 'Elevado' },
      { feature: 'Plazos', me: 'Rápidos y cumplidos', template: 'Tu tiempo', agency: 'Lentos' },
    ],
  },
  va: {
    cols: ['Amb MetaLogic', 'Plantilla barata', 'Agència gran'],
    rows: [
      { feature: 'Disseny', me: 'A mida i únic', template: 'Genèric i repetit', agency: 'A mida (car)' },
      { feature: 'Rendiment', me: '100/100, ultraràpida', template: 'Lenta i pesada', agency: 'Variable' },
      { feature: 'SEO inclòs', me: 'Des del dia 1', template: 'Quasi nul', agency: 'Cost a banda' },
      { feature: 'Tracte', me: 'Directe i pròxim', template: 'Tu sol', agency: 'Comercials i becaris' },
      { feature: 'Preu', me: 'Just i clar', template: 'Barat (ix car)', agency: 'Elevat' },
      { feature: 'Terminis', me: 'Ràpids i complits', template: 'El teu temps', agency: 'Lents' },
    ],
  },
  en: {
    cols: ['With MetaLogic', 'Cheap template', 'Big agency'],
    rows: [
      { feature: 'Design', me: 'Custom and unique', template: 'Generic and reused', agency: 'Custom (expensive)' },
      { feature: 'Performance', me: '100/100, ultra-fast', template: 'Slow and heavy', agency: 'Variable' },
      { feature: 'SEO included', me: 'From day one', template: 'Almost none', agency: 'Extra cost' },
      { feature: 'Service', me: 'Direct and close', template: 'On your own', agency: 'Sales reps & interns' },
      { feature: 'Price', me: 'Fair and clear', template: 'Cheap (costs more)', agency: 'High' },
      { feature: 'Timeline', me: 'Fast and on time', template: 'Your own time', agency: 'Slow' },
    ],
  },
};

export const getComparison = (lang: Lang) => comparison[lang];

/* ───────────────── DIAGNÓSTICO WEB (herramienta interactiva) ───────────────── */
export interface Diagnostic {
  kicker: string;
  title: string;
  subtitle: string;
  questions: string[];
  opts: { yes: string; unsure: string; no: string };
  submit: string;
  retry: string;
  scoreLabel: string;
  improveLabel: string;
  allGood: string;
  verdicts: { min: number; title: string; text: string }[];
  cta: string;
  note: string;
}

const diagnostic: Localized<Diagnostic> = {
  es: {
    kicker: 'Diagnóstico exprés',
    title: '¿Cómo de bien está tu web?',
    subtitle:
      'Responde 6 preguntas rápidas y obtén al instante una puntuación con los puntos a mejorar. 60 segundos, sin registro.',
    questions: [
      '¿Tu web se ve y funciona bien en el móvil?',
      '¿Carga en menos de 3 segundos?',
      '¿Apareces en Google cuando buscan tus servicios?',
      '¿Tu web es segura (candado HTTPS)?',
      '¿Tiene llamadas a la acción claras (contacto, WhatsApp, comprar)?',
      '¿Actualizas el contenido con cierta frecuencia?',
    ],
    opts: { yes: 'Sí', unsure: 'No lo sé', no: 'No' },
    submit: 'Ver mi resultado',
    retry: 'Repetir test',
    scoreLabel: 'Tu puntuación',
    improveLabel: 'Puntos a mejorar',
    allGood: '¡Enhorabuena! No se ha detectado ningún punto débil claro.',
    verdicts: [
      { min: 80, title: '¡Tu web va muy bien!', text: 'Tienes una base sólida. Aun así, siempre hay margen para posicionar mejor y convertir más visitas en clientes.' },
      { min: 50, title: 'Vas por buen camino', text: 'Tu web cumple lo básico, pero está dejando escapar clientes. Con unos ajustes puede rendir mucho más.' },
      { min: 0, title: 'Tu web está perdiendo clientes', text: 'Hay varios puntos importantes que mejorar. La buena noticia: son justo las cosas en las que te podemos ayudar.' },
    ],
    cta: 'Pide tu diagnóstico completo gratis',
    note: 'Es una estimación orientativa. Te hacemos un análisis real y detallado sin compromiso.',
  },
  va: {
    kicker: 'Diagnòstic exprés',
    title: 'Com de bé està la teua web?',
    subtitle:
      'Respon 6 preguntes ràpides i obtín a l’instant una puntuació amb els punts a millorar. 60 segons, sense registre.',
    questions: [
      'La teua web es veu i funciona bé en el mòbil?',
      'Carrega en menys de 3 segons?',
      'Apareixes en Google quan busquen els teus serveis?',
      'La teua web és segura (cadenat HTTPS)?',
      'Té crides a l’acció clares (contacte, WhatsApp, comprar)?',
      'Actualitzes el contingut amb certa freqüència?',
    ],
    opts: { yes: 'Sí', unsure: 'No ho sé', no: 'No' },
    submit: 'Veure el meu resultat',
    retry: 'Repetir test',
    scoreLabel: 'La teua puntuació',
    improveLabel: 'Punts a millorar',
    allGood: 'Enhorabona! No s’ha detectat cap punt feble clar.',
    verdicts: [
      { min: 80, title: 'La teua web va molt bé!', text: 'Tens una base sòlida. Tot i així, sempre hi ha marge per a posicionar millor i convertir més visites en clients.' },
      { min: 50, title: 'Vas per bon camí', text: 'La teua web compleix el bàsic, però està deixant escapar clients. Amb uns ajustos pot rendir molt més.' },
      { min: 0, title: 'La teua web està perdent clients', text: 'Hi ha diversos punts importants a millorar. La bona notícia: són justament les coses en què et podem ajudar.' },
    ],
    cta: 'Demana el teu diagnòstic complet gratis',
    note: 'És una estimació orientativa. Et fem una anàlisi real i detallada sense compromís.',
  },
  en: {
    kicker: 'Express check',
    title: 'How healthy is your website?',
    subtitle:
      'Answer 6 quick questions and instantly get a score with what to improve. 60 seconds, no sign-up.',
    questions: [
      'Does your website look and work well on mobile?',
      'Does it load in under 3 seconds?',
      'Do you show up on Google when people search your services?',
      'Is your website secure (HTTPS padlock)?',
      'Does it have clear calls to action (contact, WhatsApp, buy)?',
      'Do you update the content fairly regularly?',
    ],
    opts: { yes: 'Yes', unsure: 'Not sure', no: 'No' },
    submit: 'See my result',
    retry: 'Retake test',
    scoreLabel: 'Your score',
    improveLabel: 'Areas to improve',
    allGood: 'Great! No clear weak points detected.',
    verdicts: [
      { min: 80, title: 'Your website is doing great!', text: 'You have a solid base. Still, there’s always room to rank better and turn more visits into clients.' },
      { min: 50, title: 'You’re on the right track', text: 'Your website covers the basics, but it’s letting clients slip away. A few tweaks could make it perform much better.' },
      { min: 0, title: 'Your website is losing clients', text: 'There are several important things to improve. The good news: they’re exactly what we can help you with.' },
    ],
    cta: 'Get your full free diagnosis',
    note: 'This is a rough estimate. We’ll run a real, detailed analysis with no commitment.',
  },
};

export const getDiagnostic = (lang: Lang) => diagnostic[lang];

/* ───────────────── GARANTÍAS / COMPROMISOS ───────────────── */
const guarantees: Localized<Service[]> = {
  es: [
    { icon: 'shield', title: 'Sin permanencias', description: 'Ni ataduras ni letra pequeña. Trabajamos con total libertad.' },
    { icon: 'code', title: 'El código es tuyo', description: 'La web, el código y el dominio quedan 100% a tu nombre.' },
    { icon: 'bolt', title: 'Rendimiento 100/100', description: 'Webs ultrarrápidas y optimizadas, o seguimos trabajando.' },
    { icon: 'spark', title: 'Respuesta en 24 h', description: 'Trato directo y cercano, con respuesta rápida y sin intermediarios.' },
  ],
  va: [
    { icon: 'shield', title: 'Sense permanències', description: 'Ni lligams ni lletra menuda. Treballem amb total llibertat.' },
    { icon: 'code', title: 'El codi és teu', description: 'La web, el codi i el domini queden 100% al teu nom.' },
    { icon: 'bolt', title: 'Rendiment 100/100', description: 'Webs ultraràpides i optimitzades, o seguim treballant.' },
    { icon: 'spark', title: 'Resposta en 24 h', description: 'Tracte directe i pròxim, amb resposta ràpida i sense intermediaris.' },
  ],
  en: [
    { icon: 'shield', title: 'No lock-in', description: 'No ties, no fine print. We work with total freedom.' },
    { icon: 'code', title: 'You own the code', description: 'The website, the code and the domain are 100% yours.' },
    { icon: 'bolt', title: '100/100 performance', description: 'Ultra-fast, optimized websites — or we keep working.' },
    { icon: 'spark', title: 'Reply within 24h', description: 'Direct, close communication with a fast reply and no middlemen.' },
  ],
};

export const getGuarantees = (lang: Lang) => guarantees[lang];

/* ───────────────── SKILLS / TECNOLOGÍAS ───────────────── */
export const skills: string[] = [
  'Astro',
  'React',
  'Next.js',
  'Vue',
  'JavaScript',
  'TypeScript',
  'Node.js',
  'Java',
  'Spring Boot',
  'Python',
  'PHP',
  'SQL',
  'MongoDB',
  'APIs REST',
  'Tailwind',
  'SEO técnico',
  'Core Web Vitals',
  'Vercel',
];

/** Skills traducidas: solo cambia la única no universal ("SEO técnico"). */
export const getSkills = (lang: Lang): string[] => {
  const seo = lang === 'en' ? 'Technical SEO' : lang === 'va' ? 'SEO tècnic' : 'SEO técnico';
  return skills.map((s) => (s === 'SEO técnico' ? seo : s));
};
