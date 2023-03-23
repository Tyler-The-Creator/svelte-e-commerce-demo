<script lang="ts">
  import { cart, cartTotal } from "../../store";
  import Button, { Label } from '@smui/button';
</script>

<svelte:head>
  <title>Cart</title>
  <meta name="description" content="Cart page">
</svelte:head>

<div class="totalContainer">
  <h2 style="color: black; font-family: Roboto, serif;">Cart Total: R {$cartTotal}</h2>
  <a href="/payment">
    <Button variant="raised" class="button-shaped-round">
      <Label>Checkout</Label>
    </Button>
  </a>
</div>

<div class="grid">
  {#each $cart.products as product}
    <div class="product">
      <h4>{product.title}</h4>
      <picture>
        <img src={product.images[0]} alt="Welcome" class="product-image" />
      </picture>
      <p>R {product.price.toFixed(2)}</p>
    </div>
  {/each}
</div>

<style>
    .totalContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 20px;
        padding-right: 20px;
        margin-top: 20px;
    }

    p {
        margin-top: 10px;
        color: #000;
        font-family: Roboto,serif;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        gap: 20px;
        padding: 20px;
    }

    .product {
        border: 1px solid grey;
        border-radius: 20px;
        padding: 10px;
        text-align: center;
        display: inline-block;
        margin: 10px;
        width: 400px;
    }

    .product-image {
        max-width: 100%;
        height: 50%;
    }

    a button {
        background-color: #4CAF50;
        width: fit-content;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        font-family: Roboto,serif;
        border-radius: 10px;
    }
</style>