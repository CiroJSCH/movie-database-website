import { IMovie } from '@/app/models/movie.model';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillEye } from 'react-icons/ai';

interface IProps {
  movie: IMovie;
}

const TrendingCard = ({ movie }: IProps) => {
  return (
    <article className='w-full h-[300px] relative flex items-center xl:mr-[25px]'>
      <Image
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt='Movie thumbnail'
        fill
        sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
        className='absolute z-[40] rounded-lg'
      />
      <div className='w-full h-full bg-[rgba(0,0,0,0.8)] absolute z-[45] rounded-lg' />
      <div className='absolute z-[50] p-5 flex justify-around w-full'>
        <div className='relative w-[150px] h-[210px] border hidden md:flex'>
          <Image
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt='Movie thumbnail'
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            className='absolute z-[40]'
          />
        </div>
        <div className='md:max-w-[50%]'>
          <p className='text-[18px] md:text-[20px] font-bold text-white'>
            {movie.title}
          </p>
          <span className='text-alternative mt-3'>
            {movie.release_date?.slice(0, 4)}
          </span>
          <p className='text-[14px] md:text-[15px] mt-2 leading-[22px]'>
            {movie.overview.slice(0, 150)}...
          </p>
          <Link
            className='cursor-pointer flex md:text-[17px] gap-3 items-center mt-4 badge border p-3'
            href={`/movie/${movie.id}`}
          >
            <AiFillEye className='text-primary-400' />
            <span className='font-bold'>View More</span>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default TrendingCard;
