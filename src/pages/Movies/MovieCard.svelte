<script>
  import { fetchMovie, POSTER_BASE_URL } from 'api/movie-api';
  export let movie = {};

  const clickHandler = ev => {
    ev.preventDefault();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

    const {
      currentTarget: {
        dataset: { movieId },
      },
    } = ev;

    fetchMovie(movieId);
  };
</script>

<div>
  <a href="x" on:click={clickHandler} data-movie-id={movie.id}>
    <img src={`${POSTER_BASE_URL}${movie.poster_path}`} width="240" alt="test" />
  </a>
</div>
