export default axios => ({
  get: () => axios.get('friends'),
  invite: payload => axios.post('friends/invite', payload),
  selection: payload => axios.post('friends/selection', payload)
})
