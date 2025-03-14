<!-- src/routes/+layout.svelte -->
<script lang="js">
  import { page } from '$app/stores';
  import Header from '$lib/Header.svelte';
  import Hero from '$lib/Hero.svelte';
  import Footer from '$lib/Footer.svelte';
  import '$lib/css/style.css';
  import '$lib/css/cart.css';

  let { children } = $props();

  let isHeroVisible = $state(true);
  let heroElement = $state();

  $effect(() => {
      console.log('Current isHeroVisible:', isHeroVisible);
      if (heroElement) {
          console.log('Hero element bound:', heroElement);
      } else {
          console.log('Hero element not yet bound');
      }
  });

  $effect(() => {
      if (heroElement && typeof window !== 'undefined') {
          const observer = new IntersectionObserver(
              (entries) => {
                  entries.forEach((entry) => {
                      console.log('Observer fired:', entry.isIntersecting);
                      isHeroVisible = entry.isIntersecting;
                  });
              },
              { threshold: 0.001 }
          );
          observer.observe(heroElement);
          return () => observer.disconnect();
      }
  });
</script>

{#if $page.url.pathname === '/'}
  <div bind:this={heroElement} style="position: relative; z-index: 100; margin-bottom: -30px;">
      <Hero />
  </div>
  {#if !isHeroVisible}
      <Header />
      {console.log('Rendering Header')}
  {/if}
{:else}
  <Header />
{/if}

<div class="content" style="padding-top: 100px; background: var(--light-gray);">
  <div class="bg">
      <img src="/assets/images/backgrounds/bg-orb.png" class="orb1" alt="background" />
      <img src="/assets/images/backgrounds/bg-orb.png" class="orb2" alt="background" />
      <img src="/assets/images/backgrounds/bg-orb.png" class="orb3 mobile-only" alt="background" />
      <img src="/assets/images/backgrounds/bg-orb.png" class="orb4 mobile-only" alt="background" />
      <img src="/assets/images/backgrounds/bg-orb.png" class="orb5 mobile-only" alt="background" />
      <img src="/assets/images/backgrounds/bg-orb.png" class="orb6 mobile-only" alt="background" />
      <img src="/assets/images/backgrounds/bg-orb.png" class="orb7 mobile-only" alt="background" />
      <img src="/assets/images/backgrounds/bg-orb.png" class="orb8 mobile-only" alt="background" />
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
      overflow: hidden;
  }

  .bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      overflow: hidden;
  }

  .bg img {
      width: 200px;
      height: 200px;
      border-radius: 1rem;
      background-color: transparent;
      position: absolute;
  }

  .orb1 {
      height: 80rem !important;
      width: 80rem !important;
      padding-bottom: 30rem;
      top: 0;
      left: 40rem;
      animation: float1 10s infinite ease-in-out;
  }

  .orb2 {
      height: 80rem !important;
      width: 80rem !important;
      top: 60rem;
      right: 40rem;
      animation: float2 12s infinite ease-in-out;
  }

  @media (max-width: 1090px) {
      .bg {
          height: 650vh;
      }

      .bg img {
          width: 40rem;
          height: 40rem;
      }

      .orb1 {
          top: 0vh;
          left: 5rem;
          height: 40rem !important;
          width: 40rem !important;
          padding-bottom: 0;
          animation: float1-mobile 8s infinite ease-in-out;
      }

      .orb2 {
          top: 85vh;
          right: 5rem;
          height: 40rem !important;
          width: 40rem !important;
          animation: float2-mobile 9s infinite ease-in-out;
      }

      .mobile-only {
          display: block;
      }

      .orb3 {
          top: 170vh;
          left: 2rem;
          height: 40rem !important;
          width: 40rem !important;
          animation: float3-mobile 10s infinite ease-in-out;
      }

      .orb4 {
          top: 255vh;
          right: 2rem;
          height: 40rem !important;
          width: 40rem !important;
          animation: float4-mobile 11s infinite ease-in-out;
      }

      .orb5 {
          top: 340vh;
          left: 4rem;
          height: 40rem !important;
          width: 40rem !important;
          animation: float5-mobile 12s infinite ease-in-out;
      }

      .orb6 {
          top: 425vh;
          right: 4rem;
          height: 40rem !important;
          width: 40rem !important;
          animation: float6-mobile 13s infinite ease-in-out;
      }

      .orb7 {
          top: 510vh;
          left: 3rem;
          height: 40rem !important;
          width: 40rem !important;
          animation: float7-mobile 14s infinite ease-in-out;
      }

      .orb8 {
          top: 595vh;
          right: 3rem;
          height: 40rem !important;
          width: 40rem !important;
          animation: float8-mobile 15s infinite ease-in-out;
      }

      @keyframes float1-mobile {
          0% { transform: translate(0, 0); }
          25% { transform: translate(-5rem, 5rem); }
          50% { transform: translate(3rem, 10rem); }
          75% { transform: translate(-3rem, 7rem); }
          100% { transform: translate(0, 0); }
      }

      @keyframes float2-mobile {
          0% { transform: translate(0, 0); }
          25% { transform: translate(5rem, -7rem); }
          50% { transform: translate(-3rem, -10rem); }
          75% { transform: translate(3rem, -5rem); }
          100% { transform: translate(0, 0); }
      }

      @keyframes float3-mobile {
          0% { transform: translate(0, 0); }
          25% { transform: translate(-4rem, 6rem); }
          50% { transform: translate(4rem, 8rem); }
          75% { transform: translate(-4rem, 4rem); }
          100% { transform: translate(0, 0); }
      }

      @keyframes float4-mobile {
          0% { transform: translate(0, 0); }
          25% { transform: translate(6rem, -6rem); }
          50% { transform: translate(-4rem, -8rem); }
          75% { transform: translate(4rem, -4rem); }
          100% { transform: translate(0, 0); }
      }

      @keyframes float5-mobile {
          0% { transform: translate(0, 0); }
          25% { transform: translate(-5rem, 5rem); }
          50% { transform: translate(5rem, 7rem); }
          75% { transform: translate(-3rem, 9rem); }
          100% { transform: translate(0, 0); }
      }

      @keyframes float6-mobile {
          0% { transform: translate(0, 0); }
          25% { transform: translate(7rem, -5rem); }
          50% { transform: translate(-5rem, -7rem); }
          75% { transform: translate(3rem, -9rem); }
          100% { transform: translate(0, 0); }
      }

      @keyframes float7-mobile {
          0% { transform: translate(0, 0); }
          25% { transform: translate(-6rem, 4rem); }
          50% { transform: translate(6rem, 6rem); }
          75% { transform: translate(-4rem, 8rem); }
          100% { transform: translate(0, 0); }
      }

      @keyframes float8-mobile {
          0% { transform: translate(0, 0); }
          25% { transform: translate(5rem, -8rem); }
          50% { transform: translate(-6rem, -6rem); }
          75% { transform: translate(4rem, -10rem); }
          100% { transform: translate(0, 0); }
      }
  }

  @media (min-width: 1091px) {
      .mobile-only {
          display: none;
      }
  }
</style>