'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsersSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments('id')
      table.string('nickname', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.date('date_of_birth').notNullable()
      table.enu('user_type', [1, 2]).notNullable().defaultTo(2)
      table.integer('xp').notNullable().defaultTo(0)
      table.integer('nationality_id').unsigned().notNullable().references('id').inTable('nationalities')
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UsersSchema
