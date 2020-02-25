'use strict'
/** @type {import('@adonisjs/lucid/src/Lucid/Model')} */

const Database = use('Database');
const Mail = use('Mail');
const User = use('App/Models/User');
const ThemeList = use('App/Models/ThemeList');

const labels = [
  'name', 'nickname', 'email', 'password', 'date_of_birth', 'nationality_id'
]

class UserController {
  async index({ response, params }) {

    try {
      const data = await User
        .query()
        .where('id', params.id)
        .with('nationality')
        .first()

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
    const body = request.only(labels);

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
    let { themes } = request.only(['themes']);
    const body = request.only(labels);

    const trx = await Database.beginTransaction();

    try {
      const data = await User.create(body, trx);
      themes = themes.map(theme => ({ theme_id: theme, user_id: data.id }));
      const theme_data = await ThemeList.createMany(themes, trx);

      await trx.commit();
      await Mail.send('emails.welcome', { name: data.name }, (message) => {
        message
          .to(data.email)
          .from('suporte@pineappledevs.com')
          .subject('LIS - Bem vindo!')
      })
      response.status(201).send({ data, theme_data });
    } catch (err) {
      await trx.rollback();
      response.send(err);
    }
  }

  async check({ request, response }) {
    const { payload } = request.only(['payload']);
    const queryParameter = Object.keys(payload)[0];
    
    try {
       const data = await User.findBy(queryParameter, payload[queryParameter]);
      const status = data ? 204 : 404
       response.status(status).send(status);
      
    } catch (err) {
      response.send(err);
    }
  }
}

module.exports = UserController