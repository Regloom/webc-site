export const SITE_URL = 'https://toegor.app';

export const LANGS = ['en', 'ru'];
export const DEFAULT_LANG = 'en';

/** Open Graph locale per language */
export const OG_LOCALES = { en: 'en_US', ru: 'ru_RU' };
export const THEMES = ['auto', 'light', 'dark'];

/** App theme -> UI5 theme. `sap_horizon_auto` follows prefers-color-scheme on its own. */
export const UI5_THEMES = {
  auto: 'sap_horizon_auto',
  light: 'sap_horizon',
  dark: 'sap_horizon_dark'
};

export const CONTACTS = {
  email: 'tokarevegorka@gmail.com', // TODO: switch to mail@toegor.app once mail is set up
  linkedin: 'https://www.linkedin.com/in/toegor',
  telegram: 'https://t.me/Regloom',
  github: 'https://github.com/Regloom',
  repo: 'https://github.com/Regloom/webc-site',
  cv: '/Egor_Tokarev_CV.pdf'
};

/**
 * Absolute URL of a page in a given language. The default language has no query,
 * other languages get `?lang=…`, so each language version has its own indexable URL.
 *
 * @param {string} pathname
 * @param {string} lang
 */
export function localizedUrl(pathname, lang) {
  return `${SITE_URL}${pathname}${lang === DEFAULT_LANG ? '' : `?lang=${lang}`}`;
}

/**
 * @param {string | undefined} cookie
 * @param {string | null} acceptLanguage
 * @param {string | null} [query] `?lang=` from the URL, which wins over everything else
 */
export function pickLang(cookie, acceptLanguage, query = null) {
  if (query && LANGS.includes(query)) return query;
  if (cookie && LANGS.includes(cookie)) return cookie;
  return /^ru\b/i.test(acceptLanguage ?? '') ? 'ru' : 'en';
}

/** @param {string | undefined} cookie */
export function pickTheme(cookie) {
  return cookie && THEMES.includes(cookie) ? cookie : 'auto';
}
