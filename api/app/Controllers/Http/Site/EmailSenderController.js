'use strict'
const UserState = use('App/Base/UserState');

class EmailSenderController {
  index({ view }) {
    return view.render('pages.emailSender.index');
  }

  get({ view, params }) {
    const pages = ['common', 'newsletter', 'updates']
    const { template } = params;
    return view.render(
      `pages.emailSender.${pages.includes(template) ? `store.${template}` : 'index'}`,
      { targets: Object.entries(UserState), template },
    )
  }
}

module.exports = EmailSenderController
