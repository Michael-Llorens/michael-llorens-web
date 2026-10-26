import { existsSync } from 'node:fs';

/* ──────────────────────────────────────────────────────────────────────────
   IMÁGENES RESPONSIVE
   Si junto a /projects/foo.webp existe /projects/foo-640.webp, el móvil
   descarga la versión pequeña. Si no existe, se usa solo la original.
   Para crear la versión pequeña de una captura nueva (1280 px de ancho):
     node -e "require('sharp')('public/projects/foo.webp').resize(640).webp({quality:78}).toFile('public/projects/foo-640.webp')"
   ────────────────────────────────────────────────────────────────────────── */

export function projectSrcset(src: string): string | undefined {
  const small = src.replace(/\.(\w+)$/, '-640.$1');
  if (!existsSync(`public${small}`)) return undefined;
  return `${small} 640w, ${src} 1280w`;
}
