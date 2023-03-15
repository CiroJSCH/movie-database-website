import Carousel from '@/components/carousel/Carousel';
import Banner from '@/components/home/Banner';

const API_KEY = process.env.API_KEY;

const getPopularMovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 1000000 } }
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

const getTrendingMovies = async () => {
  const res = await fetch(
    `
  https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`,
    { next: { revalidate: 1000000 } }
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

const page = async () => {
  const popularsResults = await getPopularMovies();
  const trendingResults = await getTrendingMovies();
  const [populars, trending] = await Promise.all([
    popularsResults,
    trendingResults,
  ]);
  const latestMovie = await populars.results[0];

  return (
    <section className='bg-background-500 pt-[2px]'>
      <Banner movie={latestMovie} />
      <section className='max-w-[1440px] m-auto px-10 flex flex-col gap-12'>
        <Carousel movies={populars.results} title='Populars 🌟' />
        <Carousel movies={trending.results} title='Trending 🔥' />
      </section>
    </section>
  );
};

export default page;
