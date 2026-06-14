export const LANGUAGES = ['es', 'va', 'en'] as const;
export type Lang = (typeof LANGUAGES)[number];

export const DEFAULT_LANG: Lang = 'es';

// Etiquetas mostradas en el selector de idioma
export const LANG_LABELS: Record<Lang, string> = {
  es: 'ES',
  va: 'VA',
  en: 'EN',
};

export const LANG_NAMES: Record<Lang, string> = {
  es: 'Español',
  va: 'Valencià',
  en: 'English',
};

// Código de idioma para el atributo <html lang> y hreflang
export const LANG_HREFLANG: Record<Lang, string> = {
  es: 'es-ES',
  va: 'ca-ES-valencia',
  en: 'en',
};

/** Prefijo de ruta para cada idioma. El idioma por defecto vive en la raíz. */
export function localePrefix(lang: Lang): string {
  return lang === DEFAULT_LANG ? '' : `/${lang}`;
}

/** Construye una URL relativa para un idioma dado (con la barra inicial correcta). */
export function localizedPath(lang: Lang, path = ''): string {
  const clean = path.replace(/^\/+/, '');
  const prefix = localePrefix(lang);
  if (!clean) return prefix || '/';
  return `${prefix}/${clean}`;
}
