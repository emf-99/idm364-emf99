<!-- src/routes/+layout.svelte -->
<script lang="js">
    import { page } from '$app/stores';
    import Header from '$lib/Header.svelte';
    import Hero from '$lib/Hero.svelte';
    import Footer from '$lib/Footer.svelte';
    import '$lib/css/style.css'; 
    import '$lib/css/cart.css'; 
  
    let { children } = $props();
  </script>
  
  <!-- hero for main page only -->
  {#if $page.url.pathname === '/'}
    <Hero />
  {:else}
    <Header />
  {/if}
  
  <div class="content">
    <div class="bg">
      <img src="/assets/images/backgrounds/bg-orb.png" class="orb1" alt="background" />
      <img src="/assets/images/backgrounds/bg-orb.png" class="orb2" alt="background" />
    </div>
    {@render children?.()}
  </div>
  
  <Footer />
  
  <style>
    .content {
      position: relative;
      z-index: 10;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      background-color: var(--light-gray);
      min-height: 100vh;
    }
  
    .bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      overflow: hidden;
      display: flex;
      flex-wrap: wrap;
    }
  
    .bg img {
      width: 100%;
      height: auto;
      border-radius: 1rem;
      background-color: transparent;
    }
  
    .orb1 {
      position: absolute;
      top: 0;
      left: 40rem;
    }
  
    .orb2 {
      position: absolute;
      top: 60rem;
      right: 40rem;
    }
  
    @media (max-width: 1090px) {
      .bg {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, auto);
        gap: 1rem;
      }
  
      .bg img {
        width: 100%;
        height: auto;
      }
  
      .orb1 {
        position: absolute;
        top: 0;
        left: 20rem;
      }
  
      .orb2 {
        position: absolute;
        top: 20rem;
        right: 20rem;
      }
    }
  </style>