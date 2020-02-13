'use strict'
/** @type {import('@adonisjs/lucid/src/Lucid/Model')} */

const Database = use('Database');
const User = use('App/Models/User');
const ThemeList = use('App/Models/ThemeList');

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
      'name', 'nickname', 'email', 'password', 'date_of_birth', 'nationality_id'
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

  async store({ request, response, auth }) {
    let { themes } = request.only(['themes']);
    const body = request.only([
      'name', 'nickname', 'email', 'password', 'date_of_birth', 'nationality_id'
    ]);

    themes = themes.map(theme => ({ theme_id: theme, user_id: auth.user.id }));
    const trx = await Database.beginTransaction()

    try {
      const data = await User.create(body, trx);
      const theme_data = await ThemeList.createMany(themes, trx);

      await trx.commit();
      response.send({ data, theme_data });
    } catch (err) {
      await trx.rollback();
      response.send(err);
    }
  }
}

module.exports = UserController