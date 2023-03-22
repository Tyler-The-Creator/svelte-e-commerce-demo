<script>
  export let product;
</script>

<div class="product-card">
  <picture>
    <img src={product.images[0]} alt="Welcome" />
  </picture>
  <div class="product-info">
    <h3>{product.title}</h3>
    <p>{product.description}</p>
    <p>{product.price.toFixed(2).replace(".", ",")}</p>
  </div>
</div>

<style>
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