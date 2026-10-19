<script>
  import { resolve } from '$app/paths';
  import Tile from '$lib/components/Tile.svelte';
  import TileGroup from '$lib/components/TileGroup.svelte';
  import { CONTACTS } from '$lib/config.js';
  import { getSettings } from '$lib/settings.svelte.js';

  const settings = getSettings();
  let t = $derived(settings.t);

  const about = [
    { id: 'profile', href: resolve('/me'), icon: 'employee' },
    { id: 'experience', href: resolve('/experience'), kpi: '15+' },
    { id: 'services', href: resolve('/services'), icon: 'customer-briefing' },
    { id: 'cv', href: CONTACTS.cv, icon: 'download', external: true }
  ];

  // TODO: add real projects here (and their texts under `tiles` in src/lib/i18n/*.js)
  const projects = [
    { id: 'site', href: CONTACTS.repo, tags: ['Svelte 5', 'UI5'], wide: true, external: true },
    { id: 'github', href: CONTACTS.github, icon: 'source-code', external: true }
  ];

  const contacts = [
    { id: 'email', href: `mailto:${CONTACTS.email}`, icon: 'email' },
    { id: 'linkedin', href: CONTACTS.linkedin, icon: 'business-card', external: true },
    { id: 'telegram', href: CONTACTS.telegram, icon: 'paper-plane', external: true }
  ];

  const groups = [
    { id: 'about', tiles: about },
    { id: 'projects', tiles: projects },
    { id: 'contact', tiles: contacts }
  ];
</script>

<div class="page">
  <section class="intro">
    <h1>{t.home.hello}</h1>
    <p class="tagline">{t.home.tagline}</p>
    <p class="hint">{t.home.hint}</p>
  </section>

  {#each groups as group (group.id)}
    <TileGroup title={t.home.groups[group.id]}>
      {#each group.tiles as tile (tile.id)}
        <Tile {...tile} {...t.tiles[tile.id]} />
      {/each}
    </TileGroup>
  {/each}
</div>

<style>
  .intro {
    max-width: 46rem;
    margin: 1rem 0 2.5rem;
  }

  h1 {
    margin: 0 0 0.75rem;
    font-family: var(--sapFontHeaderFamily, var(--sapFontBoldFamily));
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    font-weight: normal;
    line-height: 1.2;
    color: var(--sapTitleColor);
  }

  .tagline {
    margin: 0 0 0.5rem;
    font-size: var(--sapFontLargeSize);
    line-height: 1.6;
    color: var(--sapTextColor);
  }

  .hint {
    margin: 0;
    color: var(--sapContent_LabelColor);
  }
</style>
