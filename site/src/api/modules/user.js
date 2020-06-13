export default axios => ({
  get: () => axios.get('user'),
  list: () => axios.get('user/list'),
  update: payload => axios.put('user', payload),
  create: payload => axios.post('user', payload),
  check: payload => axios.post('check', payload)
})
