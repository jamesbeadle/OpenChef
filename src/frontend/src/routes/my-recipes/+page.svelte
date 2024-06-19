<script lang="ts">
    import LogoIcon from "$lib/icons/logo-icon.svelte";
    import Layout from "../Layout.svelte";
    
    //let games: GameDTO[] = [];


</script>
<Layout>    
    <div class="p-4">
        <div class="flex flex-col bg-OpenChefDarkPurple rounded-md rounded-b-lg border border-OpenChefDarkPurple">
            <div class="flex flex-row items-center px-4 border-b border-b-OpenChefDarkPurple justify-between">
                <div class="flex items-center">
                    <LogoIcon fill='#FFFFFF' className="w-8 mr-2 my-2" />
                    <p class="text-base text-OpenChefDarkPurple">My Games</p>
                </div>
                <button class="btn-add my-2">New Recipe</button>
            </div>
            
            <div class="w-full bg-OpenChefDarkPurple p-4 rounded-b-md flex flex-col text-sm">
                <div class="horizontal-divider my-2" />
                <div class="flex flex-row text-sm space-x-2 items-center">
                    <p>Coming soon.</p>
                </div>
                <div class="horizontal-divider my-2" />
            </div>
        </div>
    </div>
</Layout>
