import type { Lang } from './config';

/**
 * Diccionario de textos de la interfaz en los 3 idiomas.
 * Edita aquí cualquier texto: está todo centralizado.
 */
export const ui = {
  es: {
    // --- Metadatos / SEO ---
    'meta.title': 'Michael Llorens · Desarrollo web y SEO en Xàtiva',
    'meta.description':
      'Desarrollador web y especialista en SEO. Creo webs rápidas, modernas y optimizadas para Google que captan clientes y hacen crecer tu negocio. Xàtiva y toda España.',

    // --- Navegación ---
    'nav.services': 'Servicios',
    'nav.work': 'Proyectos',
    'nav.process': 'Proceso',
    'nav.about': 'Sobre mí',
    'nav.pricing': 'Precios',
    'nav.faq': 'Preguntas',
    'nav.contact': 'Contacto',
    'nav.cta': 'Pide presupuesto',

    // --- Hero ---
    'hero.badge': 'Disponible para nuevos proyectos',
    'hero.title.1': 'Webs que',
    'hero.title.2': 'posicionan',
    'hero.title.3': 'y convierten',
    'hero.subtitle':
      'Soy Michael Llorens, desarrollador web y especialista en SEO. Diseño y programo páginas rápidas, modernas y pensadas para aparecer en Google y convertir visitas en clientes.',
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
    'services.kicker': 'Qué hago por ti',
    'services.title': 'Servicios de desarrollo y SEO',
    'services.subtitle':
      'Todo lo que tu negocio necesita para tener una presencia online profesional y rentable.',

    // --- Proyectos ---
    'work.kicker': 'Portfolio',
    'work.title': 'Proyectos reales, resultados reales',
    'work.subtitle':
      'Una selección de webs que he diseñado y desarrollado para negocios reales.',
    'work.visit': 'Visitar web',
    'work.result': 'Resultado',
    'work.cta': '¿Quieres ser el siguiente proyecto?',

    // --- Precios ---
    'pricing.kicker': 'Precios',
    'pricing.title': 'Planes claros, sin sorpresas',
    'pricing.subtitle':
      'Precios orientativos «desde». Cada proyecto es único: te paso un presupuesto a medida sin compromiso.',
    'pricing.note': 'Todos los planes incluyen diseño a medida, web responsive y código optimizado. ¿Necesitas algo distinto? Lo hablamos.',
    'pricing.popular': 'Más popular',

    // --- Comparativa ---
    'compare.kicker': 'Por qué yo',
    'compare.title': 'Freelance, plantilla o agencia',
    'compare.subtitle': 'Lo que ganas trabajando directamente conmigo frente a las alternativas.',
    'compare.feature': 'Qué comparamos',

    // --- Prueba de rendimiento ---
    'proof.title': 'Esta misma web es mi mejor carta de presentación',
    'proof.subtitle': 'Mido en mi propia web lo que vendo. Estos son sus resultados reales:',
    'proof.seo': 'SEO',
    'proof.best': 'Buenas prácticas',
    'proof.a11y': 'Accesibilidad',
    'proof.perf': 'Rendimiento',

    // --- Backend & APIs ---
    'backend.kicker': 'Más que webs',
    'backend.title': 'Backend, APIs y software a medida',
    'backend.subtitle':
      'No solo diseño webs bonitas: programo la lógica que hace funcionar tu negocio por dentro, de los pedidos a los pagos. Soy desarrollador full-stack.',
    'backend.proof': 'Lo apliqué en El Buey Madurado: desarrollé la gestión completa de pedidos, reservas y acceso seguro.',
    'backend.cta': 'Cuéntame qué necesitas',

    // --- Proceso ---
    'process.kicker': 'Cómo trabajo',
    'process.title': 'Un proceso claro, sin sorpresas',
    'process.subtitle':
      'Desde la primera idea hasta el lanzamiento y el crecimiento, sabes en todo momento qué pasa.',

    // --- Sobre mí ---
    'about.kicker': 'Sobre mí',
    'about.title': 'Hola, soy Michael Llorens',
    'about.p1':
      'Soy desarrollador full-stack y apasionado del posicionamiento SEO. Creo webs y aplicaciones que no solo se ven increíbles, sino que están construidas con código limpio para ser rápidas, accesibles y posicionar en Google.',
    'about.p2':
      'Trabajo con tecnologías modernas como Astro, lo que me permite entregar webs ultrarrápidas y optimizadas al milímetro. Cada proyecto lo trato como si fuera mío: con atención al detalle, comunicación cercana y el objetivo de que tu negocio consiga más clientes.',
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
    'faq.subtitle': '¿No encuentras tu respuesta? Escríbeme y te ayudo encantado.',

    // --- Contacto ---
    'contact.kicker': 'Hablemos',
    'contact.title': 'Cuéntame tu proyecto',
    'contact.subtitle':
      'Cuéntame qué necesitas y te responderé con una propuesta a medida. Sin compromiso.',
    'contact.form.name': 'Nombre',
    'contact.form.email': 'Email',
    'contact.form.message': 'Cuéntame sobre tu proyecto',
    'contact.form.send': 'Enviar mensaje',
    'contact.form.namePlaceholder': 'Tu nombre',
    'contact.form.emailPlaceholder': 'tu@email.com',
    'contact.form.messagePlaceholder': '¿Qué tipo de web necesitas? ¿Tienes algún plazo o referencia?',
    'contact.direct': 'O contáctame directamente',
    'contact.email.label': 'Email',
    'contact.phone.label': 'Teléfono / WhatsApp',
    'contact.location.label': 'Ubicación',
    'contact.location.value': 'Xàtiva, Valencia · Trabajo en remoto',

    // --- Footer ---
    'footer.tagline': 'Desarrollo web y SEO para negocios que quieren crecer.',
    'footer.nav': 'Navegación',
    'footer.services': 'Servicios',
    'footer.contact': 'Contacto',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.madeWith': 'Hecho con Astro y mucho café.',

    // --- Genéricos ---
    'cta.final.title': '¿Listo para tener la web que tu negocio merece?',
    'cta.final.subtitle':
      'Hablemos hoy y empieza a captar más clientes con una web rápida y bien posicionada.',
    'cta.final.button': 'Pide tu presupuesto gratis',
  },

  va: {
    'meta.title': 'Michael Llorens · Desenvolupament web i SEO a Xàtiva',
    'meta.description':
      'Desenvolupador web i especialista en SEO. Cree webs ràpides, modernes i optimitzades per a Google que capten clients i fan créixer el teu negoci. Xàtiva i tota Espanya.',

    'nav.services': 'Serveis',
    'nav.work': 'Projectes',
    'nav.process': 'Procés',
    'nav.about': 'Sobre mi',
    'nav.pricing': 'Preus',
    'nav.faq': 'Preguntes',
    'nav.contact': 'Contacte',
    'nav.cta': 'Demana pressupost',

    'hero.badge': 'Disponible per a nous projectes',
    'hero.title.1': 'Webs que',
    'hero.title.2': 'posicionen',
    'hero.title.3': 'i converteixen',
    'hero.subtitle':
      'Sóc Michael Llorens, desenvolupador web i especialista en SEO. Dissenye i programe pàgines ràpides, modernes i pensades per a aparéixer en Google i convertir visites en clients.',
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

    'services.kicker': 'Què faig per tu',
    'services.title': 'Serveis de desenvolupament i SEO',
    'services.subtitle':
      'Tot el que el teu negoci necessita per a tindre una presència online professional i rendible.',

    'work.kicker': 'Portfolio',
    'work.title': 'Projectes reals, resultats reals',
    'work.subtitle':
      'Una selecció de webs que he dissenyat i desenvolupat per a negocis reals.',
    'work.visit': 'Visitar web',
    'work.result': 'Resultat',
    'work.cta': 'Vols ser el pròxim projecte?',

    'pricing.kicker': 'Preus',
    'pricing.title': 'Plans clars, sense sorpreses',
    'pricing.subtitle':
      'Preus orientatius «des de». Cada projecte és únic: et passe un pressupost a mida sense compromís.',
    'pricing.note': 'Tots els plans inclouen disseny a mida, web responsive i codi optimitzat. Necessites una altra cosa? Ho parlem.',
    'pricing.popular': 'Més popular',

    'compare.kicker': 'Per què jo',
    'compare.title': 'Freelance, plantilla o agència',
    'compare.subtitle': 'El que guanyes treballant directament amb mi enfront de les alternatives.',
    'compare.feature': 'Què comparem',

    'proof.title': 'Aquesta mateixa web és la meua millor carta de presentació',
    'proof.subtitle': 'Mesure en la meua pròpia web el que venc. Estos són els seus resultats reals:',
    'proof.seo': 'SEO',
    'proof.best': 'Bones pràctiques',
    'proof.a11y': 'Accessibilitat',
    'proof.perf': 'Rendiment',

    'backend.kicker': 'Més que webs',
    'backend.title': 'Backend, APIs i programari a mida',
    'backend.subtitle':
      'No només dissenye webs boniques: programe la lògica que fa funcionar el teu negoci per dins, de les comandes als pagaments. Sóc desenvolupador full-stack.',
    'backend.proof': 'Ho vaig aplicar en El Buey Madurado: vaig desenvolupar la gestió completa de comandes, reserves i accés segur.',
    'backend.cta': 'Conta’m què necessites',

    'process.kicker': 'Com treballe',
    'process.title': 'Un procés clar, sense sorpreses',
    'process.subtitle':
      'Des de la primera idea fins al llançament i el creixement, saps en tot moment què passa.',

    'about.kicker': 'Sobre mi',
    'about.title': 'Hola, sóc Michael Llorens',
    'about.p1':
      'Sóc desenvolupador full-stack i apassionat del posicionament SEO. Cree webs i aplicacions que no només es veuen increïbles, sinó que estan construïdes amb codi net per a ser ràpides, accessibles i posicionar en Google.',
    'about.p2':
      'Treballe amb tecnologies modernes com Astro, cosa que em permet entregar webs ultraràpides i optimitzades al mil·límetre. Cada projecte el tracte com si fora meu: amb atenció al detall, comunicació pròxima i l’objectiu que el teu negoci aconseguisca més clients.',
    'about.cta': 'Parlem del teu projecte',
    'about.skills.title': 'Tecnologies i ferramentes',

    'testimonials.kicker': 'Confiança',
    'testimonials.title': 'El que diuen els clients',
    'testimonials.subtitle':
      'La millor publicitat és el treball ben fet i un client content.',

    'faq.kicker': 'Preguntes freqüents',
    'faq.title': 'Resol els teus dubtes',
    'faq.subtitle': 'No trobes la teua resposta? Escriu-me i t’ajude encantat.',

    'contact.kicker': 'Parlem',
    'contact.title': 'Conta’m el teu projecte',
    'contact.subtitle':
      'Conta’m què necessites i et respondré amb una proposta a mida. Sense compromís.',
    'contact.form.name': 'Nom',
    'contact.form.email': 'Email',
    'contact.form.message': 'Conta’m sobre el teu projecte',
    'contact.form.send': 'Enviar missatge',
    'contact.form.namePlaceholder': 'El teu nom',
    'contact.form.emailPlaceholder': 'tu@email.com',
    'contact.form.messagePlaceholder': 'Quin tipus de web necessites? Tens algun termini o referència?',
    'contact.direct': 'O contacta amb mi directament',
    'contact.email.label': 'Email',
    'contact.phone.label': 'Telèfon / WhatsApp',
    'contact.location.label': 'Ubicació',
    'contact.location.value': 'Xàtiva, València · Treballe en remot',

    'footer.tagline': 'Desenvolupament web i SEO per a negocis que volen créixer.',
    'footer.nav': 'Navegació',
    'footer.services': 'Serveis',
    'footer.contact': 'Contacte',
    'footer.rights': 'Tots els drets reservats.',
    'footer.madeWith': 'Fet amb Astro i molt de café.',

    'cta.final.title': 'Preparat per a tindre la web que el teu negoci mereix?',
    'cta.final.subtitle':
      'Parlem hui i comença a captar més clients amb una web ràpida i ben posicionada.',
    'cta.final.button': 'Demana el teu pressupost gratis',
  },

  en: {
    'meta.title': 'Michael Llorens · Web Development & SEO',
    'meta.description':
      'Web developer and SEO specialist. I build fast, modern, search-optimized websites that capture clients and grow your business. Based in Xàtiva, Spain — working worldwide.',

    'nav.services': 'Services',
    'nav.work': 'Work',
    'nav.process': 'Process',
    'nav.about': 'About',
    'nav.pricing': 'Pricing',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.cta': 'Get a quote',

    'hero.badge': 'Available for new projects',
    'hero.title.1': 'Websites that',
    'hero.title.2': 'rank',
    'hero.title.3': 'and convert',
    'hero.subtitle':
      'I’m Michael Llorens, a web developer and SEO specialist. I design and build fast, modern websites engineered to rank on Google and turn visitors into customers.',
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

    'services.kicker': 'What I do for you',
    'services.title': 'Web development & SEO services',
    'services.subtitle':
      'Everything your business needs for a professional, profitable online presence.',

    'work.kicker': 'Portfolio',
    'work.title': 'Real projects, real results',
    'work.subtitle':
      'A selection of websites I’ve designed and developed for real businesses.',
    'work.visit': 'Visit site',
    'work.result': 'Result',
    'work.cta': 'Want to be the next project?',

    'pricing.kicker': 'Pricing',
    'pricing.title': 'Clear plans, no surprises',
    'pricing.subtitle':
      'Indicative “from” prices. Every project is unique: I’ll send you a tailored quote with no commitment.',
    'pricing.note': 'All plans include custom design, a responsive website and optimized code. Need something different? Let’s talk.',
    'pricing.popular': 'Most popular',

    'compare.kicker': 'Why me',
    'compare.title': 'Freelancer, template or agency',
    'compare.subtitle': 'What you gain working directly with me versus the alternatives.',
    'compare.feature': 'What we compare',

    'proof.title': 'This very website is my best business card',
    'proof.subtitle': 'I measure on my own site what I sell. These are its real results:',
    'proof.seo': 'SEO',
    'proof.best': 'Best practices',
    'proof.a11y': 'Accessibility',
    'proof.perf': 'Performance',

    'backend.kicker': 'Beyond websites',
    'backend.title': 'Backend, APIs & custom software',
    'backend.subtitle':
      'I don’t just design pretty websites: I build the logic that runs your business under the hood, from orders to payments. I’m a full-stack developer.',
    'backend.proof': 'I applied it at El Buey Madurado: I built the full order management, reservations and secure access.',
    'backend.cta': 'Tell me what you need',

    'process.kicker': 'How I work',
    'process.title': 'A clear process, no surprises',
    'process.subtitle':
      'From the first idea to launch and growth, you always know what’s happening.',

    'about.kicker': 'About me',
    'about.title': 'Hi, I’m Michael Llorens',
    'about.p1':
      'I’m a full-stack developer passionate about SEO. I build websites and apps that not only look incredible, but are written with clean code to be fast, accessible and to rank on Google.',
    'about.p2':
      'I work with modern technologies like Astro, which lets me deliver ultra-fast, finely optimized websites. I treat every project as if it were my own: attention to detail, close communication, and one goal — getting your business more clients.',
    'about.cta': 'Let’s talk about your project',
    'about.skills.title': 'Technologies & tools',

    'testimonials.kicker': 'Trust',
    'testimonials.title': 'What clients say',
    'testimonials.subtitle':
      'The best advertising is great work and a happy client.',

    'faq.kicker': 'FAQ',
    'faq.title': 'Frequently asked questions',
    'faq.subtitle': 'Can’t find your answer? Drop me a line and I’ll be glad to help.',

    'contact.kicker': 'Let’s talk',
    'contact.title': 'Tell me about your project',
    'contact.subtitle':
      'Tell me what you need and I’ll reply with a tailored proposal. No commitment.',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Tell me about your project',
    'contact.form.send': 'Send message',
    'contact.form.namePlaceholder': 'Your name',
    'contact.form.emailPlaceholder': 'you@email.com',
    'contact.form.messagePlaceholder': 'What kind of website do you need? Any deadline or reference?',
    'contact.direct': 'Or contact me directly',
    'contact.email.label': 'Email',
    'contact.phone.label': 'Phone / WhatsApp',
    'contact.location.label': 'Location',
    'contact.location.value': 'Xàtiva, Spain · Working remotely',

    'footer.tagline': 'Web development & SEO for businesses that want to grow.',
    'footer.nav': 'Navigation',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
    'footer.madeWith': 'Built with Astro and lots of coffee.',

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
