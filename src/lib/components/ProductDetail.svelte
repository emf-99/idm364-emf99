<!-- src/lib/components/ProductDetail.svelte -->
<script lang="js">
    import { selectedProduct } from '$lib/store';
    import { cart } from '$lib/stores/cart';

    $: product = $selectedProduct;

    function addToCart() {
        cart.update(items => {
            const existingItem = items.find(item => item.id === product.id);
            if (existingItem) {
                return items.map(item => 
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...items, { ...product, quantity: 1 }];
        });
    }
</script>

{#if product}
  <div class="body">
    <div class="row">
        <div class="prod-name">
          <h1>{product.title}</h1>
            <img src="/src/assets/images/icons/arrow.svg" width="18rem" height="18rem" alt="arrow" />
        </div>

        <div class="prod-row">
            <div class="prod-card">
                <div class="prod-img">
                  <img src={product.img} alt={product.title} />
                </div>
                <div class="prod-info">
                    <div class="prod-main">
                        <div class="prod-title">
                          <h1>{product.title}</h1>
                          <p>{product.artist}</p>
                        </div>

                        <div class="prod-price">
                          <p>${product.price.toFixed(2)}</p>
                        </div>
                    </div>

                    <div class="prod-desc">
                        <div class="prod-desc-text">
                          <p class="prod-desc">{product.desc}</p>
                        </div>

                        <button class="add-to-cart" on:click={() => addToCart()}>
                            <p class="add-to-cart-btn">Add to cart</p>
                            <div class="cart-icon"> 
                                <div class="border">
                                    <img src="/src/assets/images/icons/cart.svg" width="28px" height="27px" alt="cart"/>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
{/if}


<style>
  * {
      background-color: transparent;
  }
  
  .body {
      padding: 1rem;
      overflow-y: auto;
      max-width: 65%;
      width: 100%;
      height: auto;
      display:flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  }

  .row {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 34px;
      align-self: stretch;
  }

  .prod-name {
      display: flex;
      height: auto;
      justify-content: space-between;
      align-items: center;
      align-self: stretch;
  }

  .prod-row {
      display: flex;
      height: auto;
      padding: 4rem 2rem;
      justify-content: center;
      align-items: center;
      gap: 120px;
      align-self: stretch;
      border-radius: 20px;
      border: 1px solid #000;
      background: rgba(250, 250, 250, 0.90);
  }

  .prod-card {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      gap: 4rem;
  }

  .prod-img {
      display: flex;
      max-width: 100%;
      height: auto;
      justify-content: center;
      align-items: center;
      border-radius: 20px;
      background-color: var(--overlay);
  }

  .prod-img img {
      display: flex;
      max-width: 100%;
      height: auto;
      border-radius: 20px;
      background-color: transparent;
  }

  .prod-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      width: 50%;
  }

  .prod-main {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;
  }

  .prod-desc {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 4rem;
      max-width: 100%;
      height: auto;
  }

  .add-to-cart {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 2rem;
      display: flex;
      padding-left: 50px;
      align-items: center;
      gap: 50px;
      border-radius: 132px;
      background: #FFF;

      /* ds */
      box-shadow: 0px 4px 54.4px 0px rgba(0, 0, 0, 0.25);
      cursor: pointer;
  }

  .add-to-cart-btn {
      display: flex;
      padding-left: 50px;
      align-items: center;
      gap: 50px;
      cursor: pointer;
  }

  .cart-icon {
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
      background:var(--white);
      padding: .5rem;
  }

  .cart-icon img {
      display: flex;
      width: 28px;
      height: 27px;
  }

  h1, p {
      text-transform: lowercase;
  }

  @media (max-width: 1350px) {
      .body {
          margin: 1rem 4rem;
          padding: 1rem;
      }

      .row {
          gap: 24px;
          padding-top: 3rem;
          flex-direction: column;
      }

      .prod-name {
          flex-direction: row;
          align-items: flex-start;
      }

      .prod-row {
          display: flex;
          flex-direction: row;
          gap: 24px;
      }

      .prod-card {
          width: 100%;
          flex-direction: row;
          align-items: center;
          justify-content: center;
      }
  }

  @media (max-width: 980px) {
      .body {
          margin: 1rem 4rem;
          padding: 1rem;
      }

      .row {
          gap: 24px;
          padding-top: 3rem;
          flex-direction: column;
      }

      .prod-name {
          flex-direction: row;
          align-items: center;
      }

      .prod-row {
          display: flex;
          flex-direction: row;
          gap: 24px;
      }

      .prod-card {
          width: 100%;
          flex-direction: column;
          align-items: center;
          justify-content: center;
      }

      .prod-main {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          gap: 1rem;
      }

      .prod-info {
          align-items: flex-start;
          gap: 2rem;
      }

      .prod-info {
          width: 100%;
      }
  }
/* 
  @media (max-width: 700px){

      p {
          font-size: 14px;
      }

      .prod-info {
          align-items: flex-start;
          gap: 2rem;
      }
      
      .prod-row {
          display: flex;
          flex-direction: column;
          padding: 1rem;
      }

      .prod-info {
          width: 100%;
      }

      .prod-card {
          width: 100%;
      }
  } */




  @media (max-width: 700px) {
      .body {
          margin: 1rem;
          padding: 1rem;
      }

      .row {
          gap: 16px;
          padding-top: 2rem;
      }

      .prod-row {
          display: flex;
          flex-direction: column;
          gap: 16px;
      }

      .prod-card {
          width: 100%;
      }

      .prod-row {
          display: flex;
          flex-direction: column;
          padding: 2rem;
      }

      .prod-info {
          width: 100%;
      }

      .body {
          max-width: 90%;
      }
  }

  @media (max-width: 465px){
      .body {
          max-width: 90%;
      }
      .add-to-cart {
          max-width: 100%;
          height: auto;
          padding-left: 30px;
          gap: 25px;
      }

      .add-to-cart-btn {
          max-width: 100%;
          height: auto;
          padding-left: 2px;
      }
  }

  /* @media (max-width: 375px){
      .body {
          max-width: 90%;
      }
      .add-to-cart {
          max-width: 100%;
          height: auto;
          padding-left: 30px;
          gap: 25px;
      }

      .add-to-cart-btn {
          max-width: 100%;
          height: auto;
          padding-left: 2px;
      }
  } */

</style>
  