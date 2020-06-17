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
      sixCharacters: 'Use a password of six or more characters',
      btn: 'Next',
      errors: {
        required: 'Required field',
        minLength: 'The password field must contain at least six characters',
        sameAs: 'Passwords are not the same'
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
    access: 'Create an account',
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
  },
  store: {
    title: 'Level up faster with our items!',
    myItems: 'My items',
    availableItems: 'Available items'
  },
  profile: {
    editData: 'Click here to edit your data',
    settings: {
      header: 'Settings',
      account: 'Account',
      avatar: 'Profile image:',
      name: 'Name:',
      nickname: 'Nickname:',
      password: 'Password:',
      notifications: 'Email notification',
      update: 'Updates',
      changeData: 'Changing your email and/or password',
      about: 'About us',
      terms: 'Terms of use and privacy',
      credits: 'Media credits',
      save: 'Save all changes',
      changeAccount: 'Switch account'
    },
    terms: {
      header: 'Usage policy and privacy',
      terms: 'Terms of use',
      copy: 'Copyright'
    },
    credits: {
      header: 'Credits',
      text: 'LIS is an open souce project in which it uses as a large part of its media, external sources reproduced by artists not connected to us. Therefore, we have a duty to quote them on our platform with credits to their work, for your indirect support for app development.',
      icons: 'Icons',
      vectors: 'Vectors'
    }
  },
  hub: {
    title: 'Discover new friends! Learning together is more fun!',
    search: 'Search friends',
    invitation: 'Invite a friend',
    requests: 'Friendship request',
    myFriends: 'My friends'
  },
  generalAdjustments: {
    title: 'Leave your studies to your face!',
    updateThemes: 'Update my themes',
    lang: 'Language',
    darkMode: 'Dark mode',
    highContrast: 'High contrast',
    themes: {
      header: 'Themes',
      myThemes: 'My themes',
      availableThemes: 'Available themes',
      save: 'Save changes'
    }
  }
}
