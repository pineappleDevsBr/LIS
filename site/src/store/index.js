import Vue from 'vue'
import Vuex from 'vuex'
import darkMode from './modules/dark-mode'
import auth from './modules/auth'
import user from './modules/user'
import theme from './modules/theme'

// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      auth,
      user,
      theme,
      darkMode
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: false
  })

  return Store
}
