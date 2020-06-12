import { friends } from '@api/index'

const getters = {
  getFriends: state => state.friends,
  getInvites: state => state.invites
}

const actions = {
  async getFriends ({ commit }) {
    try {
      const { data } = await friends.get()
      commit('UPDATE_FRIENDS', data.friends)
      commit('UPDATE_INVITES', data.invites)
      return data
    } catch (error) {
      return { status: false, error }
    }
  },

  async acceptInvites ({ commit }, payload) {
    try {
      const { data } = await friends.selection(payload)
      return data
    } catch (error) {
      return { status: false, error }
    }
  }
}

const mutations = {
  UPDATE_FRIENDS (state, friends) {
    state.friends = friends
  },

  UPDATE_INVITES (state, invites) {
    state.invites = invites
  }
}

const state = {
  friends: [],
  invites: []
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
