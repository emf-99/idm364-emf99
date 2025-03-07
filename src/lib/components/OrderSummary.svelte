<!-- src/lib/components/OrderSummary.svelte -->
<script lang="js">
    import { cart } from '$lib/stores/cart';
    import { derived } from 'svelte/store';
    import { goto } from '$app/navigation';
    import '$lib/css/style.css';
    import '$lib/css/cart.css';
  
    // calculations
    const subtotal = derived(cart, ($cart) =>
      $cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    );
    const tax = derived(subtotal, ($subtotal) => $subtotal * 0.05);
    const shipping = 2.0;
    const total = derived([subtotal, tax], ([$subtotal, $tax]) => $subtotal + $tax + shipping);
  
    // checkout function
    function handleCheckout() {
      goto('/checkout'); // navigate to /checkout
      cart.set([]); // clear the cart 
    }
  </script>
  
  <div class="order-summary">
    <h2>order summary</h2>
    <line></line>
    <div class="cart-total">
      <div class="cart-total-labels">
        <div class="subtotal">
          <p>Subtotal</p>
          <p class="subtotal-dollar-amount">${$subtotal.toFixed(2)}</p>
        </div>
  
        <div class="tax">
          <p>Tax</p>
          <p class="tax-dollar-amount">${$tax.toFixed(2)}</p>
        </div>
  
        <div class="shipping">
          <p>Shipping</p>
          <p class="shipping-dollar-amount">${shipping.toFixed(2)}</p>
        </div>
  
        <div class="total">
          <p>Total</p>
          <p class="total-dollar-amount">${$total.toFixed(2)}</p>
        </div>
      </div>
    </div>
    <button class="checkout-btn" on:click={handleCheckout}>proceed to checkout</button>
  </div>