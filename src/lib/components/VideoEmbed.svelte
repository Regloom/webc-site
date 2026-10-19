<script>
  /**
   * YouTube video behind a click-to-play preview: no player, scripts or cookies
   * are loaded until the visitor asks for it, then youtube-nocookie.com is used.
   *
   * @type {{ id: string, title: string, playLabel: string }}
   */
  let { id, title, playLabel } = $props();

  let playing = $state(false);
</script>

<div class="video">
  {#if playing}
    <iframe
      src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
      {title}
      allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
      allowfullscreen
    ></iframe>
  {:else}
    <button type="button" onclick={() => (playing = true)} aria-label={`${playLabel}: ${title}`}>
      <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" loading="lazy" />
      <span class="play" aria-hidden="true">
        <svg viewBox="0 0 68 48" width="68" height="48"><path d="M66.5 7.7a8.6 8.6 0 0 0-6-6C55.2.3 34 .3 34 .3s-21.2 0-26.5 1.4a8.6 8.6 0 0 0-6 6C.1 13 .1 24 .1 24s0 11 1.4 16.3a8.6 8.6 0 0 0 6 6C12.8 47.7 34 47.7 34 47.7s21.2 0 26.5-1.4a8.6 8.6 0 0 0 6-6C67.9 35 67.9 24 67.9 24s0-11-1.4-16.3z" fill="#f00"/><path d="M45 24 27 14v20z" fill="#fff"/></svg>
      </span>
    </button>
  {/if}
</div>

<style>
  .video {
    position: relative;
    aspect-ratio: 16 / 9;
    border-radius: var(--sapElement_BorderCornerRadius);
    overflow: hidden;
    background: #000;
  }

  iframe,
  button,
  img {
    display: block;
    width: 100%;
    height: 100%;
    border: 0;
  }

  button {
    padding: 0;
    cursor: pointer;
    background: none;
  }

  button:focus-visible {
    outline: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
    outline-offset: -0.25rem;
  }

  img {
    object-fit: cover;
  }

  .play {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    transition: transform 0.15s;
  }

  button:hover .play {
    transform: scale(1.1);
  }
</style>
