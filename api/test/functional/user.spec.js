'use strict'

const { test, trait } = use('Test/Suite')('User');

trait('Test/ApiClient');

test('It should return user data when user created', async ({ assert, client }) => {
  const user_data = {
    name: 'Lorem ipsum da Silva',
    nickname: 'dark_lorem',
    email: 'loremlorem@lis.com',
    password: 'Lorem123',
    date_of_birth: '1999-10-10',
    nationality_id: 1,
    themes: [ 1, 2 ]
  }

  const response = await client
    .post('/api/v1/user')
    .send(user_data)
    .end();

  response.assertStatus(201)
  assert.exists(response.body.data, response.body.theme_data);
}).timeout(60000)

