<script>
  import { page } from '$app/state';
  import { DEFAULT_LANG, LANGS, OG_LOCALES, SITE_URL, localizedUrl } from '#lib/config.js';
  import { getSettings } from '#lib/settings.svelte.js';

  /**
   * Per-page <head>: title, description, canonical + hreflang alternates,
   * Open Graph and Twitter card. Every page renders exactly one of these.
   *
   * @type {{ title: string, description?: string, type?: 'website' | 'profile', noindex?: boolean }}
   */
  let { title, description, type = 'website', noindex = false } = $props();

  const settings = getSettings();
  let canonical = $derived(localizedUrl(page.url.pathname, settings.lang));
  let otherLangs = $derived(LANGS.filter((lang) => lang !== settings.lang));
</script>

<svelte:head>
  <title>{title}</title>
  {#if description}
    <meta name="description" content={description} />
  {/if}

  {#if noindex}
    <meta name="robots" content="noindex" />
  {:else}
    <link rel="canonical" href={canonical} />
    {#each LANGS as lang (lang)}
      <link rel="alternate" hreflang={lang} href={localizedUrl(page.url.pathname, lang)} />
    {/each}
    <link rel="alternate" hreflang="x-default" href={localizedUrl(page.url.pathname, DEFAULT_LANG)} />
  {/if}

  <meta property="og:type" content={type} />
  <meta property="og:site_name" content="toegor.app" />
  <meta property="og:title" content={title} />
  {#if description}
    <meta property="og:description" content={description} />
  {/if}
  <meta property="og:url" content={canonical} />
  <meta property="og:image" content={`${SITE_URL}/og-image.png`} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content={settings.t.seo.imageAlt} />
  <meta property="og:locale" content={OG_LOCALES[settings.lang]} />
  {#each otherLangs as lang (lang)}
    <meta property="og:locale:alternate" content={OG_LOCALES[lang]} />
  {/each}
  {#if type === 'profile'}
    <meta property="profile:first_name" content="Egor" />
    <meta property="profile:last_name" content="Tokarev" />
  {/if}

  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>
