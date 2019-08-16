<script>
  import { POSTER_BASE_URL } from 'api/movie-api';
  export let movie = {};
</script>

<div>
  <img src={`${POSTER_BASE_URL}${movie.poster_path}`} width="240" alt="test" />
</div>
