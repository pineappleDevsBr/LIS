export default axios => ({
  get: () => axios.get('theme'),
  mythemes: () => axios.get('user/theme')
})
