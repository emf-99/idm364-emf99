<script lang="js">
    import { cart } from '$lib/stores/cart';
    import '$lib/css/style.css';
    import '$lib/css/cart.css';

    export let product;

    function updateQuantity(event) {
        const newQuantity = parseInt(event.target.value, 10);
        cart.update(items =>
            items.map(item =>
                item.id === product.id ? { ...item, quantity: newQuantity } : item
            )
        );
    }

    function removeItem() {
        cart.update(items => items.filter(item => item.id !== product.id));
    }
</script>


<div class="cart-prod">
    <div class="cart-item">
        <div class="prod-img">
            <img src={product.img} alt={product.title} />
        </div>
        <div class="prod-info"> 
            <h3>{product.title}</h3>
            <select bind:value={product.quantity} on:change={updateQuantity}>
                {#each [1, 2, 3, 4, 5] as qty}
                    <option value={qty}>{qty}</option>
                {/each}
            </select>
            <p>${(product.price * product.quantity).toFixed(2)}</p>
        </div>
    </div>
</div>

<div class="remove">
    <button class="remove-btn" on:click={() => removeItem()}>remove</button>
</div>

<line></line>
