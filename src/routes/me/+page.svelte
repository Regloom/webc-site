<script>
  import PageHeader from '$lib/components/PageHeader.svelte';
  import { click, openLink } from '$lib/attachments.js';
  import { CONTACTS } from '$lib/config.js';
  import { getSettings } from '$lib/settings.svelte.js';

  const settings = getSettings();
  let t = $derived(settings.t);
  let me = $derived(t.me);
</script>

<svelte:head>
  <title>{t.tiles.profile.title} · {t.shell.name}</title>
</svelte:head>

<PageHeader title={t.shell.name} subtitle={me.title} initials="ET">
  <p class="location"><ui5-icon name="map"></ui5-icon>{t.shell.location}</p>

  {#snippet actions()}
    <ui5-button design="Emphasized" icon="email" {@attach click(() => openLink(`mailto:${CONTACTS.email}`))}>{me.contact}</ui5-button>
    <ui5-button icon="download" {@attach click(() => openLink(CONTACTS.cv))}>{me.cv}</ui5-button>
  {/snippet}
</PageHeader>

<div class="page cards">
  <ui5-card class="full-width">
    <ui5-card-header slot="header" title-text={me.about.title}></ui5-card-header>
    <div class="card-body">
      {#each me.about.paragraphs as paragraph (paragraph)}
        <p>{paragraph}</p>
      {/each}
    </div>
  </ui5-card>

  <ui5-card>
    <ui5-card-header slot="header" title-text={me.tech.title}></ui5-card-header>
    <div class="card-body">
      <ul class="tag-list">
        {#each me.tech.items as item (item)}
          <li><ui5-tag design="Information" hide-state-icon>{item}</ui5-tag></li>
        {/each}
      </ul>
    </div>
  </ui5-card>

  <ui5-card>
    <ui5-card-header slot="header" title-text={me.devops.title}></ui5-card-header>
    <div class="card-body">
      <p>{me.devops.text}</p>
      <ul class="tag-list">
        {#each me.devops.items as item (item)}
          <li><ui5-tag design="Neutral" hide-state-icon>{item}</ui5-tag></li>
        {/each}
      </ul>
    </div>
  </ui5-card>

  <ui5-card class="full-width">
    <ui5-card-header slot="header" title-text={me.domain.title}></ui5-card-header>
    <ul class="card-body domains">
      {#each me.domain.items as item (item.code)}
        <li class="domain">
          <ui5-icon name={item.icon} class="domain-icon"></ui5-icon>
          <span>
            <span class="domain-name">{item.name}</span>
            <span class="domain-code">{item.code}</span>
          </span>
        </li>
      {/each}
    </ul>
  </ui5-card>
</div>

<style>
  .location {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    margin: 0.5rem 0 0;
    color: var(--sapContent_LabelColor);
  }

  .location ui5-icon {
    width: 1rem;
    height: 1rem;
    color: var(--sapContent_IconColor);
  }

  .domains {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 14rem), 1fr));
    gap: 0.75rem;
    margin: 0;
    list-style: none;
  }

  .domain {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem;
    border-radius: var(--sapElement_BorderCornerRadius);
    background: var(--sapList_Background);
    border: 1px solid var(--sapList_BorderColor);
  }

  .domain-icon {
    flex: none;
    width: 1.5rem;
    height: 1.5rem;
    color: var(--sapContent_IconColor);
  }

  .domain-name {
    display: block;
    color: var(--sapTextColor);
  }

  .domain-code {
    display: block;
    font-size: var(--sapFontSmallSize);
    color: var(--sapContent_LabelColor);
  }
</style>
