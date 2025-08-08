import MovieContainer from './MovieContainer';

const MovieCarousel = () => {
  return (
    <div className="flex flex-col w-full items-start justify-start gap-4 text-snow">
      <p className="text-xl font-bold">Trending Now</p>
      <MovieContainer />
    </div>
  );
};

export default MovieCarousel;
