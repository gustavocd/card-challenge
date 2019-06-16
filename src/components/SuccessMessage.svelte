<script>
  import { fade } from "svelte/transition";
</script>

<style>
  .message {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
  }

  .image {
    height: 100px;
  }

  .copy {
    color: #6ac259;
    font-size: 26px;
    text-align: center;
  }
</style>

<div class="message" in:fade>
  <img class="image" src="./success.svg" alt="Success message" />
  <p class="copy">El método de pago se agregó exitosamente</p>
</div>
