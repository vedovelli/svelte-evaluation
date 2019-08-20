import { writable, derived } from 'svelte/store';

export const initialState = {
  movies: [],
  movie: {},
  touched: false,
};

export const moviesStore = writable(initialState);

export const posterMovies = derived(moviesStore, store =>
  store.movies.filter(movie => movie.poster_path != null),
);
