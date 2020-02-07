import axios from 'axios'
import { Cookies } from 'quasar'
import authAPI from './modules/auth'

const api = axios.create({
  baseURL: 'http://localhost:3333',
  crossDomain: true,
  timeout: 10000
})

api.interceptors.request.use(
  (config) => {
    const token = Cookies.get('nh-tracking_token')
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
  },
  error => Promise.reject(error)
)

export const auth = authAPI(api)
