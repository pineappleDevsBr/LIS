'use strict'
const Task = use('App/Models/Task');
const Question = use('App/Models/Question');
const Theme = use('App/Models/Theme');

class TaskController {
  async index({ view }) {
    const data = await Task
      .query()
      .with(['questions'])
      .fetch();

    return view.render('pages.task.index', { tasks: data.toJSON() });
  }

  async new({ view }) {
    const themes = await Theme.all();

    return view.render('pages.task.store', { themes: themes.toJSON() });
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

  async store({ request }) {
    return request.all();
  }
}

module.exports = TaskController
