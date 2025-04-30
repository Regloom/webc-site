<script>
  import "@ui5/webcomponents/dist/Card.js";
  import "@ui5/webcomponents/dist/CardHeader.js";
  import "@ui5/webcomponents/dist/Icon.js";
  import "@ui5/webcomponents-icons/dist/AllIcons.js";
  
  const pages = [
    // {
    //   title: "Applications",
    //   subtitle: "Our Solutions",
    //   icon: "business-objects-experience",
    //   link: "/applications"
    // },
    {
      title: "Services",
      subtitle: "Professional Services",
      icon: "customer-briefing",
      link: "/services"
    },
    {
      title: "About",
      subtitle: "Get in Touch",
      icon: "contacts",
      link: "/me"
    }
  ];
  const apps = [
    {
      title: "Sample 1",
      subtitle: "keep it simple",
      icon: "business-objects-experience",
      link: "/applications"
    }
  ];

</script>

<ui5-title level="H3">Pages</ui5-title>
<div class="grid">
  {#each pages as tile}
    <a href={tile.link} aria-label="{tile.title}">
      <ui5-card class="tile">         
        <ui5-card-header
          slot="header"
          title-text={tile.title}
          subtitle-text={tile.subtitle}
          interactive>
          <!-- <ui5-icon name={tile.icon} slot="avatar"></ui5-icon> -->
        </ui5-card-header>
        <ui5-icon name={tile.icon} class="tile-icon"></ui5-icon>
      </ui5-card>
    </a>
  {/each}
</div>

<ui5-title level="H3">Demo applications</ui5-title>
<div class="grid">
  {#each apps as tile}
    <a href={tile.link} aria-label="{tile.title}">
      <ui5-card class="tile">         
        <ui5-card-header
          slot="header"
          title-text={tile.title}
          subtitle-text={tile.subtitle}
          interactive>
          <!-- <ui5-icon name={tile.icon} slot="avatar"></ui5-icon> -->
        </ui5-card-header>
        <ui5-icon name={tile.icon} class="tile-icon"></ui5-icon>
      </ui5-card>
    </a>
  {/each}
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    grid-auto-rows: minmax(160px, auto);
    gap: 1rem;
    padding-top: 1rem;
    padding-bottom: 1.5rem;
  }

  .tile {
    height: 100%;
  }

  .tile-icon {
    position: absolute;
    bottom: 2rem;
    left: 1rem;
    height: 2rem;
    width: 2rem;
  }

</style>