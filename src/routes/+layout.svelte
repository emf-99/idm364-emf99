<script lang="js">
    import { page } from '$app/stores';
    import Header from '$lib/Header.svelte';
    import Hero from '$lib/Hero.svelte';
    import Footer from '$lib/Footer.svelte';
    import '$lib/css/style.css';
    let { children } = $props();
</script>

<!-- {#if $page.url.pathname === '/'}
    <Hero />
{:else}
    <Header />
{/if} -->

<Header />


    <div class="content">
        {@render children?.()}
    </div>

<Footer />

<style>
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background-color: var(--light-gray);
  }
</style>
