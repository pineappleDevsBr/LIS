<template>
  <div>
    <q-card class="m-card">
        <q-card-section class="m-settings_info">
          <p class="m-settings_info-account">Atualizar meus temas</p>
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
      isDark: false
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
