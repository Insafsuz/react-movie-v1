import './MovieList.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { MovieCard } from '../MovieCard'
import { useEffect, useState } from 'react'
import axios from '../../services/apiService'

const MovieList = ({ category, type, id }) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const getList = async () => {
      let res = null
      const params = {}
      if (type !== 'similar') {
        switch (category) {
          case 'movie':
            res = await axios.get(`movie/${type}`, { params })
            break
          default:
            res = await axios.get(`tv/${type}`, { params })
        }
      } else {
        res = await axios.get(`${category}/${id}/${type}`, { params })
      }
      setMovies(res.results)
    }
    getList()
  }, [])

  return (
    <div className='movie-list'>
      <Swiper grabCursor={true} spaceBetween={10} slidesPerView={'auto'}>
        {movies.map(movie => (
          <SwiperSlide key={movie.id}>
            <MovieCard movie={movie} category={category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default MovieList
