'use strict'

const Mail = use('Mail');
const Hash = use('Hash');
const Env = use('Env');
const User = use('App/Models/User');

class ForgotPasswordController {
  async store({ request, response }) {
    const { email } = request.all();
    try {
      const user = await User.findByOrFail('email', email);
      const hash = await Hash.make(email);

      await user.tokens().create({
        token: hash,
        type: 'forgotpassword'
      });

      const resetPassword = `${Env.get('FRONT_URL')}reset?token=${hash}`;

      await Mail.send('emails.forgot', { name: user.name, resetPassword }, (message) => {
        message
          .to(user.email)
          .from('suporte@pineappledevs.com')
          .subject('LIS - Recuperação de senha')
      })

    } catch (err) {
      response.send(err)
    }
  }
}

module.exports = ForgotPasswordController
