<script>
  import { fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { moviesStore } from 'store/movies';
  import { resetMovie, BACKDROP_BASE_URL } from 'api/movie-api';
  let movie = {};
  moviesStore.subscribe(data => (movie = data.movie));

  const close = () => resetMovie();
</script>

<style>
  .movie-details {
    z-index: 0;
    width: 100%;
    background-position: center;
    background-color: #000;
    color: #f4f4f4;
    text-shadow: 1px 1px 1px #000;
    padding: 20px;
    margin: 0 6px 20px;
  }

  .controls {
    width: 100%;
    text-align: right;
  }

  .content {
    width: 100%;
  }
</style>

{#if movie.id}
  <div
    style={`background-image: url(${BACKDROP_BASE_URL}/${movie.backdrop_path})`}
    transition:fly={{ delay: 250, duration: 500, x: 0, y: -100, opacity: 0, easing: quintOut }}
    class="movie-details">
    <div class="controls">
      <button class="btn btn-success btn-sm" type="button" on:click={close}>Close</button>
    </div>
    <div class="content">
      <h4>{movie.title}</h4>
      <div>{movie.overview}</div>
    </div>
  </div>
{/if}
