'use strict'
const Task = use('App/Models/Task');
const Question = use('App/Models/Question');

class TaskController {
  async index({ view }) {
    const data = await Task
      .query()
      .with(['questions'])
      .fetch();

    return view.render('pages.task.index', { tasks: data.toJSON() });
  }

  async get({ view, params }) {
    const data = await Task
      .find(params.id)

    const questions = await Question
      .query()
      .where('task_id', params.id)
      .with(['answers'])
      .fetch()

    return view.render('pages.task.task', { task: data, questions: questions.toJSON() });
  }

  async test({ request }) {
    return request.all();
  }
}

module.exports = TaskController
