import { IMovie } from '@/app/models/movie.model';
import Image from 'next/image';

interface IProps {
  movie: IMovie;
}

const colorBasedOnVote = (vote: number) => {
  let color = '';
  if (vote >= 8.0) {
    color = 'bg-green-500';
  } else if (vote >= 6.0 && vote < 8.0) {
    color = 'bg-yellow-600';
  } else {
    color = 'bg-red-500';
  }
  return color;
};

const CarouselCard = ({ movie }: IProps) => {
  return (
    <div className='w-[200px] h-[300px] relative cursor-pointer'>
      <div className='h-full w-full relative z-[40]'>
        <Image
          alt='movie banner'
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          fill
          className='rounded-lg'
          sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
        />
      </div>
      <div
        className={`z-[50] absolute bottom-1 right-1 w-[50px] h-[30px] ${colorBasedOnVote(
          movie.vote_average
        )} grid place-content-center rounded-lg`}
      >
        <span className='font-bold'>{movie.vote_average.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CarouselCard;
