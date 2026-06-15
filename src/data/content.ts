import type { Lang } from '../i18n/config';

/* ──────────────────────────────────────────────────────────────────────────
   CONTENIDO DEL SITIO
   Todo el contenido editable (servicios, proyectos, proceso, FAQ...) vive aquí,
   traducido a los 3 idiomas. Edita los textos con total libertad.
   ────────────────────────────────────────────────────────────────────────── */

type Localized<T> = Record<Lang, T>;

/* ───────────────── SERVICIOS ───────────────── */
export interface Service {
  icon: string; // nombre del icono (ver Icon.astro)
  title: string;
  description: string;
}

const services: Localized<Service[]> = {
  es: [
    {
      icon: 'code',
      title: 'Desarrollo web a medida',
      description:
        'Webs y tiendas online creadas desde cero con tecnología moderna. Nada de plantillas genéricas: código limpio, rápido y pensado para tu negocio.',
    },
    {
      icon: 'search',
      title: 'Posicionamiento SEO',
      description:
        'SEO técnico, de contenidos y local para que aparezcas en Google cuando tus clientes te buscan. Más visibilidad, más visitas, más ventas.',
    },
    {
      icon: 'palette',
      title: 'Diseño UX/UI',
      description:
        'Diseño atractivo y fácil de usar, orientado a convertir. Cada pantalla guía al visitante hacia la acción que te importa: contactar o comprar.',
    },
    {
      icon: 'bolt',
      title: 'Rendimiento y Core Web Vitals',
      description:
        'Webs ultrarrápidas que cargan en menos de un segundo. La velocidad mejora tu posicionamiento y reduce el abandono de visitantes.',
    },
    {
      icon: 'pin',
      title: 'SEO local y Google Business',
      description:
        'Ideal para negocios de zona: optimizamos tu ficha de Google y tu web para que destaques en tu ciudad y atraigas clientes cercanos.',
    },
    {
      icon: 'spark',
      title: 'Posicionamiento en IA (GEO)',
      description:
        'El futuro de las búsquedas. Preparamos tu web para que ChatGPT, Gemini, Perplexity y las respuestas con IA de Google te recomienden a ti.',
    },
  ],
  va: [
    {
      icon: 'code',
      title: 'Desenvolupament web a mida',
      description:
        'Webs i botigues online creades des de zero amb tecnologia moderna. Res de plantilles genèriques: codi net, ràpid i pensat per al teu negoci.',
    },
    {
      icon: 'search',
      title: 'Posicionament SEO',
      description:
        'SEO tècnic, de continguts i local perquè aparegues en Google quan els teus clients et busquen. Més visibilitat, més visites, més vendes.',
    },
    {
      icon: 'palette',
      title: 'Disseny UX/UI',
      description:
        'Disseny atractiu i fàcil d’usar, orientat a convertir. Cada pantalla guia el visitant cap a l’acció que t’importa: contactar o comprar.',
    },
    {
      icon: 'bolt',
      title: 'Rendiment i Core Web Vitals',
      description:
        'Webs ultraràpides que carreguen en menys d’un segon. La velocitat millora el teu posicionament i redueix l’abandó de visitants.',
    },
    {
      icon: 'pin',
      title: 'SEO local i Google Business',
      description:
        'Ideal per a negocis de zona: optimitzem la teua fitxa de Google i la teua web perquè destaques en la teua ciutat i atragues clients pròxims.',
    },
    {
      icon: 'spark',
      title: 'Posicionament en IA (GEO)',
      description:
        'El futur de les cerques. Preparem la teua web perquè ChatGPT, Gemini, Perplexity i les respostes amb IA de Google et recomanen a tu.',
    },
  ],
  en: [
    {
      icon: 'code',
      title: 'Custom web development',
      description:
        'Websites and online stores built from scratch with modern technology. No generic templates: clean, fast code designed for your business.',
    },
    {
      icon: 'search',
      title: 'SEO & search ranking',
      description:
        'Technical, content and local SEO so you show up on Google when your clients search for you. More visibility, more visits, more sales.',
    },
    {
      icon: 'palette',
      title: 'UX/UI design',
      description:
        'Attractive, easy-to-use design built to convert. Every screen guides the visitor toward the action that matters: contacting or buying.',
    },
    {
      icon: 'bolt',
      title: 'Performance & Core Web Vitals',
      description:
        'Ultra-fast websites that load in under a second. Speed boosts your ranking and reduces visitor drop-off.',
    },
    {
      icon: 'pin',
      title: 'Local SEO & Google Business',
      description:
        'Perfect for local businesses: we optimize your Google profile and website so you stand out in your city and attract nearby clients.',
    },
    {
      icon: 'spark',
      title: 'AI search optimization (GEO)',
      description:
        'The future of search. We prepare your website so ChatGPT, Gemini, Perplexity and Google’s AI answers recommend you.',
    },
  ],
};

