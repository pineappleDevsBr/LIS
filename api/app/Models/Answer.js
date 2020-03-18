'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Answer extends Model {
  questions() {
    return this.belongsToMany('App/Models/Question');
  }
}

module.exports = Answer
