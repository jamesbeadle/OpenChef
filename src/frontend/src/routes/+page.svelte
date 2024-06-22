<script lang="ts">
    import { authSignedInStore } from "$lib/derived/auth.derived";
import LogoIcon from "$lib/icons/logo-icon.svelte";
    import { authStore, type AuthSignInParams } from "$lib/stores/auth-store";
import Layout from "./Layout.svelte";


    function handleLogin() {
        let params: AuthSignInParams = {
        domain: import.meta.env.VITE_AUTH_PROVIDER_URL,
        };
        authStore.signIn(params);
    }
</script>
<Layout>    
    <div class="p-4 bg-OpenChefRed rounded-md">
        <div class="flex flex-row items-center">
            <p class="text-2xl mt-1">Welcome to OpenChef</p>
            <LogoIcon fill='#FFFFFF' className="w-12 ml-2" />
        </div>
        <p class="my-2">Build your own cooking community.</p>
        <a href="/whitepaper">
            <button class="bg-OpenChefMauve my-2 px-4 py-2 text-white rounded-md">Whitepaper</button>
        </a>
    </div>
</Layout>
