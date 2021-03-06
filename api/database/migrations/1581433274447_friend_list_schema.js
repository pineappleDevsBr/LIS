'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FriendListSchema extends Schema {
  up () {
    this.create('friend_lists', (table) => {
      table.increments('id')
      table.integer('user_one_id').unsigned().notNullable().references('id').inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.integer('user_two_id').unsigned().notNullable().references('id').inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.integer('user_action_id').unsigned().notNullable().references('id').inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.unique(['user_one_id', 'user_two_id'])
      table.enu('status', ['pending', 'confirmed']).notNullable().defaultTo('pending')
      table.timestamps()
    })
  }

  down () {
    this.drop('friend_lists')
  }
}

module.exports = FriendListSchema
