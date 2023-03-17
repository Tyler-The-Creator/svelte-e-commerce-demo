<script lang="ts">
  import "../app.scss";
  import { cartTotal } from "../store";

  console.log("cartTotal", $cartTotal);

</script>

<html lang="en" data-theme="dark">

<body>

<nav class="container">
  <ul>
    <li><strong>Zulzi</strong></li>
    <li><a href="/">Home</a></li>
    <li><a href="/products">Products</a></li>
    <li><a href="/cart">Cart (R {$cartTotal})</a></li>
  </ul>
</nav>

<slot />

</body>

</html>

<style>

</style>