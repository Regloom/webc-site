<script>
  import '../app.css';
  import '#lib/ui5.js';

  import { untrack } from 'svelte';
  import { goto } from '$app/navigation';
  import { resolve } from '$app/paths';
  import { page } from '$app/state';
  import { click, openLink } from '#lib/attachments.js';
  import { CONTACTS, LANGS, THEMES } from '#lib/config.js';
  import { Settings, setSettings } from '#lib/settings.svelte.js';

  let { data, children } = $props();

  // Preferences come from cookies on the first request; afterwards the client owns them.
  const settings = setSettings(untrack(() => new Settings(data.lang, data.theme)));
  let t = $derived(settings.t);

  /** @type {HTMLElement & { open: boolean, opener: HTMLElement }} */
  let popover;

  const links = [
    { id: 'email', icon: 'email', href: `mailto:${CONTACTS.email}` },
    { id: 'linkedin', icon: 'business-card', href: CONTACTS.linkedin },
    { id: 'telegram', icon: 'paper-plane', href: CONTACTS.telegram },
    { id: 'cv', icon: 'download', href: CONTACTS.cv }
  ];

  /** @param {CustomEvent<{ targetRef: HTMLElement }>} event */
  function toggleProfile(event) {
    popover.opener = event.detail.targetRef;
    popover.open = !popover.open;
  }

  /** @param {CustomEvent<{ item: HTMLElement }>} event */
  function openContact(event) {
    const href = event.detail.item.dataset.href;
    if (href) openLink(href);
  }

  /** @param {CustomEvent<{ selectedItems: HTMLElement[] }>} event */
  const selected = (event) => event.detail.selectedItems[0]?.dataset.value ?? '';
</script>

<svelte:head>
  <title>{t.meta.title}</title>
  <meta name="description" content={t.meta.description} />
</svelte:head>

<ui5-shellbar
  primary-title={t.shell.name}
  secondary-title={t.shell.role}
  onui5-profile-click={toggleProfile}
  onui5-logo-click={() => goto(resolve('/'))}
>
  <img slot="logo" class="logo" src="/logo.svg" alt={t.shell.home} width="28" height="28" />

  {#if page.url.pathname !== '/'}
    <ui5-button slot="startButton" icon="nav-back" tooltip={t.shell.back} accessible-name={t.shell.back} {@attach click(() => goto(resolve('/')))}></ui5-button>
  {/if}

  <ui5-avatar slot="profile" initials="ET" color-scheme="Accent6" accessible-name={t.shell.profileMenu}></ui5-avatar>
</ui5-shellbar>

<ui5-popover bind:this={popover} placement="Bottom" horizontal-align="End" accessible-name={t.shell.profileMenu}>
  <div class="profile">
    <ui5-avatar initials="ET" size="M" color-scheme="Accent6"></ui5-avatar>
    <div>
      <div class="profile-name">{t.shell.name}</div>
      <div class="profile-role">{t.shell.role}</div>
    </div>
  </div>

  <div class="setting">
    <span class="setting-label" id="theme-label">{t.shell.appearance}</span>
    <ui5-segmented-button accessible-name-ref="theme-label" onui5-selection-change={(e) => settings.setTheme(selected(e))}>
      {#each THEMES as theme (theme)}
        <ui5-segmented-button-item data-value={theme} selected={settings.theme === theme}>{t.shell.themes[theme]}</ui5-segmented-button-item>
      {/each}
    </ui5-segmented-button>
  </div>

  <div class="setting">
    <span class="setting-label" id="lang-label">{t.shell.language}</span>
    <ui5-segmented-button accessible-name-ref="lang-label" onui5-selection-change={(e) => settings.setLang(selected(e))}>
      {#each LANGS as lang (lang)}
        <ui5-segmented-button-item data-value={lang} selected={settings.lang === lang}>{lang.toUpperCase()}</ui5-segmented-button-item>
      {/each}
    </ui5-segmented-button>
  </div>

  <div class="setting">
    <span class="setting-label" id="contact-label">{t.shell.contact}</span>
  </div>
  <ui5-list accessible-name-ref="contact-label" separators="None" onui5-item-click={openContact}>
    {#each links as link (link.id)}
      <ui5-li icon={link.icon} data-href={link.href}>{t.tiles[link.id].title}</ui5-li>
    {/each}
  </ui5-list>
</ui5-popover>

<main>
  {@render children()}
</main>

<footer>
  <span>© {new Date().getFullYear()} {t.shell.name}</span>
  <span>
    {t.shell.builtWith} ·
    <a href={CONTACTS.repo} target="_blank" rel="noopener noreferrer">{t.shell.source}</a>
  </span>
</footer>

<style>
  .logo {
    flex: none;
    width: 1.75rem;
    height: 1.75rem;
  }

  .profile {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.25rem 0.25rem 1rem;
    border-bottom: 1px solid var(--sapGroup_TitleBorderColor);
  }

  .profile-name {
    font-family: var(--sapFontBoldFamily);
    font-size: var(--sapFontLargeSize);
    color: var(--sapTextColor);
  }

  .profile-role {
    font-size: var(--sapFontSmallSize);
    color: var(--sapContent_LabelColor);
  }

  .setting {
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
    padding: 0.75rem 0.25rem 0;
  }

  .setting-label {
    font-size: var(--sapFontSmallSize);
    color: var(--sapContent_LabelColor);
  }

  ui5-list {
    margin-top: 0.25rem;
  }

  footer {
    box-sizing: border-box;
    max-width: var(--page-width);
    margin: 0 auto;
    padding: 1.5rem var(--page-gutter) 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0.5rem;
    font-size: var(--sapFontSmallSize);
    color: var(--sapContent_LabelColor);
  }

  footer a {
    color: var(--sapLinkColor);
  }
</style>
