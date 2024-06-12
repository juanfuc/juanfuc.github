<script>
  import { onMount } from 'svelte';
  import { csv } from 'd3-fetch';

  let data = [];
  let isLoading = true;

  async function consultarAPI() {
    const cachedData = localStorage.getItem('projectsData');
    if (cachedData) {
      data = JSON.parse(cachedData);
      isLoading = false;
    } else {
      let url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vShkGiT3_6ivNBE2n_fkBCFoIbf2wJ50G0K3giN66uRJxnKvGrrYvlRXOBGHbnaLaqiHU_O3NzzrNRb/pub?output=csv";

      try {
        const fetchedData = await csv(url);
        data = fetchedData;
        localStorage.setItem('projectsData', JSON.stringify(data));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        isLoading = false;
      }
    }
  }

  onMount(() => {
    consultarAPI();
  });
</script>

<div class="container">
  <h1>Programación creativa y Proyectos HD</h1>
  <br><br>

  {#each data as item}
    <div class="card">
      <div class="card-image">
        <!-- svelte-ignore a11y-missing-attribute -->
        <iframe src={item.link} allowfullscreen width="621" height="513" style="border:none; overflow:hidden" loading="lazy"></iframe>
      </div>
      <div class="card-content">
        <h2>{item.titulo}</h2>
        <p>{item.tipo}</p>
        <p>{item.fecha}</p>
        <p class='autor'>{item.autor}</p>
        <p class="description">{item.descripcion}</p>
      </div>
    </div>
  {/each}
</div>

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

  .card {
    display: flex;
    overflow: hidden;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    height: 100%;
    scroll-snap-align: start;
  }

  .card-image {
    flex: 1;
    padding: 10px;
  }

  .card-content {
    flex: 2;
    padding: 10px;
    display: flex;
    flex-direction: column;
  }

  h1 {
    margin-bottom: 1px;
    font-size: 2vw;
    font-weight: 550;
    color: #f4ba00;
    font-family: "Poppins", sans-serif;
  }

  h2, p {
    margin: 5px 0;
  }

  .autor {
    font-size: larger;
    color: #EE4E4E;
  }

  @media (max-width: 768px) {
    .card {
      flex-direction: column;
      height: auto;
      padding: 3vw;
    }

    .card-image,
    .card-content {
      flex: 1;
      width: 100%;
    }
  }
</style>
