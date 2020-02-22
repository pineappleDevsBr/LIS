'use strict'
const Theme = use('App/Models/Theme')

const labels = [
  'name', 'description'
]

class ThemeController {
  async index({ view }) {
    const themes = await Theme.all();
    return view.render('pages.themes.index', { themes: themes.toJSON() })
  }

  async indexOf({ view, params }) {
    const theme = await Theme.find(params.id);
    return view.render('pages.themes.update', { theme: theme.toJSON() })
  }

  async store({ request, response, session }) {
    const body = request.only(labels)

    try {
      await Theme.create(body);
      session.flash({ result: 'created' })
      response.route('admin.themes');
    } catch (err) {
      response.send(err)
    }
  }

  async update({ request, response, session }) {
    const body = request.only(labels);
    const { id } = request.all();

    try {
      const data = await Theme.find(id);
      data.merge(body);
      await data.save();
      
      session.flash({ result: 'updated' })
      response.route('admin.themes');
    } catch (err) {
      response.send(err)
    }
  }

  async delete({ request, response, session }) {
    const { id } = request.all();

    try {
      const data = await Theme.find(id);
      await data.delete();

      session.flash({ result: 'deleted' })
      response.route('admin.themes');
    } catch (err) {
      response.send(err)
    }
  }
}

module.exports = ThemeController
