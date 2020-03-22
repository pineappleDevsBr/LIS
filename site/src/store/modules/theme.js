// import cookie from '@utils/cookies'
import { theme } from '@api/index'

const getters = {
  getTheme: (state) => state.themes,
  getMyThemes: (state) => state.myThemes
}

const actions = {
  async getTheme ({ commit }) {
    try {
      const { data: themes } = await theme.get()
      commit('UPDATE_THEME', themes)
      return themes
    } catch (err) {
      return err
    }
  },

  async getMyThemes ({ commit }) {
    try {
      const { data: themes } = await theme.mythemes()

      const myThemes = []

      themes.forEach(elm => {
        myThemes.push({
          id: elm.id,
          name: elm.name,
          description: elm.description,
          have: true
        })
      })

      commit('UPDATE_MYTHEME', myThemes)
      return themes
    } catch (err) {
      return err
    }
  },

  async updateTheme ({ commit }, payload) {
    try {
      const response = await theme.put(payload)
      return response
    } catch (err) {
      return err
    }
  }
}

const mutations = {
  UPDATE_THEME (state, data) {
    state.themes = data
  },

  UPDATE_MYTHEME (state, data) {
    state.myThemes = data
  }
}

const state = {
  themes: [],
  myThemes: []
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
