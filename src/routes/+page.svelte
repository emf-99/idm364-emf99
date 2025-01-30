<!-- +page.svelte -->
 <script lang="js">
    import { onMount } from 'svelte';
    import ProductCard from '$lib/components/ProductCard.svelte';
    import ProductDetail from '$lib/components/ProductDetail.svelte';
    import '$lib/css/style.css';
    
    export const products = [
        {
            id: 1,
            title: "Is This It",
            artist: "The Strokes",
            type: "vinyls",
            price: 45.95,
            desc: "The debut album that revitalized early 2000s rock. Known for its raw garage-rock style, catchy riffs, and Julian Casablancas’ distinctive vocals. A must-have classic for indie rock enthusiasts.",
            img: "/src/assets/images/products/is_this_it.png",
        },
        {
            id: 2,
            title: "Brand New Eyes",
            artist: "Paramore",
            type: "vinyls",
            price: 45.99,
            desc: "Paramore’s transformative pop-punk album that marked a pivotal moment for the band. Features powerful vocals from Hayley Williams and emotive, relatable lyrics. Perfect for fans seeking energetic guitar-driven anthems.",
            img: "/src/assets/images/products/brand_new_eyes.png",
        },
        {
            id: 3,
            title: "Definitely Maybe",
            artist: "Oasis",
            type: "vinyls",
            price: 40.95,
            desc: "The groundbreaking Britpop debut from Oasis that changed the UK rock scene in the ’90s. Includes iconic tracks like “Rock ‘n’ Roll Star” and “Live Forever.” An essential record for any classic rock collection.",
            img: "/src/assets/images/products/definately_maybe.png",
        },
        {
            id: 4,
            title: "Silver",
            artist: "Turntable",
            type: "record players",
            price: 200.99,
            desc: "Sleek metallic design that complements modern decor. Equipped with adjustable tonearm and belt-drive system for accurate playback. Ideal for audiophiles and vinyl newcomers seeking a minimalist aesthetic.",
            img: "/src/assets/images/products/silver_turntable.png",
        },
        {
            id: 5,
            title: "White",
            artist: "Turntable",
            type: "record players",
            price: 205.95,
            desc: "Clean, contemporary design featuring a durable, scratch-resistant finish. Advanced anti-skate technology ensures crisp, clear sound. Perfect for anyone who wants a stylish statement piece with high performance.",
            img: "/src/assets/images/products/white_turntable.png",
        },
        {
            id: 6,
            title: "Gold",
            artist: "Turntable",
            type: "record players",
            price: 195.99,
            desc: "Luxurious high-gloss finish that stands out in any setup. Built with premium components for warm, full-bodied sound. An elegant choice for serious vinyl collectors and those who value eye-catching design.",
            img: "/src/assets/images/products/gold_turntable.png",
        },
        {
            id: 7,
            title: "In Utero",
            artist: "Nirvana",
            type: "cds",
            price: 15.95,
            desc: "Nirvana’s raw and introspective final studio album. Produced by Steve Albini, it showcases Kurt Cobain’s haunting vocals and the band’s unfiltered grunge sound. An authentic piece of rock history.",
            img: "/src/assets/images/products/in_utero.png",
        },
        {
            id: 8,
            title: "Bird's Eye",
            artist: "Ravyn Lenae",
            type: "cds",
            price: 20.99,
            desc: "A dreamy, soul-infused track spotlighting Ravyn Lenae’s mesmerizing vocals and innovative R&B style. Its airy production and introspective lyrics create a captivating sonic experience for fans seeking fresh, forward-thinking music.",
            img: "/src/assets/images/products/birdseye.png",
        },
        {
            id: 9,
            title: "Parklife",
            artist: "Blur",
            type: "cds",
            price: 10.95,
            desc: "A defining Britpop album that captures the spirit of 1990s London. Packed with witty lyrics, diverse musical influences, and hit singles like “Girls & Boys.” A cultural cornerstone for fans of the era.",
            img: "/src/assets/images/products/parklife.png",
        },
        {
            id: 10,
            title: "Pink",
            artist: "CD Player",
            type: "cd players",
            price: 35.99,
            desc: "Fun, vibrant hue that adds a pop of color to any room. Compact size with easy-to-navigate controls and reliable playback. Great for kids, teenagers, or anyone who wants a bold style statement.",
            img: "/src/assets/images/products/pink_cd.png",
        },
        {
            id: 11,
            title: "Oak",
            artist: "CD Player",
            type: "cd players",
            price: 40.99,
            desc: "Classic wooden finish that brings a touch of sophistication. Offers solid build quality and rich audio output. Perfect for traditionalists and anyone seeking a warm, natural aesthetic.",
            img: "/src/assets/images/products/oak_cd.png",
        },
        {
            id: 12,
            title: "Silver",
            artist: "CD Player",
            type: "cd players",
            price: 36.95,
            desc: "Modern metal look featuring a slim-profile design. Delivers crisp audio with simple, intuitive controls. Suited for both home stereo setups and minimalist entertainment centers.",
            img: "/src/assets/images/products/silver_cd.png",
        },
        ];

        const groupedProducts = products.reduce((acc, product) => {
            if (!acc[product.type]) acc[product.type] = [];
            acc[product.type].push(product);
            return acc;
        }, {});


        onMount(() => {
            const savedScrollPosition = localStorage.getItem('scrollPosition');
            if (savedScrollPosition) {
                window.scrollTo(0, parseInt(savedScrollPosition, 10));
                localStorage.removeItem('scrollPosition'); // Clear after restoring
            }
        });
 </script>

 <ProductDetail />

