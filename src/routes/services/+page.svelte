<script>
  import "@ui5/webcomponents/dist/Title.js";
  import "@ui5/webcomponents/dist/Panel.js";
  // import { onMount } from 'svelte';

  // let mounted = false;
  // onMount(() => mounted = true);
</script>

<!-- {#if mounted} -->
  <div class="page-container">
    <ui5-title level="H1">Our Services</ui5-title>
    <p>Professional services tailored to meet your business needs.</p>

    <ui5-panel>
      <div slot="header">Consulting Services</div>
      <p>Strategic IT consulting to help you make the right technology decisions.</p>
    </ui5-panel>

    <ui5-panel>
      <div slot="header">Implementation Services</div>
      <p>Expert implementation of SAP solutions and custom development.</p>
    </ui5-panel>

    <ui5-panel>
      <div slot="header">Training Services</div>
      <p>Comprehensive training programs for your team.</p>
    </ui5-panel>

    <ui5-panel>
      <div slot="header">Support Services</div>
      <p>24/7 technical support and maintenance services.</p>
    </ui5-panel>
  </div>
<!-- {/if} -->

<style>
  .page-container {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  ui5-panel {
    margin-bottom: 1rem;
    display: block;
  }
</style>