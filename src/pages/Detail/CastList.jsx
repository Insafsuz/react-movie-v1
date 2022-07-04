import axios from '../../services/apiService'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CastList = ({ id }) => {
  const { category } = useParams()
  const [casts, setCasts] = useState([])

  useEffect(() => {
    const getCredits = async () => {
      const res = await axios.get(`${category}/${id}/credits`, { params: {} })
      setCasts(res.cast.slice(0, 5))
    }
    getCredits()
  }, [category, id])

  const apiConfig = {
    w500Image: imgPath => `https://image.tmdb.org/t/p/w500/${imgPath}`,
  }

  return (
    <div className='casts'>
      {casts.map((cast, i) => (
        <div key={i} className='casts__item'>
          <div
            className='casts__item__img'
            style={{ backgroundImage: `url(${apiConfig.w500Image(cast.profile_path)})` }}
          ></div>
          <p className='casts__item__name'>{cast.name}</p>
        </div>
      ))}
    </div>
  )
}

export default CastList
