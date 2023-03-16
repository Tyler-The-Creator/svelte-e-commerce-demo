<script lang="ts">
  import "../../app.scss";

  export let data;
  const { products } = data;
</script>

<svelte:head>
  <title>Products</title>
  <meta name="description" content="Products page">
</svelte:head>

<div class="grid">
  {#each products as product}
    <div class="product">
      <h4>{product.title}</h4>
      <picture>
        <img src={product.images[0]} alt="Welcome" class="product-image" />
      </picture>
<!--      <p>{product.description}</p>-->
      <p>${product.price.toFixed(2)}</p>
      <a href="/products/{product.id}" data-sveltekit-preload-data="tap">
        <button class="add-to-cart">View</button>
      </a>
      <!--      <button class="add-to-cart" on:click={() => addToCart("Product 1")}>Add to Cart</button>-->
    </div>
  {/each}
</div>


<style>
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

    .add-to-cart {
        background-color: #C93C13;
        color: white;
        border: none;
        border-radius: 15px;
        padding: 10px;
        cursor: pointer;
    }

    .product-image {
        max-width: 100%;
        height: 50%;
    }
</style>