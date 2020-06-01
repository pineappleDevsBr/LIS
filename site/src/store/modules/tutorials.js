import { tutorial } from '@api/index'

const getters = {
  getTutorials: state => state.tutorials
}

const actions = {
  async getTutorials ({ commit }) {
    try {
      const { data: videos } = await tutorial.get()
      commit('UPDATE_TUTORIALS', videos)
      return videos
    } catch (error) {
      return { status: false, error }
    }
  }
}

const mutations = {
  UPDATE_TUTORIALS (state, tutorials) {
    state.tutorials = tutorials
  }
}

const state = {
  tutorials: []
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
