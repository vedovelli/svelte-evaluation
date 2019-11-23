<script>
  import { fetchMovies, resetMovies } from 'api/movie-api';

  let term = '';

  const reset = e => {
    e.preventDefault();
    term = '';
    document.getElementById('search-input').focus();
    resetMovies();
  };

  const submitHandler = e => {
    e.preventDefault();
    if (term === '') return false;
    fetchMovies(term);
  };
</script>

<style>
  .navbar {
    z-index: 1;
    box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.2);
  }
</style>

<nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="/">Movie Search</a>
  <form class="form-inline" on:submit={submitHandler}>
    <!-- svelte-ignore a11y-autofocus -->
    <input
      autofocus
      id="search-input"
      class="form-control mr-sm-2"
      type="search"
      placeholder="Buscar XXX"
      aria-label="Search"
      bind:value={term} />
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    <button class="btn btn-link my-2 my-sm-0" type="button" on:click={reset}>Reset</button>
  </form>
</nav>
