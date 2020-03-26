<template>
  <q-dialog
  v-model="settings"
  persistent
  :maximized="true"
  transition-show="slide-up"
  transition-hide="slide-down">
  <div class="o-modal bg-white" :class="{ 'q-dark': $q.dark.isActive }">
    <div class="o-modal_header bg-primary" :class="{ 'q-dark': $q.dark.isActive }">
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
          <img class="m-profile_avatar" :src="`https://api.adorable.io/avatars/35/lis-avatar${getUser.id}.png`" alt="avatar adorable">
        </q-card-section>
      </q-card>
      <q-card class="m-card m-settings_card">
        <q-card-section class="m-settings_info" @click="openDlg('name', 'Nome', getUser.name)">
          <p class="m-settings_info-account">Nome:</p>
          <q-input borderless v-model="getUser.name" disable />
        </q-card-section>
      </q-card>
      <q-card class="m-card m-settings_card">
        <q-card-section class="m-settings_info" @click="changePassword.isOpen = true">
            <p class="m-settings_info-account">Senha:</p>
            <q-input borderless v-model="secretPass" disable type="password" />
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
    <div class="m-settings_notification">
      <h2 class="m-settings_title">Sobre nós</h2>
      <q-card class="m-card m-settings_card" @click="termsOpen = true">
        <q-card-section class="m-settings_info">
          <p class="m-settings_info-account">Termos de uso e privacidade</p>
        </q-card-section>
      </q-card>
      <q-card class="m-card m-settings_card" @click="creditsOpen = true">
        <q-card-section class="m-settings_info">
          <p class="m-settings_info-account">Créditos de mídia</p>
        </q-card-section>
      </q-card>
    </div>
    <div class="m-settings_actions">
      <q-btn no-caps rounded class="m-settings_actions-item" label="Salvar todas as alterações" @click="closeSettings"/>
      <q-btn no-caps rounded class="m-settings_actions-item" label="Trocar de conta" @click="loggout"/>
    </div>
    <qprompt :prompt="prompt" @isClose="isClose"></qprompt>
    <changeAvatar :selectAvatar="selectAvatar" @selectedAvatar="selectedAvatar"></changeAvatar>
    <changePassword :isOpen="changePassword.isOpen" @close="changePassword.isOpen = false"></changePassword>
    <credits :credits="creditsOpen" @close="close"></credits>
    <terms :terms="termsOpen" @close="close"></terms>
    </div>
  </q-dialog>
</template>

<script>
import qprompt from './ui/dlg-prompt'
import changeAvatar from './ui/changeAvatar'
import changePassword from './ui/changePassword'
import credits from './credits'
import terms from './terms'
import store from '../store/index'
import { mapGetters } from 'vuex'

export default {
  name: 'Settings',
  components: {
    qprompt,
    changeAvatar,
    changePassword,
    credits,
    terms
  },
  props: {
    settings: Boolean
  },
  data () {
    return {
      creditsOpen: false,
      termsOpen: false,
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
      secretPass: '*****************',
      selectAvatar: false,
      changePassword: {
        isOpen: false
      }
    }
  },
  methods: {
    loggout () {
      store().dispatch('auth/logout')
      this.$router.push({ name: 'login' })
    },
    openDlg (type, title, value) {
      this.prompt.isOpen = true
      this.prompt.type = type
      this.prompt.title = title
      this.prompt.value = value
    },

    isClose (event) {
      const { type, newValue } = event
      if (type === 'name') this.getUser.nickname = newValue
      else this.getUser.email = newValue
    },
    selectedAvatar (event) {
      this.selectAvatar = false
      if (event !== undefined) this.getUser.avatar = event.avatar
    },
    closeSettings () {
      this.$emit('closeSettings')
    },
    close () {
      this.creditsOpen = false
      this.termsOpen = false
    }
  },
  computed: {
    ...mapGetters('user', ['getUser'])
  }
}
</script>
