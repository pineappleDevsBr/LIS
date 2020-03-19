<template>
  <div>
    <div class="m-spotlight">
      <img class="m-spotlight_icon" src="statics/settings/gear.svg" alt="settings">
      Deixe seus estudos com a sua cara!
    </div>
    <q-card class="m-card">
        <q-card-section class="m-settings_info" @click="openThemes">
          <p class="m-settings_info-account">Atualizar meus temas</p>
        </q-card-section>
      </q-card>
      <q-card class="m-card -translate">
      <q-card-section>
        <q-select class="no-border" dense v-model="lang" :options="options" label="Idioma">
          <template v-slot:append>
            <q-icon name="translate" class="cursor-pointer" />
          </template>
        </q-select>
      </q-card-section>
    </q-card>
    <q-card class="m-card">
      <q-card-section class="m-settings_info -between">
        <p class="m-settings_info-notifications">Tema escuro</p>
        <q-toggle v-model="isDark" color="primary"/>
      </q-card-section>
    </q-card>
    <q-card class="m-card -blocked">
      <q-card-section class="m-settings_info -between">
        <p class="m-settings_info-notifications">Alto contraste</p>
        <q-icon name="lock"/>
      </q-card-section>
    </q-card>
    <changeThemes :themesOpen="themesOpen" @closeThemes="closeThemes"></changeThemes>
  </div>
</template>

<script>
import changeThemes from '../../components/changeThemes'
import store from '../../store'
import { mapGetters } from 'vuex'

export default {
  name: 'pageSettings',
  components: {
    changeThemes
  },
  data () {
    return {
      themesOpen: false,
      isDark: false,
      lang: 'pt-br',
      options: [
        'pt-br', 'en-us'
      ]
    }
  },
  methods: {
    openThemes () {
      this.themesOpen = true
    },
    closeThemes () {
      this.themesOpen = false
    }
  },
  watch: {
    isDark (value) {
      store().dispatch('darkMode/setDarkMode', value)
    },
    lang (value) {
      this.$i18n.locale = value
    }
  },
  computed: {
    ...mapGetters('darkMode', ['getDarkMode'])
  },
  mounted () {
    this.isDark = this.getDarkMode ? this.getDarkMode : false
  }
}
</script>
