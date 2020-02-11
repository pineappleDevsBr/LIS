'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NationalitiesSchema extends Schema {
  up () {
    this.create('nationalities', (table) => {
      table.increments('id')
      table.string('name', 80).notNullable().unique()
      table.string('file', 80).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('nationalities')
  }
}

module.exports = NationalitiesSchema
