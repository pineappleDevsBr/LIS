// This is just an example,
// so you can safely delete all default props below

export default {
  pattern: {
    lower: 'The password must have: Lower case',
    upper: 'The password must have: Upper case',
    number: 'The password must have: Number',
    min: 'The password must have: A length of at least six characters'
  },
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
      info: 'Choose the themes below.',
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
  blocked: {
    title: 'Bad news!',
    text: 'Unfortunately your access was blocked by the administrator!',
    contact: 'Get in touch with him at <a href="mailto:admin@lis.com" target="_blank" class="a-link -primary -text-decoration"> admin@lis.com </a> to find out what happened and have your access cleared again.',
    thanks: 'Thank you for understanding!'
  },
  header: {
    home: 'Activities',
    store: 'Store',
    profile: 'Profile',
    hub: 'Friends Hub',
    settings: 'General adjustments',
    level: 'Level',
    nextLevel: 'Next level'
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
    taskDisabled: 'Level up to answer that question!',
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
    myItems: {
      title: 'My items',
      use: 'USE',
      inUse: 'IN USE'
    },
    availableItems: 'Available items',
    confirmUseItem: 'Do you really want to use this item?',
    insufficientCurrencies: 'Insufficient currencies!',
    activatedItem: 'Activated item!',
    errorActivating: 'An error occurred while activating the item, please try again or contact technical support.',
    gift: 'Gift sent successfully!',
    buy: {
      price: 'Price',
      units: 'Units',
      total: 'Total',
      cancel: 'Cancel',
      buy: 'Buy'
    }
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
      changeAvatar: {
        title: 'Generate random avatars!',
        new: 'Generate new avatar',
        choice: 'Choose this'
      },
      name: 'Name:',
      nickname: 'Nickname:',
      password: 'Password:',
      changePassword: {
        current: 'Current password',
        new: 'New password',
        confirm: 'Confirm new password',
        change: 'Change Password',
        cancel: 'Cancel',
        incorrectPassword: 'Your current password is incorrect! Try again!'
      },
      notifications: 'Email notification',
      update: 'Updates',
      changeData: 'Changing your email and/or password',
      about: 'About us',
      terms: 'Terms of use and privacy',
      credits: 'Media credits',
      save: 'Save all changes',
      changeAccount: 'Switch account',
      tutorials: 'Tutorials',
      close: 'Do you really want to close the settings? <br> You will lose the changes already made!'
    },
    tutorials: {
      title: 'Tutorials'
    },
    terms: {
      header: 'Privacy and use policy',
      privacyPolicy: 'Privacy policy',
      privacyText1: 'Your privacy is important to us. It is PineappleDevs\' policy to respect your privacy with respect to any information about you that we may collect on PineappleDevs, and other sites that we own and operate.',
      privacyText2: 'We ask for personal information only when we really need it to provide you with a service. We do so by fair and legal means, with your knowledge and consent. We also inform you why we are collecting it and how it will be used.',
      privacyText3: 'We only retain the information collected for as long as necessary to provide the requested service. When we store data, we protect it within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.',
      privacyText4: 'We do not share personally identifiable information publicly or with third parties except as required by law.',
      privacyText5: 'Our site may have links to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites and cannot accept responsibility for their respective privacy policies.',
      privacyText6: 'You are free to decline our request for personal information, understanding that we may not be able to provide some of the services you want.',
      privacyText7: 'Your continued use of our website will be considered acceptance of our privacy and personal information practices. If you have any questions about how we handle user data and personal information, please contact us.',
      cookiesPolicy: 'PineappleDevs Cookies Policy',
      cookiesTitle1: 'What are Cookies?',
      cookiesTitle2: 'How do we use cookies?',
      cookiesTitle3: 'Disable cookies',
      cookiesTitle4: 'Cookies we set',
      cookiesTitle5: 'Third Party Cookies',
      cookiesTitle6: 'More information',
      cookiesText1: 'As is common practice in almost all professional websites, this site uses cookies, which are small files downloaded to your computer, to improve your experience. This page describes what information they collect, how we use it, and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored, however, this may downgrade or "break" certain elements of the site\'s functionality.',
      cookiesText2: 'We use cookies for several reasons, detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave all cookies if you are unsure whether or not you need them if they are used to provide a service that you use.',
      cookiesText3: 'You can prevent cookies from being set by adjusting your browser settings (see your browser\'s Help on how to do this). Be aware that disabling cookies will affect the functionality of this and many other sites you visit. Disabling cookies will generally result in the deactivation of certain features and functionality of this website. Therefore, we recommend that you do not disable cookies.',
      cookiesText4: 'Account related Cookies',
      cookiesText5: 'If you create an account with us, we will use cookies for the management of the registration process and general administration. These cookies will generally be deleted when you log out, but in some cases they may remain later to remember your site preferences when you log out.',
      cookiesText6: 'Login related Cookies',
      cookiesText7: 'We use cookies when you are logged in, so we can remember this action. This prevents you from having to login every time you visit a new page. These cookies are usually removed or cleared when you log out to ensure that you can only access features and restricted areas when you log in.',
      cookiesText8: 'Email related newsletter cookies',
      cookiesText9: 'This site offers newsletter or e-mail subscription services and cookies can be used to remember if you are already registered and if you should show certain valid notifications only for registered / unsubscribed users.',
      cookiesText10: 'Orders processing related cookies',
      cookiesText11: 'This site offers e-commerce or payment facilities and some cookies are essential to ensure that your order is remembered between pages so that we can process it properly.',
      cookiesText12: 'Search related Cookies',
      cookiesText13: 'Periodically, we offer surveys and questionnaires to provide interesting information, useful tools or to understand our user base more accurately. These surveys may use cookies to remember who has participated in a survey or to provide accurate results after pages have changed.',
      cookiesText14: 'Form related Cookies',
      cookiesText15: 'When you send data via a form such as those found on contact pages or comment forms, cookies can be set to remember user details for future correspondence.',
      cookiesText16: 'Site preferences cookies',
      cookiesText17: 'To provide a great experience on this site, we provide the functionality to set your preferences on how this site runs when you use it. To remember your preferences, we need to set cookies so that this information can be called whenever you interact with a page that is affected by your preferences.',
      cookiesText18: 'In some special cases, we also use cookies provided by trusted third parties. The following section details which third party cookies you may encounter through this website.',
      cookiesText19: 'This website uses Google Analytics, which is one of the most widespread and reliable analysis solutions on the web, to help us understand how you use the site and how we can improve your experience. These cookies can track items such as how much time you spend on the site and the pages you visit, so that we can continue to produce compelling content.',
      cookiesText20: 'For more information about Google Analytics cookies, please see the official Google Analytics page.',
      cookiesText21: 'Third party analyses are used to track and measure the use of this site so that we can continue to produce attractive content. These cookies can track items such as the time you spend on the site or the pages you visit, which helps us understand how we can improve the site for you.',
      cookiesText22: 'Periodically, we test new features and make subtle changes to the way the site presents itself. When we are still testing new features, these cookies can be used to ensure that you receive a consistent experience while on the site, while understanding what optimizations our users appreciate most.',
      cookiesText23: 'As we sell products, it is important that we understand the statistics about how many visitors to our site actually buy and therefore this is the kind of data that these cookies will track. This is important to you because it means that we can make accurate business forecasts that allow us to analyze our advertising and product costs to ensure the best possible price.',
      cookiesText24: 'Hopefully it is clear and, as mentioned above, if there is something you are not sure whether you need or not, it is usually safer to leave cookies enabled if you interact with one of the features you use on our site.',
      cookiesText25: 'This policy is effective from',
      cookiesText26: 'September/2020'
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
    request: 'Request friendship',
    requestSuccessfully: 'Request sent successfully!',
    requestError: 'There was an error making the request, please try again later!'
  },
  hub: {
    title: 'Discover new friends! Learning together is more fun!',
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
    },
    search: {
      title: 'Search friends',
      input: 'Search by name or email',
      friends: 'Friends found',
      level: 'Level',
      profile: 'View profile',
      loadMore: 'Load more friends',
      viewAll: 'Show all'
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
      save: 'Save changes',
      min: 'You must select at least one theme!',
      updateSuccessfull: 'Your themes have been updated!'
    }
  },
  dlg: {
    yes: 'Yes',
    no: 'No',
    change: 'Change',
    cancel: 'Cancel'
  }
}
