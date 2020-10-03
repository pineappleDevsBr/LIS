<template>
  <q-dialog
  v-model="themesOpen"
  persistent
  :maximized="true"
  transition-show="slide-up"
  transition-hide="slide-down">
    <div class="o-modal bg-white" :class="{ 'q-dark': $q.dark.isActive }">
      <div class="o-modal_header bg-primary" :class="{ 'q-dark': $q.dark.isActive }">
        <h2 class="o-modal_title">{{ $t('generalAdjustments.themes.header') }}</h2>
        <q-btn
        flat
        icon="close"
        @click="closeThemes"/>
      </div>
      <div class="o-modal_content">
        <h2 class="m-change-theme_title">{{ $t('generalAdjustments.themes.myThemes') }}</h2>
        <div v-if="skeleton">
          <q-skeleton v-for="i in 2" v-bind:key="i" width="100%" height="40px" class="q-mb-md"/>
        </div>
        <div class="m-change-theme_cards">
          <div v-for="myTheme in getMyThemes" v-bind:key="`my_${myTheme.id}`">
            <q-card class="m-card m-settings_card">
              <q-card-section class="m-settings_info -between">
                <p class="m-settings_info-notifications">{{myTheme.name}}</p>
              </q-card-section>
            </q-card>
          </div>
        </div>

        <h2 class="m-change-theme_title">{{ $t('generalAdjustments.themes.availableThemes') }}</h2>
        <q-input class="m-change-theme_filter" dense v-model="filter" :label="$t('access.choiceOfThemes.search')" />
        <div v-if="skeleton">
          <q-skeleton v-for="i in 5" v-bind:key="i" width="100%" height="40px" class="q-mb-md"/>
        </div>
        <div class="m-change-theme_cards">
          <div v-for="theme in filterThemes" v-bind:key="theme.id">
            <q-card class="m-card m-settings_card">
              <q-card-section class="m-settings_info -between">
                <p class="m-settings_info-notifications">{{theme.name}}</p>
                <q-toggle v-model="theme.have" color="primary"/>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    <q-btn no-caps rounded class="m-change-theme_btn" @click="submit" :label="$t('generalAdjustments.themes.save')"/>
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
      skeleton: true,
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

      if (newThemes.length >= 1) {
        this.$q.loading.show()
        await store().dispatch('theme/updateTheme', { themes: newThemes })
        this.$q.notify({
          color: 'positive',
          message: this.$t('generalAdjustments.themes.updateSuccessfull'),
          icon: 'sentiment_satisfied_alt'
        })
        this.closeThemes()
        this.$q.loading.hide()
      } else {
        this.$q.notify({
          color: 'negative',
          message: this.$t('generalAdjustments.themes.min'),
          icon: 'report_problem'
        })
      }
    },
    async closeThemes () {
      await store().dispatch('theme/getMyThemes')
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
    ...mapGetters('theme', ['getMyThemes']),
    filterThemes () {
      return this.filter ? this.allThemes.filter(theme => {
        return theme.name.toLowerCase().includes(this.filter.toLowerCase())
      }) : this.allThemes
    }
  },
  async mounted () {
    await store().dispatch('theme/getMyThemes')
    this.selectAllThemes()
    this.skeleton = false
  }
}
</script>
