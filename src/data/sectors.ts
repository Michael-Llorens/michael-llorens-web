import type { Lang } from '../i18n/config';

/* ──────────────────────────────────────────────────────────────────────────
   SECTORES
   Landing pages por sector (restaurantes, clínicas, comercio, servicios...).
   Convierten mucho mejor que una página genérica y captan SEO de cola larga
   tipo "diseño web para [sector] en Xàtiva/Valencia".

   👉 Para añadir un sector: copia un objeto y rellénalo en los tres idiomas
   con el mismo `slug`. Las rutas y el listado se generan solos.
   El texto es honesto y genérico — no menciona clientes concretos.
   ────────────────────────────────────────────────────────────────────────── */

type Localized<T> = Record<Lang, T>;

export interface Sector {
  slug: string;
  icon: string; // nombre del icono (ver Icon.astro)
  name: string;
  tagline: string;
  intro: string;
  /** Problemas habituales del sector (lo que suele fallar). */
  pains: string[];
  /** Cómo lo resolvemos. */
  solutions: string[];
  /** Qué incluye la web del sector. */
  includes: string[];
}

const sectors: Localized<Sector[]> = {
  es: [
    {
      slug: 'restaurantes',
      icon: 'star',
      name: 'Restaurantes y hostelería',
      tagline: 'Una web que llena mesas, no solo que se ve bonita',
      intro:
        'Tus clientes buscan dónde comer desde el móvil y a última hora. Si tu carta no se ve bien o no apareces en Google, reservan en otro sitio.',
      pains: [
        'La carta en PDF que no se lee bien en el móvil.',
        'No apareces cuando buscan “restaurante cerca de mí”.',
        'Reservas perdidas por no tener un canal claro y rápido.',
        'Fotos de comida que no apetecen o webs lentas.',
      ],
      solutions: [
        'Carta digital rápida, clara y fácil de actualizar.',
        'SEO local para aparecer en Google y Maps de tu zona.',
        'Reserva directa por WhatsApp o formulario, sin fricción.',
        'Diseño apetecible y veloz, pensado para el móvil.',
      ],
      includes: [
        'Carta digital optimizada para móvil',
        'Botón de reserva y contacto por WhatsApp',
        'Galería de fotos y ambiente',
        'Horarios, ubicación y mapa',
        'SEO local desde el primer día',
      ],
    },
    {
      slug: 'clinicas-salud',
      icon: 'shield',
      name: 'Clínicas y salud',
      tagline: 'Transmite confianza antes de la primera consulta',
      intro:
        'En salud, el paciente elige con quién confía. Tu web tiene que transmitir profesionalidad, cercanía y facilitar la cita.',
      pains: [
        'Webs frías que no transmiten confianza ni cercanía.',
        'Difícil pedir cita: sin un canal claro, el paciente abandona.',
        'No apareces en las búsquedas de tu especialidad y ciudad.',
        'Sin información clara de servicios, horarios o ubicación.',
      ],
      solutions: [
        'Diseño profesional y cercano que genera confianza.',
        'Cita o contacto directo por WhatsApp, teléfono o formulario.',
        'SEO local por especialidad y zona.',
        'Páginas claras de servicios, equipo y horarios.',
      ],
      includes: [
        'Páginas de servicios y especialidades',
        'Solicitud de cita y contacto directo',
        'Sección de equipo y confianza',
        'Aviso legal y privacidad sanitaria',
        'SEO local por especialidad',
      ],
    },
    {
      slug: 'comercio-local',
      icon: 'cart',
      name: 'Comercio local y tiendas',
      tagline: 'Que te encuentren y vengan a tu tienda',
      intro:
        'Tengas o no venta online, tu comercio necesita estar en Google con horarios, productos y una imagen que invite a entrar.',
      pains: [
        'La gente no sabe que existes ni qué vendes.',
        'No apareces en Google con tus horarios y ubicación.',
        'Sin escaparate online que muestre tus productos.',
        'Competencia de las grandes plataformas.',
      ],
      solutions: [
        'Presencia en Google con ficha y web optimizadas.',
        'Escaparate de productos o catálogo, con o sin tienda online.',
        'SEO local para captar a quien busca en tu zona.',
        'Imagen de marca cuidada que te diferencia.',
      ],
      includes: [
        'Catálogo o escaparate de productos',
        'Tienda online (opcional)',
        'Horarios, ubicación y contacto',
        'Integración con redes y WhatsApp',
        'SEO local desde el primer día',
      ],
    },
    {
      slug: 'servicios-profesionales',
      icon: 'layers',
      name: 'Servicios profesionales',
      tagline: 'Capta clientes mientras tú trabajas en lo tuyo',
      intro:
        'Abogados, asesorías, instaladores, autónomos… tus clientes te buscan en Google antes de llamar. Tu web tiene que convencerles y darte el contacto.',
      pains: [
        'No apareces cuando buscan tu servicio en tu zona.',
        'Una web que no explica con claridad qué haces.',
        'Pocos contactos: la web no convierte visitas en clientes.',
        'Imagen poco profesional frente a la competencia.',
      ],
      solutions: [
        'SEO local para tu servicio y tu ciudad.',
        'Mensaje claro: qué haces, para quién y por qué tú.',
        'Llamadas a la acción y formularios que captan leads.',
        'Diseño profesional que te posiciona por encima.',
      ],
      includes: [
        'Páginas de servicios orientadas a convertir',
        'Formularios y contacto por WhatsApp',
        'Sección de confianza (sobre ti, garantías)',
        'Blog/recursos para captar tráfico (opcional)',
        'SEO local desde el primer día',
      ],
    },
  ],
  va: [
    {
      slug: 'restaurantes',
      icon: 'star',
      name: 'Restaurants i hostaleria',
      tagline: 'Una web que ompli taules, no sols que es veu bonica',
      intro:
        'Els teus clients busquen on menjar des del mòbil i a última hora. Si la teua carta no es veu bé o no apareixes a Google, reserven en un altre lloc.',
      pains: [
        'La carta en PDF que no es llig bé al mòbil.',
        'No apareixes quan busquen “restaurant prop de mi”.',
        'Reserves perdudes per no tindre un canal clar i ràpid.',
        'Fotos de menjar que no engresquen o webs lentes.',
      ],
      solutions: [
        'Carta digital ràpida, clara i fàcil d’actualitzar.',
        'SEO local per a aparèixer a Google i Maps de la teua zona.',
        'Reserva directa per WhatsApp o formulari, sense fricció.',
        'Disseny apetitós i veloç, pensat per al mòbil.',
      ],
      includes: [
        'Carta digital optimitzada per a mòbil',
        'Botó de reserva i contacte per WhatsApp',
        'Galeria de fotos i ambient',
        'Horaris, ubicació i mapa',
        'SEO local des del primer dia',
      ],
    },
    {
      slug: 'clinicas-salud',
      icon: 'shield',
      name: 'Clíniques i salut',
      tagline: 'Transmet confiança abans de la primera consulta',
      intro:
        'En salut, el pacient tria en qui confia. La teua web ha de transmetre professionalitat, proximitat i facilitar la cita.',
      pains: [
        'Webs fredes que no transmeten confiança ni proximitat.',
        'Difícil demanar cita: sense un canal clar, el pacient abandona.',
        'No apareixes en les cerques de la teua especialitat i ciutat.',
        'Sense informació clara de serveis, horaris o ubicació.',
      ],
      solutions: [
        'Disseny professional i pròxim que genera confiança.',
        'Cita o contacte directe per WhatsApp, telèfon o formulari.',
        'SEO local per especialitat i zona.',
        'Pàgines clares de serveis, equip i horaris.',
      ],
      includes: [
        'Pàgines de serveis i especialitats',
        'Sol·licitud de cita i contacte directe',
        'Secció d’equip i confiança',
        'Avís legal i privacitat sanitària',
        'SEO local per especialitat',
      ],
    },
    {
      slug: 'comercio-local',
      icon: 'cart',
      name: 'Comerç local i botigues',
      tagline: 'Que et troben i vinguen a la teua botiga',
      intro:
        'Tingues o no venda en línia, el teu comerç necessita estar a Google amb horaris, productes i una imatge que convide a entrar.',
      pains: [
        'La gent no sap que existeixes ni què véns.',
        'No apareixes a Google amb els teus horaris i ubicació.',
        'Sense aparador en línia que mostre els teus productes.',
        'Competència de les grans plataformes.',
      ],
      solutions: [
        'Presència a Google amb fitxa i web optimitzades.',
        'Aparador de productes o catàleg, amb o sense botiga en línia.',
        'SEO local per a captar qui busca a la teua zona.',
        'Imatge de marca cuidada que et diferencia.',
      ],
      includes: [
        'Catàleg o aparador de productes',
        'Botiga en línia (opcional)',
        'Horaris, ubicació i contacte',
        'Integració amb xarxes i WhatsApp',
        'SEO local des del primer dia',
      ],
    },
    {
      slug: 'servicios-profesionales',
      icon: 'layers',
      name: 'Serveis professionals',
      tagline: 'Capta clients mentres tu treballes en el teu',
      intro:
        'Advocats, assessories, instal·ladors, autònoms… els teus clients et busquen a Google abans de telefonar. La teua web ha de convèncer-los i donar-te el contacte.',
      pains: [
        'No apareixes quan busquen el teu servei a la teua zona.',
        'Una web que no explica amb claredat què fas.',
        'Pocs contactes: la web no converteix visites en clients.',
        'Imatge poc professional davant la competència.',
      ],
      solutions: [
        'SEO local per al teu servei i la teua ciutat.',
        'Missatge clar: què fas, per a qui i per què tu.',
        'Crides a l’acció i formularis que capten leads.',
        'Disseny professional que et posiciona per damunt.',
      ],
      includes: [
        'Pàgines de serveis orientades a convertir',
        'Formularis i contacte per WhatsApp',
        'Secció de confiança (sobre tu, garanties)',
        'Blog/recursos per a captar trànsit (opcional)',
        'SEO local des del primer dia',
      ],
    },
  ],
  en: [
    {
      slug: 'restaurantes',
      icon: 'star',
      name: 'Restaurants & hospitality',
      tagline: 'A website that fills tables, not just one that looks nice',
      intro:
        'Your customers look for somewhere to eat on their phone, often last minute. If your menu looks bad or you don’t show up on Google, they book elsewhere.',
      pains: [
        'A PDF menu that’s hard to read on mobile.',
        'You don’t appear when people search “restaurant near me”.',
        'Lost bookings for lack of a clear, fast channel.',
        'Unappetizing food photos or slow websites.',
      ],
      solutions: [
        'A fast, clear digital menu that’s easy to update.',
        'Local SEO to appear on Google and Maps in your area.',
        'Direct booking via WhatsApp or form, friction-free.',
        'An appetizing, fast design built for mobile.',
      ],
      includes: [
        'Mobile-optimized digital menu',
        'Booking and WhatsApp contact button',
        'Photo and ambience gallery',
        'Hours, location and map',
        'Local SEO from day one',
      ],
    },
    {
      slug: 'clinicas-salud',
      icon: 'shield',
      name: 'Clinics & healthcare',
      tagline: 'Build trust before the first appointment',
      intro:
        'In healthcare, patients choose who they trust. Your website must convey professionalism, warmth and make booking easy.',
      pains: [
        'Cold websites that convey no trust or warmth.',
        'Hard to book: without a clear channel, patients leave.',
        'You don’t appear in searches for your specialty and city.',
        'No clear info on services, hours or location.',
      ],
      solutions: [
        'A professional, warm design that builds trust.',
        'Booking or direct contact via WhatsApp, phone or form.',
        'Local SEO by specialty and area.',
        'Clear pages for services, team and hours.',
      ],
      includes: [
        'Services and specialty pages',
        'Appointment requests and direct contact',
        'Team and trust section',
        'Legal notice and health privacy',
        'Local SEO by specialty',
      ],
    },
    {
      slug: 'comercio-local',
      icon: 'cart',
      name: 'Local shops & retail',
      tagline: 'Get found and bring people into your shop',
      intro:
        'Whether or not you sell online, your shop needs to be on Google with hours, products and an image that invites people in.',
      pains: [
        'People don’t know you exist or what you sell.',
        'You don’t appear on Google with your hours and location.',
        'No online showcase for your products.',
        'Competition from the big platforms.',
      ],
      solutions: [
        'A presence on Google with an optimized profile and site.',
        'A product showcase or catalog, with or without an online store.',
        'Local SEO to capture people searching in your area.',
        'A polished brand image that sets you apart.',
      ],
      includes: [
        'Product catalog or showcase',
        'Online store (optional)',
        'Hours, location and contact',
        'Social and WhatsApp integration',
        'Local SEO from day one',
      ],
    },
    {
      slug: 'servicios-profesionales',
      icon: 'layers',
      name: 'Professional services',
      tagline: 'Win clients while you focus on your work',
      intro:
        'Lawyers, advisors, installers, freelancers… your clients search for you on Google before they call. Your website has to convince them and get you the contact.',
      pains: [
        'You don’t appear when people search your service in your area.',
        'A website that doesn’t clearly explain what you do.',
        'Few enquiries: the site doesn’t turn visits into clients.',
        'An unprofessional image next to the competition.',
      ],
      solutions: [
        'Local SEO for your service and your city.',
        'A clear message: what you do, for whom and why you.',
        'Calls to action and forms that capture leads.',
        'A professional design that puts you on top.',
      ],
      includes: [
        'Conversion-focused service pages',
        'Forms and WhatsApp contact',
        'Trust section (about you, guarantees)',
        'Blog/resources to capture traffic (optional)',
        'Local SEO from day one',
      ],
    },
  ],
};

export const getSectors = (lang: Lang): Sector[] => sectors[lang];

export const getSector = (lang: Lang, slug: string): Sector | undefined =>
  sectors[lang].find((s) => s.slug === slug);

/** Slugs únicos (compartidos entre idiomas) para generar rutas estáticas. */
export const getSectorSlugs = (): string[] => sectors.es.map((s) => s.slug);
