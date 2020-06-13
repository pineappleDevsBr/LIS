'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Env = use('Env')

class Question extends Model {
  static get computed() {
    return ['filepath']
  }

  getFilepath({ file }) {
    return `${Env.get('API_URL')}/uploads/${file}`
  }

  tasks() {
    return this.belongsToMany('App/Models/Task');
  }

  answers() {
    return this.hasMany('App/Models/Answer');
  }
}

module.exports = Question
