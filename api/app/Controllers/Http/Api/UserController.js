'use strict'
/** @type {import('@adonisjs/lucid/src/Lucid/Model')} */

const Mail = use('Mail');
const User = use('App/Models/User');
const UserRepository = use('App/Repositories/UserRepository')

const labels = [
  'name', 'avatar', 'nickname', 'email', 'password', 'date_of_birth', 'nationality_id'
]

class UserController {
  async index({ response, params }) {
    response.json(await UserRepository.getById(params.id));
  }

  async get({ response, auth }) {
    response.json(await UserRepository.getById(auth.user.id));
  }

  async update({ response, auth, request }) {
    const body = request.only(labels);
    response.json(await UserRepository.updateById(auth.user.id, body));
  }

  async store({ request, response }) {
    let { themes } = request.only(['themes']);
    const body = request.only(labels);

    try {
      const data = await UserRepository.create({ body, themes });
      await Mail.send('emails.welcome', { name: data.user.name }, (message) => {
        message
          .to(data.user.email)
          .from('suporte@pineappledevs.com')
          .subject('LIS - Bem vindo!')
      })
      response.status(201).send({ data });
    } catch (err) {
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

  async list({ auth }) {
    const users = await User.all();
    const formatUsers = [];
    users.toJSON().forEach(user => {
      if (user.email !== auth.user.email) formatUsers.push(user)
    });
    return formatUsers;
  }
}

module.exports = UserController