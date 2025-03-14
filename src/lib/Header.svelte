<!-- src/lib/Header.svelte -->
<script lang="js">
  import { goto } from '$app/navigation';
  import { cart } from '$lib/stores/cart'; 
  import { derived } from 'svelte/store';

  function goToCart() {
    goto('/cart');
  }

  function goToHome() {
    goto('/');
  }

  const hasItemsInCart = derived(cart, $cart => $cart.length > 0);
</script>

<div class="header">
  <div></div>

  <button on:click={goToHome} on:keydown={(e) => e.key === 'Enter' && goToHome()} class="logo" aria-label="Go to home">
    <img src="/assets/images/icons/logo.svg" alt="logo" width="90rem" height="90rem">
  </button>

  <button on:click={goToCart} class="cart">
    <img src="/assets/images/icons/cart.svg" alt="cart" width="18" height="18.02">
    {#if $hasItemsInCart}
      <div class="cart-indicator"></div>
    {/if}
  </button>
</div>

<style>
  .header {
      position: sticky;
      top: 0;
      z-index: 1000;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0.25rem 2rem;
      background: 
          linear-gradient(var(--overlay), var(--overlay)),
          url('/assets/images/backgrounds/background.jpg');
      background-position: top;
      width: 100%;
      height: 100px; 
      border-radius: 0 0 50px 50px;
      box-shadow: 0px 4px 54.4px 0px rgba(0, 0, 0, 0.25);
      overflow: hidden; 
      margin-bottom: -40px; 
  }

  .logo {
      height: 100px;
      width: 100px;
      background-color: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0.25rem;
      padding: 0.25rem;
      cursor: pointer;
  }

  .cart {
      position: relative;
      height: 50px;
      width: 50px;
      background-color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0.25rem;
      padding: 0.25rem;
      border-radius: 100%;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
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
</style>