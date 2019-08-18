<script>
  import { posterMovies } from 'store/movies';
  import MovieCard from '@/Movies/MovieCard.svelte';
  import MovieDetails from '@/Movies/MovieDetails.svelte';
  let movies = [];
  let movie = {};
  posterMovies.subscribe(data => (movies = data));
</script>

<style>
  ul,
  li {
    list-style: none;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    margin-top: 25px;
  }

  li {
    flex: 1;
    text-align: center;
    background-color: #000;
    padding: 5px;
    margin: 5px;
    border: #ccc 1px solid;
  }
</style>

<ul>
  <MovieDetails />
  {#each movies as movie}
    <li>
      <MovieCard {movie} />
    </li>
  {/each}
</ul>
