<template>
  <div>
    <q-card class="m-card">
        <q-card-section class="m-settings_info">
          <p class="m-settings_info-account">Atualizar meus temas</p>
        </q-card-section>
      </q-card>
      <q-card class="m-card -translate">
      <q-card-section>
        <q-select class="no-border" text-bold dense v-model="lang" :options="options" label="Idioma">
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
    <q-card class="m-card -blocked" @click="alertNewVersion">
      <q-card-section class="m-settings_info -between">
        <p class="m-settings_info-notifications">Alto contraste</p>
        <q-icon name="lock"/>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import store from '../../store'
import { mapGetters } from 'vuex'

export default {
  name: 'pageSettings',
  data () {
    return {
      isDark: false,
      lang: this.$i18n.locale,
      options: [
        'pt-br', 'en-us'
      ]
    }
  },
  methods: {
    alertNewVersion () {
      this.$q.notify({
        color: 'negative',
        message: 'Funcionalidade em desenvolvimento, na próxima versão será disponibilizada para você!',
        icon: 'update'
      })
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
    this.isDark = this.getDarkMode
  }
}
</script>
