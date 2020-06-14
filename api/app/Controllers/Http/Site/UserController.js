'use strict'
const User = use('App/Models/User')

class UserController {
  async index({ view }) {
    const users = await User.all();

    return view.render('pages.users.index', { users: users.toJSON() })
  }
}

module.exports = UserController