'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('App/Models/Nationality', async (faker) => {
  return {
    name: faker.country(),
    file: faker.email(),
  }
})

Factory.blueprint('App/Models/User', async (faker) => {
  return {
    nickname: faker.username(),
    email: faker.email(),
    password: faker.password(),
    date_of_birth: new Date()
  }
})
