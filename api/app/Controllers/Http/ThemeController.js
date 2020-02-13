'use strict'
const Theme = use('App/Models/Theme');

class ThemeController {
  async index({ response, auth }) {
    try {
      const data = await Theme.all();
      response.send(data);
    } catch(err) {
      response.send(err);
    }
  }
}

module.exports = ThemeController
