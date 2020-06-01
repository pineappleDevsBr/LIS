'use strict'
const Tutorial = use('App/Models/Tutorial')

const labels = [
  'name', 'link'
]
class TutorialController {
  async index({ view }) {
    const tutorials = await Tutorial.all();
    return view.render('pages.tutorials.index', { tutorials: tutorials.toJSON() })
  }

  async store({ request, response, session }) {
    const body = request.only(labels)

    try {
      await Tutorial.create(body);
      session.flash({ result: 'created' })
      response.route('admin.tutorials');
    } catch (err) {
      response.send(err)
    }
  }
}

module.exports = TutorialController
