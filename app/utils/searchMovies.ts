const searchMovies = async (query: string) => {
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`)
  
  if (!res.ok) {
    throw new Error('Failed searching movies');
  }
  return res.json();
}

export default searchMovies;