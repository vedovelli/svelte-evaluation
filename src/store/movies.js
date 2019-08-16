import { writable } from 'svelte/store';

export const initialState = {
  movies: [],
  movie: {},
};

export const moviesStore = writable(initialState);
