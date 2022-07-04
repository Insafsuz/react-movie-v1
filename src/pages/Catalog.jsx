import React from 'react'
import { useParams } from 'react-router-dom'
import { MovieGrid, PageHeader } from '../components'

const Catalog = () => {
  const { category } = useParams()

  return (
    <>
      <PageHeader>{category === 'movie' ? 'Movies' : 'TV Series'}</PageHeader>
      <div className='container'>
        <section className='section '>
          <MovieGrid category={category} />
        </section>
      </div>
    </>
  )
}

export default Catalog
