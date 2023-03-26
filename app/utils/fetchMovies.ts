const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const getTopRatedMovies = async (page: string = '1') => {
  const res = await fetch(
    `
    https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`,
    { next: { revalidate: 1000000 } }
  );
  if (!res.ok) {
    throw new Error('Failed to fetch top rated movies');
  }
  return res.json();
};

export const getPopularMovies = async (page: string = '1') => {
  const res = await fetch(
    `
    https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`,
    { next: { revalidate: 1000000 } }
  );
  if (!res.ok) {
    throw new Error('Failed to fetch popular movies');
  }
  return res.json();
};

export const getUpcomingMovies = async (page: string = '1') => {
  const res = await fetch(`
    https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);
  if (!res.ok) {
    throw new Error('Failed to fetch upcoming movies');
  }
  return res.json();
};

export const getOneMovie = async (id: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch individual movie');
  }
  return res.json();
};
