import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
})

instance.interceptors.request.use(
  async request => {
    request.params = {
      ...request.params,
      api_key: 'd5c35e51c81488b19da7c1f572507a3d',
    }
    return request
  },
  error => Promise.reject(error)
)

export default instance
