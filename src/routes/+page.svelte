<script>
  import { resolve } from '$app/paths';
  import Tile from '#lib/components/Tile.svelte';
  import TileGroup from '#lib/components/TileGroup.svelte';
  import { CONTACTS } from '#lib/config.js';
  import { getSettings } from '#lib/settings.svelte.js';

  const settings = getSettings();
  let t = $derived(settings.t);

  const about = [
    { id: 'profile', href: resolve('/me'), icon: 'employee' },
    { id: 'experience', href: resolve('/experience'), kpi: '15+' },
    { id: 'services', href: resolve('/services'), icon: 'customer-briefing' },
    { id: 'ai', href: `${resolve('/me')}#ai`, icon: 'ai', wide: true },
    { id: 'cv', href: CONTACTS.cv, icon: 'download', external: true }
  ];

  // Project tiles; texts live under `tiles` in src/lib/i18n/*.js
  const projects = [
    { id: 'frischluftmanager', href: resolve('/projects/[slug]', { slug: 'frischluftmanager' }), icon: 'weather-proofing', tags: ['SAP BTP', 'HANA Cloud', 'SAP B1'], wide: true },
    { id: 'penka', href: resolve('/projects/[slug]', { slug: 'penka' }), icon: 'factory', tags: ['SAP BTP', 'SAP B1', 'GAEB'], wide: true },
    { id: 'site', href: CONTACTS.repo, tags: ['Svelte 5', 'UI5'], wide: true, external: true }
  ];

  const contacts = [
    { id: 'email', href: `mailto:${CONTACTS.email}`, icon: 'email', subtitle: CONTACTS.email, wide: true },
    { id: 'linkedin', href: CONTACTS.linkedin, icon: 'business-card', external: true },
    { id: 'telegram', href: CONTACTS.telegram, icon: 'paper-plane', subtitle: `@${CONTACTS.telegram.split('/').pop()}`, external: true },
    { id: 'github', href: CONTACTS.github, icon: 'source-code', subtitle: `@${CONTACTS.github.split('/').pop()}`, external: true }
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
    <p class="ai"><ui5-icon name="ai" aria-hidden="true"></ui5-icon>{t.home.ai}</p>
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

  .ai {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0.25rem 0 0.75rem;
    padding: 0.375rem 0.75rem;
    border-radius: 1rem;
    background: var(--sapInformationBackground);
    color: var(--sapInformativeTextColor);
  }

  .ai ui5-icon {
    flex: none;
    width: 1rem;
    height: 1rem;
    color: currentColor;
  }

  .hint {
    margin: 0;
    color: var(--sapContent_LabelColor);
  }
</style>
