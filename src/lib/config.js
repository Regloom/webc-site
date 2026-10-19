export const LANGS = ['en', 'ru'];
export const THEMES = ['auto', 'light', 'dark'];

/** App theme -> UI5 theme. `sap_horizon_auto` follows prefers-color-scheme on its own. */
export const UI5_THEMES = {
  auto: 'sap_horizon_auto',
  light: 'sap_horizon',
  dark: 'sap_horizon_dark'
};

export const CONTACTS = {
  email: 'egor@toegor.app',
  linkedin: 'https://www.linkedin.com/in/toegor',
  telegram: 'https://t.me/toegor',
  github: 'https://github.com/Regloom',
  repo: 'https://github.com/Regloom/webc-site',
  cv: '/Egor_Tokarev_CV.pdf'
};

/**
 * @param {string | undefined} cookie
 * @param {string | null} acceptLanguage
 */
export function pickLang(cookie, acceptLanguage) {
  if (cookie && LANGS.includes(cookie)) return cookie;
  return /^ru\b/i.test(acceptLanguage ?? '') ? 'ru' : 'en';
}

/** @param {string | undefined} cookie */
export function pickTheme(cookie) {
  return cookie && THEMES.includes(cookie) ? cookie : 'auto';
}
