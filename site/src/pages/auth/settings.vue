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
