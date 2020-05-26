'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ItemUser extends Model {
  item() {
    return this.hasOne('App/Models/Item', 'item_id', 'id');
  }

  users() {
    return this.belongsToMany('App/Models/Item')
  }
}

module.exports = ItemUser
