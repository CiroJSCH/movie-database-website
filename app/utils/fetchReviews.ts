const getMovieReviews = async (id: string) => {
  const res = await fetch(`
    https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1
  `);

  if (!res.ok) {
    throw new Error('Failed to fetch reviews');
  }
  return res.json();
}

export default getMovieReviews;