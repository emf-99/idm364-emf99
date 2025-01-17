<!-- Header.svelte -->

<head>
    <link rel="stylesheet" href="src/css/style.css" />
</head>

<div class=header>
    <div></div>

    <div class="logo"> 
        <img src="../src/assets/images/icons/logo.svg" alt="logo" width="100rem" height="100rem">
    </div>

    <div class="cart">
        <img src="../src/assets/images/icons/cart.svg" alt="cart" width="18" height="18.02">
    </div>

</div>

<style>
    .header {
        position: sticky;
        top: 0;
         z-index: 1000;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: .25rem 2rem;
        background-position: bottom; 
        background: 
            linear-gradient(
            var(--overlay), 
            var(--overlay)
            ),
            url('../assets/images/backgrounds/background.jpg');
        width: 100%;
        height: 100%;
        border-radius: 0 0 40px 40px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    }

    .logo {
        height: 100px;
        width: 100px;
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: .25rem;
        padding: .25rem;
    }

    .cart {
        height: 50px;
        width: 50px;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: .25rem;
        padding: .25rem;
        border-radius: 100%;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
</style>