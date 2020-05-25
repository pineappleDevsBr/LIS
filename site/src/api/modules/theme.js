export default axios => ({
  get: () => axios.get('theme'),
  put: payload => axios.put('user/theme', payload),
  mythemes: () => axios.get('user/theme')
})