<div class="body">
    {#each Object.keys(groupedProducts) as type}
        <div class="row">
            <div class="prod-kind">
                <h1>{type}</h1>
                <img src="../src/assets/images/icons/arrow.svg" width="18rem" height="18rem" alt="arrow" />
            </div>
            <div class="prod-row">
                {#each groupedProducts[type] as product}
                    <ProductCard {product} />
                {/each}
            </div>
        </div>
    {/each}
</div>


<style>
    * {
        background-color: transparent;
    }
    
    .body {
        padding: 1rem;
        overflow-y: auto;
        max-width: 65%;
        width: 100%;
        height: auto;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .row {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 32px;
        align-self: stretch;
        padding-top: 5rem;
    }

    .prod-kind {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    .prod-row {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    .prod-card {
        display: flex;
        width: 16rem;
        height: 24rem;
        padding: 1rem;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        border-radius: 1rem;
        border: 1px solid #000;
        background: var(--white);
        box-shadow: 0px 2px 69.3px 0px rgba(0, 0, 0, 0.05);
    }

    .prod-img {
        width: 12rem;
        height: 12rem;
        flex-shrink: 0;
        border-radius: 1rem;
        background-color: var(--overlay);
        background-color: transparent;
    }

    .prod-info {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;
        gap: 4rem;
        background-color: transparent;
    }

    h2 {
      font-size: 1.5rem;
      background-color: transparent;
      text-transform: lowercase;
      max-width: 20ch;
    }

    p {
      font-size: 1.25rem;
      background-color: transparent;
      text-transform: lowercase;
    }

    .prod-name {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
        background-color: transparent;
    }

    @media (max-width: 1310px) {

        .body{
            max-width: 80%;
        }

        .row {
            gap: 24px;
            padding-top: 3rem;
        }

        .prod-kind {
            flex-direction: row;
            align-items: flex-start;
        }

        .prod-row {
            display: flex;
            flex-direction: row;
            gap: 24px;
        }

        .prod-card {
            width: 100%;
        }
    }

    @media (max-width: 1060px) {
        .body {
            margin: 1rem 4rem;
            padding: 1rem;
        }

        .row {
            gap: 24px;
            padding-top: 3rem;
        }

        .prod-kind {
            flex-direction: row;
            align-items: flex-start;
        }

        .prod-row {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 24px;
        }

        .prod-card {
            width: 100%;
        }
    }

    @media (max-width: 375px) {
        .body {
            margin: 1rem;
            padding: 1rem;
        }

        .row {
            gap: 16px;
            padding-top: 2rem;
        }

        .prod-kind {
            flex-direction: row;
            align-items: center;
        }

        .prod-row {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .prod-card {
            width: 100%;
        }
    }


</style>