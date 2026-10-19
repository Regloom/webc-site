import { pickLang, pickTheme, UI5_THEMES } from '$lib/config.js';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  const lang = pickLang(event.cookies.get('lang'), event.request.headers.get('accept-language'));
  const theme = pickTheme(event.cookies.get('theme'));
  event.locals.lang = lang;
  event.locals.theme = theme;

  // Render <html lang>, data-theme and the UI5 boot config on the server so there is no flash on load.
  return resolve(event, {
    transformPageChunk: ({ html }) =>
      html
        .replace('%lang%', lang)
        .replace('%theme%', theme)
        .replace('%ui5-theme%', UI5_THEMES[theme])
        .replace('%ui5-lang%', lang)
  });
}
