<script>
  import { fetchMovies, resetMovies } from 'api/movie-api';

  let term = '';

  const reset = e => {
    e.preventDefault();
    term = '';
    resetMovies();
  };

  const submitHandler = e => {
    e.preventDefault();
    if (term === '') return false;
    fetchMovies(term);
  };
</script>

<nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="/">Movie Search</a>
  <form class="form-inline" on:submit={submitHandler}>
    <input
      class="form-control mr-sm-2"
      type="search"
      placeholder="Search"
      aria-label="Search"
      bind:value={term} />
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    <button class="btn btn-link my-2 my-sm-0" type="button" on:click={reset}>Reset</button>
  </form>
</nav>
