// This is just an example,
// so you can safely delete all default props below

export default {
  errorFilter: {
    user: {
      '404': 'Usuário não encontrado',
      '401': 'Senha incorreta',
      '500': 'Erro interno'
    }
  },
  welcome: {
    btn: 'Vamos começar'
  },
  access: {
    btn_register: 'Cadastre-se',
    btn_login: 'Login',
    personal_data: {
      title: 'Dados pessoais',
      name: 'Nome completo',
      nickname: 'Nickname',
      email: 'E-mail',
      password: 'Senha',
      password_confirmation: 'Confirmação de senha',
      date_of_birth: 'Data de nascimento',
      btn: 'Próximo',
      errors: {
        required: 'Campo obrigatório'
      }
    },
    choice_of_themes: {
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
    back_to_login: 'Voltar a tela de login',
    send_email: 'E-mail enviado com sucesso!',
    errors: {
      required: 'Campo obrigatório'
    }
  },
  reset: {
    title: 'Alterar minha senha',
    password: 'Senha',
    password_confirmation: 'Confirmação da senha',
    btn: 'Alterar senha',
    errors: {
      required: 'Campo obrigatório',
      same: 'A senha deve ser igual à de cima'
    }
  }
}
