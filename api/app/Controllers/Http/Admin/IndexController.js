'use strict'
const User = use('App/Models/User');

class IndexController {
  async index({ view }) {
    const user_count = await User
      .query()
      .count('* as total');

    return view.render('index', { users: user_count[0].total })
  }
}

module.exports = IndexController
