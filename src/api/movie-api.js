import { http, API_KEY } from './http';
import { moviesStore, initialState } from 'store/movies';

export const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w500';
export const BACKDROP_BASE_URL = 'https://image.tmdb.org/t/p/original';

export const fetchMovies = async term => {
  const res = await http.get(`search/movie?api_key=${API_KEY}&query=${term}`);
  moviesStore.set({
    movies: res.data.results.filter(movie => movie.poster_path != null),
    movie: {},
  });
};

export const resetMovies = () => moviesStore.set(initialState);

export const fetchMovie = async id => http.get(`movie/${id}?api_key=${API_KEY}`);
