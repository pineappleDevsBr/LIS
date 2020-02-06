export default axios => ({
  login: payload => axios.post('login', payload),
  logout: () => axios.post('logout')
})
