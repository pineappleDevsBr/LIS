'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TaskTypeSchema extends Schema {
  up () {
    this.create('task_types', (table) => {
      table.increments('id')
      table.string('name', 80).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('task_types')
  }
}

module.exports = TaskTypeSchema
