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

  async update({ request, auth }) {
    const { themes } = request.all();
    let currentThemes;

    currentThemes = await ThemeList
      .query()
      .where('user_id', auth.user.id)
      .fetch();

    const deleteList = (currentThemes.toJSON().filter(item => !themes.includes(item.theme_id))).map(del => (del.theme_id));
    const createdList = themes.filter(theme => {
      const finded = currentThemes.toJSON().find(thm => thm.theme_id === theme);
      return finded ? false : true;
    }).map(item => ({ theme_id: item, user_id: auth.user.id }));

    await ThemeList
      .query()
      .where('user_id', auth.user.id)
      .whereIn('theme_id', deleteList)
      .delete()

    await ThemeList.createMany(createdList);

    currentThemes = await ThemeList
      .query()
      .where('user_id', auth.user.id)
      .fetch()

    return currentThemes;
  }
}

module.exports = ThemeController
