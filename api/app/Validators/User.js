'use strict'

class User {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      email: 'email|required',
      password: 'required|min:8'
    }
  }

  get messages() {
    return {
      required: 'Make sure to enter the field value',
      email: 'Please enter a valid email address',
      'password.min': 'Password is too short'
    }
  }

  async fails(errorMessages) {
    return this.ctx.response.send(errorMessages.map(item => {
      const error = {};
      error[item.field] = item.message;
      return error;
    }));
  }
}

module.exports = User
