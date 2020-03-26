<template>
  <q-dialog
  v-model="themesOpen"
  persistent
  :maximized="true"
  transition-show="slide-up"
  transition-hide="slide-down">
    <div class="o-modal bg-white" :class="{ 'q-dark': $q.dark.isActive }">
      <div class="o-modal_header bg-primary" :class="{ 'q-dark': $q.dark.isActive }">
        <h2 class="o-modal_title">Temas</h2>
        <q-btn
        flat
        icon="close"
        @click="closeThemes"/>
      </div>
      <div class="o-modal_content">
        <h2>Meus temas</h2>
        <div v-for="myTheme in getMyThemes" v-bind:key="`my_${myTheme.id}`">
          <q-card class="m-card m-settings_card">
            <q-card-section class="m-settings_info -between">
              <p class="m-settings_info-notifications">{{myTheme.name}}</p>
            </q-card-section>
          </q-card>
        </div>

        <h2>Temas disponíveis</h2>
        <q-input dense v-model="filter" :label="$t('access.choiceOfThemes.search')" />
        <div v-for="theme in allThemes" v-bind:key="theme.id">
          <q-card class="m-card m-settings_card">
            <q-card-section class="m-settings_info -between">
              <p class="m-settings_info-notifications">{{theme.name}}</p>
              <q-toggle v-model="theme.have" color="primary"/>
            </q-card-section>
          </q-card>
        </div>
      </div>
    <q-btn @click="submit" label="Alterar"/>
    </div>
  </q-dialog>
</template>

<script>
import store from '../store'
import { mapGetters } from 'vuex'

export default {
  name: 'ChangeThemes',
  props: {
    themesOpen: Boolean
  },
  data () {
    return {
      filter: '',
      allThemes: []
    }
  },
  methods: {
    async submit () {
      const newThemes = []

      for (let i = 0; i < this.allThemes.length; i += 1) {
        if (this.allThemes[i].have) newThemes.push(this.allThemes[i].id)
      }

      if (newThemes.length < 1) {
        this.$q.notify({
          color: 'negative',
          message: 'Você deve selecionar no mínimo um tema!',
          icon: 'report_problem'
        })
      }
      this.$q.loading.show()
      await store().dispatch('theme/updateTheme', { themes: newThemes })
      this.$q.notify({
        color: 'positive',
        message: 'Seus temas foram atualizados!',
        icon: 'sentiment_satisfied_alt'
      })
      this.closeThemes()
      this.$q.loading.hide()
    },
    closeThemes () {
      this.$emit('closeThemes')
    },
    selectAllThemes () {
      let have = false

      for (let i = 0; i < this.getTheme.length; i += 1) {
        for (let j = 0; j < this.getMyThemes.length; j += 1) {
          if (this.getTheme[i].name === this.getMyThemes[j].name) have = true
        }
        this.allThemes.push({
          id: this.getTheme[i].id,
          name: this.getTheme[i].name,
          description: this.getTheme[i].description,
          have
        })
        have = false
      }
    }
  },
  computed: {
    ...mapGetters('theme', ['getTheme']),
    ...mapGetters('theme', ['getMyThemes'])
  },
  async mounted () {
    await store().dispatch('theme/getMyThemes')
    this.selectAllThemes()
  }
}
</script>