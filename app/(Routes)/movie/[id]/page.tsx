import { getOneMovie } from '@/app/utils/fetchMovies';
import Image from 'next/image';
import { AiFillClockCircle, AiFillStar } from 'react-icons/ai';
import { IndividualMovie } from '../models/movie';
import getMovieReviews from '@/app/utils/fetchReviews';
import { Review } from '../models/review';
import ReviewCarousel from '@/components/carousel/ReviewCarousel';
import Link from 'next/link';

const MoviePage = async ({ params }: { params: { id: string } }) => {
  const movie: IndividualMovie = await getOneMovie(params.id);
  const reviews = await getMovieReviews(params.id);
  const movieReviews: Review[] = reviews.results;
  return (
    <section>
      <div className='w-full h-[220px] relative'>
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt='Movie thumbnail'
          fill
          className='absolute blur-[2px]'
          priority
        />
        <div className='absolute -bottom-[95px] left-[calc(50%-65px)]'>
          <Image
            alt='Movie thumbnail'
            width={130}
            height={190}
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            className='border'
          />
        </div>
      </div>
      <div className='bg-background-600 px-3 pt-[110px]'>
        <h3 className='text-[19px] text-txt font-bold'>{movie.title}</h3>
        <div className='mt-3 flex items-center justify-between border-b border-b-alternative pb-4'>
          <div className='flex items-center gap-5'>
            <div className='text-[17px] flex items-center gap-3'>
              <AiFillClockCircle />
              <span className='font-medium'>{movie.runtime}</span>
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
        <div className='mt-3'>
          <div>
            <p className='text-primary-400 text-[18px]'>Genres</p>
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
            <p className='text-[18px] text-primary-400'>Description</p>
            <p className='mt-1 text-[15px] leading-[23px]'>{movie.overview}</p>
          </div>
        </div>
        <div className='mt-3'>
          <p className='text-primary-400 text-[18px]'>Reviews</p>
          <div className='mt-4 max-w-[456px] m-auto'>
            <ReviewCarousel reviews={movieReviews}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoviePage;
