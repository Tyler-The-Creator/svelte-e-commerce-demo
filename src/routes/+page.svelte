<script lang="ts">
  let count = 0;
  function increment() {
    count += 1;
  }
</script>

<div class="container">
  <h1>Welcome to SvelteKit</h1>
  <p>Count is {count}</p>
  <button on:click={increment}>
    Increment
  </button>
</div>


