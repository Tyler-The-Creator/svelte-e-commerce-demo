<script>
  import Card, {
    Content,
    Media,
    MediaContent
  } from "@smui/card";

  export let product;
</script>

<div class="card-display container">
  <div class="card-container">
    <Card>
      <Media class="card-media-16x9" style="--background-image: url({product.images[0]})" aspectRatio="16x9">
        <MediaContent>
          <h2
            class="mdc-typography--headline6"
            style="color: #fff; position: absolute; bottom: 16px; left: 16px; margin: 0;"
          >
            R {product.price.toFixed(2).replace(".", ",")}
          </h2>
        </MediaContent>
      </Media>
      <Content style="color: #888;">Here's some gray text down here.</Content>
    </Card>
  </div>
</div>

<!--<div class="product-card">-->
<!--  <picture>-->
<!--    <img src={product.images[0]} alt="Welcome" />-->
<!--  </picture>-->
<!--  <div class="product-info">-->
<!--    <h3>{product.title}</h3>-->
<!--    <p>{product.description}</p>-->
<!--    <p>{product.price.toFixed(2).replace(".", ",")}</p>-->
<!--  </div>-->
<!--</div>-->

<style>
    * :global(.card-media-16x9) {
        background-image: var(--background-image);
    }

    * :global(.card-media-square) {
        background-image: var(--background-image);
    }

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        padding: 20px;
    }

    .product-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        padding: 1rem;
        border: 1px solid #ccc;
        border-radius: 0.5rem;
        box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
    }

    .product-card picture {
        width: 100%;
        height: 100%;
        max-width: 300px;
        max-height: 300px;
        margin-bottom: 1rem;
    }

    .product-card picture img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .product-card .product-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }

    .product-card .product-info h3 {
        margin-bottom: 0.5rem;
    }

    .product-card .product-info p {
        margin-bottom: 0.5rem;
    }

    .product-card .product-info p:last-child {
        margin-bottom: 0;
    }

    .product-card .product-info p:last-child::before {
        content: "R ";
    }
</style>