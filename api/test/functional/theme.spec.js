'use strict'

const { test, trait } = use('Test/Suite')('Theme')
const User = use('App/Models/User');
const Theme = use('App/Models/Theme');

trait('Test/ApiClient');
trait('Auth/Client')


test('It should return theme list of the user', async ({ assert, client }) => {
  const user = await User.find(2);

  const response = await client
    .get('/theme/all')
    .loginVia(user, 'jwt')
    .end()

    response.assertStatus(200);
    assert.isArray(response.body);
});

