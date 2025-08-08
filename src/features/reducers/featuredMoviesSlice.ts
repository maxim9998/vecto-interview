import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import { initialState } from './initialState';

export const featuredMoviesSlice = createSlice({
  name: 'featuredMovies',
  initialState,
  reducers: {
    onSelectFeaturedMovie: (state, action: PayloadAction<{ id: string }>) => {
      state.currentMovie = initialState.featuredMovies.find(movie => movie.Id === action.payload.id) || state.currentMovie;

      const clickedMovies = JSON.parse(sessionStorage.getItem('clickedMovies') || '[]');
      clickedMovies.unshift(action.payload.id);

      sessionStorage.setItem('clickedMovies', JSON.stringify(clickedMovies));
    },
  },
});

export const { onSelectFeaturedMovie } = featuredMoviesSlice.actions;

export default featuredMoviesSlice.reducer;
