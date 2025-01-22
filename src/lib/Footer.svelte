<!-- Footer.svelte -->

<head>
    <link rel="stylesheet" href="src/css/style.css" />
</head>
    <footer>
    <div class="footer">
        <div class="footer-content">
            <p>footer</p>
            <p>text</p>
            <p>here</p>
        </div>
    </div>
</footer>

<style>
    footer{
        margin-top: 4rem;
    }

    .footer {
        bottom: 0;
        background-color: var(--olive);
        color: white;
        text-align: center;
        padding: 10px;
        left: 0;
        bottom: 0;
        width: 100%;
        border-radius: 40px 40px 0 0;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
        /* margin-top: 20rem; */
    }
    .footer-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        margin: 2rem;
        padding: 2rem;
    }
</style>
