'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TutorialsSchema extends Schema {
  up () {
    this.create('tutorials', (table) => {
      table.increments('id')
      table.string('name', 80).notNullable()
      table.string('link', 254).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('tutorials')
  }
}

module.exports = TutorialsSchema
