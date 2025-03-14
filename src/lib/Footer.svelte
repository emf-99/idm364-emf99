<!-- src/lib/Footer.svelte -->
<script lang="js">
    // import '$lib/css/style.css';
</script>

<footer>
    <div class="footer">
        <div class="footer-content">
            <p>© {new Date().getFullYear()} groove. All rights reserved.</p>
            <p>Terms of Service&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="/about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Privacy Policy&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Contact Us</p>
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
        width: 100%;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
        z-index: 20;
    }

    .footer-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        margin: 2rem;
        padding: 2rem;
        gap: 1rem; 
    }
    
    .footer-content p {
        color: var(--white) !important;
        font-size: 1rem; 
        margin: 0; 
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

    @media (max-width: 768px) {
        .footer-content {
            margin: 1rem;
            padding: 1rem;
            gap: 0.75rem;
        }

        .footer-content p {
            font-size: 0.9rem; 
        }

        .social-icons {
            gap: 1rem;
            margin-top: 0.75rem;
        }

        .social-icons a img {
            width: 1.5rem;
            height: 1.5rem;
        }
    }

    @media (max-width: 480px) {
        .footer-content {
            margin: 0.5rem;
            padding: 0.5rem;
            gap: 0.5rem;
        }

        .footer-content p {
            font-size: 0.75rem; 
            line-height: 1.2; 
        }

        .social-icons {
            gap: 0.75rem;
            margin-top: 0.5rem;
        }

        .social-icons a img {
            width: 1.25rem;
            height: 1.25rem;
        }

        /* stack links vertically */
        .footer-content p:nth-child(2) {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.25rem;
        }

        .footer-content p:nth-child(2) a {
            text-decoration: underline;
        }
    }
</style>