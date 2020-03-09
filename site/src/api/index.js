import axios from 'axios'
import { Cookies } from 'quasar'
import authAPI from './modules/auth'
import userAPI from './modules/user'
import themeAPI from './modules/theme'
import taskAPI from './modules/task'

const api = axios.create({
  baseURL: 'http://localhost:3333/api/v1',
  crossDomain: true,
  timeout: 10000
})

api.interceptors.request.use(
  (config) => {
    const token = Cookies.get('lis_token')
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
  },
  error => Promise.reject(error)
)

export const auth = authAPI(api)
export const user = userAPI(api)
export const theme = themeAPI(api)
export const task = taskAPI(api)
