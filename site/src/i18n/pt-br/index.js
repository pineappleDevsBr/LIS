// This is just an example,
// so you can safely delete all default props below

export default {
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
      info: 'Arraste para a direita para selecionar o tema.',
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
  header: {
    home: 'Atividades',
    store: 'Loja',
    profile: 'Perfil',
    hub: 'Hub de amigos',
    settings: 'Ajustes gerais'
  },
  activities: {
    quiz: 'Quiz',
    listening: 'Diga-me o que ouviu',
    complete: 'Complete a frase',
    reading: 'Leitura'
  },
  themeFilter: {
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
    myItems: 'Meus itens',
    availableItems: 'Itens disponíveis',
    confirmUseItem: 'Deseja mesmo usar esse item?',
    insufficientCurrencies: 'Moedas insuficientes!',
    activatedItem: 'Item ativado!',
    errorActivating: 'Ocorreu um erro ao ativar o item, tente novamente ou entre em contato com o suporte técnico.',
    gift: 'Presente enviado com sucesso!'
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
      name: 'Nome:',
      nickname: 'Nickname:',
      password: 'Senha:',
      notifications: 'Notificações por e-mail',
      update: 'Atualizações',
      changeData: 'Alteração de seu e-mail e/ou senha',
      about: 'Sobre nós',
      terms: 'Termos de uso e privacidade',
      credits: 'Créditos de mídia',
      save: 'Salvar todas as alterações',
      changeAccount: 'Trocar de conta'
    },
    terms: {
      header: 'Política e privacidade de uso',
      terms: 'Termos de uso',
      copy: 'Copyright'
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
    requestSuccessfully: 'Solicitação enviada com sucesso!',
    requestError: 'Ocorreu um erro ao realizar a solicitação, tente novamente mais tarde!'
  },
  hub: {
    title: 'Descubra novos amigos! Aprender junto é mais divertido!',
    search: 'Pesquisar amigos',
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
      save: 'Salvar alterações'
    }
  }
}
