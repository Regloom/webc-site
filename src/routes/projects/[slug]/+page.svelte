<script>
  import PageHeader from '#lib/components/PageHeader.svelte';
  import Seo from '#lib/components/Seo.svelte';
  import VideoEmbed from '#lib/components/VideoEmbed.svelte';
  import { click, openLink } from '#lib/attachments.js';
  import { PROJECTS } from '#lib/projects.js';
  import { getSettings } from '#lib/settings.svelte.js';

  let { data } = $props();

  const settings = getSettings();
  let t = $derived(settings.t);
  let labels = $derived(t.projects);
  let text = $derived(t.projects[data.slug]);
  let project = $derived(PROJECTS[data.slug]);
  let website = $derived(project.url[settings.lang] ?? project.url.en);
</script>

<Seo title={`${text.title} · ${t.shell.name}`} description={text.description} />

<PageHeader title={text.title} subtitle={text.subtitle} icon={project.icon}>
  {#snippet actions()}
    <ui5-button design="Emphasized" icon="internet-browser" {@attach click(() => openLink(website))}>{labels.website}</ui5-button>
    {#if project.youtube}
      <ui5-button icon="video" {@attach click(() => openLink(project.youtube))}>{labels.youtube}</ui5-button>
    {/if}
  {/snippet}
</PageHeader>

<div class="page cards">
  <ui5-card class="full-width">
    <ui5-card-header slot="header" title-text={text.about.title}></ui5-card-header>
    <div class="card-body about">
      <div>
        {#each text.about.paragraphs as paragraph (paragraph)}
          <p>{paragraph}</p>
        {/each}
      </div>
      {#if project.featuredVideo}
        <figure>
          <VideoEmbed id={project.featuredVideo.id} title={project.featuredVideo.title} playLabel={labels.play} />
          <figcaption>{project.featuredVideo.title}</figcaption>
        </figure>
      {/if}
    </div>
  </ui5-card>

  {#each text.sections as section (section.title)}
    <ui5-card>
      <ui5-card-header slot="header" title-text={section.title}></ui5-card-header>
      <div class="card-body">
        {#if section.text}<p>{section.text}</p>{/if}
        <ul class="features">
          {#each section.items as item (item.text)}
            <li>
              <ui5-icon name={item.icon} aria-hidden="true"></ui5-icon>
              <span>{item.text}</span>
            </li>
          {/each}
        </ul>
      </div>
    </ui5-card>
  {/each}

  <ui5-card class="full-width">
    <ui5-card-header slot="header" title-text={labels.role}></ui5-card-header>
    <div class="card-body">
      <ul class="role">
        {#each text.role as item (item)}
          <li>{item}</li>
        {/each}
      </ul>
      <ul class="tag-list">
        {#each project.tags as tag (tag)}
          <li><ui5-tag design="Information" hide-state-icon>{tag}</ui5-tag></li>
        {/each}
      </ul>
    </div>
  </ui5-card>

</div>

<style>
  .about {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 26rem);
    gap: 1.5rem;
    align-items: start;
  }

  .about:not(:has(figure)) {
    grid-template-columns: 1fr;
  }

  figure {
    margin: 0;
  }

  figcaption {
    margin-top: 0.5rem;
    font-size: var(--sapFontSmallSize);
    color: var(--sapContent_LabelColor);
  }

  .features,
  .role {
    margin: 0;
    list-style: none;
  }

  .features {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 0;
  }

  .features li {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    line-height: 1.5;
  }

  .features ui5-icon {
    flex: none;
    width: 1.25rem;
    height: 1.25rem;
    margin-top: 0.125rem;
    color: var(--sapContent_IconColor);
  }

  .role {
    padding-left: 1.25rem;
    margin-bottom: 1rem;
    list-style: disc;
    line-height: 1.8;
  }

  @media (max-width: 900px) {
    .about {
      grid-template-columns: 1fr;
    }
  }
</style>
