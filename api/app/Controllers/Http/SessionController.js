'use strict'

class SessionController {
  async store({ request, response, auth }) {
    const { email, password } = request.only([
      'email',
      'password'
    ]);

    return { token } = await auth.attempt(email, password);
  }
}

module.exports = SessionController
