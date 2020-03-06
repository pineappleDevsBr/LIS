'use strict'
const Theme = use('App/Models/Theme');
const ThemeList = use('App/Models/ThemeList');

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
}

module.exports = ThemeController
