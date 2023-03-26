import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IMovie } from '@/app/models/movie.model';

interface IProps {
  movie: IMovie;
}

const UpcomingCard = ({ movie }: IProps) => {
  return (
    <Link href={`/movie/${movie.id}`} className='relative rounded-lg'>
      <div className='relative w-full h-[380px]'>
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt='Movie poster'
          fill
          className='absolute rounded-lg'
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
        />
      </div>
    </Link>
  );
};

export default UpcomingCard;
