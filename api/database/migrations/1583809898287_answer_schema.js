'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnswerSchema extends Schema {
  up () {
    this.create('answers', (table) => {
      table.increments()
      table.string('answer')
      table.boolean('right')
      table.integer('question_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('tasks')
      table.timestamps()
    })
  }

  down () {
    this.drop('answers')
  }
}

module.exports = AnswerSchema
