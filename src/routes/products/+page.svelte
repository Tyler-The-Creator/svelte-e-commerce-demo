<script lang="ts">
  import "../../app.scss";
  import { cart, calculateCartTotal, cartTotal } from "../../store";

  import Carousel from "../../lib/components/Carousel.svelte";

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

<Carousel
  products={products}
  addProductToCart={addProductToCart}
/>

<Carousel
  products={products}
  addProductToCart={addProductToCart}
/>
