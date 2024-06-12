<script>
  import { onMount } from 'svelte';
  import { csv } from 'd3-fetch';

  let data = [];
  let isLoading = true;

  async function consultarAPI() {
    let url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vThq4fhXW3GP7MsfMBrvjUgGN0SV-yQztsRwtWq5kCDpGVJdRAskzi0Mq2GYJuFsqIV4eHp9bfNoqVR/pub?gid=2145965265&single=true&output=csv";
    
    try {
      const datos = await csv(url);
      gotData(datos);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      isLoading = false;
    }
  }

  function gotData(datos) {
    data = datos;
    console.log('Data loaded:', data);
  }

  onMount(() => {
    if (data.length === 0) {
      consultarAPI();
    }
  });
</script>

<div class="container">
  <h1>Artículos académicos</h1>
  <br><br>

    {#each data as item}
      <div class="card">
        <div class="card-image">
          <a href={item.DOI} target='_blank'><img src={item.Imagen} alt={item.Título} /></a>
        </div>
        <div class="card-content">
          <h2>{item.Título}</h2>
          <p>{item.Revista}</p>
          <p>{item.Volumen}</p>
          <p>{item.Número}</p>
          <p>{item.Año}</p>
          <p>{item.Páginas}</p>
          <p class='autor'>{item.Autor}</p>
          <p class="description">{item.Descripcion}</p>
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

  .card-image img {
    max-width: 100%;
    height: auto;
    transition: all 1.5s ease;
  }

  .card-image img:hover {
    box-shadow: 0 0 32px #333;
    transform: scale(1);
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
    font-weight: 800;
    color: #799351;
    font-family: "Poppins", sans-serif;
  }

  h2, p {
    margin: 5px 0;
  }

  .autor {
    font-size: larger;
    color: #EE4E4E;
  }

  a {
    color: #E16526;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
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

    .card-image img {
      width: 100%;
    }
  }
</style>
