import { on } from 'svelte/events';

/**
 * Click handler for UI5 controls such as `<ui5-button>`. They are focusable and handle
 * Enter/Space themselves, but Svelte's a11y checks treat unknown custom elements as static,
 * so we attach the listener directly instead of using `onclick`.
 *
 * @param {(event: MouseEvent) => void} handler
 * @returns {import('svelte/attachments').Attachment<HTMLElement>}
 */
export const click = (handler) => (node) => on(node, 'click', handler);

/** @param {string} href */
export function openLink(href) {
  if (href.startsWith('mailto:')) location.href = href;
  else window.open(href, '_blank', 'noopener');
}
