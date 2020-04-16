'use strict'

const Task = use('App/Repositories/TaskRepository');
const TaskType = use('App/Models/TaskType');

class TaskController {
  async update({ params, view }) {
    const task = await Task.getById(params.id);
    const types = await TaskType.all();

    return view.render('pages.task.update', {
      task: task.toJSON(),
      task_type: types.toJSON().find(tp => tp.name == params.type)
    });
  }
}

module.exports = TaskController
