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
      btn: 'Próximo',
      errors: {
        required: 'Campo obrigatório'
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
  }
}
