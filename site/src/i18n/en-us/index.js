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
      privacyText1: 'A sua privacidade é importante para nós. É política do PineappleDevs respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site PineappleDevs, e outros sites que possuímos e operamos.',
      privacyText2: 'Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.',
      privacyText3: 'Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.',
      privacyText4: 'Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.',
      privacyText5: 'O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.',
      privacyText6: 'Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.',
      privacyText7: 'O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto connosco.',
      cookiesPolicy: 'PineappleDevs Cookies Policy',
      cookiesTitle1: 'What are Cookies?',
      cookiesTitle2: 'How do we use cookies?',
      cookiesTitle3: 'Disable cookies',
      cookiesTitle4: 'Cookies we set',
      cookiesTitle5: 'Third Party Cookies',
      cookiesTitle6: 'More information',
      cookiesText1: 'Como é prática comum em quase todos os sites profissionais, este site usa cookies, que são pequenos arquivos baixados no seu computador, para melhorar sua experiência. Esta página descreve quais informações eles coletam, como as usamos e por que às vezes precisamos armazenar esses cookies. Também compartilharemos como você pode impedir que esses cookies sejam armazenados, no entanto, isso pode fazer o downgrade ou "quebrar" certos elementos da funcionalidade do site.',
      cookiesText2: 'Utilizamos cookies por vários motivos, detalhados abaixo. Infelizmente, na maioria dos casos, não existem opções padrão do setor para desativar os cookies sem desativar completamente a funcionalidade e os recursos que eles adicionam a este site. É recomendável que você deixe todos os cookies se não tiver certeza se precisa ou não deles, caso sejam usados para fornecer um serviço que você usa.',
      cookiesText3: 'Você pode impedir a configuração de cookies ajustando as configurações do seu navegador (consulte a Ajuda do navegador para saber como fazer isso). Esteja ciente de que a desativação de cookies afetará a funcionalidade deste e de muitos outros sites que você visita. A desativação de cookies geralmente resultará na desativação de determinadas funcionalidades e recursos deste site. Portanto, é recomendável que você não desative os cookies.',
      cookiesText4: 'Account related Cookies',
      cookiesText5: 'Se você criar uma conta connosco, usaremos cookies para o gerenciamento do processo de inscrição e administração geral. Esses cookies geralmente serão excluídos quando você sair do sistema, porém, em alguns casos, eles poderão permanecer posteriormente para lembrar as preferências do seu site ao sair.',
      cookiesText6: 'Login related Cookies',
      cookiesText7: 'Utilizamos cookies quando você está logado, para que possamos lembrar dessa ação. Isso evita que você precise fazer login sempre que visitar uma nova página. Esses cookies são normalmente removidos ou limpos quando você efetua logout para garantir que você possa acessar apenas a recursos e áreas restritas ao efetuar login.',
      cookiesText8: 'Email related newsletter cookies',
      cookiesText9: 'Este site oferece serviços de assinatura de boletim informativo ou e-mail e os cookies podem ser usados para lembrar se você já está registrado e se deve mostrar determinadas notificações válidas apenas para usuários inscritos / não inscritos.',
      cookiesText10: 'Orders processing related cookies',
      cookiesText11: 'Este site oferece facilidades de comércio eletrônico ou pagamento e alguns cookies são essenciais para garantir que seu pedido seja lembrado entre as páginas, para que possamos processá-lo adequadamente.',
      cookiesText12: 'Search related Cookies',
      cookiesText13: 'Periodicamente, oferecemos pesquisas e questionários para fornecer informações interessantes, ferramentas úteis ou para entender nossa base de usuários com mais precisão. Essas pesquisas podem usar cookies para lembrar quem já participou numa pesquisa ou para fornecer resultados precisos após a alteração das páginas.',
      cookiesText14: 'Form related Cookies',
      cookiesText15: 'Quando você envia dados por meio de um formulário como os encontrados nas páginas de contacto ou nos formulários de comentários, os cookies podem ser configurados para lembrar os detalhes do usuário para correspondência futura.',
      cookiesText16: 'Site preferences cookies',
      cookiesText17: 'Para proporcionar uma ótima experiência neste site, fornecemos a funcionalidade para definir suas preferências de como esse site é executado quando você o usa. Para lembrar suas preferências, precisamos definir cookies para que essas informações possam ser chamadas sempre que você interagir com uma página for afetada por suas preferências.',
      cookiesText18: 'Em alguns casos especiais, também usamos cookies fornecidos por terceiros confiáveis. A seção a seguir detalha quais cookies de terceiros você pode encontrar através deste site.',
      cookiesText19: 'Este site usa o Google Analytics, que é uma das soluções de análise mais difundidas e confiáveis da Web, para nos ajudar a entender como você usa o site e como podemos melhorar sua experiência. Esses cookies podem rastrear itens como quanto tempo você gasta no site e as páginas visitadas, para que possamos continuar produzindo conteúdo atraente.',
      cookiesText20: 'Para mais informações sobre cookies do Google Analytics, consulte a página oficial do Google Analytics.',
      cookiesText21: 'As análises de terceiros são usadas para rastrear e medir o uso deste site, para que possamos continuar produzindo conteúdo atrativo. Esses cookies podem rastrear itens como o tempo que você passa no site ou as páginas visitadas, o que nos ajuda a entender como podemos melhorar o site para você.',
      cookiesText22: 'Periodicamente, testamos novos recursos e fazemos alterações subtis na maneira como o site se apresenta. Quando ainda estamos testando novos recursos, esses cookies podem ser usados para garantir que você receba uma experiência consistente enquanto estiver no site, enquanto entendemos quais otimizações os nossos usuários mais apreciam.',
      cookiesText23: 'À medida que vendemos produtos, é importante entendermos as estatísticas sobre quantos visitantes de nosso site realmente compram e, portanto, esse é o tipo de dados que esses cookies rastrearão. Isso é importante para você, pois significa que podemos fazer previsões de negócios com precisão que nos permitem analizar nossos custos de publicidade e produtos para garantir o melhor preço possível.',
      cookiesText24: 'Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.',
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
