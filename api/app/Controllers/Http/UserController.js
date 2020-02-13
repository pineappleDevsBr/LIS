'use strict'
/** @type {import('@adonisjs/lucid/src/Lucid/Model')} */

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

  async get({ response, auth }) {
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

  async update({ response, auth, request }) {
    const body = request.only([
      'name', 'nickname', 'email', 'password', 'date_of_birht', 'nationality_id'
    ]);
    
    try {
      const data = await User
        .query()
        .where('id', auth.user.id)
        .first()

      data.merge(body);
      await data.save();

      response.send(data)
    } catch (err) {
      response.send(err);
    }
  }

  async store({ request, response }) {
    const { themes } = request.only(['themes']);
    const body = request.only([
      'name', 'nickname', 'email', 'password', 'date_of_birht', 'nationality_id'
    ]);

    response.send(body);


    // try {
    //   await Database.transaction(async (trx) => {
    //     const user = await trx.insert(body).into('users');
        
    //     themes.forEach(theme => {
    //       await trx.insert({ theme_id: theme, user_id: user.id }).into('theme_lists');
    //     });
    //   })
    //   response.send(data);
    // } catch (err) {
    //   response.send(err);
    // }
  }
}

module.exports = UserController