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
      const { data: allItems } = await store.list()

      const myItems = []
      console.log(items)

      for (let i = 0; i < items.length; i += 1) {
        for (let j = 0; j < allItems.length; j += 1) {
          if (items[i].item_id === allItems[j].id) {
            myItems.push({
              id: items[i].id,
              item_id: items[i].item_id,
              active: items[i].active,
              active_time: items[i].active_time,
              user_id: items[i].user_id,
              name: allItems[j].name,
              description: allItems[j].description,
              icon: allItems[j].icon,
              multiplier: allItems[j].multiplier
            })
          }
        }
      }

      commit('UPDATE_MYITEMS', myItems)
      return items
    } catch (error) {
      return { status: false, error }
    }
  },

  async buyItem ({ commit }, payload) {
    try {
      const { data: buy } = await store.buy(payload)
      console.log(buy)
      return buy
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
