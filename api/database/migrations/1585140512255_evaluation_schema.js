'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EvaluationSchema extends Schema {
  up () {
    this.create('evaluations', (table) => {
      table.increments('id')
      table.enu('value', [1, 2, 3, 4, 5]).notNullable()
      table.integer('task_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('tasks')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('evaluations')
  }
}

module.exports = EvaluationSchema
