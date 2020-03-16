import { friends } from '@api/index'

const getters = {
  getFriends: state => state.friends
}

const actions = {
  async getFriends ({ commit }) {
    try {
      const { data: myFriends } = await friends.get()
      console.log(myFriends)
      commit('UPDATE_FRIENDS', myFriends)
      return myFriends
    } catch (error) {
      return { status: false, error }
    }
  }
}

const mutations = {
  UPDATE_FRIENDS (state, friends) {
    state.friends = friends
  }
}

const state = {
  friends: []
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
