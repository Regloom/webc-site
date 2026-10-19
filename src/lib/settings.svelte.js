import { createContext } from 'svelte';
import { setTheme } from '@ui5/webcomponents-base/dist/config/Theme.js';
import { setLanguage } from '@ui5/webcomponents-base/dist/config/Language.js';
import { UI5_THEMES } from './config.js';
import en from './i18n/en.js';
import ru from './i18n/ru.js';

const dictionaries = { en, ru };
const YEAR = 60 * 60 * 24 * 365;

/**
 * @param {string} name
 * @param {string} value
 */
function setCookie(name, value) {
  document.cookie = `${name}=${value}; path=/; max-age=${YEAR}; samesite=lax`;
}

/** Per-request user preferences: language and theme. Shared through context, not a module global, so SSR requests don't leak into each other. */
export class Settings {
  lang = $state('en');
  theme = $state('auto');
  t = $derived(dictionaries[this.lang] ?? en);

  /**
   * @param {string} lang
   * @param {string} theme
   */
  constructor(lang, theme) {
    this.lang = lang;
    this.theme = theme;
  }

  /** @param {string} lang */
  setLang(lang) {
    this.lang = lang;
    setCookie('lang', lang);
    document.documentElement.lang = lang;
    setLanguage(lang);
  }

  /** @param {string} theme */
  setTheme(theme) {
    this.theme = theme;
    setCookie('theme', theme);
    document.documentElement.dataset.theme = theme;
    setTheme(UI5_THEMES[theme]);
  }
}

export const [getSettings, setSettings] = createContext();
