'use strict'

const { test, trait } = use('Test/Suite')('Theme')
const User = use('App/Models/User');
const Theme = use('App/Models/Theme');

trait('Test/ApiClient');
trait('Auth/Client')


test('It should return theme list of the user', async ({ assert, client }) => {
  const user = await User.findBy('email', 'leandro@lis.com');

  const response = await client
    .get('/api/v1/user/theme')
    .loginVia(user, 'jwt')
    .end()

  assert.isArray(response.body);
});

