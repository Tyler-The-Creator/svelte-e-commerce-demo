<script lang="ts">
  export let data: unknown;
</script>

<div class="mdc-typography--headline5 title">Shop by Category</div>
<div class="slider">
  {#each data as item}
    <section>
      <div class="category">
        <a
          href="/category/{item.id}"
          data-sveltekit-preload-data="tap"
        >
          <picture>
            <img src={item.images[0]} alt="Welcome" class="category-image" />
          </picture>
        </a>
      </div>
      <div class="category-details">
        <p class="category-title">
          {item.title}
        </p>
      </div>
    </section>
  {/each}
</div>

<style>
    .title {
        margin-left: 10px;
        margin-top: 10px;
        font-family: Roboto,monospace;
        color: black;
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

    section {
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .category {
        margin: 10px;
        width: 150px;
    }

    .category-details {
        margin-top: 10px;
        text-align: center;
    }

    .category-title {
        font-size: 14px;
        color: gray;
    }

    .category-image {
        max-width: 80%;
        height: 100px;
        border-radius: 10px;
    }
</style>