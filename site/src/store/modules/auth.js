import cookie from '@utils/cookies'
import { auth } from '@api/index'

const getters = {
  getIsLogged: state => state.isUserLogged,
  getName: state => state.user.name,
  getEmail: state => state.user.email
}

const actions = {
  async login ({ commit }, payload) {
    try {
      const { data } = await auth.login(payload)
      console.log(data)
      commit('LOGIN_SUCCESSFUL', JSON.parse(JSON.stringify(data)))
      cookie('token', 'set', data.token, 30)

      return { status: true, data }
    } catch (error) {
      return { status: false, error }
    }
  },

  logout ({ commit }) {
    commit('LOGOUT')
    cookie('token', 'remove')
    cookie('name', 'remove')
    return { status: true }
  },

  async forgot ({ commit }, payload) { // eslint-disable-line
    try {
      await auth.forgot(payload)

      return { status: true }
    } catch (error) {
      return { status: false, error }
    }
  },

  async reset ({ commit }, payload) { // eslint-disable-line
    try {
      await auth.reset(payload)

      return { status: true }
    } catch (error) {
      return { status: false, error }
    }
  },

  async changeData ({ commit }, payload) { // eslint-disable-line
    try {
      await auth.changeData(payload)

      return { status: true }
    } catch (error) {
      return { status: false, error }
    }
  },

  async changePassword ({ commit }, payload) { // eslint-disable-line
    try {
      await auth.changePassword(payload)

      return { status: true }
    } catch (error) {
      return { status: false, error }
    }
  }
}

const mutations = {
  LOGIN_SUCCESSFUL (state, data) {
    state.isUserLogged = true
    state.user.token = data.token
  },

  LOGOUT (state) {
    state.isUserLogged = false
    state.user.email = ''
    state.user.token = ''
  },

  CHANGE_NAME (state, name) {
    state.user.name = name
  },
  CHANGE_EMAIL (state, email) {
    state.user.email = email
  }
}

const initialStateUser = {
  token: cookie('token', 'get'),
  name: cookie('name', 'get'),
  email: ''
}

const state = {
  isUserLogged: cookie('token', 'has'),
  user: initialStateUser
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
