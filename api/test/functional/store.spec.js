'use strict'

const { test, trait } = use('Test/Suite')('Store');
const User = use('App/Models/User');

trait('Test/ApiClient');
trait('Auth/Client');

async function getUser() {
 return await User.findBy('email', 'leandro@lis.com');
}

test('It should return all items of store', async ({ assert, client }) => {
  const user = await getUser();

  const response = await client
    .get('/api/v1/items/all')
    .loginVia(user, 'jwt')
    .end()

    response.assertStatus(200);
    assert.isArray(response.body);
})

test('It should return user items', async ({ assert, client }) => {
  const user = await getUser();

  const response = await client
    .get('/api/v1/items/all')
    .loginVia(user, 'jwt')
    .end()

    assert.isArray(response.body);
})
