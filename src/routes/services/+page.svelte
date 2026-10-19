<script>
  import PageHeader from '$lib/components/PageHeader.svelte';
  import { click, openLink } from '$lib/attachments.js';
  import { CONTACTS } from '$lib/config.js';
  import { getSettings } from '$lib/settings.svelte.js';

  const settings = getSettings();
  let t = $derived(settings.t);
  let services = $derived(t.services);
</script>

<svelte:head>
  <title>{services.title} · {t.shell.name}</title>
</svelte:head>

<PageHeader title={services.title} subtitle={services.subtitle} />

<div class="page cards">
  {#each services.items as service (service.icon)}
    <ui5-card>
      <ui5-card-header slot="header" title-text={service.title}>
        <ui5-icon slot="avatar" name={service.icon}></ui5-icon>
      </ui5-card-header>
      <ul class="card-body points">
        {#each service.points as point (point)}
          <li>{point}</li>
        {/each}
      </ul>
    </ui5-card>
  {/each}

  <ui5-card class="full-width">
    <div class="cta">
      <div>
        <h2>{services.cta.title}</h2>
        <p>{services.cta.text}</p>
      </div>
      <ui5-button design="Emphasized" icon="email" {@attach click(() => openLink(`mailto:${CONTACTS.email}`))}>
        {services.cta.button}
      </ui5-button>
    </div>
  </ui5-card>
</div>

<style>
  .points {
    margin: 0;
    padding-left: 2.25rem;
    line-height: 1.8;
    color: var(--sapTextColor);
  }

  .cta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 1.25rem 1.5rem;
  }

  .cta h2 {
    margin: 0 0 0.25rem;
    font-family: var(--sapFontHeaderFamily, var(--sapFontBoldFamily));
    font-size: var(--sapFontHeader5Size);
    font-weight: normal;
    color: var(--sapTitleColor);
  }

  .cta p {
    margin: 0;
    color: var(--sapContent_LabelColor);
  }
</style>
