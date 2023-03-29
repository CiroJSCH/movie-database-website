import searchMovies from '@/app/utils/searchMovies';
import MovieList from '@/components/movies/MovieList';
interface IProps {
  searchParams: {
    search: string;
  };
}

const page = async ({ searchParams }: IProps) => {
  const search = await searchMovies(searchParams.search);

  return (
    <>
      <h2 className='text-[22px] lg:text-[25px] font-medium tracking-[1.15px]'>
        Search results for {searchParams.search}
      </h2>
      {
        search !== undefined && <MovieList movies={search.results} />
      }
    </>
  );
};

export default page;
