"use client";

import { IMovie } from '@/app/models/movie.model';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from "react";

import { AiFillStar, AiFillEye } from "react-icons/ai";

interface IMovieCard {
  movie: IMovie;
}

const MovieCard = ({ movie }: IMovieCard) => {

  const [showInfo, setShowInfo] = useState(false);

  return (
    <Link href={`/movie/${movie.id}`} className='col-span-6 md:col-span-3 2xl:col-span-2 drop-shadow-md mb-2 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out' onMouseOver={() => setShowInfo(true)} onMouseLeave={() => setShowInfo(false)}>
      <div className='relative'>
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt='Movie thumbnail'
          width={250}
          height={370}
          className='rounded-md'
        />
        <div className={`${showInfo ? "h-[50%]" : "h-[0px]"} overflow-hidden absolute bg-[rgba(0,0,0,0.7)] bottom-0 w-full transition-[height] duration-1000 ease-in-out`}>
          <div className="p-2 text-txt">
            <div className='flex items-center justify-between mb-2'>
              <div className='badge badge-md p-2'>
                <AiFillEye className='text-txt text-[20px]'/>
                <span className='ml-2'>View more</span>
              </div>
              <div className='flex items-center gap-1'>
                <AiFillStar className='text-yellow-500 text-[20px]'/>
                <span className='font-medium'>{movie.vote_average}</span>
              </div>
            </div>
            <p className='border-t-[1px] border-t-alternative pt-2 text-[14px] leading-[20px]'>{movie.overview.slice(0,100)}...</p>
          </div>
        </div>
      </div>
      <div className='mt-3 flex flex-col'>
        <span className='text-txt'>{movie.title}</span>
        <span className='mt-1'>{movie.release_date}</span>
      </div>
    </Link>
  );
};

export default MovieCard;
