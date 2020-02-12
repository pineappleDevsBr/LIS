// import cookie from '@utils/cookies'
import { user } from '@api/index'

const getters = {
  getUser: (state) => state
}

const actions = {
  async getUser ({ commit }) {
    try {
      const { data } = await user.get()
      commit('UPDATE_USER', data)

      return data
    } catch (err) {
      return err
    }
  }
}

const mutations = {
  UPDATE_USER (state, data) {
    Object.entries(data)
      .forEach((item) => {
        state[item[0]] = item[1]
      })
  }
}

const state = {
  id: 1,
  nickname: '',
  email: '',
  date_of_birth: '',
  xp: 0,
  money: 0,
  nationality: {
    id: 1,
    name: 'Brazil',
    file: 'Keith'
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
