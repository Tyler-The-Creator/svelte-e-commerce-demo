<script lang="ts">
  import "../../app.scss";
  import { cart, calculateCartTotal, cartTotal } from "../../store";

  import Carousel from "../../lib/components/Carousel.svelte";
  import CategoryCard from "$lib/components/CategoryCard.svelte";

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
  <CategoryCard
    title="Fruits"
    data={products}
  />

  <Carousel
    title="Popular in your area"
    products={products}
    addProductToCart={addProductToCart}
  />

  <Carousel
    title="Bakery"
    products={products}
    addProductToCart={addProductToCart}
  />

  <Carousel
    title="Dairy"
    products={products}
    addProductToCart={addProductToCart}
  />
</div>
