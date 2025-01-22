<head>
    <link rel="stylesheet" href="src/css/style.css" />
</head>

<script lang="js">
    import Header from '$lib/Header.svelte';
    import Footer from '$lib/Footer.svelte';
    // import Hero from '$lib/Hero.svelte';
    let { children } = $props();
</script>


<Header />
<!-- <Hero /> -->
{@render children?.()}
<Footer />