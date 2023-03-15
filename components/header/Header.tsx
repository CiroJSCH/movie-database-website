import { RiMovie2Line } from 'react-icons/ri';
import DarkModeSwitch from './DarkModeSwitch';
import MobileMenu from './MobileMenu';

const Header = () => {
  const liStyle =
    'cursor-pointer hover:text-primary-500 transition-colors duration-300 text-[17px] leading-[25px]';
  return (
    <>
      <header>
        <nav className='fixed top-0 bg-background-600 w-full drop-shadow-lg border-b-primary-400 border-b-2 z-[500]'>
          <div className='p-4 flex justify-between items-center max-w-[1440px] mx-auto'>
            <div className='flex items-center bg-primary-500 max-w-[130px] justify-center gap-2 text-[30px] rounded-sm cursor-pointer hover:bg-primary-600 transition-colors duration-300 px-1 text-white'>
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
            <DarkModeSwitch />
          </div>
        </nav>
        <MobileMenu />
      </header>
    </>
  );
};

export default Header;
