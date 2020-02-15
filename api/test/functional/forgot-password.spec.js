'use strict'

const { test, trait, beforeEach, afterEach } = use('Test/Suite')('Forgot Password');
const Factory = use('Factory');
const Mail = use('Mail');
const Hash = use('Hash');
const Nationality = use('App/Models/Nationality');
const User = use('App/Models/User');

trait('Test/ApiClient');
trait('DatabaseTransactions');

beforeEach(() => Mail.fake());
afterEach(() => Mail.restore());

async function generateForgotPasswordToken(client, email) {
  await Factory.model('App/Models/Nationality').create();
  const nat_1 = await Nationality.query().first();
  const forgot_payload = {
    email,
    nationality_id: nat_1.id
  }

  const user = await Factory
    .model('App/Models/User')
    .create(0, forgot_payload);
  

  await client
    .post('/forgot')
    .send(forgot_payload)
    .end();

    return await user.tokens().first();
}

test('It should send an email with reset password instructions', async ({ assert, client }) => {
  const email = 'lorem@lis.com';
  const token = await generateForgotPasswordToken(client, email);
  const recentEmail = Mail.pullRecent();

  assert.equal(recentEmail.message.to[0].address, email);
  assert.include(token.toJSON(), {
    type: 'forgotpassword'
  })
})

test('It should be able to reset password', async ({ assert, client }) => {
  const email = 'lorem@lis.com';
  const token = await generateForgotPasswordToken(client, email);
  const payload = {
    token: token.token,
    password: '123456',
    password_confirmation: '123456'
  }
  

  await client
    .post('/reset')
    .send(payload)
    .end()

  const user = await User.findBy('email', email);  
  const passwordVerify = await Hash.verify(payload.password, user.password);
  assert.isTrue(passwordVerify);
})