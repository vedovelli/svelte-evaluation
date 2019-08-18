import { http, API_KEY } from './http';
import { moviesStore, initialState } from 'store/movies';

export const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w500';
export const BACKDROP_BASE_URL = 'https://image.tmdb.org/t/p/original';

export const fetchMovies = async term => {
  const fetchURL = `search/movie?api_key=${API_KEY}&query=${term}`;

  const {
    data: { results: movies },
  } = await http.get(fetchURL);

  moviesStore.set({
    ...initialState,
    movies,
  });
};

export const resetMovies = () => moviesStore.set({ ...initialState });

export const resetMovie = () => {
  moviesStore.update(store => ({
    ...store,
    movie: {},
  }));
};

export const fetchMovie = async id => {
  const fetchURL = `movie/${id}?api_key=${API_KEY}`;

  const { data: movie } = await http.get(fetchURL);

  moviesStore.update(store => ({
    ...store,
    movie,
  }));
};
