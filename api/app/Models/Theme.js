'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Theme extends Model {
  theme_lists() {
    return this.hasMany('App/Models/ThemeList')
  }

  static get hidden() {
    return ['created_at', 'updated_at'];
  }
}

module.exports = Theme
