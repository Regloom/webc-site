<script>
  import '../app.css';
  
  import "@ui5/webcomponents/dist/Avatar.js";
  import "@ui5/webcomponents/dist/Button.js";
  import "@ui5/webcomponents-fiori/dist/ShellBar.js";
  import "@ui5/webcomponents-icons/dist/AllIcons.js";

  import { page } from '$app/state';

  //setTheme
  // import { onMount } from 'svelte';
  // import { setTheme } from "@ui5/webcomponents-base/dist/config/Theme.js";
  // import "@ui5/webcomponents/dist/Assets.js";
  // import "@ui5/webcomponents-fiori/dist/Assets.js";
  // import "@ui5/webcomponents-icons/dist/Assets.js";
  
  // setTheme("sap_horizon_dark");

  // onMount(() => {
  //   const darkColorScheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  //   setTheme(darkColorScheme ? "sap_horizon_dark" : "sap_horizon");
	// });

  // import { SignIn, SignOut } from "@auth/sveltekit/components"
  import { signIn, signOut } from "@auth/sveltekit/client"
  
  let { children } = $props();
  let popover;

  function openPopover(event) {
    popover.open = !popover.open;
      // popover.opener = event.detail.targetRef;
      // popover.open = true;
  }
  
</script>

<ui5-shellbar
  onui5-profile-click={openPopover}
  primary-title="SAP BTP Cloud Development" 
  secondary-title="by Egor Tokarev">
  <ui5-avatar slot="profile" initials="AN" id="avatar">
    <img 
      alt="User avatar"
      src={page.data?.session?.user?.image ??
        `https://api.dicebear.com/9.x/thumbs/svg?seed=${Math.floor(Math.random() * 100000) + 1}&randomizeIds=true`}
    />
  </ui5-avatar>
  <img slot="logo" alt="Svelte Logo" src="/svelte.svg" />
  {#if page.url.pathname !== '/'}
    <ui5-button icon="nav-back" slot="startButton" role="button" tabindex="0"
      onclick={() => window.history.back()} 
      onkeydown={(e) => {
            if (e.key !== 'Enter' && e.key !== ' ') return;
            e.preventDefault();
            e.target.click();
      }}>
   </ui5-button>
  {/if}
</ui5-shellbar>
<ui5-popover opener="avatar" bind:this={popover} placement="Bottom">
  {#if page.data.session}
  <div class="action-popover-header">
    <ui5-title style="padding: 0.25rem 1rem 0rem 1rem">
      {page.data.session.user?.email ?? page.data.session.user?.name}
    </ui5-title>
  </div>
  <div class="action-popover-content" style="margin-top: 1rem;">
    <ui5-list separators="None">
        <!-- <ui5-li icon="sys-find">App Finder</ui5-li> -->
        <ui5-li icon="settings">Settings</ui5-li>
        <!-- <ui5-li icon="edit">Edit Home Page</ui5-li> -->
        <!-- <ui5-li icon="sys-help">Help</ui5-li> -->
        <!-- <ui5-li icon="log">Sign out</ui5-li> -->
        <ui5-li icon="disconnected" role="button" tabindex="0" onclick={() => signOut()} onkeydown={(e) => {
          if (e.key !== 'Enter' && e.key !== ' ') return;
          e.preventDefault();
          e.target.click();
        }}>Sign Out
          <!-- <SignOut>
            <span slot="submitButton">Sign Out</span>  
          </SignOut> -->
        </ui5-li>
    </ui5-list>
  </div>
  {:else}
    <div class="action-popover-header">
      <ui5-title style="padding: 0.25rem 1rem 0rem 1rem">
        You are not signed in
      </ui5-title>
    </div>
    <div class="action-popover-content" style="margin-top: 1rem;">
      <ui5-list separators="None">
        <ui5-li icon="disconnected" role="button" tabindex="0" onclick={() => signIn()} onkeydown={(e) => {
          if (e.key !== 'Enter' && e.key !== ' ') return;
          e.preventDefault();
          e.target.click();
        }}>Sign In
          <!-- <SignIn>
            <span slot="submitButton">Sign in</span>           
          </SignIn> -->
        </ui5-li>
      </ui5-list>
    </div>
  {/if}
</ui5-popover>

<main>
  {@render children()}
</main>
