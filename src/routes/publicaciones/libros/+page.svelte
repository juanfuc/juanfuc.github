<script>
  import { onMount } from 'svelte';
  import { csv } from 'd3-fetch';
  import Icon from '@iconify/svelte';

  let data = [];
  let isLoading = true;

  async function consultarAPI() {
    const cachedData = localStorage.getItem('booksData');
    if (cachedData) {
      data = JSON.parse(cachedData);
      isLoading = false;
    } else {
      let url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSkGYClXLB0CD0KA30_fGfmmfVqnClIEnvsPh6AD8k_QPdkdlGr3bl3fikK3inXli40qRZng4qqp12n/pub?output=csv";
      
      try {
        const fetchedData = await csv(url);
        data = fetchedData;
        localStorage.setItem('booksData', JSON.stringify(data));
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
  <a href="/publicaciones" class="back-link"> <Icon icon="material-symbols:arrow-back" /></a>
  <h1>Libros</h1>
  <br><br>

  {#each data as item}
    <div class="card">
      <div class="card-image">
        <a href={item.DOI} target='_blank'><img src={item.Imagen} alt={item.Título} loading="lazy" /></a>
      </div>
      <div class="card-content">
        <h2>{item.Título}</h2>
        <p>{item.Ciudad}</p>
        <p>{item.Editorial}</p>
        <p>{item.Año}</p>
        <p>ISBN: {item.ISBN}</p>
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

  .back-link {
    color: #f4ba00;
    font-size: 3.5em;
  }

  .back-link:hover {
    font-size: 3.8em;
    box-shadow: 0 0 6px #333;
    transform: scale(1);
    transition: all 1.5s ease;
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
