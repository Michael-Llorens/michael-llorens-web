import type { Lang } from '../i18n/config';

/* ──────────────────────────────────────────────────────────────────────────
   SECTORES
   Landing pages por sector (restaurantes, peluquerías, clínicas, comercio...).
   Convierten mucho mejor que una página genérica y captan SEO de cola larga
   tipo "diseño web para [sector] en Xàtiva/Valencia".

   👉 Para añadir un sector: copia un objeto y rellénalo en los tres idiomas
   con el mismo `slug`. Las rutas y el listado se generan solos.
   Si cambias un `slug` publicado, añade la redirección 301 en vercel.json.
   El texto es honesto y genérico — no menciona clientes concretos.
   ────────────────────────────────────────────────────────────────────────── */

type Localized<T> = Record<Lang, T>;

export interface Sector {
  slug: string;
  icon: string; // nombre del icono (ver Icon.astro)
  name: string;
  tagline: string;
  intro: string;
  /** <title> de la página (≤ 60 caracteres). */
  metaTitle: string;
  /** Meta description (120–158 caracteres). */
  metaDescription: string;
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
      metaTitle: 'Diseño web para restaurantes y bares en Xàtiva | MetaLogic',
      metaDescription:
        'Webs para restaurantes y bares: carta digital, menú del día, reservas y pedidos para llevar por WhatsApp, sin comisiones. SEO local en Xàtiva y Valencia.',
      pains: [
        'La carta en PDF que no se lee bien en el móvil.',
        'No apareces cuando buscan “restaurante cerca de mí”.',
        'Reservas perdidas por no tener un canal claro y rápido.',
        'Comisiones de las apps de comida a domicilio en cada pedido.',
      ],
      solutions: [
        'Carta digital rápida, clara y fácil de actualizar.',
        'SEO local para aparecer en Google y Maps de tu zona.',
        'Reservas y pedidos para llevar desde tu web, confirmados por WhatsApp.',
        'Diseño apetecible y veloz, pensado para el móvil.',
      ],
      includes: [
        'Carta digital y menú del día optimizados para móvil',
        'Reservas online con confirmación y recordatorio',
        'Pedidos para llevar sin comisiones, pagados al recoger',
        'Horarios, ubicación, fotos y mapa',
        'SEO local desde el primer día',
      ],
    },
    {
      slug: 'peluquerias-estetica',
      icon: 'spark',
      name: 'Peluquerías, barberías y estética',
      tagline: 'La agenda llena sin coger el teléfono',
      intro:
        'Tus clientes eligen salón mirando fotos, precios y opiniones en Google. Si pedir cita es difícil, la piden en otro sitio.',
      metaTitle: 'Diseño web para peluquerías y estética | MetaLogic',
      metaDescription:
        'Webs para peluquerías, barberías y centros de estética: citas online 24 h, recordatorios por WhatsApp, galería de trabajos y SEO local para llenar la agenda.',
      pains: [
        'El teléfono suena mientras estás atendiendo a una clienta.',
        'Clientes que no vienen a la cita y huecos vacíos en la agenda.',
        'Dependes de Instagram o de una plataforma de reservas.',
        'No apareces cuando buscan “peluquería” en tu zona.',
      ],
      solutions: [
        'Citas online 24 horas, por profesional y por servicio.',
        'Recordatorio automático el día anterior por WhatsApp o email.',
        'Web de marca propia con tus servicios, precios y trabajos (y tu Booksy integrado, si ya lo usas).',
        'SEO local y ficha de Google cuidada.',
      ],
      includes: [
        'Reserva de citas online',
        'Recordatorios por WhatsApp o email',
        'Servicios, precios y galería de trabajos',
        'Bonos y tarjetas regalo',
        'SEO local desde el primer día',
      ],
    },
    {
      slug: 'clinicas-salud',
      icon: 'shield',
      name: 'Clínicas, salud y veterinarias',
      tagline: 'Transmite confianza antes de la primera consulta',
      intro:
        'Clínicas dentales, fisioterapia, veterinarias… el paciente compara en Google antes de llamar. Tu web tiene que transmitir profesionalidad, cercanía y facilitar la cita.',
      metaTitle: 'Diseño web para clínicas y veterinarias | MetaLogic',
      metaDescription:
        'Webs para clínicas dentales, fisioterapia y veterinarias: cita previa online, recordatorios de revisión y SEO local por tratamiento. Transmite confianza.',
      pains: [
        'Webs frías que no transmiten confianza ni cercanía.',
        'Difícil pedir cita: sin un canal claro, el paciente abandona.',
        'No apareces en las búsquedas de tu especialidad y ciudad.',
        'Pacientes que olvidan su revisión y no vuelven.',
      ],
      solutions: [
        'Diseño profesional y cercano que genera confianza.',
        'Cita previa online, por WhatsApp, teléfono o formulario.',
        'Una página por tratamiento con SEO local por especialidad y zona.',
        'Recordatorios automáticos de cita, revisión o vacunas.',
      ],
      includes: [
        'Páginas de servicios y tratamientos',
        'Cita previa online con recordatorio',
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
        'Floristerías, hornos, moda, ferreterías… tu comercio necesita estar en Google con horarios, productos y una forma fácil de hacerte un encargo.',
      metaTitle: 'Diseño web para comercios y tiendas locales | MetaLogic',
      metaDescription:
        'Webs para comercios, floristerías, hornos y tiendas: escaparate online, pedidos y reservas para recoger en tienda por WhatsApp y SEO local en tu zona.',
      pains: [
        'La gente no sabe que existes ni qué vendes.',
        'No apareces en Google con tus horarios y ubicación.',
        'Encargos por teléfono que se apuntan en papel y se pierden.',
        'Competencia de las grandes plataformas.',
      ],
      solutions: [
        'Presencia en Google con ficha y web optimizadas.',
        'Escaparate o catálogo de productos, siempre actualizado.',
        'Pedidos y reservas desde la web, confirmados por WhatsApp y pagados al recoger.',
        'Imagen de marca cuidada que te diferencia.',
      ],
      includes: [
        'Catálogo o escaparate de productos',
        'Pedidos y encargos con recogida en tienda',
        'Horarios, ubicación y contacto',
        'Integración con redes y WhatsApp',
        'SEO local desde el primer día',
      ],
    },
    {
      slug: 'talleres-automocion',
      icon: 'bolt',
      name: 'Talleres y automoción',
      tagline: 'Que te llamen a ti cuando el coche falla',
      intro:
        'Cuando a alguien se le avería el coche, busca “taller cerca” y llama al primero que le da confianza. Tu web y tu ficha de Google tienen que estar ahí.',
      metaTitle: 'Diseño web para talleres mecánicos | MetaLogic',
      metaDescription:
        'Webs para talleres y automoción: presupuesto con fotos por WhatsApp, cita online, aviso de coche listo y SEO local para aparecer cuando buscan un taller.',
      pains: [
        'No apareces cuando buscan un taller en tu zona.',
        'Llamadas pidiendo precio que no puedes valorar sin ver el coche.',
        'Clientes que llaman una y otra vez para saber si su coche está listo.',
        'Sin una web que transmita confianza y especialidad.',
      ],
      solutions: [
        'SEO local y ficha de Google con reseñas y fotos.',
        'Presupuesto con fotos de la avería por WhatsApp.',
        'Cita online para revisión, aceite o neumáticos.',
        'Aviso de “coche listo” por WhatsApp en un toque.',
      ],
      includes: [
        'Servicios, especialidades y marcas',
        'Presupuesto con fotos por WhatsApp',
        'Cita online',
        'Aviso de coche listo',
        'SEO local desde el primer día',
      ],
    },
    {
      slug: 'oficios-reparaciones',
      icon: 'phone',
      name: 'Oficios y reparaciones',
      tagline: 'Que te llamen a ti cuando hay una urgencia',
      intro:
        'Fontaneros, electricistas, cerrajeros, reformas… quien tiene una urgencia busca en Google y llama al primero que le da confianza. Tu web tiene que estar ahí y ponérselo fácil.',
      metaTitle: 'Webs para fontaneros, electricistas y reformas | MetaLogic',
      metaDescription:
        'Webs para fontaneros, electricistas, cerrajeros y reformas: llamada directa, presupuesto con fotos por WhatsApp y SEO local para captar urgencias.',
      pains: [
        'No apareces cuando buscan “fontanero urgente” en tu zona.',
        'Trabajas en la calle y no puedes atender todas las llamadas.',
        'Presupuestos a ciegas sin saber qué hay que reparar.',
        'Sin fotos de trabajos que demuestren tu experiencia.',
      ],
      solutions: [
        'SEO local para tu oficio y tu ciudad, también para urgencias.',
        'Botón de llamada y de WhatsApp siempre visibles.',
        'Presupuesto con fotos por WhatsApp antes de ir.',
        'Galería de trabajos con el antes y el después.',
      ],
      includes: [
        'Páginas por servicio y zona',
        'Llamada directa y WhatsApp',
        'Presupuesto con fotos',
        'Galería de trabajos',
        'SEO local desde el primer día',
      ],
    },
    {
      slug: 'torneos-y-eventos',
      icon: 'trophy',
      name: 'Torneos y eventos deportivos',
      tagline: 'Marcadores en directo y clasificaciones, sin folios ni grupos de WhatsApp',
      intro:
        'Ligas de pádel, torneos de fútbol sala, campeonatos de cualquier deporte… los jugadores quieren ver resultados y clasificación al momento, no esperar a que alguien actualice un Excel.',
      metaTitle: 'Webs para torneos de pádel con marcador | MetaLogic',
      metaDescription:
        'Webs para ligas y torneos de pádel o fútbol: marcador y clasificación en directo desde el móvil, cuadros, inscripciones y panel para meter resultados.',
      pains: [
        'Clasificaciones en papel o Excel que nadie mira actualizadas.',
        'Grupos de WhatsApp saturados de fotos de resultados.',
        'Jugadores preguntando todo el rato cuándo y contra quién juegan.',
        'Cero imagen de cara a patrocinadores o al club.',
      ],
      solutions: [
        'Marcador y clasificación en directo, accesibles desde el móvil de cualquiera.',
        'Cuadro de partidos y horarios siempre actualizados y visibles.',
        'Panel para que tú (o el árbitro) metáis resultados en segundos.',
        'Una web con tu marca, lista para enseñar a patrocinadores.',
      ],
      includes: [
        'Clasificación y marcador en tiempo real',
        'Cuadro de eliminatorias o liga por grupos',
        'Calendario de partidos y horarios',
        'Panel de gestión para actualizar resultados',
        'Diseño con tu marca o la del club',
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
      metaTitle: 'Disseny web per a restaurants i bars a Xàtiva | MetaLogic',
      metaDescription:
        'Webs per a restaurants i bars: carta digital, menú del dia, reserves i comandes per a emportar per WhatsApp, sense comissions. SEO local a Xàtiva.',
      pains: [
        'La carta en PDF que no es llig bé al mòbil.',
        'No apareixes quan busquen “restaurant prop de mi”.',
        'Reserves perdudes per no tindre un canal clar i ràpid.',
        'Comissions de les apps de menjar a domicili en cada comanda.',
      ],
      solutions: [
        'Carta digital ràpida, clara i fàcil d’actualitzar.',
        'SEO local per a aparèixer a Google i Maps de la teua zona.',
        'Reserves i comandes per a emportar des de la teua web, confirmades per WhatsApp.',
        'Disseny apetitós i veloç, pensat per al mòbil.',
      ],
      includes: [
        'Carta digital i menú del dia optimitzats per a mòbil',
        'Reserves en línia amb confirmació i recordatori',
        'Comandes per a emportar sense comissions, pagades en arreplegar',
        'Horaris, ubicació, fotos i mapa',
        'SEO local des del primer dia',
      ],
    },
    {
      slug: 'peluquerias-estetica',
      icon: 'spark',
      name: 'Perruqueries, barberies i estètica',
      tagline: 'L’agenda plena sense agafar el telèfon',
      intro:
        'Els teus clients trien saló mirant fotos, preus i opinions a Google. Si demanar cita és difícil, la demanen en un altre lloc.',
      metaTitle: 'Disseny web per a perruqueries i estètica | MetaLogic',
      metaDescription:
        'Webs per a perruqueries, barberies i centres d’estètica: cites en línia 24 h, recordatoris per WhatsApp, galeria de treballs i SEO local per omplir l’agenda.',
      pains: [
        'El telèfon sona mentre estàs atenent una clienta.',
        'Clients que no vénen a la cita i buits a l’agenda.',
        'Depens d’Instagram o d’una plataforma de reserves.',
        'No apareixes quan busquen “perruqueria” a la teua zona.',
      ],
      solutions: [
        'Cites en línia 24 hores, per professional i per servei.',
        'Recordatori automàtic el dia abans per WhatsApp o email.',
        'Web de marca pròpia amb els teus serveis, preus i treballs (i el teu Booksy integrat, si ja l’uses).',
        'SEO local i fitxa de Google cuidada.',
      ],
      includes: [
        'Reserva de cites en línia',
        'Recordatoris per WhatsApp o email',
        'Serveis, preus i galeria de treballs',
        'Bons i targetes regal',
        'SEO local des del primer dia',
      ],
    },
    {
      slug: 'clinicas-salud',
      icon: 'shield',
      name: 'Clíniques, salut i veterinàries',
      tagline: 'Transmet confiança abans de la primera consulta',
      intro:
        'Clíniques dentals, fisioteràpia, veterinàries… el pacient compara a Google abans de telefonar. La teua web ha de transmetre professionalitat, proximitat i facilitar la cita.',
      metaTitle: 'Disseny web per a clíniques i veterinàries | MetaLogic',
      metaDescription:
        'Webs per a clíniques dentals, fisioteràpia i veterinàries: cita prèvia en línia, recordatoris de revisió i SEO local per tractament. Transmet confiança.',
      pains: [
        'Webs fredes que no transmeten confiança ni proximitat.',
        'Difícil demanar cita: sense un canal clar, el pacient abandona.',
        'No apareixes en les cerques de la teua especialitat i ciutat.',
        'Pacients que obliden la revisió i no tornen.',
      ],
      solutions: [
        'Disseny professional i pròxim que genera confiança.',
        'Cita prèvia en línia, per WhatsApp, telèfon o formulari.',
        'Una pàgina per tractament amb SEO local per especialitat i zona.',
        'Recordatoris automàtics de cita, revisió o vacunes.',
      ],
      includes: [
        'Pàgines de serveis i tractaments',
        'Cita prèvia en línia amb recordatori',
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
        'Floristeries, forns, moda, ferreteries… el teu comerç necessita estar a Google amb horaris, productes i una manera fàcil de fer-te un encàrrec.',
      metaTitle: 'Disseny web per a comerços i botigues locals | MetaLogic',
      metaDescription:
        'Webs per a comerços, floristeries, forns i botigues: aparador en línia, comandes i reserves per a arreplegar a la botiga per WhatsApp i SEO local.',
      pains: [
        'La gent no sap que existeixes ni què véns.',
        'No apareixes a Google amb els teus horaris i ubicació.',
        'Encàrrecs per telèfon que s’apunten en paper i es perden.',
        'Competència de les grans plataformes.',
      ],
      solutions: [
        'Presència a Google amb fitxa i web optimitzades.',
        'Aparador o catàleg de productes, sempre actualitzat.',
        'Comandes i reserves des de la web, confirmades per WhatsApp i pagades en arreplegar.',
        'Imatge de marca cuidada que et diferencia.',
      ],
      includes: [
        'Catàleg o aparador de productes',
        'Comandes i encàrrecs per a arreplegar a la botiga',
        'Horaris, ubicació i contacte',
        'Integració amb xarxes i WhatsApp',
        'SEO local des del primer dia',
      ],
    },
    {
      slug: 'talleres-automocion',
      icon: 'bolt',
      name: 'Tallers i automoció',
      tagline: 'Que et telefonen a tu quan el cotxe falla',
      intro:
        'Quan a algú se li avaria el cotxe, busca “taller prop” i telefona al primer que li dona confiança. La teua web i la teua fitxa de Google han d’estar ahí.',
      metaTitle: 'Disseny web per a tallers mecànics | MetaLogic',
      metaDescription:
        'Webs per a tallers i automoció: pressupost amb fotos per WhatsApp, cita en línia, avís de cotxe llest i SEO local per a aparéixer quan busquen un taller.',
      pains: [
        'No apareixes quan busquen un taller a la teua zona.',
        'Telefonades demanant preu que no pots valorar sense veure el cotxe.',
        'Clients que telefonen una vegada i una altra per saber si el cotxe està llest.',
        'Sense una web que transmeta confiança i especialitat.',
      ],
      solutions: [
        'SEO local i fitxa de Google amb ressenyes i fotos.',
        'Pressupost amb fotos de l’avaria per WhatsApp.',
        'Cita en línia per a revisió, oli o pneumàtics.',
        'Avís de “cotxe llest” per WhatsApp amb un toc.',
      ],
      includes: [
        'Serveis, especialitats i marques',
        'Pressupost amb fotos per WhatsApp',
        'Cita en línia',
        'Avís de cotxe llest',
        'SEO local des del primer dia',
      ],
    },
    {
      slug: 'oficios-reparaciones',
      icon: 'phone',
      name: 'Oficis i reparacions',
      tagline: 'Que et telefonen a tu quan hi ha una urgència',
      intro:
        'Lampistes, electricistes, manyans, reformes… qui té una urgència busca a Google i telefona al primer que li dona confiança. La teua web ha d’estar ahí i posar-li-ho fàcil.',
      metaTitle: 'Webs per a lampistes, electricistes i reformes | MetaLogic',
      metaDescription:
        'Webs per a lampistes, electricistes, manyans i reformes: telefonada directa, pressupost amb fotos per WhatsApp i SEO local per a captar urgències.',
      pains: [
        'No apareixes quan busquen “lampista urgent” a la teua zona.',
        'Treballes al carrer i no pots atendre totes les telefonades.',
        'Pressupostos a cegues sense saber què cal reparar.',
        'Sense fotos de treballs que demostren la teua experiència.',
      ],
      solutions: [
        'SEO local per al teu ofici i la teua ciutat, també per a urgències.',
        'Botó de telefonada i de WhatsApp sempre visibles.',
        'Pressupost amb fotos per WhatsApp abans d’anar-hi.',
        'Galeria de treballs amb l’abans i el després.',
      ],
      includes: [
        'Pàgines per servei i zona',
        'Telefonada directa i WhatsApp',
        'Pressupost amb fotos',
        'Galeria de treballs',
        'SEO local des del primer dia',
      ],
    },
    {
      slug: 'torneos-y-eventos',
      icon: 'trophy',
      name: 'Torneigs i esdeveniments esportius',
      tagline: 'Marcadors en directe i classificacions, sense fulls ni grups de WhatsApp',
      intro:
        'Lligues de pàdel, torneigs de futbol sala, campionats de qualsevol esport… els jugadors volen veure resultats i classificació a l’instant, no esperar que algú actualitze un Excel.',
      metaTitle: 'Webs per a torneigs de pàdel amb marcador | MetaLogic',
      metaDescription:
        'Webs per a lligues i torneigs de pàdel o futbol: marcador i classificació en directe des del mòbil, quadres, inscripcions i panell per a resultats.',
      pains: [
        'Classificacions en paper o Excel que ningú mira actualitzades.',
        'Grups de WhatsApp saturats de fotos de resultats.',
        'Jugadors preguntant contínuament quan i contra qui juguen.',
        'Cap imatge de cara a patrocinadors o al club.',
      ],
      solutions: [
        'Marcador i classificació en directe, accessibles des del mòbil de qualsevol.',
        'Quadre de partits i horaris sempre actualitzats i visibles.',
        'Panell perquè tu (o l’àrbitre) inserisca resultats en segons.',
        'Una web amb la teua marca, preparada per a mostrar a patrocinadors.',
      ],
      includes: [
        'Classificació i marcador en temps real',
        'Quadre d’eliminatòries o lliga per grups',
        'Calendari de partits i horaris',
        'Panell de gestió per a actualitzar resultats',
        'Disseny amb la teua marca o la del club',
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
      metaTitle: 'Website design for restaurants & bars | MetaLogic',
      metaDescription:
        'Websites for restaurants and bars: digital menu, daily specials, bookings and WhatsApp takeaway orders with no commissions. Local SEO in Valencia.',
      pains: [
        'A PDF menu that’s hard to read on mobile.',
        'You don’t appear when people search “restaurant near me”.',
        'Lost bookings for lack of a clear, fast channel.',
        'Delivery apps taking a commission on every order.',
      ],
      solutions: [
        'A fast, clear digital menu that’s easy to update.',
        'Local SEO to appear on Google and Maps in your area.',
        'Bookings and takeaway orders from your own site, confirmed via WhatsApp.',
        'An appetizing, fast design built for mobile.',
      ],
      includes: [
        'Mobile-optimized digital menu and daily specials',
        'Online bookings with confirmation and reminder',
        'Commission-free takeaway orders, paid on pickup',
        'Hours, location, photos and map',
        'Local SEO from day one',
      ],
    },
    {
      slug: 'peluquerias-estetica',
      icon: 'spark',
      name: 'Hair salons, barbers & beauty',
      tagline: 'A full diary without picking up the phone',
      intro:
        'Your clients choose a salon by looking at photos, prices and reviews on Google. If booking is a hassle, they book somewhere else.',
      metaTitle: 'Website design for hair salons & beauty | MetaLogic',
      metaDescription:
        'Websites for hair salons, barbers and beauty centres: 24/7 online booking, WhatsApp reminders, a gallery of your work and local SEO to fill your diary.',
      pains: [
        'The phone rings while you’re with a client.',
        'No-shows and empty gaps in your diary.',
        'You depend on Instagram or a booking platform.',
        'You don’t appear when people search “hair salon” in your area.',
      ],
      solutions: [
        '24/7 online booking, by stylist and by service.',
        'Automatic reminder the day before via WhatsApp or email.',
        'Your own branded site with services, prices and work (with your Booksy built in, if you already use it).',
        'Local SEO and a well-kept Google Business Profile.',
      ],
      includes: [
        'Online appointment booking',
        'WhatsApp or email reminders',
        'Services, prices and work gallery',
        'Vouchers and gift cards',
        'Local SEO from day one',
      ],
    },
    {
      slug: 'clinicas-salud',
      icon: 'shield',
      name: 'Clinics, healthcare & vets',
      tagline: 'Build trust before the first appointment',
      intro:
        'Dental clinics, physiotherapy, vets… patients compare on Google before they call. Your website must convey professionalism, warmth and make booking easy.',
      metaTitle: 'Website design for clinics & vets | MetaLogic',
      metaDescription:
        'Websites for dental clinics, physiotherapy and vets: online appointments, check-up reminders and local SEO by treatment. Build trust from the first visit.',
      pains: [
        'Cold websites that convey no trust or warmth.',
        'Hard to book: without a clear channel, patients leave.',
        'You don’t appear in searches for your specialty and city.',
        'Patients forget their check-up and don’t come back.',
      ],
      solutions: [
        'A professional, warm design that builds trust.',
        'Online appointments via WhatsApp, phone or form.',
        'A page per treatment with local SEO by specialty and area.',
        'Automatic reminders for appointments, check-ups or vaccines.',
      ],
      includes: [
        'Service and treatment pages',
        'Online appointments with reminders',
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
        'Florists, bakeries, fashion, hardware stores… your shop needs to be on Google with hours, products and an easy way to place an order.',
      metaTitle: 'Website design for local shops | MetaLogic',
      metaDescription:
        'Websites for shops, florists, bakeries and local retail: online showcase, WhatsApp orders and reservations for in-store pickup, and local SEO in your area.',
      pains: [
        'People don’t know you exist or what you sell.',
        'You don’t appear on Google with your hours and location.',
        'Phone orders written on paper that get lost.',
        'Competition from the big platforms.',
      ],
      solutions: [
        'A presence on Google with an optimized profile and site.',
        'A product showcase or catalog, always up to date.',
        'Orders and reservations from your site, confirmed via WhatsApp and paid on pickup.',
        'A polished brand image that sets you apart.',
      ],
      includes: [
        'Product catalog or showcase',
        'Orders with in-store pickup',
        'Hours, location and contact',
        'Social and WhatsApp integration',
        'Local SEO from day one',
      ],
    },
    {
      slug: 'talleres-automocion',
      icon: 'bolt',
      name: 'Car repair & automotive',
      tagline: 'Be the one they call when the car breaks down',
      intro:
        'When someone’s car breaks down, they search “garage near me” and call the first one they trust. Your website and Google profile need to be there.',
      metaTitle: 'Website design for car repair garages | MetaLogic',
      metaDescription:
        'Websites for garages and car services: quotes from photos via WhatsApp, online appointments, “car ready” alerts and local SEO to show up when people search.',
      pains: [
        'You don’t appear when people search for a garage in your area.',
        'Calls asking for prices you can’t give without seeing the car.',
        'Customers calling again and again to ask if their car is ready.',
        'No website that conveys trust and expertise.',
      ],
      solutions: [
        'Local SEO and a Google profile with reviews and photos.',
        'Quotes from photos of the fault via WhatsApp.',
        'Online appointments for service, oil changes or tyres.',
        'A one-tap “car ready” message via WhatsApp.',
      ],
      includes: [
        'Services, specialties and brands',
        'Quotes from photos via WhatsApp',
        'Online appointments',
        '“Car ready” alerts',
        'Local SEO from day one',
      ],
    },
    {
      slug: 'oficios-reparaciones',
      icon: 'phone',
      name: 'Trades & repairs',
      tagline: 'Be the one they call in an emergency',
      intro:
        'Plumbers, electricians, locksmiths, renovation pros… people with an emergency search on Google and call the first one they trust. Your website has to be there and make it easy.',
      metaTitle: 'Websites for plumbers, electricians & builders | MetaLogic',
      metaDescription:
        'Websites for plumbers, electricians, locksmiths and renovation pros: one-tap calls, quotes from photos via WhatsApp and local SEO to win emergency jobs.',
      pains: [
        'You don’t appear when people search “emergency plumber” in your area.',
        'You work on site and can’t answer every call.',
        'Blind quotes without knowing what needs fixing.',
        'No photos of past jobs to prove your experience.',
      ],
      solutions: [
        'Local SEO for your trade and your city, including emergencies.',
        'Call and WhatsApp buttons always visible.',
        'Quotes from photos via WhatsApp before you go.',
        'A gallery of jobs with before and after.',
      ],
      includes: [
        'Pages by service and area',
        'One-tap calls and WhatsApp',
        'Quotes from photos',
        'Work gallery',
        'Local SEO from day one',
      ],
    },
    {
      slug: 'torneos-y-eventos',
      icon: 'trophy',
      name: 'Tournaments & sports events',
      tagline: 'Live scoreboards and standings, no spreadsheets or WhatsApp chaos',
      intro:
        'Padel leagues, five-a-side football tournaments, championships for any sport… players want to see results and standings instantly, not wait for someone to update a spreadsheet.',
      metaTitle: 'Padel tournament websites with live scoring | MetaLogic',
      metaDescription:
        'Websites for padel and football leagues: live scoreboard and standings on any phone, brackets, sign-ups and a dashboard to enter results in seconds.',
      pains: [
        'Standings on paper or in a spreadsheet nobody keeps updated.',
        'WhatsApp groups flooded with photos of results.',
        'Players constantly asking when and against whom they play.',
        'No professional image for sponsors or the club.',
      ],
      solutions: [
        'Live scoreboard and standings, accessible from anyone’s phone.',
        'Match schedule and bracket always up to date and visible.',
        'A dashboard so you (or the referee) can enter results in seconds.',
        'A branded website, ready to show sponsors.',
      ],
      includes: [
        'Real-time standings and scoreboard',
        'Knockout bracket or group-stage league',
        'Match schedule and times',
        'Management dashboard to update results',
        'Design with your brand or the club’s',
      ],
    },
  ],
};

export const getSectors = (lang: Lang): Sector[] => sectors[lang];

export const getSector = (lang: Lang, slug: string): Sector | undefined =>
  sectors[lang].find((s) => s.slug === slug);

/** Slugs únicos (compartidos entre idiomas) para generar rutas estáticas. */
export const getSectorSlugs = (): string[] => sectors.es.map((s) => s.slug);
