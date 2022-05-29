import axios from 'axios'
import queryString from 'query-string'

const API_KEY = 'd5c35e51c81488b19da7c1f572507a3d'

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: params => queryString.stringify({ ...params, api_key: API_KEY }),
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
