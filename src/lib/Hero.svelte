<!-- src/lib/Hero.svelte -->
<script lang="js">
  import { goto } from '$app/navigation';
  import { cart } from '$lib/stores/cart';
  import { derived } from 'svelte/store';

  let hovered = false; 
  let heroElement; 

  function goToCart() {
      goto('/cart');
  }

  function goToHome() {
      goto('/');
  }

  function scrollToBottom() {
      const heroHeight = heroElement.getBoundingClientRect().height;
      window.scrollTo({
          top: heroHeight,
          behavior: 'smooth'
      });
  }

  const hasItemsInCart = derived(cart, $cart => $cart.length > 0);
</script>

<div bind:this={heroElement} class="hero">
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
      <button 
          on:click={goToHome} 
          on:keydown={(e) => e.key === 'Enter' && goToHome()} 
          on:mouseenter={() => hovered = true} 
          on:mouseleave={() => hovered = false} 
          class="logo" 
          aria-label="Go to home"
      >
          <img 
              src="/assets/images/icons/logo.svg" 
              class="logo-img" 
              class:hovered 
              alt="logo" 
              width="400rem" 
              height="400rem"
          >
      </button>

      <p class="hero-text">expand your cd and vinyl collection while discovering the perfect music player.</p>

      <button on:click={scrollToBottom} class="shop-now">
          <p class="shop-now-btn">shop now</p>
          <div class="arrow-icon"> 
              <div class="border">
                  <img src="/assets/images/icons/arrow.svg" class="arrow" width="28px" height="27px" alt="cart"/>
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
      padding: 0.25rem 2rem;
      background: 
          linear-gradient(var(--overlay), var(--overlay)),
          url('/assets/images/backgrounds/background.jpg');
      background-position: bottom;
      width: 100%;
      height: 95vh;
      border-radius: 0 0 60px 60px;
      box-shadow: 0px 4px 54.4px 0px rgba(0, 0, 0, 0.25);
      overflow: hidden; 
      margin-bottom: -50px; 
      position: relative;
  }

  .hero-top {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin: 1rem;
  }

  .hero-bottom {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin: 1rem;
      padding: 1rem;
  }

  .logo {
      height: 80px;
      width: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 2rem;
      padding: 2rem;
      cursor: pointer;
      position: relative;
  }

  .border img {
    height: 20px;
    width: 20px;
  }
  .logo-img {
      width: 500px;
      height: 500px;
      position: absolute;
      bottom: 4vh;
      left: 50%;
      transform: translateX(-50%);
      transition: transform 0.3s ease, filter 0.3s ease;
  }

  .logo-img.hovered {
      transform: translateX(-50%) scale(1.1) rotate(5deg);
      filter: brightness(1.2) drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));
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
      gap: 1rem;
      padding-left: 30px;
      border-radius: 132px;
      background: #FFF;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      cursor: pointer;
  }

  .shop-now-btn {
      padding-left: 30px;
      align-items: center;
      gap: 30px;
      cursor: pointer;
      color: black;
  }

  .arrow-icon {
      display: flex;
      align-items: center;
      border-radius: 100px;
      background: #1C1B1F;
      justify-content: center;
      padding: 1rem;
  }

  .border {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100px;
      background: var(--white);
      padding: 0.5rem;
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

  @media (max-width: 768px) {
      .hero {
          height: 90vh;
          padding: 0.25rem 1rem;
      }

      .hero-top {
          margin: 0.5rem;
      }

      .hero-bottom {
          margin: 0.5rem;
          padding: 0.5rem;
      }

      .logo {
          height: 60px;
          width: 60px;
          margin: 1rem;
          padding: 1rem;
      }

      .logo-img {
          width: 400px;
          height: 400px;
          bottom: 6vh;
      }

      p {
          font-size: 1.2rem;
          margin: 0.5rem;
      }

      .hero-text {
          font-size: 1.2rem;
          margin-bottom: 2rem;
      }

      .shop-now {
          padding-left: 20px;
          gap: 0.5rem;
      }

      .shop-now-btn {
          padding-left: 20px;
          gap: 20px;
          font-size: 1rem;
      }

      .arrow-icon {
          padding: 0.75rem;
      }

      .cart {
          height: 35px;
          width: 35px;
          margin: 2vh 3vw;
      }

      .cart-indicator {
          width: 6px;
          height: 6px;
      }
  }

  @media (max-width: 480px) {
      .hero {
          height: auto;
          min-height: 90vh;
          padding: 0.25rem 0.5rem;
      }

      .hero-bottom {
          max-width: 100%;
      }

      .logo-img {
          width: 300px;
          height: 300px;
          bottom: 6vh;
      }

      p {
          font-size: 1rem;
      }

      .shop-now {
          padding-left: 15px;
          gap: 0.5rem;
      }

      .shop-now-btn {
          padding-left: 15px;
          font-size: 0.875rem;
      }
  }
</style>