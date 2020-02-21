// import cookie from '@utils/cookies'
import { theme } from '@api/index'

const getters = {
  getTheme: (state) => state.themes
}

const actions = {
  async getTheme ({ commit }) {
    try {
      const { data } = await theme.get()
      commit('UPDATE_THEME', data)
      return data
    } catch (err) {
      return err
    }
  }
}

const mutations = {
  UPDATE_THEME (state, data) {
    console.log(state.themes, data)
    state.themes = data
  }
}

const state = {
  themes: []
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
