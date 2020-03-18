'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnswerSchema extends Schema {
  up () {
    this.create('answers', (table) => {
      table.increments()
      table.string('answer')
      table.boolean('right').defaultTo(null)
      table.integer('question_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('questions')
      table.timestamps()
    })
  }

  down () {
    this.drop('answers')
  }
}

module.exports = AnswerSchema
