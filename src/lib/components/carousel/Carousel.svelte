<script lang="ts">
  export let products: any;
  export let addProductToCart: any;
</script>

<div class="slider">
  {#each products as product}
    <section>
      <div class="product">
        <picture>
          <img src={product.images[0]} alt="Welcome" class="product-image" />
        </picture>
        <p>{product.title}</p>
        <p>R {product.price.toFixed(2)}</p>
        <a href="/products/{product.id}" data-sveltekit-preload-data="tap">
          <button
            class="add-to-cart"
          >View
          </button>
        </a>
        <button class="add-to-cart" on:click={() => addProductToCart(product)}>Add to Cart
        </button>
      </div>
    </section>
  {/each}
</div>

<style>
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    .slider {
        font-family: sans-serif;
        /*scroll-snap-type: x mandatory;*/
        display: flex;
        -webkit-overflow-scrolling: touch;
        overflow-x: scroll;
        scrollbar-width: none;
    }

    .slider::-webkit-scrollbar {
        display: none;
    }

    section {
        padding: 1rem;
        scroll-snap-align: start;
        text-align: center;
        position: relative;
    }

    p {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .product {
        border: 1px solid grey;
        border-radius: 20px;
        padding: 10px;
        text-align: center;
        display: inline-block;
        margin: 10px;
        width: 200px;
    }

    .add-to-cart {
        background-color: #C93C13;
        color: white;
        border: none;
        border-radius: 15px;
        padding: 10px;
        cursor: pointer;
        margin-top: 10px;
    }

    .product-image {
        max-width: 100%;
        height: 200px;
        border-radius: 10px;
    }
</style>