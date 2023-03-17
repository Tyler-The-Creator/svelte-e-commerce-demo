<script>
  export let data;
  const { product } = data;
</script>

<div>
  <h1>Product Details</h1>
  <picture>
    <img src={product.images[0]} alt="Welcome" />
  </picture>
  <h4>{product.title}</h4>
  <p>{product.description}</p>
  <p>R {product.price.toFixed(2)}</p>
</div>