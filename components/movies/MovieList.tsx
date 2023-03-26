import { IMovie } from "@/app/models/movie.model"
import MovieCard from "./MovieCard"
interface IProps {
  movies: IMovie[]
}

const MovieList = ({movies}: IProps) => {
  return (
    <section className="px-4 md:px-6 xl:px-7 py-6 grid grid-cols-12 gap-3 xl:gap-5 max-w-[1440px] m-auto justify-items-center pt-[100px]">
      {
        movies.map(movie => (
          <MovieCard key={movie.id} movie={movie}/>
        ))
      }
    </section>
  )
}

export default MovieList