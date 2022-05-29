import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

import './MovieGrid.scss'
import axios from '../../services/apiService'
import MovieCard from '../MovieCard/MovieCard'
import { OutlineButton } from '../Button/Button'

const MovieGrid = ({ category }) => {
  const [movies, setMovies] = useState([])

  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(0)

  const { keyword } = useParams()

  useEffect(() => {
    const getList = async () => {
      let res = null
      if (keyword === undefined) {
        const params = {}
        switch (category) {
          case 'movie':
            res = await axios.get('movie/upcoming', { params })
            break
          default:
            res = await axios.get('tv/popular', { params })
        }
      } else {
        const params = {
          query: keyword,
        }
        res = await axios.get(`searc/${category}`, { params })
      }
      setMovies(res.results)
      setTotalPage(res.total_pages)
    }
    getList()
  }, [category, keyword])

  const loadMore = async () => {
    let res = null
    if (keyword === undefined) {
      const params = {
        page: page + 1,
      }
      switch (category) {
        case 'movie':
          res = await axios.get('movie/upcoming', { params })
          break
        default:
          res = await axios.get('tv/popular', { params })
      }
    } else {
      const params = {
        page: page + 1,
        query: keyword,
      }
      res = await axios.get(`search/${category}`, { params })
    }
    setMovies([...movies, ...res.results])
    setPage(page + 1)
  }

  return (
    <>
      <div className='movie-grid'>
        {movies.map((item, i) => (
          <MovieCard category={category} movie={item} key={i} />
        ))}
      </div>
      {page < totalPage ? (
        <div className='movie-grid__loadmore'>
          <OutlineButton className='small' onClick={loadMore}>
            Load more
          </OutlineButton>
        </div>
      ) : null}
    </>
  )
}

export default MovieGrid
