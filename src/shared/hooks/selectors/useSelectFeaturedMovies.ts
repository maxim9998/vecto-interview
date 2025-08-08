import { useSelector } from 'react-redux';

import type { RootState } from '@app/store';

export const useSelectFeaturedMovies = () => {
  const featuredMovies = useSelector((state: RootState) => state.featuredMovies);

  return featuredMovies;
};
