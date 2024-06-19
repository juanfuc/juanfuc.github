<script>
  import { onMount } from 'svelte';
  import Icon from '@iconify/svelte';
  import { csv } from 'd3-fetch';
  import { page } from '$app/stores';

  let data = [];
  let isLoading = true;
  let isHome = true; // Variable para controlar si estamos en la página principal

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  async function loadAndShuffleData() {
    const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZsnsur1Nec98cL4ujG9kBFmXU0TyvOtkd7TR61LsqhPuu4r7CUU-lZ9BF__cmYNHNA8rCcSsafvgq/pub?output=csv";
    try {
      const fetchedData = await csv(url);
      shuffleArray(fetchedData);
      data = fetchedData;
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      isLoading = false;
    }
  }

  onMount(() => {
    loadAndShuffleData();
    const lastPage = localStorage.getItem('lastPage');
    isHome = !lastPage || lastPage === '/';
  });

  function handleNavigation(event) {
    const path = event.target.getAttribute('href');
    isHome = path === '/';
    localStorage.setItem('lastPage', path);
  }
</script>

<style>
/* Estilos para pantallas grandes */
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1em;
  color: #054f6d;
  margin-bottom: 20px;
  font-family: "Poppins", sans-serif;
  font-weight: 450;
  padding: 1%;
}

nav .left {
  flex: 1;
  display: flex;
  justify-content: flex-start;
  font-size: 2.5em; /* Tamaño de fuente mayor para el nombre */
}

nav .icons {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px !important;
  color: #f4ba00 !important;
  margin-left: 10px;
}

nav .right {
  flex: 1;
  display: flex;
  justify-content: space-evenly;
}

.container {
  font-family: "Montserrat", sans-serif;
  background-color: #e6ebf1;
  text-align: justify;
  max-width: auto;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 250px;
  gap: 20px;
}

.card {
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-image img {
  max-width: 100%;
  height: auto;
  transition: all 0.5s ease;
  border: none;
  filter: grayscale(100%) brightness(80%) contrast(120%);
}

.card-image img:hover {
  box-shadow: 0 0 32px #333;
  transform: scale(1.05);
  filter: none;
}

nav a {
  color: #054f6d;
  text-decoration: none;
  padding: 10px;
}

nav a:focus {
  color: #f4ba00;
}

nav a:hover {
  color: #f4ba00;
}

/* Estilos para pantallas pequeñas (móviles) */
@media screen and (max-width: 768px) {
  nav {
    flex-direction: column;
    align-items: center;
    font-size: 0.8em; /* Ajusta el tamaño del texto del menú para móviles */
  }

  nav .left {
    align-items: center;
    margin-bottom: 10px;
  }

  nav .icons {
    flex-direction: row; 
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 10px;
  }

  nav .right {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .grid {
    grid-template-columns: 1fr; /* Una sola columna para pantallas pequeñas */
    grid-auto-rows: auto;
  }
}

</style>

<nav>
  <div class="left">
    <a href="/" on:click={handleNavigation}>Juan Felipe Urueña Calderón</a>
    <div class="icons"> 
      <a href="https://github.com/juanfuc" target="_blank"><Icon icon="mdi:github" /></a>
      <a href="https://x.com/@juuuuffff" target="_blank"><Icon icon="pajamas:twitter" /></a>
      <a href="https://unal.academia.edu/JuanFelipeUrue%C3%B1aCalder%C3%B3n" target="_blank"><Icon icon="simple-icons:academia" /></a>
      <a href="https://www.researchgate.net/profile/Juan-Uruena" target="_blank"><Icon icon="simple-icons:researchgate" /></a>
      <a href="https://orcid.org/0000-0003-0576-159X" target="_blank"><Icon icon="simple-icons:orcid" /></a>
      <a href="https://observablehq.com/@juanfuc" target="_blank"><Icon icon="simple-icons:observable" /></a>
    </div>
  </div>
  <div class="right">
    <a href="/perfil" on:click={handleNavigation}>Perfil</a>
    <a href="/experiencia" on:click={handleNavigation}>Experiencia</a>
    <a href="/publicaciones" on:click={handleNavigation}>Publicaciones</a>
    <a href="/programacion" on:click={handleNavigation}>Programación/HD</a>
  </div>
</nav>

{#if isHome}
  <div class="container">
    {#if isLoading}
      <p>...</p>
    {:else}
      <div class="grid">
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
    {/if}
  </div>
{/if}

<slot />
