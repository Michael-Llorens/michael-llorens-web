/* ──────────────────────────────────────────────────────────────────────────
   DATOS PRINCIPALES DEL SITIO  ·  EDITA AQUÍ TUS DATOS DE CONTACTO
   ──────────────────────────────────────────────────────────────────────────
   👉 Sustituye los PLACEHOLDER por tus datos reales antes de publicar.
   El número de WhatsApp debe ir en formato internacional sin signos ni espacios
   (ej. 34600000000 para España).
   ────────────────────────────────────────────────────────────────────────── */

export const site = {
  name: 'Michael Llorens',
  role: {
    es: 'Desarrollador full-stack & SEO',
    va: 'Desenvolupador full-stack & SEO',
    en: 'Full-stack developer & SEO',
  },

  // URL pública (dominio de Vercel). Cámbiala cuando tengas tu dominio propio.
  url: 'https://michael-llorens-web.vercel.app',

  // ⚠️ PLACEHOLDER — cambia por tu email real
  email: 'hola@michaelllorens.com',

  // ⚠️ PLACEHOLDER — cambia por tu teléfono real (formato visible)
  phoneDisplay: '+34 600 000 000',
  // ⚠️ PLACEHOLDER — mismo número en formato internacional para enlaces tel: y WhatsApp
  phoneRaw: '34600000000',

  location: 'Xàtiva, Valencia (España)',

  // ⚠️ PLACEHOLDER — cambia o elimina los que no uses
  socials: {
    github: 'https://github.com/Michael-Llorens',
    linkedin: 'https://www.linkedin.com/in/michael-llorens',
    instagram: '',
  },
};

/** Mensaje pre-rellenado al abrir WhatsApp. */
export const whatsappMessage = {
  es: 'Hola Michael, me gustaría información sobre una web.',
  va: 'Hola Michael, m’agradaria informació sobre una web.',
  en: 'Hi Michael, I’d like information about a website.',
};

export function whatsappLink(lang: 'es' | 'va' | 'en'): string {
  const msg = encodeURIComponent(whatsappMessage[lang]);
  return `https://wa.me/${site.phoneRaw}?text=${msg}`;
}
