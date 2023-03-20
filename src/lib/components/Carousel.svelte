<script lang="ts">
  import "../../app.scss";

  export let products: any;
  export let addProductToCart: any;
</script>

<div class="slider">
  {#each products as product}
    <article>
      <div class="product">
        <a
          href="/products/{product.id}"
          data-sveltekit-preload-data="tap"
        >
          <picture>
            <img src={product.images[0]} alt="Welcome" class="product-image" />
          </picture>
          <div class="product-details">
            <p class="product-price">
              R {product.price.toFixed(2).replace(".", ",")}
            </p>
            <p class="product-title">
              {product.title}
            </p>
          </div>
        </a>
        <button
          class="add-to-cart"
          on:click={() => addProductToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </article>
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
        display: flex;
        -webkit-overflow-scrolling: touch;
        overflow-x: scroll;
        scrollbar-width: none;
    }

    a {
        text-decoration: none;
        color: black;
    }

    .slider::-webkit-scrollbar {
        display: none;
    }

    article {
        margin: 10px;
        border-radius: 10px;
        scroll-snap-align: start;
        text-align: center;
        position: relative;
    }

    .product {
        border-radius: 20px;
        text-align: center;
        margin: 10px;
        width: 150px;
    }

    .product-details {
        margin-top: 10px;
        text-align: left;
    }

    .product-title {
        font-size: 12px;
        color: gray;
    }

    .product-price {
        color: black;
        font-size: 18px;
        font-weight: 500;
    }

    .add-to-cart {
        position: relative;
        background-color: #C93C13;
        color: white;
        border: none;
        border-radius: 15px;
        padding: 10px;
        cursor: pointer;
        margin-top: 10px;
    }

    .product-image {
        max-width: 80%;
        height: 100px;
        border-radius: 10px;
    }
</style>