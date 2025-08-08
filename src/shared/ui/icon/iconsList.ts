import genres from '@assets/icons/genres.png';
import home from '@assets/icons/home.png';
import movies from '@assets/icons/movies.png';
import search from '@assets/icons/search.png';
import tvshows from '@assets/icons/tvshows.png';
import watchlater from '@assets/icons/watchLater.png';

interface IconImgs {
  [key: string]: string | undefined;
}

export const iconImgs: IconImgs = {
  genres,
  home,
  movies,
  search,
  tvshows,
  watchlater,
};
