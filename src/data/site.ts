/* ──────────────────────────────────────────────────────────────────────────
   DATOS PRINCIPALES DEL SITIO  ·  EDITA AQUÍ TUS DATOS DE CONTACTO
   ──────────────────────────────────────────────────────────────────────────
   👉 Sustituye los PLACEHOLDER por tus datos reales antes de publicar.
   El número de WhatsApp debe ir en formato internacional sin signos ni espacios
   (ej. 34600000000 para España).
   ────────────────────────────────────────────────────────────────────────── */

export const site = {
  // Nombre de la marca/empresa
  name: 'MetaLogic',
  // Persona física titular (para aviso legal y datos estructurados)
  owner: 'Michael Llorens',
  role: {
    es: 'Desarrollo web & SEO',
    va: 'Desenvolupament web & SEO',
    en: 'Web development & SEO',
  },

  // URL pública (dominio de Vercel). Cámbiala cuando tengas tu dominio propio.
  url: 'https://michael-llorens-web.vercel.app',

  // ⚠️ PLACEHOLDER — cambia por tu email real (cuando tengas el dominio)
  email: 'hola@metalogicweb.com',

  // ⚠️ PLACEHOLDER — cambia por tu teléfono real (formato visible)
  phoneDisplay: '+34 600 000 000',
  // ⚠️ PLACEHOLDER — mismo número en formato internacional para enlaces tel: y WhatsApp
  phoneRaw: '34600000000',

  location: 'Xàtiva, Valencia (España)',

  // 🗓️ OPCIONAL pero MUY recomendado: pega aquí tu enlace de Cal.com o Calendly
  // (ej. 'https://cal.com/michael-llorens/15min'). En cuanto lo rellenes, aparecerá
  // el botón "Reserva una llamada gratis" en la sección de contacto. Si lo dejas
  // vacío, no se muestra nada.
  bookingUrl: '',

  // ⚠️ PLACEHOLDER — cambia o elimina los que no uses
  socials: {
    github: 'https://github.com/Michael-Llorens',
    linkedin: 'https://www.linkedin.com/in/michael-llorens',
    instagram: '',
  },
};

/** Mensaje pre-rellenado al abrir WhatsApp. */
export const whatsappMessage = {
  es: 'Hola MetaLogic, me gustaría información sobre una web.',
  va: 'Hola MetaLogic, m’agradaria informació sobre una web.',
  en: 'Hi MetaLogic, I’d like information about a website.',
};

export function whatsappLink(lang: 'es' | 'va' | 'en'): string {
  const msg = encodeURIComponent(whatsappMessage[lang]);
  return `https://wa.me/${site.phoneRaw}?text=${msg}`;
}
