import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// URL pública del sitio. Ahora apunta al dominio de Vercel.
// 👉 Cuando tengas tu dominio propio (p. ej. metalogicweb.com), cámbialo aquí.
const SITE = 'https://metalogic.vercel.app';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  trailingSlash: 'ignore',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
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
    inlineStylesheets: 'auto',
  },
});
