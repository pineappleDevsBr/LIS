import cookie from '@utils/cookies'

const getters = {
  getConfirmUseItem: state => state.confirmUseItem
}

const actions = {
  confirmUseItems ({ commit }, use) {
    try {
      if (use) cookie('confirmUseItems', 'set', use)
      else cookie('confirmUseItems', 'remove')
      commit('SET_USE', use)
      return { status: true }
    } catch (error) {
      return { status: false, error }
    }
  }
}

const mutations = {
  SET_USE (state, use) {
    state.confirmUseItem = use
  }
}

const state = {
  confirmUseItem: cookie('confirmUseItems', 'has')
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
