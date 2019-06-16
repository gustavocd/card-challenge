<script>
  import { fade, fly } from "svelte/transition";
  import { cardNumberFormat } from "../lib";

  export let number = "";
  export let user = "";
  export let month = "";
  export let year = "";
  export let cvv = "";

  $: isVisa = number.startsWith("4");
  $: isMasterCard = number.startsWith("5");
</script>

<style>
  :root {
    --bg-color-default: #cdb471;
  }

  .card {
    font-family: "B612 Mono", monospace;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    min-width: calc(100vw - 6rem);
    height: 230px;
    margin: 0 auto;
    border-radius: 20px;
    background-color: var(--bg-color-default);
  }

  @media screen and (min-width: 768px) {
    .card {
      min-width: 400px;
      margin: 0;
    }
  }

  .image {
    max-width: 100%;
    height: 100px;
  }

  p {
    margin-bottom: 10px;
  }

  .header {
    display: flex;
    justify-content: space-between;
  }

  .footer {
    padding-left: 10px;
    margin-top: auto;
  }

  .number {
    font-size: 26px;
  }

  .user {
    text-transform: uppercase;
  }

  .isVisa {
    background-color: #73b8f9;
  }
</style>

<div class="card" class:isVisa>
  <header class="header">
    <img class="image" src="./sim.svg" alt="Sim" />
    {#if isMasterCard}
      <img
        in:fly
        out:fade
        class="image"
        src="./mastercard.svg"
        alt="Mastercard brand" />
    {:else if isVisa}
      <img in:fly out:fade class="image" src="./visa.svg" alt="Visa brand" />
    {/if}
  </header>
  <footer class="footer">
    <p class="number">{cardNumberFormat(number)}</p>
    <p class="user">{user}</p>
    {#if year !== '' || month !== ''}
      <p>{month} / {year}</p>
    {/if}
  </footer>
</div>
