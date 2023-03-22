<script>
  import ProductDisplayPage from "$lib/components/ProductDisplayPage.svelte";

  export let data;
  const { product } = data;
</script>

<div class="container">
  <ProductDisplayPage product={product} />
</div>
