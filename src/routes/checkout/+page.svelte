<!-- src/routes/checkout/+page.svelte -->
<script lang="js">
</script>

<div class="body">
  <div class="thankyou-container">
    <div class="thankyou-title">
      <h1>thank you</h1>
      <img src="/assets/images/icons/arrow.svg" class="arrow" width="18rem" height="18rem" alt="arrow" />
    </div>

    <div class="thankyou-main">
      <p>thank you for your order! </p>
      <p>order number: <strong>123456789</strong></p>
      <div class="closing-thankyou">
        <p>happy listening,</p>
        <img class="logo-black" src="/assets/images/icons/logo-black.svg" width="10rem" height="10rem" alt="logo" />
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
    width: 100%;
    max-width: 80%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
  }

  .thankyou-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 90%;
    min-height: 70vh;
    margin: 2rem 0;
  }

  .thankyou-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1rem 0;
  }

  .thankyou-main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 50vh;
    margin: 1rem 0;
    border-radius: 20px;
    border: 1px solid #000;
    background: rgba(250, 250, 250, 0.90);
    padding: 6rem;
    box-sizing: border-box;
  }

  .thankyou-main > p {
    margin: 1rem 0;
    text-align: center;
    font-size: 1.5rem;
  }

  .thankyou-main > p > strong {
    font-weight: bold;
    color: var(--white);
    background-color: var(--olive);
    padding: 0.5rem 1rem;
    border-radius: 1rem 0 1rem 0;
  }

  .closing-thankyou {
    display: flex;
    flex-direction: column;
    align-items: flex-end; 
    width: 100%;
    margin-top: 2.5rem;
    gap: 1rem; 
  }

  .closing-thankyou p {
    margin: 0; 
    font-size: 1.2rem; 
    font-style: italic; 
    text-align: right;
  }

  .logo-black {
    width: 10rem;
    height: 10rem;
  }

  @media (max-width: 1180px) {
    .body {
      max-width: 90%;
    }

    .thankyou-container {
      max-width: 95%;
      min-height: 60vh;
    }

    .thankyou-main {
      min-height: 45vh;
      padding: 4rem;
    }

    .thankyou-main > p {
      font-size: 1.3rem;
    }

    .closing-thankyou p {
      font-size: 1.1rem;
    }

    .logo-black {
      width: 8rem;
      height: 8rem;
    }
  }

  @media (max-width: 780px) {
    .body {
      max-width: 100%;
      padding: 0.5rem;
    }

    .thankyou-container {
      max-width: 100%;
      min-height: 50vh;
      margin: 1rem 0;
    }

    .thankyou-main {
      min-height: 40vh;
      padding: 2rem;
    }

    .thankyou-main > p {
      font-size: 1.1rem;
    }

    .closing-thankyou p {
      font-size: 1rem;
    }

    .logo-black {
      width: 6rem;
      height: 6rem;
    }
  }


  @media (max-width: 480px) {
    .thankyou-main {
      padding: 1.5rem;
      min-height: 35vh;
    }

    .thankyou-main > p {
      font-size: 1rem;
    }

    .closing-thankyou p {
      font-size: 0.9rem;
    }

    .logo-black {
      width: 5rem;
      height: 5rem;
    }
  }
</style>