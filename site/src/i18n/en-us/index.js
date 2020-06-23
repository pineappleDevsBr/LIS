// This is just an example,
// so you can safely delete all default props below

export default {
  errorFilter: {
    page404: 'Oops! it seems that your studies had a little deviation, let\'s go back to the home screen for you to continue where you left off.',
    page404Btn: 'Back',
    withoutInternet: {
      title: 'Without Internet',
      text: 'You are disconnected! Connect again to get back to studies!'
    },
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
      dateFormat: 'MM/DD/YYYY',
      myLocale: {
        days: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday',
        daysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat',
        months: 'January_February_March_April_May_June_July_August_September_October_November_December',
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'
      },
      sixCharacters: 'Use a password of six or more characters',
      strongPassword: 'Strong password: use at least 6 characters, uppercase, lowercase and number.',
      btn: 'Next',
      registeredSuccessfully: 'User successfully registered!',
      errors: {
        required: 'Required field',
        minLength: 'The password field must contain at least six characters',
        notStrong: 'Does not meet the requirements for a strong password',
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
  activities: {
    quiz: 'Quiz',
    listening: 'Tell me what you heard',
    complete: 'Complete the sentence',
    reading: 'Reading',
    common: {
      enterAnswer: 'Type your answer here',
      finish: 'Finish',
      next: 'Next',
      back: 'Back',
      titleModal: 'Do you really want to abandon this activity?<br>Your answers and rewards will be lost.',
      selectAnswer: 'Select an answer!',
      answerEmpty: 'The answer cannot be empty!',
      translate: 'Translate',
      readAnother: 'Read another text',
      seconds: 'seconds',
      minutes: 'minute(s)',
      wait: 'Wait',
      wait2: 'to read another text'
    },
    feedback: {
      checkAnswers: 'Check your answers!',
      checkAwards: 'Check your prizes for completing the activity!',
      approved: 'Approved',
      disapproved: 'Disapproved',
      bonus: 'Bonus',
      close: 'Close',
      remake: 'Remake'
    }
  },
  themeFilter: {
    empty: 'Unfortunately there are still no activities of this type on this topic, but soon the team will register!'
  },
  tutorial: {
    title: 'Hello, welcome to LIS!',
    text: 'Before I start I would like to know if you want to watch the tutorial videos now.',
    accessIn: 'If you prefer, you can access the same videos in Profile > Click here to edit your data > Tutorials.',
    goodStudies: 'Good studies!',
    repeatShowTutorial: 'Don\'t show again',
    watchNow: 'Watch Now',
    watchLater: 'Watch later'
  },
  store: {
    title: 'Level up faster with our items!',
    myItems: 'My items',
    availableItems: 'Available items',
    confirmUseItem: 'Do you really want to use this item?',
    insufficientCurrencies: 'Insufficient currencies!',
    activatedItem: 'Activated item!',
    errorActivating: 'An error occurred while activating the item, please try again or contact technical support.',
    gift: 'Gift sent successfully!'
  },
  profile: {
    editData: 'Click here to edit your data',
    notifications: {
      title: 'Notifications',
      text: 'You have no notifications!'
    },
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
  profileFriends: {
    level: 'Level',
    friends: 'Friends',
    requestSuccessfully: 'Request sent successfully!',
    requestError: 'There was an error making the request, please try again later!'
  },
  hub: {
    title: 'Discover new friends! Learning together is more fun!',
    search: 'Search friends',
    invitation: 'Invite a friend',
    requests: 'Friendship request',
    myFriends: 'My friends',
    level: 'Level',
    invite: {
      title: 'Invite your friends who already have an account!',
      text: 'Click the link to copy the invitation below and send it to your friend!',
      obs: 'He must be logged in to access his profile!',
      alert: 'Link copied to the clipboard!',
      invitation: 'Invitation',
      notify: {
        confirmed1: 'Now',
        confirmed2: 'is your friend!',
        pending: 'has been removed from the request list!',
        error1: 'An error occurred while',
        error2: 'accept',
        error3: 'refuse',
        error4: 'the friendship!'
      }
    }
  },
  generalAdjustments: {
    title: 'Leave your studies to your face!',
    updateThemes: 'Update my themes',
    lang: 'Language',
    useItems: 'Confirmation of use of store items',
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
