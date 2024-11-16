<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { browser } from "$app/environment";
  import { initAuthWorker } from "$lib/services/worker.auth.services";
  import { authStore, type AuthSignInParams, type AuthStoreData } from "$lib/stores/auth-store";
  import { BusyScreen, Spinner } from "@dfinity/gix-components";
  import { fade } from "svelte/transition";
  import LogoIcon from "$lib/icons/logo-icon.svelte";
  import "../app.css";
  import MenuIcon from "$lib/icons/menu-icon.svelte";
  import { authSignedInStore } from "$lib/derived/auth.derived";
  import { goto } from "$app/navigation";

  let expanded = false;
  let worker: { syncAuthIdle: (auth: AuthStoreData) => void } | undefined;
  let buttonHeight = 0;
  let sidebar: HTMLElement;
  let heightSet = false;

  const init = async () => await Promise.all([syncAuthStore()]);
  
  $: links = $authSignedInStore ? [
    { name: 'My Recipes', href: '/my-recipes' },
    { name: 'Profile', href: '/profile' },
    { name: 'Connect', href: '#' },
  ] : 
  [
    { name: 'Connect', href: '#' },
  ];

  let lessImportantOptions = [
    { name: 'Whitepaper', href: '/whitepaper' }
  ];

  const syncAuthStore = async () => {
    if (!browser) {
      return;
    }

    try {
      await authStore.sync();
    } catch (err: unknown) {
      console.error("Error syncing auth store", err);
    }
  };

  const updateSidebarHeight = () => {
    if(heightSet){
      return;
    }
    if (browser) {
      requestAnimationFrame(() => {
        const button = document.querySelector(".menu-row");
        if (button) {
          buttonHeight = button.clientHeight;
          const sidebarHeight = window.innerHeight - buttonHeight;
          document.documentElement.style.setProperty('--sidebar-height', `${sidebarHeight}px`);
          heightSet = true;
        }
      });
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    updateSidebarHeight();
    if (browser && expanded && sidebar && !sidebar.contains(event.target as Node)) {
      expanded = false;
    }
  };

  const handleButtonClick = (event: MouseEvent) => {
    event.stopPropagation();
    expanded = !expanded;
  };

  const handleCloseButtonClick = (event: MouseEvent) => {
    event.stopPropagation();
    expanded = false;
  };

  onMount(async () => {
    worker = await initAuthWorker();
    if (browser) {
      window.addEventListener('resize', updateSidebarHeight);
      document.addEventListener('click', handleClickOutside);
    }
    requestAnimationFrame(() => {
      updateSidebarHeight();
    });

  });

  onDestroy(() => {
    if (browser) {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('resize', updateSidebarHeight);
    }
  });

  $: worker, $authStore, (() => worker?.syncAuthIdle($authStore))();

  $: (() => {
    if (!browser) {
      return;
    }

    if ($authStore === undefined) {
      return;
    }

    const spinner = document.querySelector("body > #app-spinner");
    spinner?.remove();
  })();


  function handleLogin() {
    let params: AuthSignInParams = {
      domain: import.meta.env.VITE_AUTH_PROVIDER_URL,
    };
    authStore.signIn(params);
  }


  function handleLogout() {
    authStore.signOut();
    goto("/");
  }
</script>

<svelte:window on:storage={syncAuthStore} />
{#await init()}
  <div in:fade>
    <Spinner />
  </div>
{:then _}
  <div class="menu-row flex items-center bg-OpenChefRed text-white w-full p-2">
    <div class="ml-auto">
      <a class="flex flex-row items-center ml-auto" href="/">
        <p class="text-sm mt-1">OpenChef</p>
        <LogoIcon fill='#FFFFFF' className="w-6 mx-1" />
      </a>
    </div>
  </div>

  <div class="flex">
    <div class="flex-1 p-4">
      <slot />
    </div>
  </div>
{/await}

<BusyScreen />

<style>
  aside {
    position: absolute;
    left: -500px;
    transition: all 0.5s;
    height: var(--sidebar-height);
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  aside.expanded {
    left: 0px;
  }
</style>
