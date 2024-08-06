import axios from 'axios'
import queryString from 'query-string'

const API_KEY = 'd5c35e51c81488b19da7c1f572507a3d'

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5N2QyYmU1MDI3OGVjMmJkNDg3NGE3MmY4MmU1OGI1OSIsIm5iZiI6MTcyMjkyNDU5OC40NzI0ODgsInN1YiI6IjY2YjBiMWNmZjJlMTAyYzMxOTNhMzJjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.txD86XSk0yra0ou25QT-FkLD_jW2RNe4vqzw1gVkJxw`,
  },
  paramsSerializer: params =>
    queryString.stringify({ ...params, api_key: API_KEY }),
})

instance.interceptors.request.use(async config => config)

instance.interceptors.response.use(
  response => {
    if (response && response.data) {
      return response.data
    }

    return response
  },
  error => {
    throw error
  }
)

export default instance
