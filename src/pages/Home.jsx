import React from 'react'
import { HeroSlide, MovieList } from '../components'
import { OutlineButton } from '../components/Button/Button'

const Home = () => {
  return (
    <div>
      <HeroSlide />
      <div className='container'>
        <section className='section'>
          <div className='section__header'>
            <h2>Trending Movies</h2>
            <OutlineButton className='btn-small'>View More</OutlineButton>
          </div>
          <MovieList category='movie' type='popular' />
        </section>
        <section className='section'>
          <div className='section__header'>
            <h2>Top Rated Movies</h2>
            <OutlineButton className='btn-small'>View More</OutlineButton>
          </div>
          <MovieList category='movie' type='top_rated' />
        </section>
        <section className='section'>
          <div className='section__header'>
            <h2>Trending Tv</h2>
            <OutlineButton className='btn-small'>View More</OutlineButton>
          </div>
          <MovieList category='tv' type='popular' />
        </section>
        <section className='section'>
          <div className='section__header'>
            <h2>Top Rated Tv</h2>
            <OutlineButton className='btn-small'>View More</OutlineButton>
          </div>
          <MovieList category='tv' type='top_rated' />
        </section>
      </div>
    </div>
  )
}

export default Home
