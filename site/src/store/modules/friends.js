import { friends } from '@api/index'

const getters = {
  getFriends: state => state.friends,
  getInvites: state => state.invites,
  searchAll: state => state.searchAll,
  search: state => state.search
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

  async searchAll ({ commit }, page) {
    try {
      const { data } = await friends.searchAll(page)
      commit('UPDATE_SEARCHALL', data.data)
      return data
    } catch (error) {
      return { status: false, error }
    }
  },

  async search ({ commit }, payload) {
    try {
      const { data } = await friends.search(payload)
      commit('UPDATE_SEARCH', data)
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
  },

  async sendInvites ({ commit }, payload) {
    try {
      const data = await friends.invite(payload)
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
  },

  UPDATE_SEARCHALL (state, searchAll, friend) {
    state.searchAll = state.searchAll.concat(searchAll)
  },

  UPDATE_SEARCH (state, search) {
    state.search = search
  }
}

const state = {
  friends: [],
  invites: [],
  searchAll: [],
  seach: []
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
