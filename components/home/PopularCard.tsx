import { IMovie } from '@/app/models/movie.model';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';

const gridSize = (index: number): string => {
  switch (index) {
    case 0:
      return 'col-span-12 sm:col-span-6 md:col-span-7 lg:col-span-6 xl:col-span-4';

    case 1:
      return 'col-span-12 sm:col-span-6 md:col-span-5 lg:col-span-6 xl:col-span-4';

    case 2:
      return 'col-span-12 sm:col-span-7 md:col-span-5 lg:col-span-4';

    case 3:
      return 'col-span-12 sm:col-span-5 md:col-span-7 lg:col-span-4 xl:col-span-3';

    default:
      return 'col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3';
  }
};

interface IProps {
  result: IMovie;
  index: number;
}

const PopularCard = ({ result, index }: IProps) => {
  return (
    <Link
      href={`/movie/${result.id}`}
      key={result.id}
      className={`${gridSize(
        index
      )} relative h-[320px] md:h-[380px] xl:h-[400px] cursor-pointer rounded-lg`}
    >
      <Image
        fill
        className='absolute rounded-lg'
        src={`https://image.tmdb.org/t/p/original/${result.backdrop_path}`}
        alt='Movie banner'
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
      />
      <div className='flex items-center justify-between absolute bottom-0 h-[30%] md:h-[25%] lg:h-[20%] w-full p-3 bg-[rgba(0,0,0,0.8)]'>
        <div className='flex flex-col gap-1'>
          <h5 className='text-primary-400 text-[18px] font-bold'>
            {result.title}
          </h5>
          <span>{result.release_date.slice(0, 4)}</span>
        </div>
        <div
          className={`flex items-center gap-1 rounded-lg ${
            result.vote_average >= 6.5 ? 'bg-emerald-500' : 'bg-red-500'
          } text-txt px-4 py-2`}
        >
          {result.vote_average >= 6.5 ? <AiFillLike /> : <AiFillDislike />}
          <span className='font-medium'>{result.vote_average}</span>
        </div>
      </div>
    </Link>
  );
};

export default PopularCard;
