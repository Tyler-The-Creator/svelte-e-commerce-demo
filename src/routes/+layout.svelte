<script lang="ts">
  import "../app.scss";
  import { cartTotal } from "../store.js";
</script>

<html lang="en" data-theme="dark">

<section>
  <nav class="container">
    <li><strong><a href="/">Zulzi</a></strong></li>
    <ul>
      <li><a href="/products">Products</a></li>
      <li><a href="/cart">Cart (R {$cartTotal})</a></li>
    </ul>
  </nav>

  <slot />
</section>

</html>

<style>

</style>