import Pagination from '@/components/movies/Pagination';
import {
  getTopRatedMovies,
  getPopularMovies,
  getUpcomingMovies,
} from '@/app/utils/fetchMovies';
import MovieList from '@/components/movies/MovieList';

interface IProps {
  params: {
    filter: string[];
  };
}

const page = async ({ params }: IProps) => {
  const filter = params.filter[0];
  const pageNumber = params.filter[1];

  const movies =
    filter === 'populars'
      ? await getPopularMovies(pageNumber)
      : filter === 'top-rated'
      ? await getTopRatedMovies(pageNumber)
      : await getUpcomingMovies(pageNumber);

  return (
    <>
      <h2 className='text-[22px] lg:text-[25px] font-medium tracking-[1.15px]'>
        {filter === 'populars'
          ? 'Popular'
          : filter === 'top-rated'
          ? 'Top Rated'
          : 'Upcoming'}{' '}
        Movies
      </h2>
      <MovieList movies={movies.results} />
      <Pagination filter={filter} pageNumber={pageNumber} />
    </>
  );
};

export default page;
