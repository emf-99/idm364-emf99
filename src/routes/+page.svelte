<script lang="js">
  import { onMount } from 'svelte';
  import { selectedProduct } from '$lib/store';
  import ProductCard from '$lib/components/ProductCard.svelte';

  export let data;
  $: products = data?.products || [];

  $: groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.type]) acc[product.type] = [];
    acc[product.type].push(product);
    return acc;
  }, {});

  onMount(() => {
    selectedProduct.set(null);
    const savedScrollPosition = localStorage.getItem('scrollPosition');
    if (savedScrollPosition) {
      window.scrollTo(0, parseInt(savedScrollPosition, 10));
      localStorage.removeItem('scrollPosition');
    }
  });
</script>

<div class="body">
  {#each Object.keys(groupedProducts) as type}
    <div class="row">
      <div class="prod-kind">
        <h1>{type}</h1>
        <img src="/assets/images/icons/arrow.svg" width="18rem" height="18rem" class="arrow" alt="arrow" />
      </div>
      <div class="prod-row">
        {#each groupedProducts[type] as product}
          <ProductCard {product} />
        {/each}
      </div>
    </div>
  {/each}
</div>

<style>
  .body {
    padding: 1rem;
    overflow-y: auto;
    max-width: 65%;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .row {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    align-self: stretch;
  }

  .prod-kind {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .prod-row {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 5rem;
  }

  /* Media queries remain unchanged */
  @media (max-width: 1310px) {
    .body {
      max-width: 80%;
    }
    .row {
      gap: 24px;
      padding-top: 3rem;
    }
    .prod-kind {
      flex-direction: row;
      align-items: flex-start;
    }
    .prod-row {
      display: flex;
      flex-direction: row;
      gap: 24px;
    }
  }

  @media (max-width: 1090px) {
    .body {
      margin: 1rem 4rem;
      padding: 1rem;
    }
    .row {
      gap: 24px;
      padding-top: 3rem;
    }
    .prod-kind {
      flex-direction: row;
      align-items: flex-start;
    }
    .prod-row {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 24px;
    }
  }

  @media (max-width: 375px) {
    .body {
      margin: 1rem;
      padding: 1rem;
    }
    .row {
      gap: 16px;
      padding-top: 2rem;
    }
    .prod-kind {
      flex-direction: row;
      align-items: center;
    }
    .prod-row {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  }
</style>