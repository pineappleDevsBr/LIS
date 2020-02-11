'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Nationality extends Model {
  users() {
    return this.hasOne('App/Models/User')
  }
}

module.exports = Nationality
