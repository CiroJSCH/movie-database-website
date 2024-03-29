"use client"

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Review } from '@/app/(Routes)/movie/models/review';
import Image from 'next/image';
import Link from 'next/link';

interface IProps {
  reviews: Review[]
}

const ReviewCarousel = ({ reviews }: IProps) => {
  const settings = {
    autoplay: true,
    speed: 2700,
    autoplaySpeed: 2500,
    cssEase: 'linear',
    slidesToShow: 3,
    arrows: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {reviews.map((review) => (
        <article key={review.id} className="w-full">
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <Image
                src='/avatar.jpg'
                alt='avatar'
                width={50}
                height={50}
                className='rounded-full'
              />
              <div>
                <p className='font-medium lg:text-[17px]'>{review.author_details.name}</p>
                <p className='text-[14px] lg:text-[15px]'>{review.author_details.username}</p>
              </div>
            </div>
            {review.author_details.rating !== null ? (
              <span className='badge p-2 text-txt bg-primary-600 border border-secondary-500'>
                {review.author_details.rating}
              </span>
            ) : null}
          </div>
          <p className='mt-4 text-[13px] lg:text-[15px] xl:text-base leading-[20px]'>
            {review.content.slice(0, 150)}...&nbsp;
            <span>
              <Link
                href={review.url}
                className='text-secondary-500 cursor-pointer'
              >
                View all
              </Link>
            </span>
          </p>
        </article>
      ))}
    </Slider>
  );
};

export default ReviewCarousel;
