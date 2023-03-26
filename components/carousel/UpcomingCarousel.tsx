'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { IMovie } from '@/app/models/movie.model';
import UpcomingCard from '../home/UpcomingCard';
interface IProps {
  movies: IMovie[];
}

const UpcomingCarousel = ({ movies }: IProps) => {
  const settings = {
    autoplay: true,
    slidesToShow: 5,
    arrows: false,
    centerMode: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {movies.map((movie) => (
        <UpcomingCard key={movie.id} movie={movie} />
      ))}
    </Slider>
  );
};

export default UpcomingCarousel;
