<template>
  <div class="o-access_step3">
    <div class="a-title -white -sub">
      {{ $t('access.choiceOfThemes.title') }}
    </div>
    <q-card class="my-card o-access_selectTheme">
      <q-card-section>
         <q-input dense v-model="filter" :label="$t('access.choiceOfThemes.search')" />
      </q-card-section>
      <q-card-section>
        {{ $t('access.choiceOfThemes.info') }}
      </q-card-section>
      <q-card-section>
        <q-card class="m-card" v-for="(theme, index) in filterThemes" v-bind:key="theme.id">
          <q-card-section class="q-pa-xs">
            <q-checkbox v-model="themes[index]" :label="theme.name" color="accent"/>
          </q-card-section>
        </q-card>
      </q-card-section>
    </q-card>
    <q-btn
    no-caps
    rounded
    outline
    color="primary"
    class="bg-white o-access_btn"
    size="lg"
    :label="$t('access.choiceOfThemes.btn')"
    @click="finish"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'step3',
  data () {
    return {
      filter: '',
      themes: []
    }
  },
  methods: {
    finish () {
      let empty = true
      for (let i = 0; i < this.themes.length; i += 1) {
        if (this.themes[i]) {
          empty = false
        }
      }

      if (!empty) {
        const payload = []
        this.themes.forEach((element, index) => {
          if (element) payload.push(this.getTheme[index].id)
        })
        this.$emit('finish', payload)
      } else {
        this.$q.notify({
          color: 'negative',
          message: this.$i18n.t(`errorFilter.selectThemes`),
          icon: 'report_problem'
        })
      }
    }
  },
  computed: {
    ...mapGetters('theme', ['getTheme']),
    filterThemes () {
      return this.filter ? this.getTheme.filter(theme => {
        return theme.name.toLowerCase().includes(this.filter.toLowerCase())
      }) : this.getTheme
    }
  },
  created () {
    for (let i = 0; i < this.getTheme.length; i += 1) {
      this.themes.push(false)
    }
  }
}
</script>
