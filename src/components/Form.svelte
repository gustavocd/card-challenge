<script>
  import SuccessMessage from "./SuccessMessage.svelte";
  import { validateForm } from "../lib";

  export let number = "";
  export let user = "";
  export let month = "";
  export let year = "";
  export let cvv = "";

  let submitting = false;
  let success = false;
  let error = {};

  function handleValidation() {
    const errors = validateForm();
    if (errors.length > 0) {
      [error] = errors;
      return;
    }
    error = {};
    handleSubmit();
  }

  function handleSubmit() {
    // Send this object to the server...
    const formData = { number, user, month, year, cvv };
    submitting = true;
    setTimeout(function() {
      submitting = false;
      success = true;
    }, 1500);
  }

  $: numberErr = error.message && error.field === "number";
  $: userErr = error.message && error.field === "user";
  $: monthErr = error.message && error.field === "month";
  $: yearErr = error.message && error.field === "year";
  $: cvvErr = error.message && error.field === "cvv";
</script>

<style>
  .form-group {
    margin-bottom: 1.5rem;
  }

  .form-control {
    margin: 0;
    display: block;
    width: 100%;
    margin-bottom: 0.5rem;
  }

  input.form-control {
    padding: 0 1rem;
    height: 40px;
  }

  .date {
    width: 45%;
    display: flex;
    flex-wrap: wrap;
  }

  .date input:nth-child(2) {
    width: 45%;
  }

  .date input:nth-child(3) {
    width: 50%;
    margin-left: auto;
  }

  .multiple {
    display: flex;
  }

  .cvv {
    width: 50%;
    margin-left: auto;
  }

  label[for="cvv"] {
    margin-bottom: 25px;
  }

  @media screen and (min-width: 768px) {
    label[for="cvv"] {
      margin-bottom: 0.5rem;
    }
  }

  .submit-btn {
    color: #fff;
    height: 45px;
    display: block;
    width: 100%;
    cursor: pointer;
    background-color: #59b32d;
  }

  .submit-btn:hover {
    box-shadow: 0 0 3px #000;
  }

  .loader {
    margin: 0 auto;
    border: 3px solid #f3f3f3;
    border-top: 3px solid #3498db;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .numberErr,
  .userErr,
  .yearErr,
  .monthErr,
  .cvvErr {
    color: tomato;
  }

  .cvvErr label {
    margin-bottom: 25px;
  }

  .numberErr input,
  .userErr input,
  .yearErr input,
  .monthErr input,
  .cvvErr input {
    border: 1px solid tomato;
  }

  .numberErr span,
  .userErr span,
  .yearErr span,
  .monthErr span,
  .cvvErr span {
    font-size: 14px;
  }
</style>

{#if !success}
  <form action="#" id="card-form" autocomplete="off" on:submit|preventDefault>
    <div class="form-group" class:numberErr>
      <label class="form-control" for="number">Número de tarjeta</label>
      <input
        class="form-control"
        type="text"
        maxlength="20"
        name="number"
        id="number"
        bind:value={number} />
      {#if error && error.field === 'number'}
        <span>{error.message}</span>
      {/if}
    </div>
    <div class="form-group" class:userErr>
      <label class="form-control" for="user">Nombre del tarjetahabiente</label>
      <input
        class="form-control"
        type="text"
        name="user"
        id="user"
        bind:value={user} />
      {#if error && error.field === 'user'}
        <span>{error.message}</span>
      {/if}
    </div>
    <div class="form-group multiple">
      <div class="date" class:yearErr class:monthErr>
        <label for="month" class="form-control">Vencimiento</label>
        <input
          class="form-control"
          type="text"
          name="month"
          id="month"
          maxlength="2"
          placeholder="MM"
          bind:value={month} />
        <input
          class="form-control"
          type="text"
          name="year"
          id="year"
          maxlength="2"
          placeholder="AA"
          bind:value={year} />
        {#if error && (error.field === 'month' || error.field === 'year')}
          <span>{error.message}</span>
        {/if}
      </div>
      <div class="cvv" class:cvvErr>
        <label class="form-control" for="cvv">Código CVV</label>
        <input
          class="form-control"
          type="text"
          name="cvv"
          id="cvv"
          maxlength="3"
          bind:value={cvv} />
        {#if error && error.field === 'cvv'}
          <span>{error.message}</span>
        {/if}
      </div>
    </div>
    <div class="form-group">
      <button class="submit-btn" type="button" on:click={handleValidation}>
        {#if !submitting}
          Agregar método de pago
        {:else}
          <div class="loader" />
        {/if}
      </button>
    </div>
  </form>
{/if}
{#if success}
  <SuccessMessage />
{/if}
