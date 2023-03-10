'use client';

import { useState } from 'react';

import { RiMovie2Line, RiTvLine, RiMovieLine } from 'react-icons/ri';
import { MdOutlineLocalMovies, MdOutlineFavoriteBorder } from 'react-icons/md';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';

const liStyleMobile =
  'flex items-center gap-2 border-b-2 border-b-alternative w-full justify-center pb-2 text-[19px] text-white font-normal cursor-pointer hover:text-secondary-500 transition-colors duration-200';

const MobileMenu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu((prev) => !prev);
  };

  return (
    <>
      <div
        className='rounded-full bg-secondary-400 z-[50] absolute bottom-2 right-2 text-[35px] text-white p-1 cursor-pointer hover:bg-secondary-500 transition-colors duration-300 md:hidden'
        onClick={toggleMenu}
      >
        {isOpenMenu ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
      </div>
      <div
        className={`fixed right-0 top-0 flex flex-col justify-around w-[280px] h-screen z-[40] bg-background-600 border-l-2 border-l-secondary-500 px-2 lg:hidden ${
          isOpenMenu ? 'translate-x-0' : 'translate-x-[280px]'
        } ease-in-out duration-300`}
      >
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
        <div className='flex flex-col items-center gap-3'>
          <div className='flex justify-center items-center bg-primary-500 text-white gap-2 text-[30px] rounded-sm px-3'>
            <RiMovie2Line />
            <span>IMBb</span>
          </div>
          <p className='text-alternative text-[12px]'>
            Copyright © 2022 - 2023 IMBb
          </p>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
