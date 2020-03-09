// This is just an example,
// so you can safely delete all default props below

export default {
  errorFilter: {
    user: {
      '404': 'User not found',
      '401': 'Incorrect password',
      '500': 'Internal error'
    },
    nicknameCheck: {
      '204': 'This nickname is already in use',
      '404': 'User not found'
    },
    emailCheck: {
      '204': 'This email is already in use',
      '404': 'User not found'
    },
    selectThemes: 'Select at least one theme'
  },
  welcome: {
    btn: 'Let\'s start'
  },
  access: {
    btnRegister: 'Register',
    btnLogin: 'Login',
    personalData: {
      title: 'Personal data',
      name: 'Full name',
      nickname: 'Nickname',
      email: 'Email',
      password: 'Password',
      passwordConfirmation: 'Password confirmation',
      dateOfBirth: 'Date of birth',
      btn: 'Next',
      errors: {
        required: 'Required field'
      }
    },
    choiceOfThemes: {
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
    backToLogin: 'Back to login screen',
    sendEmail: 'Email successfully sent!',
    errors: {
      required: 'Required field'
    }
  },
  reset: {
    title: 'Change my password',
    password: 'Password',
    passwordConfirmation: 'Password confirmation',
    btn: 'Change password',
    errors: {
      required: 'Required field',
      same: 'Password must be the same as above'
    }
  },
  header: {
    home: 'Activities',
    store: 'Store',
    profile: 'Profile',
    hub: 'Friends Hub',
    settings: 'General adjustments'
  }
}
