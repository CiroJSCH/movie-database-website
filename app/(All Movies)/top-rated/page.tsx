"use client";

import MovieCard from '@/components/movies/MovieCard';
import MovieList from '@/components/movies/MovieList';

import Pagination from '@/components/movies/Pagination';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const getTopRatedMovies = async (page: string) => {
  const res = await fetch(
    `
    https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`,
    { next: { revalidate: 1000000 } }
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

const TopRatedMovies = () => {

  const searchParams = useSearchParams();

  const page = searchParams.get('page');

  const [pageNumber, setPageNumber] = useState(page || "1");
  
  useEffect(() => {
    const  fetchMovies = async (page: string = "1") => {
      return await getTopRatedMovies(page);
    }
    fetchMovies(pageNumber)
      .then(res => console.log(res))
      .catch(err => console.log(err))

  }, [pageNumber])

  const handlePageChange = (page: string) => {
    setPageNumber(page);
  }
  
  return (
    <div>
      <div className='flex flex-col justify-center items-center mt-10'>
        <MovieList />
        <Pagination pageNumber={pageNumber} handlePageChange={handlePageChange} />
      </div>
    </div>
  );
};

export default TopRatedMovies;
