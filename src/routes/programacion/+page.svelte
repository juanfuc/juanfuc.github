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
        <iframe src={item.link} allowfullscreen style="border:none; overflow:hidden" loading="lazy"></iframe>
      </div>
      <div class="card-content">
       <a href={item.link} target="_blank" style="text-decoration: none; color: #054f6d;"> <h2>{item.titulo}</h2></a>
        <p>{item.tipo}</p>
        <p>{item.fecha}</p>
        <p class='autor'>{item.autor}</p>
        <!-- <p class="description">{item.descripcion}</p> -->
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

  .card-image iframe {
    width: 100%; /* Ajusta el iframe para que ocupe todo el ancho disponible */
    height: 350px; /* Puedes ajustar este valor para hacer el recuadro más grande o pequeño */
  }

  .card-content {
    flex: 2;
    padding: 10px;
    display: flex;
    flex-direction: column;
  }

  .card-content a h2:hover {
    text-decoration: underline;
    color: #054f6d;
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

    .container h1 {
      font-size: 1.5em;
    }
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

    .card-image iframe {
      width: 100%; /* Asegura que el iframe ocupe todo el ancho disponible */
      height: auto; /* Ajusta la altura automáticamente */
      min-height: 200px; /* Establece una altura mínima para pantallas pequeñas */
    }
  }
</style>
