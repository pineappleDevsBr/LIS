'use strict'

class Email {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      'payload.title': 'required',
    }
  }

  get messages() {
    return {
      required: 'Make sure to enter the field value'
    }
  }

  async fails(errorMessages) {
    const error = {};
    errorMessages.map(item => {
      error[item.field] = item.message;
    });

    console.log(error);

    this.ctx.session.flash(error);
    this.ctx.response.redirect('back');
  }
}

module.exports = Email
