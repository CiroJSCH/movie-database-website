import { RiMovie2Line, RiTvLine, RiMovieLine } from 'react-icons/ri';
import {
  MdOutlineLightMode,
  MdOutlineLocalMovies,
  MdOutlineFavoriteBorder,
} from 'react-icons/md';
import { BiMenuAltRight } from 'react-icons/bi';

const Header = () => {
  const liStyle =
    'cursor-pointer hover:text-primary-500 transition-colors duration-300 text-[17px] leading-[25px]';
  const liStyleMobile =
    'flex items-center gap-2 border-b-2 border-b-alternative w-full justify-center pb-2 text-[19px] text-white font-normal cursor-pointer hover:text-secondary-500 transition-colors duration-200';
  return (
    <>
      <nav className='fixed top-0 bg-background w-full drop-shadow-lg border-b-primary-400 border-b-2'>
        <div className='p-4 flex justify-between items-center max-w-[1440px] mx-auto'>
          {/* Brand */}
          <div className='flex items-center bg-primary-500 text-txt max-w-[130px] justify-center gap-2 text-[30px] rounded-sm cursor-pointer hover:bg-primary-600 transition-colors duration-300 px-1'>
            <RiMovie2Line />
            <span>IMBb</span>
          </div>
          <div className='hidden md:block items-center'>
            <ul className='flex text-alternative gap-7 font-semibold'>
              <li className={liStyle}>Movies</li>
              <li className={liStyle}>Series</li>
              <li className={liStyle}>TV Shows</li>
              <li className={liStyle}>Favorites</li>
            </ul>
          </div>
          <div className='text-txt flex gap-5 text-[30px]'>
            <MdOutlineLightMode className='cursor-pointer hover:text-secondary-400 transition-colors duration-300' />
          </div>
        </div>
      </nav>
      <div className='rounded-full bg-secondary-400 z-[50] absolute bottom-2 right-2 text-[35px] text-txt p-1 cursor-pointer hover:bg-secondary-500 transition-colors duration-300 md:hidden'>
        <BiMenuAltRight />
      </div>
      {/* MOBILE MENU */}
      <div className='absolute w-[280px] h-screen right-0 z-[40] bg-background border-l-2 border-l-secondary-500 px-2'>
        <div className='flex items-center bg-primary-500 text-txt max-w-[130px] justify-center gap-2 text-[30px] rounded-sm cursor-pointer hover:bg-primary-600 transition-colors duration-300 px-1 mt-2'>
          <RiMovie2Line />
          <span>IMBb</span>
        </div>
        <ul className='flex flex-col text-alternative gap-7 font-semibold justify-center w-full items-center mt-[50px]'>
          <li className={liStyleMobile}>
            <MdOutlineLocalMovies />
            <span>Movies</span>
          </li>
          <li className={liStyleMobile}>
            <RiMovieLine />
            <span>Series</span>
          </li>
          <li className={liStyleMobile}>
            <RiTvLine />
            <span>TV Shows</span>
          </li>
          <li className={liStyleMobile}>
            <MdOutlineFavoriteBorder />
            <span>Favorites</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
