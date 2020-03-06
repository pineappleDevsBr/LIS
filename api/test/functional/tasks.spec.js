'use strict'

const { test, trait } = use('Test/Suite')('Tasks')
const User = use('App/Models/User')

trait('Test/ApiClient');
trait('Auth/Client')

test('It should return tasks of the user', async ({ assert, client }) => {
  const user = await User.findBy('email', 'leandro@lis.com');

  const response = await client
    .get('/api/v1/task')
    .loginVia(user, 'jwt')
    .end()

    response.assertStatus(200);
    assert.isArray(response.body);
})
