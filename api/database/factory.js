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

Factory.blueprint('App/Models/FriendList', async (faker, i) => {
  return {
    user_one_id: i.one,
    user_two_id: i.two,
    user_action_id: i.one,
  }
})

Factory.blueprint('App/Models/Nationality', async (faker, i) => {
  return {
    name: i.country || aker.country(),
    file: i.file || faker.first(),
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
