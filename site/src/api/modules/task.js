export default axios => ({
  get: (id) => axios.get(`task?type=${id}`)
})
