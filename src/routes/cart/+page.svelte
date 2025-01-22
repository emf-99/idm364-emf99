<head>
    <link rel="stylesheet" href="src/css/style.css" />
</head>

<div class="body">
    <div class="cart-container">
        <div class="cart-title">
            <h1>cart</h1>
            <img src="../src/assets/images/icons/arrow.svg" width="18rem" height="18rem" alt="arrow" />
        </div>

        <div class="cart-main">
            <div class="cart-row">
                <div class="cart-prods">
                    <div class="cart-prod">
                        <div class="cart-labels">
                            <p>item</p>
                            <p>quantity</p>
                            <p>price</p>
                        </div>
                        <line></line>
                            <div class="cart-item">
                                <div class="prod-img">
                                    <!-- <img src="../src/assets/images/backgrounds/background.jpg" width="auto" height="auto" alt="product"/> -->
                                </div>
                                <div class="prod-info"> 
                                    <p>prod name</p>
                                    <input type="number" id="quantity" name="quantity" min="1" max="5">
                                    <p>$0</p>
                                </div>
                            </div>
                            <button class="remove-btn">remove</button>
                        <line></line>
                    </div>
                </div>

                <div class="order-summary">
                    <h2> order summary </h2>
                    <line></line>
                    <div class="cart-total">
                        <div class="cart-total-labels">
                            <div class="subtotal">
                                <p>subtotal</p>
                                <p class="subtotal-dollar-ammount">$0</p>
                            </div>

                            <div class="tax">
                                <p>tax</p>
                                <p class="tax-dollar-ammount">$0</p>
                            </div>

                            <div class="shipping">
                                <p>shipping</p>
                                <p class="shipping-dollar-ammount">$0</p>
                            </div>

                            <div class="total">
                                <p>total</p>
                                <p class="total-dollar ammount">$0</p>
                            </div>
                        </div>
                    </div>
                    <button class="checkout-btn">proceed to checkout</button>
                </div>
            </div>
        </div>
    </div>
</div>


<style>
    * {
        background-color: transparent;
    }

    .body {
        margin: 1rem 14rem;
        padding: 1rem;
        height: 100vh; 
        overflow-y: auto;
    }

    .cart-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 34px;
        align-self: stretch;
    }

    .cart-title {
        display: flex;
        height: auto;
        justify-content: space-between;
        align-items: center;
        align-self: stretch;
    }

    .cart-main {
        display: flex;
        height: auto;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        width: 100%;
    }

    .cart-row {
        display: flex;
        height: auto;
        justify-content: space-between;
        align-items: center;
        flex-direction: row; 
        width: 100%;

    }

</style>