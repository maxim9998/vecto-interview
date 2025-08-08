import { useDispatch } from 'react-redux';

import { onSelectFeaturedMovie } from '@features/reducers/featuredMoviesSlice';
import useDebounce from '@shared/hooks/debounce/useDebounce';

interface IMovieCard {
  imageUrl: string | undefined;
  movieId: string;
}

const MovieCard = ({ imageUrl, movieId }: IMovieCard) => {
  const dispatch = useDispatch();

  const onCardClick = useDebounce({ fn: () => dispatch(onSelectFeaturedMovie({ id: movieId })), ms: 2000 });

  return (
    <button className="h-full cursor-pointer" onClick={onCardClick}>
      <div className={'h-74 w-50 bg-cover bg-center bg-no-repeat'} style={{ backgroundImage: `url(${imageUrl})` }} />
    </button>
  );
};

export default MovieCard;
