<!-- src/routes/product/[id]/+page.svelte -->
<script lang="js">
    import ProductDetail from '$lib/components/ProductDetail.svelte';
    export let data; // receive the data from +page.server.js
  </script>
  
  <ProductDetail product={data.product} />