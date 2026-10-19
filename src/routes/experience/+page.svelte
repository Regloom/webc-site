<script>
  import PageHeader from '$lib/components/PageHeader.svelte';
  import { click, openLink } from '$lib/attachments.js';
  import { CONTACTS } from '$lib/config.js';
  import { getSettings } from '$lib/settings.svelte.js';

  const settings = getSettings();
  let t = $derived(settings.t);
  let experience = $derived(t.experience);
</script>

<svelte:head>
  <title>{experience.title} · {t.shell.name}</title>
</svelte:head>

<PageHeader title={experience.title} subtitle={experience.subtitle}>
  {#snippet actions()}
    <ui5-button icon="download" {@attach click(() => openLink(CONTACTS.cv))}>{experience.cv}</ui5-button>
  {/snippet}
</PageHeader>

<div class="page cards">
  <ui5-card class="full-width">
    <div class="timeline">
      <ui5-timeline accessible-name={experience.title}>
        {#each experience.items as item (item.company + item.period)}
          <ui5-timeline-item title-text={item.company} subtitle-text={`${item.role} · ${item.period}`} icon={item.icon}>
            <p>{item.text}</p>
            <ul class="tag-list">
              {#each item.tags as tag (tag)}
                <li><ui5-tag design="Information" hide-state-icon>{tag}</ui5-tag></li>
              {/each}
            </ul>
          </ui5-timeline-item>
        {/each}
      </ui5-timeline>
    </div>
  </ui5-card>

  <ui5-card>
    <ui5-card-header slot="header" title-text={experience.education.title}>
      <ui5-icon slot="avatar" name="education"></ui5-icon>
    </ui5-card-header>
    <div class="card-body">
      <p class="strong">{experience.education.school}</p>
      <p>{experience.education.degree}</p>
      <p class="muted">{experience.education.period}</p>
    </div>
  </ui5-card>

  <ui5-card>
    <ui5-card-header slot="header" title-text={experience.certifications.title}>
      <ui5-icon slot="avatar" name="official-service"></ui5-icon>
    </ui5-card-header>
    <ul class="card-body certs">
      {#each experience.certifications.items as cert (cert.name)}
        <li>
          <span class="strong">{cert.name}</span>
          <span class="muted">{cert.code}</span>
        </li>
      {/each}
    </ul>
  </ui5-card>
</div>

<style>
  .timeline {
    padding: 1rem;
  }

  .timeline p {
    margin: 0 0 0.75rem;
    line-height: 1.6;
  }

  .card-body p {
    margin: 0 0 0.25rem;
  }

  .strong {
    color: var(--sapTextColor);
    font-family: var(--sapFontSemiboldDuplexFamily, var(--sapFontBoldFamily));
  }

  .muted {
    color: var(--sapContent_LabelColor);
    font-size: var(--sapFontSmallSize);
  }

  .certs {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin: 0;
    list-style: none;
  }

  .certs li {
    display: flex;
    flex-direction: column;
  }
</style>
