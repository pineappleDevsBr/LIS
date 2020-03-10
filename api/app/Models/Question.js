'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Question extends Model {
  tasks() {
    return this.belongsToMany('App/Models/Task');
  }

  answers() {
    return this.hasMany('App/Models/Answer');
  }
}

module.exports = Question