export const getServices = (lang: Lang) => services[lang];

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
      result: 'Una web SaaS rápida y orientada a SEO que explica un producto complejo y convierte visitas en clientes.',
    },
    'taxi-xativa': {
      category: 'Web de servicios · Transporte',
      description:
        'Web rápida para un servicio de taxi local con calculadora de tarifas en tiempo real, reserva por WhatsApp y SEO local optimizado para destacar en su zona.',
      result: 'Reservas directas por WhatsApp y mayor visibilidad en las búsquedas locales de taxi.',
    },
    'clinica-laura-serra': {
      category: 'Web local · Salud animal',
      description:
        'Página para una clínica veterinaria de barrio: servicios, horarios, contacto directo por WhatsApp y un diseño cercano que transmite confianza.',
      result: 'Contacto inmediato por WhatsApp y una imagen profesional que genera confianza.',
    },
    onllum: {
      category: 'Web corporativa · Energía',
      description:
        'Web de asesoría energética con calculadora de ahorro interactiva, pensada para generar leads y explicar servicios complejos de forma sencilla.',
      result: 'Calculadora que capta leads cualificados y explica servicios complejos con claridad.',
    },
    'el-buey-madurado': {
      category: 'App full-stack · Restaurante',
      description:
        'Aplicación completa de gestión para un restaurante: carta digital, gestión de pedidos, reservas de mesa y autenticación segura con JWT. Frontend y backend a medida.',
      result: 'Gestión integral del restaurante en una sola plataforma, de la carta a las reservas.',
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

export const getProjects = (lang: Lang): Project[] =>
  projectsBase.map((p) => ({
    slug: p.slug,
    name: p.name,
    url: p.url,
    tags: [...p.tags],
    gradient: p.gradient,
    featured: 'featured' in p ? p.featured : false,
    image: 'image' in p ? p.image : undefined,
    category: projectCopy[lang][p.slug].category,
    description: projectCopy[lang][p.slug].description,
    result: projectCopy[lang][p.slug].result,
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
        'Michael entendió perfectamente lo que necesitábamos. La web quedó preciosa, rápida y ya nos llegan clientes nuevos gracias a Google.',
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
        'Michael va entendre perfectament el que necessitàvem. La web va quedar preciosa, ràpida i ja ens arriben clients nous gràcies a Google.',
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
        'Michael understood exactly what we needed. The website turned out beautiful, fast, and we’re already getting new clients thanks to Google.',
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
    { icon: 'shield', title: 'Forma de pago', description: '50% para reservar el proyecto y 50% a la entrega. Sin sorpresas ni costes ocultos.' },
    { icon: 'check', title: 'Revisiones incluidas', description: 'Validamos cada fase contigo, con rondas de cambios para dejar la web justo como la imaginas.' },
    { icon: 'spark', title: 'Qué pasa después', description: 'Soporte tras el lanzamiento y planes de mantenimiento opcionales para seguir creciendo.' },
  ],
  va: [
    { icon: 'bolt', title: 'Terminis clars', description: 'Entrega típica d’1 a 4 setmanes segons l’abast. Acordem una data realista abans de començar.' },
    { icon: 'shield', title: 'Forma de pagament', description: '50% per a reservar el projecte i 50% a l’entrega. Sense sorpreses ni costos ocults.' },
    { icon: 'check', title: 'Revisions incloses', description: 'Validem cada fase amb tu, amb rondes de canvis per a deixar la web tal com la imagines.' },
    { icon: 'spark', title: 'Què passa després', description: 'Suport després del llançament i plans de manteniment opcionals per a seguir creixent.' },
  ],
  en: [
    { icon: 'bolt', title: 'Clear timelines', description: 'Typical delivery of 1 to 4 weeks depending on scope. We agree on a realistic date before starting.' },
    { icon: 'shield', title: 'Payment terms', description: '50% to book the project and 50% on delivery. No surprises, no hidden costs.' },
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
