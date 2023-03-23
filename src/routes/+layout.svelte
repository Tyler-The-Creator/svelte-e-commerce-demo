<script lang="ts">
  import "../app.scss";
  // import { cartTotal } from "../store.js";

  import TopAppBar, {
    Row,
    Section,
    Title,
    AutoAdjust
  } from "@smui/top-app-bar";
  import IconButton from "@smui/icon-button";

  let topAppBar: TopAppBar;
</script>

<html lang="en">

<!--<nav class="">-->
<!--  <ul>-->
<!--    <li><strong><a href="/">Zulzi</a></strong></li>-->
<!--  </ul>-->
<!--  <ul>-->
<!--    <li><a href="/products">Products</a></li>-->
<!--    <li><a href="/cart">Cart (R {$cartTotal})</a></li>-->
<!--  </ul>-->
<!--</nav>-->
<body>

<TopAppBar bind:this={topAppBar} variant="fixed">
  <Row class="smui-card--padded">
    <Section>
      <Title><a href="/">Zulzi</a></Title>
    </Section>
    <Section align="end" toolbar>
      <a href="/products">
        <IconButton
          class="material-icons"
          aria-label="Download"
        >
          shop
        </IconButton>
      </a>
      <a href="/cart">
        <IconButton
          class="material-icons"
          aria-label="Download"
        >
          shopping_cart
        </IconButton>
      </a>
    </Section>
  </Row>
</TopAppBar>
<AutoAdjust {topAppBar}>
  <slot />
</AutoAdjust>
</body>

</html>

<style>
    /* Hide everything above this component. */
    :global(#smui-app),
    :global(body),
    :global(html) {
        display: block !important;
        height: auto !important;
        width: auto !important;
        position: static !important;
        margin: 0px;
    }
</style>
