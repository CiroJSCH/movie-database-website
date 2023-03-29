'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { BiMoviePlay } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';
import { CgClose } from 'react-icons/cg';
import useMediaQuery from '@/app/hooks/useMediaQuery';

import MobileMenu from './MobileMenu';
import Link from 'next/link';

const liStyle =
  'cursor-pointer hover:text-secondary-500 transition-colors duration-300 text-[17px] leading-[25px]';

const Header = () => {

  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const router = useRouter();

  const [navBackground, setNavBackground] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const [searchError, setSearchError] = useState('');

  const [isLoading, setIsLoading] = useState(true);

  const changeBackground = () =>
    window.scrollY >= 10 ? setNavBackground(true) : setNavBackground(false);

  useEffect(() => {
    changeBackground();
    window.addEventListener('scroll', changeBackground);

    setIsLoading(false);

    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, [isLoading]);

  const handleSearch = () => {
    if (searchValue === '') {
      setSearchError("Enter at least 1 char");
    } else {
      setSearchError("");
      router.push(`/movies?search=${searchValue}`)
    }
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      {
        !isLoading && <header
        className={`p-7 xl:pt-8 fixed top-0 z-[200] w-full transition-colors duration-300 ${
          navBackground ? 'bg-black' : 'bg-transparent'
        }`}
      >
        <nav className='m-auto w-full max-w-[1440px] flex items-center justify-between relative'>
          <div className='flex items-center gap-[50px] lg:gap-[70px] xl:gap-[80px]'>
            <Link
              href='/'
              className='flex items-center gap-2 text-[22px] md:text-[24px] font-bold'
            >
              <BiMoviePlay className='text-txt' />
              <p className='text-primary-400'>IMBb Clone</p>
            </Link>
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
                <Link href='/movies/upcoming/1' className={liStyle}>
                  Upcoming
                </Link>
              </ul>
            </div>
          </div>
          {openSearch ? (
            <CgClose
              className='text-[22px] lg:text-[27px] cursor-pointer lg:hidden'
              onClick={() => setOpenSearch(false)}
            />
          ) : (
            <AiOutlineSearch
              className='text-[22px] lg:text-[27px] cursor-pointer lg:hidden'
              onClick={() => setOpenSearch(true)}
            />
          )}
         <div
            className={`${openSearch || isDesktop ? "flex" : "hidden"} absolute lg:relative -bottom-[3px] md:right-0 md:-bottom-[55px] lg:-bottom-0 max-w-[500px] items-center rounded-lg drop-shadow-md w-[85%] md:w-[50%] lg:w-[250px] xl:w-[300px]`}
          >
            <input
              type='text'
              name='search'
              placeholder='Enter movie name'
              className='w-full h-[40px] px-2 text-txt focus:outline-none'
              value={searchValue}
              onChange={handleSearchChange}
            />
            <span className='absolute -bottom-[30px] left-2 text-red-500'>{searchError}</span>
            <button
              className='bg-secondary-500 text-txt h-[40px] w-[50px]'
              onClick={handleSearch}
            >
              GO
            </button>
          </div>
        </nav>
        <MobileMenu />
      </header>
      }
    </>
  );
};

export default Header;
