<!-- Footer.svelte -->
<script lang="js">
    // import '$lib/css/style.css';
</script>

<footer>
    <div class="footer">
        <div class="footer-content">
            <p>© {new Date().getFullYear()} groove. All rights reserved.</p>
            <p>Terms of Service&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;<a href="/about">About</a>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;Privacy Policy&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;Contact Us</p>
            <p>Follow us on social media for updates and news</p>
            <div class="social-icons">
                <a href="https://twitter.com" target="_blank"><img src="/assets/images/icons/twitter.svg" alt="twitter icon"></a>
                <a href="https://youtube.com" target="_blank"><img src="/assets/images/icons/youtube.svg" alt="youtube icon"></a>
                <a href="https://instagram.com" target="_blank"><img src="/assets/images/icons/instagram.svg" alt="instagram icon"></a>
            </div>
        </div>
    </div>
</footer>

<style>
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
        z-index: 20;
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
    
    .footer-content p {
        color: var(--white) !important;
    }

    .social-icons {
        margin-top: 1rem;
        display: flex;
        gap: 1.5rem;
    }

    .social-icons a {
        color: var(--white);
        text-decoration: none;
    }

    .social-icons a img {
        width: 2rem;
        height: 2rem;
    }

    .footer-content a {
        color: var(--white);
        text-decoration: underline;
    }
</style>