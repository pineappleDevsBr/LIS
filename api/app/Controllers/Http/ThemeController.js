'use strict'
const Theme = use('App/Models/Theme');
const ThemeList = use('App/Models/ThemeList');

const labels = [
  'name', 'description'
]

class ThemeController {
  async index({ response }) {
    try {
      const data = await Theme.all();
      response.send(data);
    } catch(err) {
      response.send(err);
    }
  }

  async indexUser({ response, auth }) {

    try {
      const data = await ThemeList
        .query()
        .where('user_id', auth.user.id)
        .innerJoin('themes', 'theme_lists.theme_id', 'themes.id')
        .fetch()
      
      response.send(data);
    } catch(err) {
      response.send(err);
    }
  }

  async store({ request, response }) {
    const body = request.only(labels)

    try {
      const theme = await Theme.create(body);
      response.status(201).send(theme)
    } catch (err) {
      response.send(err)
    }
  }

  async update({ request, response }) {
    const body = request.only(labels);
    const { id } = request.all();

    try {
      const data = await Theme.find(id);
      data.merge(body);
      await data.save();
      response.send(data)
    } catch (err) {
      response.send(err)
    }
  }

  async delete({ request, response }) {
    const { id } = request.all();

    try {
      const data = await Theme.find(id);
      await data.delete();

      response.status(204).end();
    } catch (err) {
      response.send(err)
    }
  }
}

module.exports = ThemeController
