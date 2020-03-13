'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class FriendList extends Model {
  users() {
    return this.hasOne('App/Models/FriendList')
  }
}

module.exports = FriendList
