import { LANGS, pickLang, pickTheme, UI5_THEMES } from '#lib/config.js';

const YEAR = 60 * 60 * 24 * 365;

/** @type {import('@sveltejs/kit/hooks').Handle} */
export async function handle({ event, resolve }) {
  const query = event.url.searchParams.get('lang');
  const lang = pickLang(event.cookies.get('lang'), event.request.headers.get('accept-language'), query);
  const theme = pickTheme(event.cookies.get('theme'));
  event.locals.lang = lang;
  event.locals.theme = theme;

  // An explicit ?lang= (e.g. from a search result) is remembered for the following pages
  if (query && LANGS.includes(query) && event.cookies.get('lang') !== query) {
    event.cookies.set('lang', query, { path: '/', maxAge: YEAR, sameSite: 'lax', httpOnly: false });
  }

  // Render <html lang>, data-theme and the UI5 boot config on the server so there is no flash on load.
  const response = await resolve(event, {
    transformPageChunk: ({ html }) =>
      html
        .replace('%lang%', lang)
        .replace('%theme%', theme)
        .replace('%ui5-theme%', UI5_THEMES[theme])
        .replace('%ui5-lang%', lang)
  });

  // Without ?lang= the same URL can render in either language
  if (response.headers.get('content-type')?.startsWith('text/html')) {
    response.headers.append('Vary', 'Accept-Language, Cookie');
  }
  return response;
}
