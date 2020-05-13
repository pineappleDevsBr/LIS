import { task } from '@api/index'
import randomArray from '../../utils/randomizeArray'

const getters = {
  getTask: state => state.tasks,
  getQuestions: state => state.questions
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
  },

  async getQuestions ({ commit }, id) {
    try {
      const { data: questions } = await task.questions(id)
      randomArray(questions.questions)
      questions.questions.forEach(elm => {
        randomArray(elm.answers)
      })
      commit('UPDATE_QUESTIONS', questions)
      return questions
    } catch (error) {
      return { status: false, error }
    }
  },

  async sendAnswers ({ commit }, payload) {
    try {
      const { data } = await task.finish(payload)
      return data
    } catch (error) {
      return { status: false, error }
    }
  }
}

const mutations = {
  UPDATE_TASK (state, tasks) {
    state.tasks = tasks
  },

  UPDATE_QUESTIONS (state, questions) {
    state.questions = questions
  }
}

const state = {
  tasks: [],
  questions: []
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
