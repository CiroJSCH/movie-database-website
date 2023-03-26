'use client';

import { useState } from 'react';

import { BiMoviePlay } from 'react-icons/bi';
import {
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
  AiFillHome,
  AiFillStar,
  AiFillFire,
  AiFillBell,
} from 'react-icons/ai';
import Link from 'next/link';

const liStyleMobile =
  'uppercase tracking-[1.15px] flex items-center gap-2 border-b-2 border-b-alternative w-full justify-center pb-5 text-[19px] text-white font-normal cursor-pointer hover:text-secondary-500 transition-colors duration-200';

const MobileMenu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu((prev) => !prev);
  };

  return (
    <>
      <div
        className='z-[500] fixed top-6 right-3 text-[35px] text-white p-1 cursor-pointer md:hidden'
        onClick={toggleMenu}
      >
        {isOpenMenu ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
      </div>
      <div
        className={`fixed right-0 top-0 flex flex-col justify-around w-[280px] h-screen z-[40] bg-black border-l-2 border-l-primary-600 px-5 lg:hidden ${
          isOpenMenu ? 'translate-x-0' : 'translate-x-[280px]'
        } ease-in-out duration-300`}
      >
        <ul className='flex flex-col text-alternative gap-5 font-semibold justify-center w-full items-center mt-[50px]'>
          <Link href="/" className={liStyleMobile}>
            <AiFillHome />
            <span>Home</span>
          </Link>
          <Link href="movies/populars/1" className={liStyleMobile}>
            <AiFillStar />
            <span>Populars</span>
          </Link>
          <Link href="movies/top-rated/1" className={liStyleMobile}>
            <AiFillFire />
            <span>Top Rated</span>
          </Link>
          <Link href="movies/upcoming/1" className={liStyleMobile}>
            <AiFillBell />
            <span>Upcoming</span>
          </Link>
        </ul>
        <div className='flex flex-col items-center gap-3'>
          <Link href="/home" className='flex items-center gap-2 text-[22px] md:text-[24px] font-bold'>
            <BiMoviePlay className='text-txt' />
            <p className='text-primary-400'>IMBb Clone</p>
          </Link>
          <p className='text-alternative text-[12.5px]'>
            Copyright © 2022 - {new Date().getFullYear()} IMBb Clone
          </p>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
