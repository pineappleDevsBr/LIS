'use strict'
const Mail = use('Mail');
const Logger = use('Logger');
const UserRespository = use('App/Repositories/UserRepository');

class EmailSenderController {
  async store({ view, session, request, response }) {
    const {
      payload,
      target,
      subject,
      template,
    } = request.all();
    const users = (await UserRespository.findByType(target)).toJSON();

    try {
      await Mail.send(`emails.${template}`, payload, (message) => {
        message
          .from('suporte@pineappledevs.com')
          .to(users.map(user => user.email).join())
          .subject(subject)
      })

      session.flash({ success: true });
    } catch (error) {
      Logger.info('EmailSender', error);
      session.flash({ success: true, error })
    }
    finally {
      return view.render('pages.emailSender.index');
    }
  }
}

module.exports = EmailSenderController
