import CardMovie from '../CardMovie'
import styles from './movieList.module.css'
import { Movies } from '../../types'

interface MovieListProps {
  movies: Movies[];
}

const MovieList = ({movies}: MovieListProps) => {
  return (
    <ul className={styles.lista}>
      {movies.map((movie) => (
        <CardMovie key={movie.id} {...movie}/>
      ))}
    </ul>
  )
}

export default MovieList