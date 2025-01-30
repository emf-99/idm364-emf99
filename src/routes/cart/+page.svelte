<script lang="js">
    import { cart } from '$lib/stores/cart';
    import CartItem from '$lib/components/CartItem.svelte';
    import OrderSummary from '$lib/components/OrderSummary.svelte';
    import '$lib/css/style.css';
    import '$lib/css/cart.css';
</script>

<div class="body">
    <div class="cart-container">
        <div class="cart-title">
            <h1>cart</h1>
            <img src="/src/assets/images/icons/arrow.svg" width="18rem" height="18rem" alt="arrow" />
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
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 8.8rem 14rem;
    }
</style>
