import axios from '../../services/apiService'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Detail.scss'
import CastList from './CastList'
import VideoList from './VideoList'
import { MovieList } from '../../components/MovieList'

const Detail = () => {
  const [movie, setMovie] = useState(null)
  const { category, id } = useParams()
  useEffect(() => {
    const getDetail = async () => {
      const res = await axios.get(`${category}/${id}`, { params: {} })
      setMovie(res)
      window.scrollTo(0, 0)
    }
    getDetail()
  }, [category, id])

  console.log(category)

  const apiConfig = {
    originalImage: imgPath => `https://image.tmdb.org/t/p/original/${imgPath}`,
  }

  return (
    <>
      {movie && (
        <div className='movie'>
          <div
            className='movie__banner'
            style={{
              backgroundImage: `url(${apiConfig.originalImage(
                movie.backdrop_path || movie.poster_path
              )})`,
            }}
          ></div>
          <div className='movie__content content-movie'>
            <div className='content-movie__poster poster-movie'>
              <div
                className='poster-movie__img'
                style={{
                  backgroundImage: `url(${apiConfig.originalImage(
                    movie.poster_path || movie.backdrop_path
                  )})`,
                }}
              ></div>
            </div>
            <div className='content-movie__info info-movie'>
              <h1 className='info-movie__title'>{movie.title || movie.name}</h1>
              <div className='info-movie__genres'>
                {movie.genres.slice(0, 5).map((genre, i) => (
                  <span className='genres__item' key={i}>
                    {genre.name}
                  </span>
                ))}
              </div>
              <p className='info-movie__overview'>{movie.overview}</p>
              <div className='info-movie__cast cast-info'>
                <div className='cast-info__header'>
                  <h3 className='cast-info__title'>Casts</h3>
                </div>
                <CastList id={movie.id} />
              </div>
            </div>
          </div>
          <div className='container '>
            <div className='section'>
              <VideoList id={movie.id} />
            </div>
            <div className='section'>
              <h2 className='section__title'>Similar</h2>
              <MovieList category={category} type='similar' id={movie.id} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Detail
