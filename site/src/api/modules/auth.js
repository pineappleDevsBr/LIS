export default axios => ({
  login: payload => axios.post('login', payload),
  forgot: payload => axios.post('forgot', payload),
  reset: payload => axios.post('reset', payload),
  logout: () => axios.post('logout')
})
