export default (value) => {
  if (value < 500) return { xp: 500, level: 1 }
  return {
    xp: ((Math.ceil(value / 500) * 500) + ((Math.ceil(value / 500) * 500) * 0.5)),
    level: (Math.ceil(value / 500))
  }
}
