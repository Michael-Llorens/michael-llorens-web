import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// URL pública del sitio. Ahora apunta al dominio de Vercel.
// 👉 Cuando tengas tu dominio propio (p. ej. metalogicweb.com), cámbialo aquí.
const SITE = 'https://metalogic.vercel.app';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'va', 'en'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-ES',
          va: 'ca-ES-valencia',
          en: 'en-US',
        },
      },
    }),
  ],
  build: {
    // Todo el CSS del sitio son pocos KB: inlinearlo quita las peticiones que
    // bloqueaban el primer pintado (Lighthouse estimaba ~670 ms en móvil).
    inlineStylesheets: 'always',
  },
});
