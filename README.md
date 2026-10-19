# toegor.app

Personal site of Egor Tokarev, built to look like an **SAP Fiori launchpad** (Horizon theme) out of
[UI5 Web Components](https://ui5.github.io/webcomponents/) and **SvelteKit / Svelte 5**.

- Launchpad home page with tile groups, plus "apps" for Profile, Experience and Services
- Light / dark / system theme (`sap_horizon`, `sap_horizon_dark`, `sap_horizon_auto`)
- English and Russian, picked from the `lang` cookie or the browser's `Accept-Language`

## Development

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # production build (adapter-node) in ./build
node build       # run the production build
```

Docker image: `docker build -t webc-site .` (the GitHub workflow builds it and deploys to CapRover).

## Where things live

| What | Where |
| --- | --- |
| All texts (EN / RU) | `src/lib/i18n/en.js`, `src/lib/i18n/ru.js` |
| Contacts, CV path, theme and language lists | `src/lib/config.js` |
| Launchpad tiles and groups | `src/routes/+page.svelte` |
| Tile component (GenericTile look-alike) | `src/lib/components/Tile.svelte` |
| UI5 components and icons in use | `src/lib/ui5.js` |
| Theme and language state | `src/lib/settings.svelte.js` (context), `src/hooks.server.js` (cookies to SSR) |

To add a tile: add an entry to one of the groups in `src/routes/+page.svelte`, its title and subtitle
under `tiles` in both dictionaries, and import its icon in `src/lib/ui5.js`.

The CV is served from `static/Egor_Tokarev_CV.pdf`.
