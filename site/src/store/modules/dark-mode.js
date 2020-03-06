import cookie from '@utils/cookies'
import { Dark } from 'quasar'

const getters = {
  getDarkMode: state => state.darkMode
}

const actions = {
  setDarkMode ({ commit }, isDark) {
    try {
      Dark.set(isDark)
      cookie('darkmode', 'set', isDark)
      commit('DARK_MODE', isDark)
      return { status: true }
    } catch (error) {
      return { status: false, error }
    }
  }
}

const mutations = {
  DARK_MODE (state, isDark) {
    state.darkMode = isDark
  }
}

const state = {
  darkMode: cookie('darkmode', 'has')
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
