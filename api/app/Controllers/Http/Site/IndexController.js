'use strict'
const User = use('App/Models/User');
const Task = use('App/Models/Task');
const ItemUser = use('App/Models/ItemUser')

class IndexController {
  async index({ view }) {
    const user_count = await User
      .query()
      .count('* as total')
      .sum('money as money')
    const task_count = await Task
      .query()
      .count('* as total');
    const items_count = await ItemUser
    .query()
    .count('* as total');


    return view.render('index', {
      users: user_count[0],
      tasks: task_count[0],
      items: items_count[0]
    })
  }
}

module.exports = IndexController
