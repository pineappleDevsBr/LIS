'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Task extends Model {
  theme() {
    return this.belongsTo('App/Models/Theme', 'theme_id', 'id')
  }

  questions() {
    return this.hasMany('App/Models/Question');
  }

  evaluations() {
    return this.hasMany('App/Models/Evaluation');
  }

  static get hidden() {
    return ['created_at', 'updated_at'];
  }
}

module.exports = Task
