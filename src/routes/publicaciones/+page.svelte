<script>
  import { onMount } from 'svelte';
  import { csv } from 'd3-fetch';

  let data = [];
  let isLoading = true;

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  async function loadAndShuffleData() {
    const cachedData = localStorage.getItem('publicationsData');
    if (cachedData) {
      data = JSON.parse(cachedData);
      isLoading = false;
    } else {
      const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQR9SJLkMxmqUQBfO5q-SOOssY5qwzQz6UxuEYobaWtJi4rqZuHpjuaiz3VnRJdxdTkq-L3hfmNm8Jh/pub?output=csv";
      try {
        const fetchedData = await csv(url);
        shuffleArray(fetchedData);
        data = fetchedData;
        localStorage.setItem('publicationsData', JSON.stringify(data));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        isLoading = false;
      }
    }
  }

  onMount(() => {
    loadAndShuffleData();
  });
</script>

<style>
  .container {
    font-family: "Montserrat", sans-serif;
    line-height: 1.6;
    margin: 0 auto;
    background-color: #e6ebf1;
    color: #054f6d;
    text-align: justify;
    max-width: 1200px;
    padding: 20px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 250px;
    gap: 20px;
  }

  .card {
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card:last-child {
    grid-column: 2 / 3; /* Hace que el último elemento se centre en la última fila */
  }

  .card-image img {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s ease;
    filter: grayscale(100%); /* Blanco y negro */
  }

  .card-image img:hover {
    box-shadow: 0 0 32px #333;
    transform: scale(1.05);
    filter: none; /* Volver al color original al pasar el cursor */
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .link {
    display: block;
    font-family: "Poppins", sans-serif;
    text-align: center;
    font-size: 2em;
    padding: 10px;
    margin: 10px 0;
    text-decoration: none;
    color: #f4ba00;
    font-weight: 550;
  }

  .link:hover {
    font-size: 2.1em;
  }
</style>

<div class="container">
  <div class="grid">
    <a href="/publicaciones/articulos" class="link">Artículos</a>
    <a href="/publicaciones/libros" class="link">Libros</a>
    <a href="/publicaciones/capitulos" class="link">Capítulos</a>
    {#each data as item (item.indice)}
      <div class="card">
        {#if item.link}
          <a href={item.link} target='_blank'>
            <div class="card-image">
              <img src={item.imagen} alt={`Publicación ${item.indice}`} loading="lazy" />
            </div>
          </a>
        {:else}
          <div class="card-image">
            <img src={item.imagen} alt={`Publicación ${item.indice}`} loading="lazy" />
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div>
