import { DEFAULT_LANG, LANGS, localizedUrl } from '#lib/config.js';
import { PROJECTS } from '#lib/projects.js';

const PAGES = ['/', '/me', '/experience', '/services', ...Object.keys(PROJECTS).map((slug) => `/projects/${slug}`)];

/** Every language version gets its own <url>, each listing all alternates (as Google recommends). */
export function GET() {
  const alternates = (/** @type {string} */ path) =>
    [...LANGS, 'x-default']
      .map((lang) => {
        const href = localizedUrl(path, lang === 'x-default' ? DEFAULT_LANG : lang).replaceAll('&', '&amp;');
        return `    <xhtml:link rel="alternate" hreflang="${lang}" href="${href}"/>`;
      })
      .join('\n');

  const urls = PAGES.flatMap((path) =>
    LANGS.map(
      (lang) => `  <url>
    <loc>${localizedUrl(path, lang).replaceAll('&', '&amp;')}</loc>
${alternates(path)}
  </url>`
    )
  ).join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } }
  );
}
