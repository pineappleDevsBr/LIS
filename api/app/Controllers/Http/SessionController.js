'use strict'
const User = use('App/Models/User');

class SessionController {
  async store({ request, response, auth }) {
    const { email, password } = request.only([
      'email',
      'password'
    ]);
    
    try {
      const data = await User.findBy('email', email);

      if (data && data.password === password) {
        return { token } = await auth.attempt(email, password);
      } else if (data) {
        response.status(401).send('Invalid password');
      } else {
        response.send('User not finded');
      }
    } catch (err) {
      response.send(err)
    }
  }
}

module.exports = SessionController
