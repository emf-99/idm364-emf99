<!-- +page.svelte -->
 <script lang="js">
    import ProductCard from '$lib/components/ProductCard.svelte';
    
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
            title: "Silver Turntable",
            artist: "Turntable",
            type: "record players",
            price: 200.99,
            desc: "Sleek metallic design that complements modern decor. Equipped with adjustable tonearm and belt-drive system for accurate playback. Ideal for audiophiles and vinyl newcomers seeking a minimalist aesthetic.",
            img: "/src/assets/images/products/silver_turntable.png",
        },
        {
            id: 5,
            title: "White Turntable",
            artist: "Turntable",
            type: "record players",
            price: 205.95,
            desc: "Clean, contemporary design featuring a durable, scratch-resistant finish. Advanced anti-skate technology ensures crisp, clear sound. Perfect for anyone who wants a stylish statement piece with high performance.",
            img: "/src/assets/images/products/white_turntable.png",
        },
        {
            id: 6,
            title: "Gold Turntable",
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
            title: "Aligator Bites Never Heal",
            artist: "Doechii",
            type: "cds",
            price: 20.99,
            desc: "A rising star’s innovative project merging hip-hop and alternative sounds. Showcases Doechii’s dynamic vocal range and fearless lyrical style. Ideal for listeners craving fresh, genre-defying music.",
            img: "/src/assets/images/products/aligator.png",
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
            title: "Pink CD Player",
            artist: "CD Player",
            type: "cd players",
            price: 35.99,
            desc: "Fun, vibrant hue that adds a pop of color to any room. Compact size with easy-to-navigate controls and reliable playback. Great for kids, teenagers, or anyone who wants a bold style statement.",
            img: "/src/assets/images/products/pink_cd.png",
        },
        {
            id: 11,
            title: "Oak CD Player",
            artist: "CD Player",
            type: "cd players",
            price: 40.99,
            desc: "Classic wooden finish that brings a touch of sophistication. Offers solid build quality and rich audio output. Perfect for traditionalists and anyone seeking a warm, natural aesthetic.",
            img: "/src/assets/images/products/oak_cd.png",
        },
        {
            id: 12,
            title: "Silver CD Player",
            artist: "CD Player",
            type: "cd players",
            price: 36.95,
            desc: "Modern metal look featuring a slim-profile design. Delivers crisp audio with simple, intuitive controls. Suited for both home stereo setups and minimalist entertainment centers.",
            img: "/src/assets/images/products/silver_cd.png",
        },
        ];

        const groupedProducts = products.reduce((acc, product) => {
        if (!acc[product.type]) {
            acc[product.type] = [];
        }
        acc[product.type].push(product);
        return acc;
        }, {});
 </script>

<head>
    <link rel="stylesheet" href="src/css/style.css" />
</head>

<div class="body">

    <div class="container">
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

</div>

<style>
    * {
        background-color: transparent;
    }

    .body {
        margin: 1rem 14rem;
        padding: 1rem;
        overflow-y: auto;
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
        height: auto;
        padding: 1rem;
        flex-direction: column;
        align-items: center;
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
    }

    p {
      font-size: 1.25rem;
      background-color: transparent;
    }

    .prod-name {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
        background-color: transparent;
    }


</style>