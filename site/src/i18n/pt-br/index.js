// This is just an example,
// so you can safely delete all default props below

export default {
  pattern: {
    lower: 'A senha deve ter: Letra minúscula',
    upper: 'A senha deve ter: Letra maiúscula',
    number: 'A senha deve ter: Número',
    min: 'A senha deve ter: Um tamanho de no mínimo seis caracteres'
  },
  errorFilter: {
    page404: 'Ops! parece que seus estudos tiveram um pequeno desvio, vamos voltar à tela inicial para você continuar de onde parou.',
    page404Btn: 'Voltar',
    withoutInternet: {
      title: 'Sem internet',
      text: 'Você está desconectado! Conecte-se novamente para voltar aos estudos!'
    },
    user: {
      '404': 'Usuário não encontrado',
      '401': 'Senha incorreta',
      '500': 'Erro interno'
    },
    nicknameCheck: {
      '204': 'Esse nickname já está sendo usado!',
      '404': 'Usuário não encontrado'
    },
    emailCheck: {
      '204': 'Esse e-mail já está sendo usado!',
      '404': 'Usuário não encontrado'
    },
    selectThemes: 'Selecione ao menos um tema'
  },
  welcome: {
    btn: 'Vamos começar'
  },
  access: {
    btnRegister: 'Cadastre-se',
    btnLogin: 'Login',
    personalData: {
      title: 'Dados pessoais',
      name: 'Nome completo',
      nickname: 'Nickname',
      email: 'E-mail',
      password: 'Senha',
      passwordConfirmation: 'Confirmação de senha',
      dateOfBirth: 'Data de nascimento',
      dateFormat: 'DD/MM/YYYY',
      myLocale: {
        days: 'Domingo_Segunda_Terça_Quarta_Quinta_Sexta_Sábado',
        daysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb',
        months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julio_Agosto_Setembro_Outubro_Novembro_Dezembro',
        monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dec'
      },
      sixCharacters: 'Utilize uma senha com seis ou mais caracteres',
      strongPassword: 'Senha forte: use no mínimo 6 caracteres, letra maiúscula, minuscula e número.',
      btn: 'Próximo',
      registeredSuccessfully: 'Usuário cadastrado com sucesso!',
      errors: {
        required: 'Campo obrigatório',
        minLength: 'O campo senha deve conter no mínimo seis caracteres',
        notStrong: 'Não atende os requisitos de uma senha forte',
        sameAs: 'As senhas não são iguais'
      }
    },
    choiceOfThemes: {
      title: 'Escolha de temas',
      search: 'Buscar tema...',
      info: 'Escolha os temas abaixo.',
      btn: 'Finalizar cadastro',
      errors: {
        required: 'É obrigatório escolher no mínimo um tema'
      }
    }
  },
  login: {
    title: 'Login',
    email: 'E-mail',
    password: 'Senha',
    btn: 'Login',
    forgot: 'Esqueci minha senha',
    access: 'Criar uma conta',
    errors: {
      required: 'Campo obrigatório'
    }
  },
  forgot: {
    title: 'Esqueci minha senha',
    info: 'Informe seu e-mail cadastrado na aplicação e você receberá um link para alterar sua senha.',
    email: 'E-mail',
    btn: 'Enviar e-mail',
    backToLogin: 'Voltar a tela de login',
    sendEmail: 'E-mail enviado com sucesso!',
    errors: {
      required: 'Campo obrigatório'
    }
  },
  reset: {
    title: 'Alterar minha senha',
    password: 'Senha',
    passwordConfirmation: 'Confirmação da senha',
    btn: 'Alterar senha',
    errors: {
      required: 'Campo obrigatório',
      same: 'A senha deve ser igual à de cima'
    }
  },
  blocked: {
    title: 'Más noticias!',
    text: 'Infelizmente seu acesso foi bloqueado pelo administrador!',
    contact: 'Entre em contato com ele pelo e-mail <a href="mailto:admin@lis.com" target="_blank" class="a-link -primary -text-decoration">admin@lis.com</a> para descobrir o que aconteceu e ter seu acesso liberado novamente.',
    thanks: 'Obrigado pela compreensão!'
  },
  header: {
    home: 'Atividades',
    store: 'Loja',
    profile: 'Perfil',
    hub: 'Hub de amigos',
    settings: 'Ajustes gerais',
    level: 'Nível',
    nextLevel: 'Próximo nível'
  },
  activities: {
    quiz: 'Quiz',
    listening: 'Diga-me o que ouviu',
    complete: 'Complete a frase',
    reading: 'Leitura',
    common: {
      enterAnswer: 'Digite aqui sua resposta',
      finish: 'Finalizar',
      next: 'Próximo',
      back: 'Voltar',
      titleModal: 'Deseja mesmo abandonar essa atividade?<br>Suas respostas e recompensas serão perdidas.',
      selectAnswer: 'Selecione uma resposta!',
      answerEmpty: 'A resposta não pode estar vazia!',
      translate: 'Traduzir',
      readAnother: 'Ler outro texto',
      seconds: 'segundos',
      minutes: 'minuto(s)',
      wait: 'Aguarde',
      wait2: 'para ler outro texto'
    },
    feedback: {
      checkAnswers: 'Confira suas respostas!',
      checkAwards: 'Confira seus prêmios por concluir a atividade!',
      approved: 'Aprovado',
      disapproved: 'Reprovado',
      bonus: 'Bônus',
      close: 'Fechar',
      remake: 'Refazer'
    }
  },
  themeFilter: {
    taskDisabled: 'Evolua seu nível para responder essa questão!',
    empty: 'Infelizmente ainda não há atividades deste tipo neste tema, mas logo a equipe ira cadastrar!'
  },
  tutorial: {
    title: 'Olá, bem vindo ao LIS!',
    text: 'Antes de começar gostaria de saber se você deseja assistir aos vídeos tutoriais agora.',
    accessIn: 'Se preferir, pode acessar os mesmos vídeos em Perfil > Clique aqui para editar seus dados > Tutoriais.',
    goodStudies: 'Bons estudos!',
    repeatShowTutorial: 'Não mostrar novamente',
    watchNow: 'Assistir agora',
    watchLater: 'Assistir mais tarde'
  },
  store: {
    title: 'Suba de nível mais rápido com nossos itens!',
    myItems: {
      title: 'Meus itens',
      use: 'USAR',
      inUse: 'EM USO'
    },
    availableItems: 'Itens disponíveis',
    confirmUseItem: 'Deseja mesmo usar esse item?',
    insufficientCurrencies: 'Moedas insuficientes!',
    activatedItem: 'Item ativado!',
    errorActivating: 'Ocorreu um erro ao ativar o item, tente novamente ou entre em contato com o suporte técnico.',
    gift: 'Presente enviado com sucesso!',
    buy: {
      price: 'Preço',
      units: 'Quantidade',
      total: 'Total',
      cancel: 'Cancelar',
      buy: 'Comprar'
    }
  },
  profile: {
    editData: 'Clique aqui para editar seus dados',
    notifications: {
      title: 'Notificações',
      text: 'Você não tem nenhuma notificação!'
    },
    settings: {
      header: 'Configurações',
      account: 'Conta',
      avatar: 'Imagem do perfil:',
      changeAvatar: {
        title: 'Gerar avatares aleatórios!',
        new: 'Gerar novo avatar',
        choice: 'Escolher esse'
      },
      name: 'Nome:',
      nickname: 'Nickname:',
      password: 'Senha:',
      changePassword: {
        current: 'Senha atual',
        new: 'Nova senha',
        confirm: 'Confirmar nova senha',
        change: 'Alterar senha',
        cancel: 'Cancelar',
        incorrectPassword: 'Sua senha atual está incorreta! Tente novamente!'
      },
      notifications: 'Notificações por e-mail',
      update: 'Atualizações',
      changeData: 'Alteração de seu e-mail e/ou senha',
      about: 'Sobre nós',
      terms: 'Termos de uso e privacidade',
      credits: 'Créditos de mídia',
      save: 'Salvar todas as alterações',
      changeAccount: 'Trocar de conta',
      tutorials: 'Tutoriais',
      close: 'Deseja mesmo fechar as configurações?<br>Você perderá as alterações já feitas!'
    },
    tutorials: {
      title: 'Tutoriais'
    },
    terms: {
      header: 'Política de privacidade e uso',
      privacyPolicy: 'Política de privacidade',
      privacyText1: 'A sua privacidade é importante para nós. É política do PineappleDevs respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site PineappleDevs, e outros sites que possuímos e operamos.',
      privacyText2: 'Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.',
      privacyText3: 'Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.',
      privacyText4: 'Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.',
      privacyText5: 'O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.',
      privacyText6: 'Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.',
      privacyText7: 'O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto connosco.',
      cookiesPolicy: 'Política de Cookies PineappleDevs',
      cookiesTitle1: 'O que são cookies?',
      cookiesTitle2: 'Como usamos os cookies?',
      cookiesTitle3: 'Desativar cookies',
      cookiesTitle4: 'Cookies que definimos',
      cookiesTitle5: 'Cookies de Terceiros',
      cookiesTitle6: 'Mais informações',
      cookiesText1: 'Como é prática comum em quase todos os sites profissionais, este site usa cookies, que são pequenos arquivos baixados no seu computador, para melhorar sua experiência. Esta página descreve quais informações eles coletam, como as usamos e por que às vezes precisamos armazenar esses cookies. Também compartilharemos como você pode impedir que esses cookies sejam armazenados, no entanto, isso pode fazer o downgrade ou "quebrar" certos elementos da funcionalidade do site.',
      cookiesText2: 'Utilizamos cookies por vários motivos, detalhados abaixo. Infelizmente, na maioria dos casos, não existem opções padrão do setor para desativar os cookies sem desativar completamente a funcionalidade e os recursos que eles adicionam a este site. É recomendável que você deixe todos os cookies se não tiver certeza se precisa ou não deles, caso sejam usados para fornecer um serviço que você usa.',
      cookiesText3: 'Você pode impedir a configuração de cookies ajustando as configurações do seu navegador (consulte a Ajuda do navegador para saber como fazer isso). Esteja ciente de que a desativação de cookies afetará a funcionalidade deste e de muitos outros sites que você visita. A desativação de cookies geralmente resultará na desativação de determinadas funcionalidades e recursos deste site. Portanto, é recomendável que você não desative os cookies.',
      cookiesText4: 'Cookies relacionados à conta',
      cookiesText5: 'Se você criar uma conta connosco, usaremos cookies para o gerenciamento do processo de inscrição e administração geral. Esses cookies geralmente serão excluídos quando você sair do sistema, porém, em alguns casos, eles poderão permanecer posteriormente para lembrar as preferências do seu site ao sair.',
      cookiesText6: 'Cookies relacionados ao login',
      cookiesText7: 'Utilizamos cookies quando você está logado, para que possamos lembrar dessa ação. Isso evita que você precise fazer login sempre que visitar uma nova página. Esses cookies são normalmente removidos ou limpos quando você efetua logout para garantir que você possa acessar apenas a recursos e áreas restritas ao efetuar login.',
      cookiesText8: 'Cookies relacionados a boletins por e-mail',
      cookiesText9: 'Este site oferece serviços de assinatura de boletim informativo ou e-mail e os cookies podem ser usados para lembrar se você já está registrado e se deve mostrar determinadas notificações válidas apenas para usuários inscritos / não inscritos.',
      cookiesText10: 'Pedidos processando cookies relacionados',
      cookiesText11: 'Este site oferece facilidades de comércio eletrônico ou pagamento e alguns cookies são essenciais para garantir que seu pedido seja lembrado entre as páginas, para que possamos processá-lo adequadamente.',
      cookiesText12: 'Cookies relacionados a pesquisas',
      cookiesText13: 'Periodicamente, oferecemos pesquisas e questionários para fornecer informações interessantes, ferramentas úteis ou para entender nossa base de usuários com mais precisão. Essas pesquisas podem usar cookies para lembrar quem já participou numa pesquisa ou para fornecer resultados precisos após a alteração das páginas.',
      cookiesText14: 'Cookies relacionados a formulários',
      cookiesText15: 'Quando você envia dados por meio de um formulário como os encontrados nas páginas de contacto ou nos formulários de comentários, os cookies podem ser configurados para lembrar os detalhes do usuário para correspondência futura.',
      cookiesText16: 'Cookies de preferências do site',
      cookiesText17: 'Para proporcionar uma ótima experiência neste site, fornecemos a funcionalidade para definir suas preferências de como esse site é executado quando você o usa. Para lembrar suas preferências, precisamos definir cookies para que essas informações possam ser chamadas sempre que você interagir com uma página for afetada por suas preferências.',
      cookiesText18: 'Em alguns casos especiais, também usamos cookies fornecidos por terceiros confiáveis. A seção a seguir detalha quais cookies de terceiros você pode encontrar através deste site.',
      cookiesText19: 'Este site usa o Google Analytics, que é uma das soluções de análise mais difundidas e confiáveis da Web, para nos ajudar a entender como você usa o site e como podemos melhorar sua experiência. Esses cookies podem rastrear itens como quanto tempo você gasta no site e as páginas visitadas, para que possamos continuar produzindo conteúdo atraente.',
      cookiesText20: 'Para mais informações sobre cookies do Google Analytics, consulte a página oficial do Google Analytics.',
      cookiesText21: 'As análises de terceiros são usadas para rastrear e medir o uso deste site, para que possamos continuar produzindo conteúdo atrativo. Esses cookies podem rastrear itens como o tempo que você passa no site ou as páginas visitadas, o que nos ajuda a entender como podemos melhorar o site para você.',
      cookiesText22: 'Periodicamente, testamos novos recursos e fazemos alterações subtis na maneira como o site se apresenta. Quando ainda estamos testando novos recursos, esses cookies podem ser usados para garantir que você receba uma experiência consistente enquanto estiver no site, enquanto entendemos quais otimizações os nossos usuários mais apreciam.',
      cookiesText23: 'À medida que vendemos produtos, é importante entendermos as estatísticas sobre quantos visitantes de nosso site realmente compram e, portanto, esse é o tipo de dados que esses cookies rastrearão. Isso é importante para você, pois significa que podemos fazer previsões de negócios com precisão que nos permitem analizar nossos custos de publicidade e produtos para garantir o melhor preço possível.',
      cookiesText24: 'Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.',
      cookiesText25: 'Esta política é efetiva a partir de',
      cookiesText26: 'Setembro/2020'
    },
    credits: {
      header: 'Créditos',
      text: 'LIS é um projeto open souce na qual utiliza como grande parte de sua mídia, fontes externas reproduzidas por artistas não ligados a nós. Sendo assim, temos o dever de citá-los em nossa plataforma com créditos à seu trabalho, pelo seu apoio de forma indireta ao desenvolvimento do app.',
      icons: 'ícones',
      vectors: 'Ilustrações'
    }
  },
  profileFriends: {
    level: 'Nível',
    friends: 'Amigos',
    request: 'Solicitar amizade',
    requestSuccessfully: 'Solicitação enviada com sucesso!',
    requestError: 'Ocorreu um erro ao realizar a solicitação, tente novamente mais tarde!'
  },
  hub: {
    title: 'Descubra novos amigos! Aprender junto é mais divertido!',
    invitation: 'Convidar um amigo',
    requests: 'Solicitações de amizade',
    myFriends: 'Meus amigos',
    level: 'Nível',
    invite: {
      title: 'Convide seus amigos que já tenham uma conta!',
      text: 'Clique no link para copiar o convite abaixo e envie para seu amigo!',
      obs: 'Ele deve estar logado para acessar seu perfil!',
      alert: 'Link copiado para a área de transferência!',
      invitation: 'Convite',
      notify: {
        confirmed1: 'Agora',
        confirmed2: 'é seu amigo!',
        pending: 'foi removido da lista de solicitações!',
        error1: 'Ocorreu algum erro ao',
        error2: 'aceitar',
        error3: 'recusar',
        error4: 'a amizade!'
      }
    },
    search: {
      title: 'Pesquisar amigos',
      input: 'Pesquise pelo nome ou e-mail',
      friends: 'Amigos encontrados',
      level: 'Nível',
      profile: 'Ver perfil',
      loadMore: 'Carregar mais amigos',
      viewAll: 'Mostrar todos'
    }
  },
  generalAdjustments: {
    title: 'Deixe seus estudos com a sua cara!',
    updateThemes: 'Atualizar meus temas',
    lang: 'Idioma',
    useItems: 'Confirmação de uso dos itens da loja',
    darkMode: 'Tema escuro',
    highContrast: 'Alto contraste',
    themes: {
      header: 'Temas',
      myThemes: 'Meus temas',
      availableThemes: 'Temas disponíveis',
      save: 'Salvar alterações',
      min: 'Você deve selecionar no mínimo um tema!',
      updateSuccessfull: 'Seus temas foram atualizados!'
    }
  },
  dlg: {
    yes: 'Sim',
    no: 'Não',
    change: 'Alterar',
    cancel: 'Cancelar'
  }
}
