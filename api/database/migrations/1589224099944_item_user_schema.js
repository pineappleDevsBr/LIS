'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ItemUserSchema extends Schema {
  up () {
    this.create('item_users', (table) => {
      table.increments()
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users')
      table.integer('item_id').unsigned().notNullable().references('id').inTable('items')
      table.boolean('active').notNullable().defaultTo(false)
      table.datetime('active_time')
      table.timestamps()
    })
  }

  down () {
    this.drop('item_users')
  }
}

module.exports = ItemUserSchema
