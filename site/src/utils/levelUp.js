export default (value) => {
  switch (true) {
    case (value > 3000):
      return 3500
    case (value > 2500):
      return 3000
    case (value > 2000):
      return 2500
    case (value > 1500):
      return 2000
    case (value > 1000):
      return 1500
    case (value > 500):
      return 1000
    default:
      return 500
  }
}
