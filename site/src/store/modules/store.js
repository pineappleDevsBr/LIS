import { store } from '@api/index'

const getters = {
  getItems: state => state.items,
  getMyItems: state => state.myItems
}

const actions = {
  async getItems ({ commit }) {
    try {
      const { data: items } = await store.list()
      commit('UPDATE_ITEMS', items)
      return items
    } catch (error) {
      return { status: false, error }
    }
  },

  async getMyItems ({ commit }) {
    try {
      const { data: items } = await store.myItems()
      commit('UPDATE_MYITEMS', items)
      return items
    } catch (error) {
      return { status: false, error }
    }
  },

  async buyItem ({ commit }, payload) {
    try {
      const { data: buy } = await store.buy(payload)
      return buy
    } catch (error) {
      return { status: false, error }
    }
  },

  async useItem ({ commit }, payload) {
    try {
      const data = await store.use(payload)
      console.log(data)
      return data
    } catch (error) {
      return { status: false, error }
    }
  }
}

const mutations = {
  UPDATE_ITEMS (state, items) {
    state.items = items
  },

  UPDATE_MYITEMS (state, items) {
    state.myItems = items
  }
}

const state = {
  items: [],
  myItems: []
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
