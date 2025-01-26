<!-- src/lib/components/ProductDetail.svelte -->
<div class="body">
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
                    <div class="prod-name">
                        <p class="prod-desc">{product.desc}</p>
                    </div>

                    <div class="add-to-cart">
                        <p class="add-to-cart-btn">Add to cart</p>
                        <div class="cart-icon"> 
                            <div class="border">
                                <img src="../src/assets/images/icons/cart.svg" width="28px" height="27px" alt="cart"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  
  <style>

    .body {
      margin: 1rem 14rem;
      padding: 1rem;
      overflow-y: auto;
      background-color: transparent;
    }
  
    .prod-row {
      display: flex;
      align-items: center;
      gap: 4rem;
      border: 1px solid #000;
      border-radius: 1rem;
      padding: 2rem;
      background: rgba(250, 250, 250, 0.9);
    }
  
    .prod-img img {
      width: 400px;
      height: auto;
      border-radius: 1rem;
    }
  
    .prod-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  
    .prod-price {
      font-weight: bold;
      font-size: 1.25rem;
    }
  
    .prod-desc {
      margin-top: 1rem;
      color: #666;
    }
  </style>
  