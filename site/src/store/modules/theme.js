// import cookie from '@utils/cookies'
import { theme } from '@api/index'

const getters = {
  getTheme: (state) => state
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
    Object.entries(data)
      .forEach((item) => {
        state[item[0]] = item[1]
      })
  }
}

const state = {
  id: 1,
  name: '',
  description: ''
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
