'use strict'

const { test, trait } = use('Test/Suite')('Theme')
const User = use('App/Models/User');
const Theme = use('App/Models/Theme');

trait('Test/ApiClient');
trait('Auth/Client')

test('It should return theme data when theme created', async ({ assert, client }) => {
  const user = await User.find(1);
  const data = {
    name: 'Marvem comics',
    description: 'A Marvel Comics, anteriormente Marvel Comics Group, é uma editora norte-americana e mídias relacionadas. Hoje, a Marvel Comics é considerada uma das maiores editoras de histórias em quadrinhos do mundo. Em 2009, a The Walt Disney Company, adquiriu a Marvel Entertainment, a empresa mãe da Marvel.'
  }

  const response = await client
    .post('/theme')
    .loginVia(user, 'jwt')
    .send(data)
    .end()  

    response.assertStatus(201);
    assert.exists(response.body);
})

test('It should return theme data when theme updated', async ({ assert, client }) => {
  const user = await User.find(1);
  const theme = await Theme.find(1);
  const data = {
    name: 'DC comics',
    id: theme.id
  }

  const response = await client
    .put('/theme')
    .loginVia(user, 'jwt')
    .send(data)
    .end()

    response.assertStatus(200);
    assert.exists(response.body);
})

test('It should return theme list of the user', async ({ assert, client }) => {
  const user = await User.find(2);

  const response = await client
    .get('/theme')
    .loginVia(user, 'jwt')
    .end()

    response.assertStatus(200);
    assert.isArray(response.body);
})

test('It should return 200 status code when theme deleted', async ({ assert, client }) => {
  const user = await User.find(1);
  const theme = await Theme.find(1);
  const data = { id: theme.id };

  const response = await client
    .delete('/theme')
    .loginVia(user, 'jwt')
    .send(data)
    .end()

    response.assertStatus(204);
    assert.exists(response.body);
})
