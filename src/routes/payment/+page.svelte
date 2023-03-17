<script lang="ts">
  import { cartTotal, resetCart } from "../../store";
  let fullName = "";
  let cardNumber = "";
  let cvv = "";
</script>

<svelte:head>
  <title>Payment</title>
  <meta name="description" content="Payment page">
</svelte:head>

<div class="cardContainer">
  <div class="card">
    <label>
      Full Name
      <input bind:value={fullName} placeholder="John Doe">
    </label>
    <label>
      Card Number
      <input bind:value={cardNumber} placeholder="1111 2222 3333 4444">
    </label>
    <label>
      CVV
      <input bind:value={cvv} placeholder="123">
    </label>
    <button disabled={$cartTotal === 0} on:click={() => {
      alert(`${fullName}\nPaid R ${$cartTotal}`)
      resetCart()
    }}>Pay R {$cartTotal}</button>
  </div>
</div>

<style>
    .cardContainer {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .card {
        padding: 20px;
        width: 50%;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow: hidden;
        position: relative;
    }

    .card input {
        background-color: #eff0f2;
        color: #000;
        margin-bottom: 10px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 10px;
        font-size: 16px;
        outline: none;
    }

    .card button {
        color: #fff;
        padding: 10px;
        border: none;
        border-radius: 10px;
        font-size: 16px;
        outline: none;
        cursor: pointer;
    }
</style>