import { IMovie } from "@/app/models/movie.model"
import MovieCard from "./MovieCard"
interface IProps {
  movies: IMovie[]
}

const MovieList = ({movies}: IProps) => {
  return (
    <section className="py-6 grid grid-cols-12 gap-3 xl:gap-5 justify-items-center">
      {
        movies.map(movie => (
          <MovieCard key={movie.id} movie={movie}/>
        ))
      }
    </section>
  )
}

export default MovieList