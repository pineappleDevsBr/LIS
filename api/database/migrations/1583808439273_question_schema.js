'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class QuestionSchema extends Schema {
  up () {
    this.create('questions', (table) => {
      table.increments()
      table.string('question').notNullable()
      table.string('text')
      table.string('file')
      table.integer('task_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('tasks')
      table.timestamps()
    })
  }

  down () {
    this.drop('questions')
  }
}

module.exports = QuestionSchema
