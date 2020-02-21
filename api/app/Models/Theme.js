'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Theme extends Model {
  static get hidden() {
    return ['created_at', 'updated_at'];
  }
}

module.exports = Theme
