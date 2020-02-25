// This is just an example,
// so you can safely delete all default props below

export default {
  errorFilter: {
    user: {
      '404': 'User not found',
      '401': 'Incorrect password',
      '500': 'Internal error'
    }
  },
  welcome: {
    btn: 'Let\'s start'
  },
  access: {
    btn_register: 'Register',
    btn_login: 'Login',
    personal_data: {
      title: 'Personal data',
      name: 'Full name',
      nickname: 'Nickname',
      email: 'Email',
      password: 'Password',
      password_confirmation: 'Password confirmation',
      date_of_birth: 'Date of birth',
      btn: 'Next',
      errors: {
        required: 'Required field'
      }
    },
    choice_of_themes: {
      title: 'Choosing themes',
      search: 'Search theme...',
      info: 'Drag to the right to select the theme.',
      btn: 'Finalize registration',
      errors: {
        required: 'It is mandatory to choose at least one theme'
      }
    }
  },
  login: {
    title: 'Login',
    email: 'Email',
    password: 'Password',
    btn: 'Login',
    forgot: 'Forgot my password',
    errors: {
      required: 'Required field'
    }
  },
  forgot: {
    title: 'Forgot my password',
    info: 'Enter your registered email address in the application and you will receive a link to change your password.',
    email: 'Email',
    btn: 'Send email',
    back_to_login: 'Back to login screen',
    send_email: 'Email successfully sent!',
    errors: {
      required: 'Required field'
    }
  },
  reset: {
    title: 'Change my password',
    password: 'Password',
    password_confirmation: 'Password confirmation',
    btn: 'Change password',
    errors: {
      required: 'Required field',
      same: 'Password must be the same as above'
    }
  }
}
