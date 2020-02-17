'use strict'
const Hash = use('Hash')
const User = use('App/Models/User');

class AdminController {
  async store({ request, auth, response, session }) {
    const { email, password, remember } = request.only([
      'email', 'password'
    ])

    try {
      const user = await User.findByOrFail('email', email);
      const hash = await Hash.verify(password, user.password);

      if (hash && user.user_type == 1) {
        const resp = await auth.authenticator('session')
          .remember(remember)
          .login(user);
        response.route('admin', false)
      }
    } catch (err) {
      response.redirect('admin.login', false)
    }
  }
}

module.exports = AdminController
