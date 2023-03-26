import { IMovie } from '@/app/models/movie.model';
import Image from 'next/image';
interface IProps {
  latestMovie: IMovie;
}

const Banner = ({ latestMovie }: IProps) => {
  return (
    <section className='flex items-center relative overflow-hidden'>
      <div className='background-home h-screen flex justify-center flex-col p-7 md:p-8 xl:p-10 z-[100] w-full'>
        <div className='font-bold max-w-[1440px] m-auto w-full'>
          <p className='text-primary-400 text-[20px] md:text-[24px] xl:text-[30px]'>
            IMBb Clone
          </p>
          <p className='max-w-[700px] text-txt text-[32px] md:text-[40px] xl:text-[56px] mt-2 leading-[50px] xl:leading-[70px]'>
            Unlimited <span className='text-primary-400'>Movies</span>, TV Shows
            & More
          </p>
          <div className='border border-alternative max-w-[470px] xl:max-w-[520px] 2xl:max-w-[600px] mt-4 md:mt-7 flex flex-col items-center justify-center stats stats-vertical bg-background-600 text-primary-content'>
            <div className='stat'>
              <div className='stat-title'>Users</div>
              <div className='stat-value'>100.000</div>
              <div className='stat-actions'>
                <button className='btn btn-sm btn-success'>
                  Top Movie site
                </button>
              </div>
            </div>

            <div className='stat'>
              <div className='stat-title'>Page Views</div>
              <div className='stat-value'>+1.5M</div>
              <div className='stat-actions'>
                <button className='btn btn-sm'>Updated every day</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute w-[1600px] xl:w-screen h-[1300px] xl:h-screen  z-0'>
        <Image
          src={`https://image.tmdb.org/t/p/original/${latestMovie.backdrop_path}`}
          alt='banner'
          fill
          priority
        />
      </div>
    </section>
  );
};

export default Banner;
