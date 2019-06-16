<script>
  import Card from "./components/Card.svelte";
  import Form from "./components/Form.svelte";

  let number = "";
  let user = "";
  let month = "";
  let year = "";
  let cvv = "";
</script>

<style>
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  .container {
    color: #000;
    max-width: 980px;
    margin: 0 auto;
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto auto;
    grid-gap: 2.5rem;
  }

  @media screen and (min-width: 768px) {
    .container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .container h1 {
    grid-column: 1 / -1;
    grid-row: 1 / 1;
    margin: 0;
    font-size: 36px;
    text-align: center;
  }

  .container:nth-child(2),
  .container:nth-child(2) {
    grid-row: 2 / 3;
  }

  .container:nth-child(2) {
    grid-column: 1 / 2;
  }

  .container:nth-child(2) {
    grid-column: 2 / 3;
  }
</style>

<main class="container">
  <h1>Nuevo método de pago</h1>
  <Card {number} {user} {year} {month} {cvv} />
  <Form bind:number bind:user bind:year bind:month bind:cvv />
</main>
