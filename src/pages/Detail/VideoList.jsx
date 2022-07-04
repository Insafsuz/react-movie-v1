import axios from '../../services/apiService'
import { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'

const VideoList = ({ id }) => {
  const { category } = useParams()

  const [videos, setVideos] = useState([])

  useEffect(() => {
    const getVideos = async () => {
      const res = await axios.get(`${category}/${id}/videos`, { params: {} })
      setVideos(res.results.slice(0, 2))
    }
    getVideos()
  }, [category, id])

  return (
    <>
      {videos.map((video, i) => (
        <Video video={video} key={i} />
      ))}
    </>
  )
}

const Video = ({ video }) => {
  return (
    <div className='video'>
      <h2 className='video__title'>{video.name}</h2>
      <iframe
        src={`https://www.youtube.com/embed/${video.key}`}
        title='video'
        height='700px'
        width='100%'
      ></iframe>
    </div>
  )
}

export default VideoList
