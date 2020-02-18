'use strict'
const Theme = use('App/Models/Theme')

class ThemeController {
  async index({ view }) {
    const themes = await Theme.all();
    return view.render('themes', { themes: themes.toJSON() })
  }
}

module.exports = ThemeController
