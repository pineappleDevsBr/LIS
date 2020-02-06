import { Cookies } from 'quasar'

export default (cookie, type, value, expire) => {
  switch (type) {
    case 'get':
      return Cookies.get(`lis_${cookie}`)
    case 'has':
      return Cookies.has(`lis_${cookie}`)
    case 'set':
      Cookies.set(`lis_${cookie}`, value, { expires: expire || null })
      break
    case 'remove':
      Cookies.remove(`lis_${cookie}`)
      break
    default:
      break
  }

  return false
}
