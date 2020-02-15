'use strict'

const { test, trait } = use('Test/Suite')('User');
const Factory = use('Factory');
const Nationality = use('App/Models/Nationality');

trait('Test/ApiClient');

test('It should return user data when user created', async ({ assert, client }) => {
  await Factory.model('App/Models/Nationality').create();
  await Factory.model('App/Models/Theme').createMany(3);
  const nat_1 = await Nationality.find(1);
  const user_data = {
    name: 'Lorem ipsum da Silva',
    nickname: 'dark_lorem',
    email: 'lorem@lis.com',
    password: 'lorem123',
    date_of_birth: new Date(),
    nationality_id: nat_1.id,
    themes: [ 1,2,3 ]
  }

  const response = await client
    .post('/user')
    .send(user_data)
    .end();

  response.assertStatus(201)
  assert.exists(response.body.data, response.body.theme_data);
})

