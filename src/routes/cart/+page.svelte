<!-- src/routes/cart/+page.svelte -->
<script lang="js">
  import { cart } from '$lib/stores/cart';
  import CartItem from '$lib/components/CartItem.svelte';
  import OrderSummary from '$lib/components/OrderSummary.svelte';
</script>

<div class="body">
  <div class="cart-container">
    <div class="cart-title">
      <h1>cart</h1>
      <img src="/assets/images/icons/arrow.svg" class="arrow" width="18rem" height="18rem" alt="arrow" />
    </div>

    <div class="cart-main">
      <div class="cart-row">
        <div class="cart-prods">
          {#if $cart.length > 0}
            {#each $cart as product}
              <CartItem {product} />
            {/each}
          {:else}
            <p class="empty-cart">Your cart is empty.</p>
          {/if}
        </div>
        <OrderSummary />
      </div>
    </div>
  </div>
</div>

<style>
  .empty-cart {
    font-size: 1.5rem;
    color: var(--olive);
    text-align: center;
    margin: 0; 
    padding: 5vh 5vw; 
  }

  .cart-prods {
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center; 
    padding: 20px 34px;
    gap: 21px;
    border-radius: 20px;
    border: 1px solid #000;
    background: rgba(250, 250, 250, 0.90);
    min-height: 300px; 
    width: 100%; 
  }

  @media (max-width: 1090px) {
    .cart-prods {
      padding: 15px 20px; 
      min-height: 250px; 
    }
    .empty-cart {
      padding: 4vh 4vw; 
      font-size: 1.25rem;
    }
  }

  @media (max-width: 750px) {
    .cart-prods {
      padding: 10px 15px;
      min-height: 200px;
    }
    .empty-cart {
      padding: 3vh 3vw;
      font-size: 1rem;
    }
  }

  @media (max-width: 375px) {
    .cart-prods {
      padding: 8px 10px;
      min-height: 150px;
    }
    .empty-cart {
      padding: 2vh 2vw;
      font-size: 0.875rem;
    }
  }
</style>