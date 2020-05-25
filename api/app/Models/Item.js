'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Item extends Model {
  static get hidden() {
    return ['created_at', 'updated_at'];
  }

  items_user() {
    return this.hasMany('App/Models/ItemUser')
  }
}

module.exports = Item
