<script lang="ts">
  import "../../app.scss";
  import { cart, calculateCartTotal, cartTotal } from "../../store";

  import ProductCarousel from "../../lib/components/ProductCarousel.svelte";
  import CategoryCarousel from "$lib/components/CategoryCarousel.svelte";

  export let data;
  const { products } = data;

  const addProductToCart = (product) => {
    cart.update((cart) => {
      cart.products.push({ ...product });
      return cart;
    });
    $cartTotal = calculateCartTotal($cart);
  };
</script>

<svelte:head>
  <title>Products</title>
  <meta name="description" content="Products page">
</svelte:head>

<div class="container">
  <CategoryCarousel
    title="Fruits"
    data={products}
  />

  <ProductCarousel
    title="Popular in your area"
    products={products}
    addProductToCart={addProductToCart}
  />

  <ProductCarousel
    title="Bakery"
    products={products}
    addProductToCart={addProductToCart}
  />

  <ProductCarousel
    title="Dairy"
    products={products}
    addProductToCart={addProductToCart}
  />

  <ProductCarousel
    title="Dairy"
    products={products}
    addProductToCart={addProductToCart}
  />
</div>
