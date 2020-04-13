import VueI18n from 'vue-i18n'
import messages from 'src/i18n'
import { Quasar, Cookies } from 'quasar'

const lang = Cookies.get('lis_lang')
let locale = Quasar.lang.getLocale()

if (lang !== locale) locale = lang

export default ({ app, Vue }) => {
  Vue.use(VueI18n)

  app.i18n = new VueI18n({
    locale,
    fallbackLocale: 'en-us',
    messages
  })
}
