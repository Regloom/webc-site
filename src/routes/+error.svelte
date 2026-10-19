<script>
  import { resolve } from '$app/paths';
  import { page } from '$app/state';
  import { getSettings } from '$lib/settings.svelte.js';

  const settings = getSettings();
  let t = $derived(settings.t);
</script>

<svelte:head>
  <title>{page.status} · {t.shell.name}</title>
</svelte:head>

<div class="page error">
  <p class="status">{page.status}</p>
  <h1>{page.status === 404 ? t.notFound.title : page.error?.message}</h1>
  {#if page.status === 404}<p>{t.notFound.text}</p>{/if}
  <a href={resolve('/')}>{t.notFound.home}</a>
</div>

<style>
  .error {
    text-align: center;
    padding-top: 4rem;
  }

  .status {
    margin: 0;
    font-size: 4rem;
    font-family: var(--sapFontLightFamily, var(--sapFontFamily));
    color: var(--sapContent_LabelColor);
  }

  h1 {
    margin: 0 0 0.5rem;
    font-weight: normal;
    color: var(--sapTitleColor);
  }

  a {
    color: var(--sapLinkColor);
  }
</style>
