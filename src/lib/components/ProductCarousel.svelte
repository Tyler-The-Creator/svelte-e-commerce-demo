<script lang="ts">
  import "../../app.scss";

  export let title: string;
  export let products: any;
  export let addProductToCart: any;
</script>


<h6>{title}</h6>
<div class="slider">
  {#each products as product}
    <article>
      <div
        class="plus-div"
        on:click={() => addProductToCart(product)}
      >
        <span>+</span>
      </div>
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
      </div>
    </article>
  {/each}
</div>

<style>
    h6 {
        font-size: 18px;
        font-weight: 500;
        margin-left: 10px;
    }

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
        margin-bottom: 10px;
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
        font-weight: 500;
    }

    .product-image {
        max-width: 80%;
        height: 100px;
        border-radius: 10px;
    }

    .plus-div {
        position: absolute;
        border: 1px solid #c93c13;
        border-radius: 15px;
        font-weight: bold;
        background-color: white;
        color: #C93C13;
        top: 10px;
        right: 10px;
        width: 30px;
        height: 30px;
        align-items: center;
        justify-content: center;
    }
</style>