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
      const grouptItems = {}

      items.forEach(elm => (grouptItems[elm.item_id] = { item: null, qtde: 0 }))
      items.forEach(elm => {
        if (grouptItems[elm.item_id].item === null || elm.status !== 'inactivated') {
          grouptItems[elm.item_id].item = elm
        }
        grouptItems[elm.item_id].qtde += 1
      })

      Object.keys(grouptItems).forEach(key => (grouptItems[key].qtde === 0) && delete grouptItems[key])

      commit('UPDATE_MYITEMS', grouptItems)
      return grouptItems
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
    state.myItems = { ...items }
  }
}

const state = {
  items: [],
  myItems: null
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
