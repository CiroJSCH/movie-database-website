import { IMovie } from '@/app/models/movie.model';
import Image from 'next/image';

interface IProps {
  movie: IMovie;
}

const CarouselCard = ({ movie }: IProps) => {
  return (
    <div className='w-[200px] h-[300px] relative cursor-pointer'>
      <div className='h-full w-full relative'>
        <Image
          alt='movie banner'
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          fill
          className='rounded-lg'
        />
      </div>
    </div>
  );
};

export default CarouselCard;
