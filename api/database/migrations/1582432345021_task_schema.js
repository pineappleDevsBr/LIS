'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TaskSchema extends Schema {
  up () {
    this.create('tasks', (table) => {
      table.increments('id')
      table.string('name', 80).notNullable()
      table.string('title').notNullable().unique()
      table.integer('xp').notNullable().defaultTo(0)
      table.integer('money').notNullable().defaultTo(0)
      table.integer('difficulty').notNullable().defaultTo(1)
      table.integer('task_type_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('task_types')
      table.integer('theme_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('themes')
      table.timestamps()
    })
  }

  down () {
    this.drop('tasks')
  }
}

module.exports = TaskSchema
