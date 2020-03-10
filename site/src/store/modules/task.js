import { task } from '@api/index'

const getters = {
  getTask: state => state.tasks
}

const actions = {
  async getTask ({ commit }, type) {
    try {
      const { data: tasks } = await task.get(type)
      commit('UPDATE_TASK', tasks)
      return tasks
    } catch (error) {
      return { status: false, error }
    }
  }
}

const mutations = {
  UPDATE_TASK (state, tasks) {
    state.tasks = tasks
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
