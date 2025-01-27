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
                        <!-- <div class="cart-labels">
                            <p>item</p>
                            <p>quantity</p>
                            <p>price</p>
                        </div>
                        <line></line> -->
                            <div class="cart-item">
                                <div class="prod-img">
                                    <img src="../src/assets/images/products/is_this_it.png" width="auto" height="auto" alt="product"/>
                                </div>
                                <div class="prod-info"> 
                                    <h3>prod name</h3>
                                    <input type="number" id="quantity" name="quantity" min="1" max="5">
                                    <p>$0</p>
                                </div>
                            </div>
                            <div class="remove">
                            <button class="remove-btn">remove</button>
                            </div>
                        <line></line>
                            <div class="cart-item">
                            <div class="prod-img">
                                <img src="../src/assets/images/products/is_this_it.png" width="auto" height="auto" alt="product"/>
                            </div>
                            <div class="prod-info"> 
                                <h3>prod name</h3>
                                <input type="number" id="quantity" name="quantity" min="1" max="5">
                                <p>$0</p>
                            </div>
                            </div>
                            <div class="remove">
                            <button class="remove-btn">remove</button>
                            </div>
                        <line></line>
                            <div class="cart-item">
                            <div class="prod-img">
                                <img src="../src/assets/images/products/is_this_it.png" width="auto" height="auto" alt="product"/>
                            </div>
                            <div class="prod-info"> 
                                <h3>prod name</h3>
                                <input type="number" id="quantity" name="quantity" min="1" max="5">
                                <p>$0</p>
                            </div>
                            </div>
                            <div class="remove">
                            <button class="remove-btn">remove</button>
                            </div>
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
        padding: 1rem;
        overflow-y: auto;
        max-width: 75%;
        width: 100%;
        height: auto;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
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
        align-items: flex-start;
        flex-direction: row; 
        gap: 4rem;
        width: 100%;
    }

    .cart-prods {
        display: flex;
        padding: 20px 34px;
        flex-direction: column;
        align-items: flex-end;
        gap: 21px;
        border-radius: 20px;
        border: 1px solid #000;
        background: rgba(250, 250, 250, 0.90);
    }

    /* .cart-labels {
        display: flex;
        padding-top: 10px;
        justify-content: flex-end;
        align-items: flex-start;
        gap: 4rem;
    } */
    
    line {
        display: flex;
        width: 100%;
        height: 1px;
        background-color: var(--overlay);
        margin: 2rem;
    }

    .cart-item {
        display: flex;
        width: auto;
        justify-content: flex-end;
        align-items: center;
        gap: 4rem;
    }

    .prod-img {
        display: flex;
        min-width: 20%;
        height: auto;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        background-color: var(--overlay);
    }

    .prod-img img {
        display: flex;
        width: 100%;
        height: auto;
        border-radius: 10px;
        background-color: transparent;
    }

    .prod-info {
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 4rem;
    }

    .remove {
        display: flex;
        width: 100%;
        justify-content: flex-end;
        align-items: center;
        font-style: italic;
    }

    .remove-btn {
        display: flex;
        width: 100px;
        height: 40px;
        justify-content: flex-end;
        align-items: flex-end;
        border: none;
        text-decoration: underline;
        /* font-family: var(--font); */
    }

    .order-summary {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px 34px;
        border-radius: 20px;
        border: 1px solid #000;
        background: rgba(250, 250, 250, 0.90);
    }

    .cart-total {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 21px;
    }

    .cart-total-labels {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }

    .subtotal, .tax, .shipping, .total {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        gap: 5rem;
    }

    .total {
        font-weight: 700;
    }

    .checkout-btn {
        display: flex;
        width: 200px;
        padding: 1.5rem;
        flex-direction: column;
        align-items: center;
        gap: 25px;
        border: none;
        border-radius: 132px;
        background: var(--olive);
        color: var(--white);
        margin: 2rem 1rem;
    }

    .cart-prod {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .cart-prod, .cart-prod, .cart-item, .remove, .cart-total, .cart-total-labels, .subtotal, .tax, .shipping, .total {
            max-width: 100%;
            width: 100%;
            height: auto;
        }

    @media (max-width: 1350px) {
        .body {
            max-width: 90%;
        }

        .prod-img {
            min-width: 20%;
            height: auto;
        }
    }

    @media (max-width: 1090px) {
        .cart-row {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 4rem;
        }

        .cart-prods, .order-summary, .cart-prod, .cart-item, .remove, .cart-total, .cart-total-labels, .subtotal, .tax, .shipping, .total {
            max-width: 100%;
            width: 100%;
            height: auto;
        }
    }

    @media (max-width: 980px) {

        .cart-row {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 4rem;
        }

        .cart-prods, .order-summary, .cart-prod, .cart-item, .remove, .cart-total, .cart-total-labels, .subtotal, .tax, .shipping, .total {
            max-width: 100%;
            width: 100%;
            height: auto;
        }
    }

    @media (max-width: 750px) {
        .cart-prod {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .cart-item, .prod-info {
            gap: 2rem;
        }

        .prod-img {
            min-width: 30%;
            height: auto;
        }

        .subtotal, .tax, .shipping, .total {
            gap: 5px;
        }

        .order-summary {
            padding: 2rem;
        }
    }

    @media (max-width: 630px){
        .prod-img {
            max-width: 40%;
            height: auto;
        }

        .prod-info {
            flex-direction: column;
            align-items: flex-start;
        }
    }

    @media (max-width: 375px) {
        .subtotal, .tax, .shipping, .total {
            gap: 5px;
        }

        .order-summary {
            padding: 2rem;
        }

        .checkout-btn {
            width: 100%;
            padding: 1rem;
        }
        .prod-img {
            max-width: 40%;
            height: auto;
        }
    }

</style>