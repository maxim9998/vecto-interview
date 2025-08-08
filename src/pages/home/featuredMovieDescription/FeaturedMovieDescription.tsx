import { getDuration } from '@shared/helpers/getDuration';
import { useSelectFeaturedMovies } from '@shared/hooks/selectors/useSelectFeaturedMovies';

import FeaturedButtons from './FeaturedButtons';

const FeaturedMovieDescription = () => {
  const { currentMovie } = useSelectFeaturedMovies();

  const category = currentMovie.Category.toUpperCase();
  const year = currentMovie.ReleaseYear;
  const duration = getDuration(+currentMovie.Duration);
  const description = currentMovie.Description;
  const mpaRating = currentMovie.MpaRating;

  return (
    <div className="flex flex-col items-start justify-center gap-5 w-full h-2/3">
      <div className="flex flex-col items-start justify-start gap-2">
        <p className="text-grey-text text-xl">{category}</p>
        <img src={`/assets/movies/${currentMovie.TitleImage}`} />
      </div>
      <div className="flex items-center justify-start gap-4 text-xl text-snow">
        <span>{year}</span>
        <span>{mpaRating}</span>
        <span>{duration.formatted}</span>
      </div>
      <p className="text-justify text-snow w-1/3">{description}</p>
      <FeaturedButtons />
    </div>
  );
};

export default FeaturedMovieDescription;
