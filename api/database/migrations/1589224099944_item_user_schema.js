'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ItemUserSchema extends Schema {
  up () {
    this.create('item_users', (table) => {
      table.increments()
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')
      table.integer('item_id').unsigned().notNullable().references('id').inTable('items').onUpdate('CASCADE').onDelete('CASCADE')
      table.enu('status', ['inactivated', 'activated', 'used']).notNullable().defaultTo('inactivated')
      table.datetime('endtime')
      table.timestamps()
    })
  }

  down () {
    this.drop('item_users')
  }
}

module.exports = ItemUserSchema
