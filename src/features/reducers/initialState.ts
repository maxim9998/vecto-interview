import featuredData from '@assets/data/data.json';
import { onSortOneArrayByAnotherArray } from '@shared/helpers/onSortOneArrayByAnotherArray';
import type { IFeaturedMovie } from '@shared/types/featuredMovie/FeaturedMovie';

export interface IFeaturedMovieState {
  currentMovie: IFeaturedMovie;
  featuredMovies: IFeaturedMovie[];
}

const initialSortedByDate = featuredData.TrendingNow.sort((a, b) => +new Date(b.Date) - +new Date(a.Date));
const clickedMovies = JSON.parse(sessionStorage.getItem('clickedMovies') || '[]');

export const initialState: IFeaturedMovieState = {
  currentMovie: featuredData.Featured,
  featuredMovies: onSortOneArrayByAnotherArray(initialSortedByDate, clickedMovies, movie => movie.Id),
};
