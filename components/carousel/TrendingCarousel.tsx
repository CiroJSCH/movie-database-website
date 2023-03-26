'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { IMovie } from '@/app/models/movie.model';
import TrendingCard from '../home/TrendingCard';
interface IProps {
  movies: IMovie[];
}

const Carousel = ({ movies }: IProps) => {
  const settings = {
    autoplay: true,
    slidesToShow: 3,
    arrows: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1620,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="rounded-lg flex gap-2">
      {movies.map((movie) => (
        <TrendingCard key={movie.id} movie={movie} />
      ))}
    </Slider>
  );
};

export default Carousel;
