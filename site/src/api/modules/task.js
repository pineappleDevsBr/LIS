export default axios => ({
  get: id => axios.get(`task?type=${id}`),
  questions: id => axios.get(`tasks/${id}`)
})
