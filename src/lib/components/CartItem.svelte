<!-- src/lib/components/CartItem.svelte -->
<script lang="js">
    import { cart } from '$lib/stores/cart';
  
    let { product } = $props();
  
    function updateQuantity(event) {
      const newQuantity = parseInt(event.target.value, 10);
      cart.update((items) =>
        items.map((item) =>
          item.id === product.id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  
    function removeItem() {
      cart.update((items) => items.filter((item) => item.id !== product.id));
    }
  </script>
  
  <div class="cart-prod">
    <div class="cart-item">
      <div class="prod-img">
        <img src={product.img} alt={product.title} />
      </div>
      <div class="prod-info">
        <h3>{product.title}</h3>
        <select value={product.quantity} onchange={updateQuantity}>
          {#each [1, 2, 3, 4, 5] as qty}
            <option value={qty}>{qty}</option>
          {/each}
        </select>
        <p>${(product.price * product.quantity).toFixed(2)}</p>
      </div>
    </div>
  </div>
  
  <div class="remove">
    <button class="remove-btn" onclick={removeItem}>remove</button>
  </div>
  
  <line></line>