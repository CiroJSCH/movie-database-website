import { IMovie } from '@/app/models/movie.model';
import Image from 'next/image';
import { MdStars } from 'react-icons/md';
import { BiLike } from 'react-icons/bi';

interface IProps {
  movie: IMovie;
}

const Banner = ({ movie }: IProps) => {
  return (
    <div className='h-[380px] md:h-[450px] lg:h-[750px] relative overflow-x-hidden mb-10'>
      <Image
        alt='movie banner'
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        className='object-fit'
        fill
        priority
      />
      <div className='absolute bottom-0 bg-[rgba(0,0,0,0.3)] w-full p-3 lg:p-5 xl:px-10'>
        <h1 className='text-primary-400 font-bold text-[30px] md:text-[45px] lg:text-[52px]'>
          {movie.original_title}
        </h1>
        <p className='text-white mt-2 md:text-[17px] lg:text-[18px] max-w-[450px] md:max-w-[500px] lg:max-w-[550px] xl:max-w-[600px] leading-[27px] md:leading-[30px] lg:leading-[35px]'>
          {movie.overview.substring(0, 100)}...
        </p>
        <div className='hidden md:flex gap-3 mt-4'>
          <div className='flex items-center gap-3 py-3 px-6 text-[18px] rounded-xl bg-secondary-400'>
            <MdStars />
            <span>{movie.vote_average}</span>
          </div>
          <div className='flex items-center gap-3 py-3 px-6 text-[18px] rounded-xl bg-alternative'>
            <BiLike />
            <span>{movie.vote_count}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
