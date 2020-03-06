'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ThemeList extends Model {
  user() {
    return this.belongsToMany('App/Models/User')
  }

  themes() {
    return this.belongsToMany('App/Models/Theme', 'theme');
  }
}

module.exports = ThemeList
