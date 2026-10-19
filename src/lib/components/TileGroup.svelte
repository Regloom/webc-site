<script>
  /** @type {{ title: string, children: import('svelte').Snippet }} */
  let { title, children } = $props();
</script>

<section class="group">
  <h2>{title}</h2>
  <div class="tiles">
    {@render children()}
  </div>
</section>

<style>
  .group {
    margin-bottom: 2rem;
  }

  h2 {
    margin: 0 0 0.75rem;
    font-family: var(--sapFontHeaderFamily, var(--sapFontBoldFamily));
    font-size: var(--sapFontHeader5Size, 1.25rem);
    font-weight: normal;
    color: var(--sapGroup_TitleTextColor, var(--sapTextColor));
  }

  .tiles {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
</style>
