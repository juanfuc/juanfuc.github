<script>
  import { Router, Link, Route } from 'svelte-routing';
  import Articulos from './publicaciones/Articulos.svelte';
  import Libros from './publicaciones/Libros.svelte';
  import Capitulos from './publicaciones/Capitulos.svelte';
</script>

<style>
  nav {
    display: flex;
    justify-content: space-around;
    padding: 10px;
    background-color: #eee;
  }



  .container {
    padding: 20px;
  }
</style>

<nav>
  <Link to="articulos">Artículos</Link>
  <Link to="libros">Libros</Link>
  <Link to="capitulos">Capítulos</Link>
</nav>

<div class="container">
  <Router>
    <Route path="articulos" component={Articulos} />
    <Route path="libros" component={Libros} />
    <Route path="capitulos" component={Capitulos} />
  </Router>
</div>
