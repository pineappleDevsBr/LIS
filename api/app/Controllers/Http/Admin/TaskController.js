'use strict'
const Task = use('App/Models/Task');

class TaskController {
  async index({ view }) {
    const data = await Task.all();
    return view.render('pages.task.index', { tasks: data.toJSON() });
  }
}

module.exports = TaskController
