<!-- src/lib/components/ProductCard.svelte -->
<script lang="js">
  import { selectedProduct } from '$lib/store';
  import { goto } from '$app/navigation';

  export let product;

  function handleClick(event) {
    event.preventDefault(); 
    localStorage.setItem('scrollPosition', window.scrollY); 
    selectedProduct.set(product);
    goto(`/product/${product.id}`);
  }
</script>

<a href="/product/{product.id}" on:click={handleClick} class="prod-card">
  <div class="prod-img">
    <img src={product.img} alt={product.title} />
  </div>
  <div class="prod-info">
    <div class="prod-name">
      <h2>{product.title}</h2>
      <p>{product.artist}</p>
    </div>
    <div class="prod-price">
      <p>${product.price.toFixed(2)}</p>
    </div>
  </div>
</a>

<style>
  .prod-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 16rem;
    height: auto;
    padding: 1rem;
    text-decoration: none;
    color: inherit;
    border: 1px solid #000;
    border-radius: 1rem;
    background: var(--white);
    box-shadow: 0px 2px 69.3px 0px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease; 
  }

  .prod-card:hover {
    transform: scale(1.05); 
    box-shadow: 0px 4px 80px 0px rgba(0, 0, 0, 0.1); 
  }

  .prod-img img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    background-color: transparent;
  }

  .prod-img {
    background-color: transparent;
  }

  .prod-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: center;
    background-color: transparent;
  }

  .prod-price {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: transparent;
  }

  h2 {
    font-size: 1.5rem;
    background-color: transparent;
    text-transform: lowercase;
  }

  p {
    font-size: 1.25rem;
    background-color: transparent;
    text-transform: lowercase;
  }

  .prod-name {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    background-color: transparent;
  }

  @media (max-width: 630px) {
    .prod-img img {
      width: 260%;
      height: auto;
    }
  }
</style>