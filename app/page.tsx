import TrendingCarousel from '@/components/carousel/TrendingCarousel';
import UpcomingCarousel from '@/components/carousel/UpcomingCarousel';
import Banner from '@/components/home/Banner';
import { AiFillFire, AiOutlineRight, AiFillStar, AiFillBell } from 'react-icons/ai';
import Link from 'next/link';
import { IMovie } from './models/movie.model';
import PopularCard from '@/components/home/PopularCard';
import { getTopRatedMovies, getPopularMovies, getUpcomingMovies } from './utils/fetchMovies';

const page = async () => {
  const popularsResults = await getPopularMovies();
  const topRatedResults = await getTopRatedMovies();
  const upcomingResults = await getUpcomingMovies();
  const [populars, topRated, upcoming] = await Promise.all([
    popularsResults,
    topRatedResults,
    upcomingResults
  ]);
  const latestMovie = await populars.results[0];

  return (
    <>
      <Banner latestMovie={latestMovie} />
      <div className='mt-5 p-4 md:p-8 xl:p-10 mb-7'>
        <section>
          <div className='flex items-center justify-between flex-wrap gap-2'>
            <div className='flex items-center gap-3 text-[22px] md:text-[24px] xl:text-[30px] font-bold'>
              <h3 className='text-txt'>Top rated</h3>
              <AiFillFire className='text-primary-400' />
            </div>
            <Link
              href='/movies/top-rated/1'
              className='text-[18px] flex items-center gap-2 font-bold cursor-pointer text-alternative hover:text-txt transition-colors duration-200'
            >
              <p>View All</p>
              <AiOutlineRight className='text-txt' />
            </Link>
          </div>
          <div className='mt-7 rounded-lg'>
            <TrendingCarousel movies={topRated.results} />
          </div>
        </section>
        <section className='mt-10'>
          <div className='flex items-center justify-between flex-wrap gap-2'>
            <div className='flex items-center gap-3 text-[22px] md:text-[24px] xl:text-[30px] font-bold'>
              <h3 className='text-txt'>Populars</h3>
              <AiFillStar className='text-primary-400' />
            </div>
            <Link
              href='/movies/popular/1'
              className='text-[18px] flex items-center gap-2 font-bold cursor-pointer text-alternative hover:text-txt transition-colors duration-200'
            >
              <p>View All</p>
              <AiOutlineRight className='text-txt' />
            </Link>
          </div>
          <div className='grid grid-cols-12 max-w-[340px] sm:max-w-none xl:max-w-none xl m-auto mt-7 gap-3'>
            <>
              {populars.results
                .slice(0, 7)
                .map((result: IMovie, index: number) => (
                  <PopularCard key={result.id} result={result} index={index} />
                ))}
            </>
          </div>
        </section>
        <section className='mt-10'>
          <div className='flex items-center justify-between flex-wrap gap-2'>
            <div className='flex items-center gap-3 text-[22px] md:text-[24px] xl:text-[30px] font-bold'>
              <h3 className='text-txt'>Upcoming</h3>
              <AiFillBell className='text-primary-400' />
            </div>
            <Link
              href='/movies/upcoming/1'
              className='text-[18px] flex items-center gap-2 font-bold cursor-pointer text-alternative hover:text-txt transition-colors duration-200'
            >
              <p>View All</p>
              <AiOutlineRight className='text-txt' />
            </Link>
          </div>
          <div className='mt-7'>
            <UpcomingCarousel movies={upcoming.results}/>
          </div>
        </section>
      </div>
    </>
  );
};

export default page;


// TODO: Upcoming route
// TODO: Fix mobile menu
// TODO: Search movies
// TODO: Improve project organization