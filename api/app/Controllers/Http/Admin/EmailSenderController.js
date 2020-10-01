'use strict'
const Mail = use('Mail');
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
      return view.render('pages.emailSender.index');
    } catch (error) {
      console.log(error);
      session.flash({ success: false })
      return response.redirect('back');
    }
  }
}

module.exports = EmailSenderController
