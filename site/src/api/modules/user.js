export default axios => ({
  get: () => axios.get('user'),
  create: payload => axios.post('user', payload),
  check: payload => axios.post('check', payload)
})
