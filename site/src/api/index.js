import axios from 'axios'
import { Cookies } from 'quasar'
import authAPI from './modules/auth'
import tutorialAPI from './modules/tutorial'
import userAPI from './modules/user'
import friendsAPI from './modules/friends'
import themeAPI from './modules/theme'
import taskAPI from './modules/task'
import storeAPI from './modules/store'

const api = axios.create({
  baseURL: process.env.API_URL,
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
export const friends = friendsAPI(api)
export const theme = themeAPI(api)
export const task = taskAPI(api)
export const store = storeAPI(api)
export const tutorial = tutorialAPI(api)
