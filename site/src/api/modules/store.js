export default axios => ({
  list: () => axios.get(`items/all`),
  myItems: () => axios.get(`items`),
  buy: payload => axios.post(`items/buy`, payload)
})
