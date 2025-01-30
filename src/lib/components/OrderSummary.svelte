<script lang="js">
    import { cart } from '$lib/stores/cart';
    import { derived } from 'svelte/store';
    import '$lib/css/style.css';
    import '$lib/css/cart.css';

    const subtotal = derived(cart, $cart => {
        return $cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    });

    const tax = derived(subtotal, $subtotal => $subtotal * 0.05);
    const shipping = 2.00;
    const total = derived([subtotal, tax], ([$subtotal, $tax]) => $subtotal + $tax + shipping);
</script>


<div class="order-summary">
    <h2>Order Summary</h2>
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
    <button class="checkout-btn">Proceed to Checkout</button>
</div>