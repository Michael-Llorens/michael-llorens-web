# MetaLogic — Web de desarrollo web y SEO

Web profesional (portfolio + captación de clientes) construida con **Astro**.
Trilingüe (Español / Valencià / English), dark premium, optimizada para SEO y rendimiento.

## 🚀 Comandos

```bash
npm install      # instalar dependencias (solo la primera vez)
npm run dev      # servidor local en http://localhost:4321
npm run build    # genera la web en /dist (lista para publicar)
npm run preview  # previsualiza el build de producción
```

## ✏️ Qué editar (lo más importante)

| Quiero cambiar... | Archivo |
|---|---|
| **Email, teléfono, WhatsApp, redes** | `src/data/site.ts` ⚠️ (ahora son PLACEHOLDER) |
| **Mi dominio real** | `src/data/site.ts` y `astro.config.mjs` (constante `SITE`) y `public/robots.txt` |
| Textos de la web (los 3 idiomas) | `src/i18n/ui.ts` |
| Servicios, proyectos, proceso, testimonios, FAQ | `src/data/content.ts` |
| **Precios de los planes** | `src/data/content.ts` → `pricing` ⚠️ (ajusta los importes) |
| Comparativa (tú vs plantilla vs agencia) | `src/data/content.ts` → `comparison` |
| Puntuaciones que muestras (Proof) | `src/components/Proof.astro` → `scores` |
| Tecnologías que dominas (chips) | `src/data/content.ts` → `skills` |
| Colores y estilo general | `src/styles/global.css` (variables `:root`) |

> ⚠️ **Antes de publicar**, sustituye TODOS los PLACEHOLDER de `src/data/site.ts`
> (email, teléfono y dominio) por tus datos reales. Búscalos por la palabra `PLACEHOLDER`.

### Testimonios
Los testimonios en `src/data/content.ts` son **de ejemplo**. Sustitúyelos por
testimonios reales de tus clientes (con su permiso) cuando los tengas.

### Capturas de los proyectos
Por defecto se muestra un mockup de navegador con el nombre. Para usar capturas
reales, mira `public/projects/LEER-capturas.txt`.

### Imagen para compartir en redes (Open Graph)
`public/og-image.png` es la imagen que se ve al compartir tu web en
WhatsApp/Facebook/LinkedIn/Twitter (las redes NO admiten SVG). Si cambias el
diseño, regenera el PNG a partir de `public/og-image.svg` a 1200×630 px.

### Precios y planes
Los importes de `src/data/content.ts` (`pricing`) son **«desde» orientativos**.
Ajústalos a lo que quieras cobrar. El plan con `highlighted: true` se muestra
destacado como «más popular».

## 📨 Formulario de contacto

El formulario abre el cliente de correo del visitante con el mensaje ya escrito
(funciona sin servidor). Si prefieres recibir los mensajes automáticamente en tu
bandeja, conecta un servicio gratuito como **Formspree** o **Web3Forms**:
edita el bloque `<script>` de `src/components/Contact.astro`.

## 🔍 SEO incluido

- Meta tags, Open Graph y Twitter Cards por idioma
- `hreflang` para los 3 idiomas + `x-default`
- Datos estructurados JSON-LD (Person, ProfessionalService, WebSite, FAQPage)
- Sitemap automático (`/sitemap-index.xml`) y `robots.txt`
- HTML semántico, imágenes lazy, fuentes auto-alojadas → Core Web Vitals altos

## ☁️ Desplegar (recomendado: Vercel)

1. Sube el proyecto a un repositorio de GitHub.
2. En [vercel.com](https://vercel.com) → *New Project* → importa el repo.
3. Vercel detecta Astro automáticamente (build `astro build`, salida `dist`).
4. Añade tu dominio en *Settings → Domains* y actualiza `SITE` en `astro.config.mjs`.

## 🌐 Idiomas / URLs

- Español (por defecto): `/`
- Valencià: `/va`
- English: `/en`

Para editar el contenido de cada idioma: `src/i18n/ui.ts` y `src/data/content.ts`.
