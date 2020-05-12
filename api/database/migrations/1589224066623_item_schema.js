'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ItemSchema extends Schema {
  up () {
    this.create('items', (table) => {
      table.increments()
      table.string('name', 40).notNullable()
      table.integer('multiplier').defaultTo(0);
      table.integer('price').notNullable().defaultTo(0)
      table.integer('active_time')
      table.integer('item_type_id').unsigned().references('id').inTable('item_types')
      table.timestamps()
    })
  }

  down () {
    this.drop('items')
  }
}

module.exports = ItemSchema
