'use strict'

const { test, trait } = use('Test/Suite')('Auth');
trait('Test/ApiClient');

test('It should return JWT token when session created', async ({ assert, client }) => {
  const user_data = {
    email: 'leandro@lis.com',
    password: 'Secret123'
  }

  const response = await client
    .post('/api/v1/login')
    .send(user_data)
    .end()

    response.assertStatus(200);
    assert.exists(response.body.token);
})
