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

Factory.blueprint('App/Models/ThemeList', async (faker, i) => {
  return {
    user_id: i.user_id,
    theme_id: i.theme_id,
  }
})

Factory.blueprint('App/Models/Theme', async (faker) => {
  return {
    name: faker.first(),
    description: faker.sentence({ words: 10 })
  }
})

Factory.blueprint('App/Models/FriendList', async (faker, i) => {
  return {
    user_one_id: i.one,
    user_two_id: i.two,
    user_action_id: i.one,
  }
})

Factory.blueprint('App/Models/Nationality', async (faker, i) => {
  return {
    name: i.country || faker.country(),
    file: i.file || faker.first(),
  }
})

Factory.blueprint('App/Models/TaskType', async (faker, i, data) => {
  return {
    name: data || faker.word()
  }
})

Factory.blueprint('App/Models/User', async (faker, i) => {
  return {
    name: faker.name(),
    nickname: faker.username(),
    email: faker.email(),
    password: faker.password(),
    date_of_birth: new Date(),
    ...i
  }
})

Factory.blueprint('App/Models/Task', async (faker, i, data) => {
  return {
    name: faker.name(),
    title: faker.username(),
    task_type_id: data.type,
    theme_id: data.theme
  }
})

Factory.blueprint('App/Models/Question', async (faker, i, data) => {
  return {
    question: faker.username(),
    text: faker.name(),
    ...data
  }
})