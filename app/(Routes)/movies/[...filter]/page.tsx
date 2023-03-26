import Pagination from '@/components/movies/Pagination';
import { getTopRatedMovies, getPopularMovies } from '@/app/utils/fetchMovies';
import MovieList from '@/components/movies/MovieList';

interface IProps {
  params: {
    filter: string[];
  };
}

const page = async ({ params }: IProps) => {
  const filter = params.filter[0];
  const pageNumber = params.filter[1];

  const movies = filter === "popular" ?  await getPopularMovies(pageNumber) : await getTopRatedMovies(pageNumber);

  return (
    <section className='flex flex-col justify-center items-center pb-7'>
      <MovieList movies={movies.results}/>
      <Pagination filter={filter} pageNumber={pageNumber} />
    </section>
  );
};

export default page;
