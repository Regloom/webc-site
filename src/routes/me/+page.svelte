<script>
  // import "@ui5/webcomponents/dist/Panel.js";

  import "@ui5/webcomponents/dist/Card.js";
  import "@ui5/webcomponents/dist/CardHeader.js";

  import "@ui5/webcomponents/dist/Button.js";
  import "@ui5/webcomponents/dist/List.js";
  import ListItemStandard from "@ui5/webcomponents/ListItemStandard.js";

  import "@ui5/webcomponents-icons/dist/AllIcons.js";
</script>

<div class="card-container">
  <ui5-card
    heading="Egor Tokarev"
    subheading="SAP BTP Full Stack Developer • Tbilisi, Georgia"
  >
    <div class="card-content">
      <p>
        I’m an experienced <strong>SAP BTP Cloud Developer</strong> with 15+ years
        in solution design and software implementation — bridging both functional
        and technical expertise.
      </p>

      <div style="margin-top: 1.5rem;">
        <strong>Core Technologies:</strong>
        <ui5-list separators="None">
          <ui5-li>🚀 SAP CAP (Node.js)</ui5-li>
          <ui5-li>☁️ Cloud Foundry services</ui5-li>
          <ui5-li>🗄️ SAP HANA (on-prem & cloud)</ui5-li>
          <ui5-li
            >🎨 SAP UI5 (Fiori), Fiori Elements (OData V4), Web Components</ui5-li
          >
        </ui5-list>
      </div>

      <div style="margin-top: 1.5rem;">
        <strong>Domain Expertise:</strong>
        <ui5-list separators="None">
          <ui5-li>🏦 Payments Centralization (SAP PE)</ui5-li>
          <ui5-li>💳 Cards Management (SAP CM)</ui5-li>
          <ui5-li>💰 Deposits Management (SAP DM)</ui5-li>
          <ui5-li>🏡 Loans Management (SAP CML)</ui5-li>
        </ui5-list>
      </div>

      <p style="margin-top: 1.5rem;">
        I’m also experienced in SAP-related DevOps tasks: Linux admin, SAP
        Gateway config, system tuning, transport management, and infra setup.
        <br />
        I deliver full-cycle SAP solutions across all SDLC phases — from Design to
        Post-Go-Live — in both <strong>Agile</strong> and
        <strong>Waterfall</strong> environments.
      </p>
    </div>
  </ui5-card>

  <ui5-card heading="Contact & Links">
    <div class="card-content">
      <ui5-list>
        <ui5-li icon="email" type="Active">
          <a href="mailto:egor@toegor.app">egor@toegor.app</a>
        </ui5-li>

        <ui5-li icon="business-card" type="Active">
          <a
            href="https://www.linkedin.com/in/toegor"
            target="_blank"
            rel="noopener"
          >
            LinkedIn
          </a>
        </ui5-li>

        <ui5-li icon="chain-link" type="Active">
          <a href="https://t.me/toegor" target="_blank" rel="noopener">
            Telegram
          </a>
        </ui5-li>
      </ui5-list>

      <ui5-button
        design="Emphasized"
        icon="download"
        style="margin-top: 1rem;"
        role="button"
        tabindex="0"
        onclick={() => window.open("/Egor_Tokarev_CV.pdf", "_blank")}
        onkeydown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            window.open("/Egor_Tokarev_CV.pdf", "_blank");
          }
        }}
      >
        Download CV
      </ui5-button>
    </div>
  </ui5-card>
</div>

<!-- <ui5-panel header-text="About Me" collapsed="false" style="margin-top: 2rem;">
  <p>
    I’m an experienced <strong>SAP BTP Cloud Developer</strong> with 15+ years in solution design and software implementation — bridging both functional and technical expertise.
  </p>

  <div style="margin-top: 1.5rem;">
    <strong>Core Technologies:</strong>
    <ui5-list separators="None">
      <ui5-li>🚀 SAP CAP (Node.js)</ui5-li>
      <ui5-li>☁️ Cloud Foundry services</ui5-li>
      <ui5-li>🗄️ SAP HANA (on-prem & cloud)</ui5-li>
      <ui5-li>🎨 SAP UI5 (Fiori), Fiori Elements (OData V4), Web Components</ui5-li>
    </ui5-list>
  </div>

  <div style="margin-top: 1.5rem;">
    <strong>Domain Expertise:</strong>
    <ui5-list separators="None">
      <ui5-li>🏦 Payments Centralization (SAP PE)</ui5-li>
      <ui5-li>💳 Cards Management (SAP CM)</ui5-li>
      <ui5-li>💰 Deposits Management (SAP DM)</ui5-li>
      <ui5-li>🏡 Loans Management (SAP CML)</ui5-li>
    </ui5-list>
  </div>

  <p style="margin-top: 1.5rem;">
    I’m also experienced in SAP-related DevOps tasks: Linux admin, SAP Gateway config, system tuning, transport management, and infra setup.
  </p>

  <p>
    I deliver full-cycle SAP solutions across all SDLC phases — from Design to Post-Go-Live — in both <strong>Agile</strong> and <strong>Waterfall</strong> environments.
  </p>
</ui5-panel>

<ui5-panel header-text="Contact" collapsed="false" style="margin-top: 2rem;">
  <ui5-list>
    <ui5-li icon="email" type="Active">
      <a href="mailto:egor@toegor.app" style="text-decoration: none; color: inherit;">egor@toegor.app</a>
    </ui5-li>

    <ui5-li icon="business-card" type="Active">
      <a href="https://www.linkedin.com/in/toegor" target="_blank" rel="noopener" style="text-decoration: none; color: inherit;">
        LinkedIn: @toegor
      </a>
    </ui5-li>

    <ui5-li icon="telegram" type="Active">
      <a href="https://t.me/toegor" target="_blank" rel="noopener" style="text-decoration: none; color: inherit;">
        Telegram: @toegor
      </a>
    </ui5-li>
  </ui5-list>

  <ui5-button 
    design="Emphasized" 
    icon="download" 
    style="margin-top: 1rem;" 
    onClick={() => window.open('/Egor_Tokarev_CV.pdf', '_blank')}>
    Download CV
  </ui5-button>

</ui5-panel> -->

<style>
  .card-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 2rem auto;
    padding: 0 1rem;
  }

  .card-content {
    padding: 1rem;
  }

  /* ui5-list a {
    text-decoration: none;
    color: inherit;
  } */

  /* ui5-card {
    box-shadow: var(--sapContent_Shadow2);
  } */
</style>
