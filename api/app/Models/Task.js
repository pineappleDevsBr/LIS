'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Task extends Model {
  theme() {
    return this.belongsToMany('App/Models/Theme')
  }

  questions() {
    return this.hasMany('App/Models/Question');
  }
}

module.exports = Task
