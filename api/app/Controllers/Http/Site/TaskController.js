'use strict'

const Task = use('App/Repositories/TaskRepository');
const TaskType = use('App/Models/TaskType');

class TaskController {
  async update({ params, view }) {
    const task = await Task.getById(params.id);
    const types = await TaskType.all();
    const data = {
      ...task,
      task_type: types.toJSON().find(tp => tp.id == params.id)
    }
    console.log(task);
    return view.render('pages.task.update', data);
  }
}

module.exports = TaskController
