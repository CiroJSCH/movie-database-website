'use client';

import { useEffect, useState } from 'react';

import { BiMoviePlay } from 'react-icons/bi';
import MobileMenu from './MobileMenu';
import Link from 'next/link';

const liStyle =
  'cursor-pointer hover:text-secondary-500 transition-colors duration-300 text-[17px] leading-[25px]';

const Header = () => {
  const [navBackground, setNavBackground] = useState(false);

  const changeBackground = () => window.scrollY >= 10 ? setNavBackground(true) : setNavBackground(false);

  useEffect(() => {
    changeBackground();
    window.addEventListener('scroll', changeBackground);

    return () => {
      window.removeEventListener('scroll', changeBackground);
    }
  });

  return (
    <>
      <header className={`p-7 xl:pt-8 fixed top-0 z-[200] w-full transition-colors duration-300 ${navBackground ? "bg-black" : "bg-transparent"}`}>
        <nav className='m-auto w-full max-w-[1440px] flex items-center justify-between'>
          <div className='flex items-center gap-2 text-[22px] md:text-[24px] font-bold'>
            <BiMoviePlay className='text-txt' />
            <p className='text-primary-400'>IMBb Clone</p>
          </div>
          <div className='hidden md:flex'>
            <ul className='text-txt text-[19px] uppercase tracking-[1.25px] flex gap-7 xl:gap-9 2xl:gap-12'>
              <Link href='/' className={liStyle}>
                Home
              </Link>
              <Link href='/movies/populars/1' className={liStyle}>
                Populars
              </Link>
              <Link href='/movies/top-rated/1' className={liStyle}>
                Top Rated
              </Link>
            </ul>
          </div>
        </nav>
        <MobileMenu />
      </header>
    </>
  );
};

export default Header;
