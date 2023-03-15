'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import CarouselCard from './CarouselCard';
import { IMovie } from '@/app/models/movie.model';
import { BiRightArrowAlt } from 'react-icons/bi';
import Link from 'next/link';
interface IProps {
  movies: IMovie[];
  title: string;
}

const Carousel = ({ movies, title }: IProps) => {
  const settings = {
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2500,
    cssEase: 'linear',
    slidesToShow: 6,
    arrows: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 1620,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 510,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className='flex justify-between items-center mb-5'>
        <h3 className='text-primary-500 text-left text-[24px] xl:text-[28px]'>
          {title}
        </h3>
        <div className='flex gap-2 items-center text-primary-600 text-[15px] md:text-[17px] lg:text-[19px] cursor-pointer hover:text-txt transition-all duration-300 hover:translate-x-1'>
          <Link href={`${title === "Populars 🌟" ? "/popular" : "/top-rated"}`}>View all</Link>
          <BiRightArrowAlt />
        </div>
      </div>
      <Slider {...settings} className='glassmorphism py-3 rounded-lg'>
        {movies.map((movie) => (
          <CarouselCard key={movie.id} movie={movie} />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
