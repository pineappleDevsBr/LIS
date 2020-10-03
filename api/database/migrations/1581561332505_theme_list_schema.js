'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ThemeListSchema extends Schema {
  up () {
    this.create('theme_lists', (table) => {
      table.increments('id')
      table.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.integer('theme_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('themes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('theme_lists')
  }
}

module.exports = ThemeListSchema
