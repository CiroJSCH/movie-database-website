import { IMovie } from "@/app/models/movie.model"
interface IProps {
  movies: IMovie[]
}

const MovieList = ({movies}: IProps) => {
  return (
    <div>MovieList</div>
  )
}

export default MovieList