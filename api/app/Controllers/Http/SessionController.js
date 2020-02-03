'use strict'
const User = use('App/Models/User');
const Hash = use('Hash')

class SessionController {
  async store({ request, response, auth }) {
    const { email, password } = request.only([
      'email',
      'password'
    ]);

    try {
      const data = await User.findBy('email', email);
      const hash = await Hash.verify(password, data.password);

      if (data && hash) {
        return await auth.attempt(email, password);
      } else if (data) {
        response.status(401).send('Invalid password');
      } else {
        response.status(404).send('User not finded');
      }
    } catch (err) {
      response.send(err)
    }
  }
}

module.exports = SessionController
