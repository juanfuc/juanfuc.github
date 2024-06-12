

<script>
  // Puedes agregar cualquier lógica adicional aquí si es necesario
</script>

<style>
  .game-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  iframe {
    border: none;
    width: 100%;
    height: 100vh; /* Ajusta esto según el tamaño deseado del juego */
  }
</style>

<div class="game-container">
  <!-- svelte-ignore a11y-missing-attribute -->
  <iframe src="./index.html" allowfullscreen></iframe>
</div>