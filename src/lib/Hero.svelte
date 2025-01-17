<!-- Hero.svelte -->

<head>
    <link rel="stylesheet" href="src/css/style.css" />
</head>

<div class=hero>
    <div class="hero-top">
        <div></div>

        <div class="cart">
            <img src="../src/assets/images/icons/cart.svg" alt="cart" width="18" height="18.02">
        </div>
    </div>

    <div class="hero-bottom">
        <div class="logo"> 
            <img src="../src/assets/images/icons/logo.svg" alt="logo" width="200rem" height="200rem">
        </div>

        <p>expand your cd and vinyl collection while discovering the perfect music player.</p>

        <button>shop now</button>
    </div>

</div>

<style>
    .hero {
        display: flex;
        flex-direction: column;
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

    .hero-top {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        background-color: transparent;
        margin: 2rem;
    }

    .hero-bottom {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        background-color: transparent;
        margin: 2rem;
        padding: 2rem;
    }

    .logo {
        height: 100px;
        width: 100px;
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 5rem;
        padding: 5rem;
    }

    p {
        font-size: 1.5rem;
        color: white;
        text-align: center;
        margin: 1rem;
    }

    button {
        background-color: var(--olive);
        color: white;
        border: none;
        border-radius: 40px;
        padding: 1rem 2rem;
        margin: 1rem;
        cursor: pointer;
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