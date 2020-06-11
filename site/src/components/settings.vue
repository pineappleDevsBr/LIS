<template>
  <q-dialog
  v-model="settings"
  persistent
  :maximized="true"
  transition-show="slide-up"
  transition-hide="slide-down">
  <div class="o-modal bg-white" :class="{ 'q-dark': $q.dark.isActive }">
    <div class="o-modal_header bg-primary" :class="{ 'q-dark': $q.dark.isActive }">
      <h2 class="o-modal_title">{{ $t('profile.settings.header') }}</h2>
      <q-btn
      flat
      icon="close"
      @click="isCloseSettings.open = true"/>
    </div>
    <div class="o-modal_content">
      <h2 class="m-settings_title">{{ $t('profile.settings.account') }}</h2>
      <q-card class="m-card m-settings_card">
        <q-card-section class="m-settings_info" @click="selectAvatar = true">
          <p class="m-settings_info-account">{{ $t('profile.settings.avatar') }}</p>
          <img class="m-profile_avatar -small" :src="`${avatar_path}`" alt="avatar adorable">
        </q-card-section>
      </q-card>
      <q-card class="m-card m-settings_card">
        <q-card-section class="m-settings_info" @click="openDlg('nickname', 'Nickname', getUser.nickname)">
          <p class="m-settings_info-account">{{ $t('profile.settings.nickname') }}</p>
          <p class="m-settings_info-account">{{ nickname }}</p>
        </q-card-section>
      </q-card>
      <q-card class="m-card m-settings_card">
        <q-card-section class="m-settings_info" @click="openDlg('name', 'Nome', getUser.name)">
          <p class="m-settings_info-account">{{ $t('profile.settings.name') }}</p>
          <p class="m-settings_info-account">{{ name }}</p>
        </q-card-section>
      </q-card>
      <q-card class="m-card m-settings_card">
        <q-card-section class="m-settings_info" @click="changePassword.isOpen = true">
            <p class="m-settings_info-account">{{ $t('profile.settings.password') }}</p>
            <q-input borderless v-model="secretPass" disable type="password" />
        </q-card-section>
      </q-card>
    </div>
    <div class="m-settings_notification">
      <h2 class="m-settings_title">{{ $t('profile.settings.notifications') }}</h2>
      <q-card class="m-card m-settings_card">
        <q-card-section class="m-settings_info -between">
          <p class="m-settings_info-notifications">{{ $t('profile.settings.update') }}</p>
          <q-toggle v-model="notifications.update" color="primary"/>
        </q-card-section>
      </q-card>
      <q-card class="m-card m-settings_card">
        <q-card-section class="m-settings_info -between">
          <p class="m-settings_info-notifications">{{ $t('profile.settings.changeData') }}</p>
          <q-toggle v-model="notifications.changeData" color="primary"/>
        </q-card-section>
      </q-card>
    </div>
    <div class="m-settings_notification">
      <h2 class="m-settings_title">{{ $t('profile.settings.about') }}</h2>
      <q-card class="m-card m-settings_card" @click="tutorialOpen = true">
        <q-card-section class="m-settings_info">
          <p class="m-settings_info-account">Tutoriais</p>
        </q-card-section>
      </q-card>
      <q-card class="m-card m-settings_card" @click="termsOpen = true">
        <q-card-section class="m-settings_info">
          <p class="m-settings_info-account">{{ $t('profile.settings.terms') }}</p>
        </q-card-section>
      </q-card>
      <q-card class="m-card m-settings_card" @click="creditsOpen = true">
        <q-card-section class="m-settings_info">
          <p class="m-settings_info-account">{{ $t('profile.settings.credits') }}</p>
        </q-card-section>
      </q-card>
    </div>
    <div class="m-settings_actions">
      <q-btn no-caps rounded class="m-settings_actions-item" :label="$t('profile.settings.save')" @click="closeSettings"/>
      <q-btn no-caps rounded class="m-settings_actions-item" :label="$t('profile.settings.changeAccount')" @click="loggout"/>
    </div>
    <q-dialog v-model="selectAvatar">
      <changeAvatar @selectedAvatar="selectedAvatar"/>
    </q-dialog>
    <changePassword :isOpen="changePassword.isOpen" @close="closePassword"></changePassword>
    <credits :credits="creditsOpen" @close="close"></credits>
    <terms :terms="termsOpen" @close="close"></terms>
    <tutorial :tutorial="tutorialOpen" @close="close"></tutorial>
    <qprompt :prompt="prompt" @isClose="isClose"></qprompt>
    <closeSettings
      :persistent="isCloseSettings.presistent"
      :title="isCloseSettings.title"
      :isOpen="isCloseSettings.open"
      @close="closeWithoutSave"
    />
    </div>
  </q-dialog>
</template>

<script>
import qprompt from './ui/dlg-prompt'
import closeSettings from './ui/dlg-confirm'
import changeAvatar from './ui/changeAvatar'
import changePassword from './ui/changePassword'
import credits from './credits'
import terms from './terms'
import tutorial from './tutorial'
import store from '../store/index'
import { mapGetters } from 'vuex'

export default {
  name: 'Settings',
  components: {
    qprompt,
    changeAvatar,
    changePassword,
    credits,
    terms,
    tutorial,
    closeSettings
  },
  props: {
    settings: Boolean
  },
  data () {
    return {
      creditsOpen: false,
      termsOpen: false,
      tutorialOpen: this.$route.params.view,
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
      isCloseSettings: {
        open: false,
        persistent: true,
        title: 'Deseja mesmo fechar as configurações?<br>Você perderá as alterações já feitas!'
      },
      secretPass: '*****************',
      selectAvatar: false,
      changePassword: {
        isOpen: false
      },
      name: null,
      nickname: null,
      password: null,
      avatar: null
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
      if (type === 'name') {
        this.name = newValue
      } else if (type === 'nickname') {
        this.nickname = newValue
      }
    },
    closePassword (event) {
      this.changePassword.isOpen = false
      if (event) {
        this.password = event
      }
    },
    selectedAvatar (event) {
      this.selectAvatar = false
      if (event !== undefined) {
        this.avatar = event.avatar
      }
    },
    async closeSettings () {
      let payload = {}
      payload = {
        name: this.name,
        nickname: this.nickname,
        avatar: this.avatar
      }
      if (this.password) {
        payload = {
          password: this.password
        }
      }
      await store().dispatch('user/updateUser', payload)
      this.$emit('closeSettings')
    },
    close () {
      this.creditsOpen = false
      this.termsOpen = false
      this.tutorialOpen = false
    },
    closeWithoutSave (evt) {
      if (evt) this.$emit('closeSettings')
      this.isCloseSettings.open = false
    }
  },
  computed: {
    ...mapGetters('user', ['getUser']),
    avatar_path () {
      return `https://api.adorable.io/avatars/75/lis_avatarGenerator-${this.avatar}.png`
    }
  },
  mounted () {
    this.name = this.getUser.name
    this.nickname = this.getUser.nickname
    this.avatar = this.getUser.avatar
  }
}
</script>
