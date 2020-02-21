'use strict'
const Theme = use('App/Models/Theme')

const labels = [
  'name', 'description'
]

class ThemeController {
  async index({ view }) {
    const themes = await Theme.all();
    return view.render('themes', { themes: themes.toJSON() })
  }

  async store({ request, response, session }) {
    const body = request.only(labels)

    try {
      await Theme.create(body);
      session.flash({ created: true })
      response.route('admin.themes');
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
