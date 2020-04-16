'use strict'

const Task = use('App/Repositories/TaskRepository');
const TaskType = use('App/Models/TaskType');

class TaskController {
  async update({ params, view }) {
    const task = await Task.getById(params.id);
    const types = await TaskType.all();

    console.log(task);


    return view.render('pages.task.update', {
      ...task,
      task_type: types.toJSON().find(tp => tp.id == params.id)
    });
  }
}

module.exports = TaskController
