<!-- src/lib/StickyHeader.svelte -->
<script lang="js">
    import { goto } from '$app/navigation';
    import { cart } from '$lib/stores/cart';
    import { derived } from 'svelte/store';
    import { onMount } from 'svelte';
  
    let isVisible = false; // Track header visibility
    let heroElement; // Reference to observe hero (passed from parent)
  
    export let heroRef; // Prop to receive hero element reference
  
    function goToCart() {
      goto('/cart');
    }
  
    function goToHome() {
      goto('/');
    }
  
    onMount(() => {
      if (!heroRef) return;
  
      const observer = new IntersectionObserver(
        ([entry]) => {
          isVisible = !entry.isIntersecting && entry.boundingClientRect.top < 0;
        },
        { threshold: 0, rootMargin: '0px' }
      );
  
      observer.observe(heroRef);
  
      return () => observer.disconnect();
    });
  
    const hasItemsInCart = derived(cart, $cart => $cart.length > 0);
  </script>
  
  {#if isVisible}
    <header class="sticky-header">
      <button on:click={goToHome} class="logo" aria-label="Go to home">
        <img src="/assets/images/icons/logo.svg" class="logo-img" alt="logo" width="60" height="60">
      </button>
      <button on:click={goToCart} class="cart">
        <img src="/assets/images/icons/cart.svg" alt="cart" width="18" height="18.02">
        {#if $hasItemsInCart}
          <div class="cart-indicator"></div>
        {/if}
      </button>
    </header>
  {/if}
  
  <style>
    .sticky-header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 80px;
      background: var(--olive);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      z-index: 1000;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
      animation: slideIn 0.5s ease-out;
    }
  
    @keyframes slideIn {
      from {
        transform: translateY(-100%);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
  
    .logo {
      background-color: transparent;
      border: none;
      cursor: pointer;
      padding: 0;
    }
  
    .logo-img {
      width: 60px;
      height: 60px;
    }
  
    .cart {
      position: relative;
      height: 50px;
      width: 50px;
      background-color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: .25rem;
      padding: .25rem;
      border-radius: 100%;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      border: none;
      cursor: pointer;
    }
  
    .cart-indicator {
      position: absolute;
      top: 0;
      right: 0;
      width: 10px;
      height: 10px;
      background-color: #D86D24;
      border-radius: 50%;
    }
  
    @media (max-width: 680px) {
      .logo-img {
        width: 50px;
        height: 50px;
      }
    }
  </style>