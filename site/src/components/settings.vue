<template>
  <q-dialog
  v-model="settings"
  persistent
  :maximized="true"
  transition-show="slide-up"
  transition-hide="slide-down">
  <div class="o-modal">
    <div class="o-modal_header">
      <h2 class="o-modal_title">Configurações</h2>
      <q-btn
      flat
      icon="close"
      @click="closeSettings"/>
    </div>
    <div class="o-modal_content">
      <h2 class="m-settings_title">Conta</h2>
      <q-card class="m-card m-settings_card">
        <q-card-section class="m-settings_info" @click="selectAvatar = true">
          <p class="m-settings_info-account">Imagem de perfil:</p>
          <img class="m-profile_avatar" :src="`https://api.adorable.io/avatars/35/${account.avatar}`" alt="avatar adorable">
        </q-card-section>
      </q-card>
      <q-card class="m-card m-settings_card">
        <q-card-section class="m-settings_info" @click="openDlg('name', 'Nome', account.name)">
          <p class="m-settings_info-account">Nome:</p>
          <q-input borderless v-model="account.name" disable />
        </q-card-section>
      </q-card>
      <q-card class="m-card m-settings_card">
        <q-card-section class="m-settings_info" @click="openDlg('email', 'E-mail', account.email)">
            <p class="m-settings_info-account">E-mail:</p>
            <q-input borderless v-model="account.email" disable />
        </q-card-section>
      </q-card>
      <q-card class="m-card m-settings_card">
        <q-card-section class="m-settings_info" @click="openDlg('password', 'Senha', account.password)">
            <p class="m-settings_info-account">Senha:</p>
            <q-input borderless v-model="account.password" disable type="password" />
        </q-card-section>
      </q-card>
    </div>
    <div class="m-settings_notification">
      <h2 class="m-settings_title">Notificações por email</h2>
      <q-card class="m-card m-settings_card">
        <q-card-section class="m-settings_info -between">
          <p class="m-settings_info-notifications">Atualizações</p>
          <q-toggle v-model="notifications.update" color="primary"/>
        </q-card-section>
      </q-card>
      <q-card class="m-card m-settings_card">
        <q-card-section class="m-settings_info -between">
          <p class="m-settings_info-notifications">Alteração de seu email e/ou senha</p>
          <q-toggle v-model="notifications.changeData" color="primary"/>
        </q-card-section>
      </q-card>
    </div>
    <div class="m-settings_actions">
      <q-btn no-caps rounded class="m-setting_actions-item" label="Salvar todas as alterações" @click="closeSettings"/>
      <q-btn no-caps rounded class="m-setting_actions-item" label="Trocar de conta"/>
    </div>
    <qprompt :prompt="prompt" @isClose="isClose"></qprompt>
    <changeAvatar :selectAvatar="selectAvatar" @selectedAvatar="selectedAvatar"></changeAvatar>
    </div>
  </q-dialog>
</template>

<script>
import qprompt from './ui/dlg-prompt'
import changeAvatar from './ui/changeAvatar'

export default {
  name: 'Settings',
  components: {
    qprompt,
    changeAvatar
  },
  props: {
    settings: Boolean
  },
  data () {
    return {
      account: {
        avatar: 'lis-avatar1.png',
        name: 'Lis',
        email: 'lorem@ipsum.com',
        password: 'secret'
      },
      notifications: {
        update: false,
        changeData: true
      },
      prompt: {
        isOpen: false,
        type: '',
        title: '',
        value: ''
      },
      selectAvatar: false
    }
  },
  methods: {
    openDlg (type, title, value) {
      this.prompt.isOpen = true
      this.prompt.type = type
      this.prompt.title = title
      this.prompt.value = value
    },

    isClose (event) {
      const { type, newValue } = event
      if (type === 'name') this.account.name = newValue
      else if (type === 'email') this.account.email = newValue
      else this.account.password = newValue
    },
    selectedAvatar (event) {
      this.selectAvatar = false
      if (event !== undefined) this.account.avatar = event.avatar
    },
    closeSettings () {
      this.$emit('closeSettings')
    }
  }
}
</script>
