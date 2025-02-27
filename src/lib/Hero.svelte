<!-- src/lib/Hero.svelte -->
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
  
  <div class="hero">
    <div class="hero-top">
      <div></div>
  
      <button on:click={goToCart} class="cart">
        <img src="/assets/images/icons/cart.svg" alt="cart" width="18" height="18.02">
        {#if $hasItemsInCart}
          <div class="cart-indicator"></div>
        {/if}
      </button>
    </div>
  
    <div class="hero-bottom">
      <button on:click={goToHome} on:keydown={(e) => e.key === 'Enter' && goToHome()} class="logo" aria-label="Go to home">
        <img src="/assets/images/icons/logo.svg" alt="logo" width="200rem" height="200rem">
      </button>
  
      <p>expand your cd and vinyl collection while discovering the perfect music player.</p>
  
      <button class="shop-now">
        <p class="shop-now-btn">shop now</p>
        <div class="arrow-icon"> 
          <div class="border">
            <img src="/assets/images/icons/arrow.svg" width="28px" height="27px" alt="cart"/>
          </div>
        </div>
      </button>
    </div>
  </div>
  
  <style>
    .hero {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: .25rem 2rem;
      background-position: bottom; 
      background: 
        linear-gradient(
          var(--overlay), 
          var(--overlay)
        ),
        url('/assets/images/backgrounds/background.jpg');
      width: 100%;
      height: 100%;
      border-radius: 0 0 40px 40px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    }
  
    .hero-top {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      background-color: transparent;
      margin: 2rem;
    }
  
    .hero-bottom {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      background-color: transparent;
      margin: 2rem;
      padding: 2rem;
    }
  
    .logo {
      height: 100px;
      width: 100px;
      background-color: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 5rem;
      padding: 5rem;
      cursor: pointer;
    }
  
    p {
      font-size: 1.5rem;
      color: white;
      text-align: center;
      margin: 1rem;
    }
  
    .shop-now {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 2rem;
      padding-left: 50px;
      border-radius: 132px;
      background: #FFF;
      box-shadow: 0px 4px 54.4px 0px rgba(0, 0, 0, 0.25);
      cursor: pointer;
    }
  
    .shop-now-btn {
      padding-left: 50px;
      align-items: center;
      gap: 50px;
      cursor: pointer;
      color: black;
    }
  
    .arrow-icon {
      display: flex;
      align-items: center;
      border-radius: 100px;
      background: #1C1B1F;
      justify-content: center;
      padding: 1.5rem;
    }
  
    .border {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100px;
      background: var(--white);
      padding: .5rem;
    }
  
    .cart {
      position: relative; /* Added to position the indicator */
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
  
    @media (max-width: 535px) {
      .hero-bottom {
        max-width: 90%;
      }
      .shop-now {
        max-width: 100%;
        height: auto;
        padding-left: 30px;
        gap: 25px;
      }
  
      .shop-now-btn {
        max-width: 100%;
        height: auto;
        padding-left: 2px;
        font-size: 16px;
        margin: 0;
      }
    }
  </style>