import { getOneMovie } from '@/app/utils/fetchMovies';
import Image from 'next/image';
import { AiFillClockCircle, AiFillStar } from 'react-icons/ai';
import { IndividualMovie } from '../models/movie';
import getMovieReviews from '@/app/utils/fetchReviews';
import { Review } from '../models/review';
import ReviewCarousel from '@/components/carousel/ReviewCarousel';

const MoviePage = async ({ params }: { params: { id: string } }) => {
  const movie: IndividualMovie = await getOneMovie(params.id);
  const reviews = await getMovieReviews(params.id);
  const movieReviews: Review[] = reviews.results;
  return (
    <section className='pb-7'>
      <div className='w-full h-[220px] sm:h-[280px] md:h-[350px] lg:h-[400px] xl:h-[500px] 2xl:h-[600px] relative'>
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt='Movie thumbnail'
          fill
          className='absolute'
          priority
        />
        <div className='bg-[rgba(0,0,0,0.5)] absolute top-0 w-full h-full' />
        <div className='absolute -bottom-[95px] left-[calc(50%-65px)] md:left-[calc(50%-75px)] lg:left-[calc(50%-90px)] w-[130px] h-[190px] md:w-[150px] md:h-[210px] lg:w-[180px] lg:h-[240px]'>
          <Image
            alt='Movie thumbnail'
            fill
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            className='border'
          />
        </div>
      </div>
      <div className='max-w-[1440px] m-auto bg-background-600 px-3 pt-[110px]'>
        <h3 className='text-[19px] md:text-[22px] lg:text-[24px] xl:text-[27px] text-txt font-bold'>
          {movie.title}
        </h3>
        <div className='mt-3 flex items-center justify-between border-b border-b-alternative pb-4'>
          <div className='flex items-center gap-5'>
            <div className='text-[17px] flex items-center gap-3'>
              <AiFillClockCircle />
              <span className='font-medium'>{movie.runtime} min</span>
            </div>
            <div className='text-[17px] flex items-center gap-3'>
              <AiFillStar className='text-yellow-500 text-[20px]' />
              <span className='font-medium'>{movie.vote_average}</span>
            </div>
          </div>
          <span className='badge text-txt text-[17px] p-3 border border-alternative'>
            {movie.release_date.slice(0, 4)}
          </span>
        </div>
        <div className='mt-3 md:mt-5'>
          <div>
            <p className='text-primary-400 text-[18px] md:text-[20px] lg:text-[21px]'>
              Genres
            </p>
            <ul className='flex flex-wrap mt-2 gap-2'>
              {movie.genres.map((genre) => (
                <span
                  className='badge p-2 border border-alternative'
                  key={genre.id}
                >
                  {genre.name}
                </span>
              ))}
            </ul>
          </div>
          <div className='mt-4'>
            <p className='text-[18px] md:text-[20px] lg:text-[21px] text-primary-400'>
              Description
            </p>
            <p className='mt-1 text-[15px] lg:text-[17px] leading-[23px] lg:leading-[29px]'>
              {movie.overview}
            </p>
          </div>
        </div>
        <div className='mt-3 md:mt-5'>
          <p className='text-primary-400 text-[18px] md:text-[20px] lg:text-[21px]'>
            Reviews
          </p>
          <div className='mt-4 m-auto'>
            <ReviewCarousel reviews={movieReviews} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoviePage;
