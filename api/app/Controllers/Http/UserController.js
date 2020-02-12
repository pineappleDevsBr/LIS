'use strict'
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const User = use('App/Models/User');

class UserController {
  async index({ response }) {

    try {
      const data = await User
      .query()
      .with('nationality')        
      .fetch()

      response.json(data);
    } catch (err) {
      response.send(err)
    }
  }

  async getUser({ response, auth }) {
    try {
      const data = await User
        .query()
        .where('id', auth.user.id)
        .with('nationality')
        .first()

      response.json(data);

    } catch (err) {
      response.send(err)
    }
  }
}

module.exports = UserController