export default axios => ({
  get: () => axios.get('friends'),
  invite: payload => axios.post('friends/invite', payload),
  selection: payload => axios.post('friends/selection', payload),
  search: payload => axios.get(`search/${payload}`),
  searchAll: page => axios.get(`search/all/${page}`)
})
