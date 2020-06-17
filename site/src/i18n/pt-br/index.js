// This is just an example,
// so you can safely delete all default props below

export default {
  errorFilter: {
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
      btn: 'Próximo',
      errors: {
        required: 'Campo obrigatório',
        minLength: 'O campo senha deve conter no mínimo seis caracteres',
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
  store: {
    title: 'Suba de nível mais rápido com nossos itens!',
    myItems: 'Meus itens',
    availableItems: 'Itens disponíveis'
  },
  profile: {
    editData: 'Clique aqui para editar seus dados',
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
  hub: {
    title: 'Descubra novos amigos! Aprender junto é mais divertido!',
    search: 'Pesquisar amigos',
    invitation: 'Convidar um amigo',
    requests: 'Solicitações de amizade',
    myFriends: 'Meus amigos'
  },
  generalAdjustments: {
    title: 'Deixe seus estudos com a sua cara!',
    updateThemes: 'Atualizar meus temas',
    lang: 'Idioma',
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
