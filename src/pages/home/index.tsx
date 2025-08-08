import { useSelectFeaturedMovies } from '@shared/hooks/selectors/useSelectFeaturedMovies';

import FeaturedMovieDescription from './featuredMovieDescription/FeaturedMovieDescription';
import MovieCarousel from './movieCarousel/MovieCarousel';

const Home = () => {
  const { currentMovie } = useSelectFeaturedMovies();

  return (
    <div
      className="h-screen w-full bg-cover bg-no-repeat bg-center flex flex-col justify-between items-start overflow-hidden"
      style={{ backgroundImage: `url(/assets/movies/FeaturedCoverImage.png)` }}
    >
      {currentMovie.VideoUrl && (
        <video className="absolute top-0 left-0 w-full h-full object-cover z-4" src={currentMovie.VideoUrl} autoPlay loop muted playsInline />
      )}
      <div className="md:ml-35 ml-4 h-full w-full md:w-[calc(100%-140px)] flex flex-col items-start justify-between z-10">
        <FeaturedMovieDescription />
        <MovieCarousel />
      </div>
    </div>
  );
};

export default Home;
