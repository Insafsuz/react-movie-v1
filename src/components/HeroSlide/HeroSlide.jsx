import './HeroSlide.scss'
import { useEffect, useState } from 'react'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import axios from '../../services/apiService'
import Button, { OutlineButton } from '../Button/Button'

const HeroSlide = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 }
      try {
        const res = await axios.get('movie/popular', { params })
        setMovies(res.results.slice(0, 4))
      } catch (error) {
        console.log('error')
      }
    }
    getMovies()
  }, [])

  return (
    <div className='hero-slide'>
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
      >
        {movies.map((movie, i) => (
          <SwiperSlide className='swiper-slide' key={i}>
            <HeroSlideItem movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

const HeroSlideItem = ({ movie }) => {
  const background = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`

  return (
    <div className='hero-slide__item item-hero' style={{ backgroundImage: `url(${background})` }}>
      <div className='item-hero__content container'>
        <div className='item-hero__info'>
          <h2 className='item-hero__title'>{movie.title}</h2>
          <p className='item-hero__overview'>{movie.overview}</p>
          <div className='item-hero__btns'>
            <Button>Watch now</Button>
            <OutlineButton>Watch trailer</OutlineButton>
          </div>
        </div>
        <div className='item-hero__poster'>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt='' />
        </div>
      </div>
    </div>
  )
}

export default HeroSlide
