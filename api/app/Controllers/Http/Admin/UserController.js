'use strict'
const User = use('App/Models/User')

class UserController {
  async index({ view }) {
    const users = await User.all();

    return view.render('users', { users: users.toJSON() })
  }
}

module.exports = UserController
