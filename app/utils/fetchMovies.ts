const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const getTopRatedMovies = async (page: string) => {
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

export const getPopularMovies = async (page: string) => {
  const res = await fetch(
    `
    https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`,
    { next: { revalidate: 1000000 } }
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};
