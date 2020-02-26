export default axios => ({
  get: () => axios.get('user'),
  check: payload => axios.post('check', payload)
})
