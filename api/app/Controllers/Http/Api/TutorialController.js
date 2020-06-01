'use strict'

const Tutorial = use('App/Models/Tutorial');

class TutorialController {
  async index({ response }) {
    try {
      const data = await Tutorial.all();
      response.send(data);
    } catch(err) {
      response.send(err);
    }
  }

  async store({ request, response, auth }) {
    const { link, name } = request.only(['link', 'name']);

    try {
      const data = await Tutorial.create({
        name,
        link
      });

      response.json(data);
    } catch (err) {
      response.json(err);
    }
  }
}

module.exports = TutorialController
