import './MovieCard.scss'

import { Link } from 'react-router-dom'
import { Button } from '../Button'

const MovieCard = ({ movie, category }) => {
  const background = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  const link = `/${category}/${movie.id}`

  return (
    <Link to={link} className='movie-card'>
      <div className='movie-card__image' style={{ backgroundImage: `url(${background})` }}>
        <Button>
          <i className='play'></i>
        </Button>
      </div>
      <h3 className='movie-card__title'>{movie.title || movie.name}</h3>
    </Link>
  )
}

export default MovieCard
