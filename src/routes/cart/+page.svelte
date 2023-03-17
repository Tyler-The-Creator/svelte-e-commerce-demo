<script lang="ts">
  import { cart, cartTotal } from "../../store";
</script>

<svelte:head>
  <title>Cart</title>
  <meta name="description" content="Cart page">
</svelte:head>

<div class="totalContainer">
  <h2>Cart Total: R {$cartTotal}</h2>
  <a href="/payment">
    <button>Checkout</button>
  </a>
</div>

<div class="grid">
  {#each $cart.products as product}
    <div class="product">
      <h4>{product.title}</h4>
      <picture>
        <img src={product.images[0]} alt="Welcome" class="product-image" />
      </picture>
      <p>${product.price.toFixed(2)}</p>
    </div>
  {/each}
</div>

<style>
    .totalContainer {
        display: flex;
        justify-content: space-between;
        padding: 20px;
    }

    p {
        margin-top: 10px;
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
    }
</style>