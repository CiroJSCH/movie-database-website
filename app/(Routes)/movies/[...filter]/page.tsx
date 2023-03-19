import Pagination from '@/components/movies/Pagination';
import { getTopRatedMovies, getPopularMovies } from '@/app/utils/fetchMovies';

interface IProps {
  params: {
    filter: string[];
  };
}

const page = async ({ params }: IProps) => {
  const filter = params.filter[0];
  const pageNumber = params.filter[1];

  const movies = filter === "popular" ?  await getPopularMovies(pageNumber) : await getTopRatedMovies(pageNumber);

  console.log(movies)

  return (
    <section className='flex flex-col justify-center items-center mt-10'>
      <Pagination filter={filter} pageNumber={pageNumber} />
    </section>
  );
};

export default page;
