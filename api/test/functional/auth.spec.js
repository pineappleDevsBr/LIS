'use strict'

const { test, trait } = use('Test/Suite')('Auth');
const Factory = use('Factory');

trait('Test/ApiClient');

test('It should return JWT token when session created', async ({ assert, client }) => {
  const user_data = {
    email: 'admin@lis.com',
    password: 'admin123',
    nationality_id: 1
  }

  await Factory.model('App/Models/User').create(user_data);

  const response = await client
    .post('/login')
    .send(user_data)
    .end()

    response.assertStatus(200);
    assert.exists(response.body.token);
})
