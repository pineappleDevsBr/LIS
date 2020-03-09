import { task } from '@api/index'

const getters = {
  getTask: state => state.tasks
}

const actions = {
  async getTask ({ commit }) {
    try {
      const { data: tasks } = await task.get(1)
      console.log(tasks)
      commit('GET_TASK', tasks)
      return tasks
    } catch (error) {
      return { status: false, error }
    }
  }
}

const mutations = {
  GET_TASK (state, tasks) {
    state.darkMode = tasks
  }
}

const state = {
  tasks: []
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
