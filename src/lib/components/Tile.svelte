<script>
  /**
   * Fiori launchpad tile, modelled on sap.m.GenericTile (UI5 Web Components has no tile control).
   * Rendered as a real link so it works without JS and with the keyboard.
   *
   * @type {{
   *   href: string,
   *   title: string,
   *   subtitle?: string,
   *   description?: string,
   *   icon?: string,
   *   kpi?: string,
   *   unit?: string,
   *   tags?: string[],
   *   wide?: boolean,
   *   external?: boolean
   * }}
   */
  let { href, title, subtitle, description, icon, kpi, unit, tags = [], wide = false, external = false } = $props();
</script>

<a
  class={['tile', { wide }]}
  {href}
  target={external ? '_blank' : undefined}
  rel={external ? 'noopener noreferrer' : undefined}
>
  <span class="header">
    <span class="title">{title}</span>
    {#if subtitle}<span class="subtitle">{subtitle}</span>{/if}
  </span>

  {#if wide && description}
    <span class="description">{description}</span>
  {/if}

  <span class="content">
    {#if kpi}
      <span class="kpi">{kpi}{#if unit}<span class="unit">{unit}</span>{/if}</span>
    {:else if icon}
      <ui5-icon name={icon} class="icon" aria-hidden="true"></ui5-icon>
    {/if}

    {#if tags.length}
      <span class="tags">
        {#each tags as tag (tag)}
          <span class="tag">{tag}</span>
        {/each}
      </span>
    {/if}
  </span>
</a>

<style>
  .tile {
    --size: 11rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: var(--size);
    height: var(--size);
    padding: 1rem;
    border-radius: var(--sapTile_BorderCornerRadius, 1rem);
    background: var(--sapTile_Background);
    box-shadow: var(--sapContent_Shadow0);
    color: var(--sapTile_TextColor);
    font-family: var(--sapFontFamily);
    text-decoration: none;
    transition:
      background-color 0.15s,
      box-shadow 0.15s;
  }

  .tile.wide {
    width: calc(var(--size) * 2 + 0.5rem);
  }

  .tile:hover {
    background: var(--sapTile_Hover_Background);
    box-shadow: var(--sapContent_Shadow2);
  }

  .tile:active {
    background: var(--sapTile_Active_Background);
  }

  .tile:focus-visible {
    outline: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
    outline-offset: -0.1875rem;
  }

  .header {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
  }

  .title {
    color: var(--sapTile_TitleTextColor);
    font-family: var(--sapFontBoldFamily);
    font-size: var(--sapFontHeader6Size, 1rem);
    line-height: 1.25;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .subtitle {
    font-size: var(--sapFontSize);
    color: var(--sapTile_TextColor);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .description {
    margin-top: 0.5rem;
    font-size: var(--sapFontSize);
    line-height: 1.4;
    color: var(--sapContent_LabelColor);
  }

  .content {
    margin-top: auto;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 0.5rem;
  }

  .icon {
    width: 2rem;
    height: 2rem;
    color: var(--sapTile_IconColor);
  }

  .kpi {
    font-family: var(--sapFontLightFamily, var(--sapFontFamily));
    font-size: 2.75rem;
    line-height: 1;
    color: var(--sapTile_TitleTextColor);
  }

  .unit {
    margin-left: 0.25rem;
    font-family: var(--sapFontFamily);
    font-size: var(--sapFontSize);
    color: var(--sapTile_TextColor);
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 0.25rem;
  }

  .tag {
    padding: 0.125rem 0.5rem;
    border-radius: 0.5rem;
    background: var(--sapInformationBackground);
    color: var(--sapInformativeTextColor);
    font-size: var(--sapFontSmallSize);
  }

  @media (max-width: 600px) {
    .tile {
      --size: 9.25rem;
      padding: 0.75rem;
    }

    .kpi {
      font-size: 2.25rem;
    }
  }
</style>
