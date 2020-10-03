'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsersSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments('id')
      table.string('name', 80).notNullable()
      table.string('avatar', 254).notNullable().defaultTo(`lis_avatarGenerator-${Math.random().toString(36).substr(2, 4)}.png`)
      table.string('nickname', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.date('date_of_birth').notNullable()
      table.enu('user_type', [1, 2, 3]).notNullable().defaultTo(2)
      table.integer('xp').notNullable().defaultTo(0)
      table.integer('money').notNullable().defaultTo(0)
      table.integer('nationality_id').unsigned().notNullable().references('id').inTable('nationalities')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UsersSchema
