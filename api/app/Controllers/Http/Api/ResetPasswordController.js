'use strict'

const Token = use('App/Models/Token');

class ResetPasswordController {
  async store({ request, response }) {
    const { token, password } = request.all();

    try {
      const userToken = await Token.findByOrFail('token', token);
      const user = await userToken.user().fetch();

      user.password = password;
      await user.save();
    } catch(err) {
      response.send(err);
    }
  }
}

module.exports = ResetPasswordController
