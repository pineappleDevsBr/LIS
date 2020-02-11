'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FriendListSchema extends Schema {
  up () {
    this.create('friend_lists', (table) => {
      table.increments('id')
      table.integer('user_one_id').unsigned().notNullable().references('id').inTable('users')
      table.integer('user_two_id').unsigned().notNullable().references('id').inTable('users')
      table.integer('user_action_id').unsigned().notNullable().references('id').inTable('users')
      table.timestamps()
    })
  }

  down () {
    this.drop('friend_lists')
  }
}

module.exports = FriendListSchema
