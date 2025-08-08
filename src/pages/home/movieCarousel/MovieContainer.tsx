import { useRef, useState } from 'react';

import { useSelectFeaturedMovies } from '@shared/hooks/selectors/useSelectFeaturedMovies';
import MovieCard from '@shared/ui/movieCard/MovieCard';

const MovieContainer = () => {
  const { featuredMovies } = useSelectFeaturedMovies();
  const containerRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const onMouseLeave = () => setIsDragging(false);
  const onMouseUp = () => setIsDragging(false);

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    e.stopPropagation();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 0.8;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      ref={containerRef}
      className="w-full flex items-start justify-start gap-4 overflow-x-auto cursor-grab active:cursor-grabbing select-none"
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    >
      {featuredMovies.map(movie => (
        <MovieCard imageUrl={`/assets/movies/${movie.CoverImage}`} movieId={movie.Id} key={movie.Id} />
      ))}
    </div>
  );
};

export default MovieContainer;
