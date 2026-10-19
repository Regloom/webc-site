<script>
  /**
   * Object page style header used by every "app" page.
   * @type {{
   *   title: string,
   *   subtitle?: string,
   *   initials?: string,
   *   children?: import('svelte').Snippet,
   *   actions?: import('svelte').Snippet
   * }}
   */
  let { title, subtitle, initials, children, actions } = $props();
</script>

<header class="page-header">
  <div class="inner">
    {#if initials}
      <ui5-avatar initials={initials} size="L" color-scheme="Accent6" class="avatar"></ui5-avatar>
    {/if}

    <div class="text">
      <h1>{title}</h1>
      {#if subtitle}<p class="subtitle">{subtitle}</p>{/if}
      {@render children?.()}
    </div>

    {#if actions}
      <div class="actions">{@render actions()}</div>
    {/if}
  </div>
</header>

<style>
  .page-header {
    background: var(--sapObjectHeader_Background);
    box-shadow: var(--sapContent_HeaderShadow);
  }

  .inner {
    box-sizing: border-box;
    max-width: var(--page-width);
    margin: 0 auto;
    padding: 1.5rem var(--page-gutter);
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.25rem;
  }

  .text {
    flex: 1 1 18rem;
    min-width: 0;
  }

  h1 {
    margin: 0;
    font-family: var(--sapFontHeaderFamily, var(--sapFontBoldFamily));
    font-size: var(--sapObjectHeader_Title_FontSize, 1.5rem);
    font-weight: normal;
    color: var(--sapObjectHeader_Title_TextColor, var(--sapTextColor));
  }

  .subtitle {
    margin: 0.25rem 0 0;
    color: var(--sapObjectHeader_Subtitle_TextColor, var(--sapContent_LabelColor));
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
</style>
