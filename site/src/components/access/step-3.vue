<template>
  <div class="o-access_step3">
    <div class="a-title -white -sub">
      {{ $t('access.choiceOfThemes.title') }}
    </div>
    <q-card class="my-card o-access_selectTheme" style="max-height: 400px; min-height: 400px; overflow-y: auto;">
      <q-card-section>
         <q-input dense v-model="filter" :label="$t('access.choiceOfThemes.search')" />
      </q-card-section>
      <q-card-section>
        {{ $t('access.choiceOfThemes.info') }}
      </q-card-section>
      <q-card-section>
        <q-card  class="m-card" v-for="theme in filterThemes" v-bind:key="theme.id">
          <q-slide-item @left="onLeft, addTheme(theme.id)" @right="onRight" right-color="negative">
            <template v-slot:left>
              <q-icon name="done" />
            </template>
            <template v-slot:right>
              <q-icon name="close" />
            </template>
            <q-card-section :class="bgColor">{{theme.name}}</q-card-section>
          </q-slide-item>
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
      bgColor: 'bg-white',
      themes: []
    }
  },
  methods: {
    finish () {
      if (this.themes.length > 0) {
        this.$emit('finish', this.themes)
      } else {
        this.$q.notify({
          color: 'negative',
          message: this.$i18n.t(`errorFilter.selectThemes`),
          icon: 'report_problem'
        })
      }
    },
    onLeft ({ reset }) {
      this.bgColor = 'bg-accent'
      this.finalize(reset)
    },

    addTheme (theme) {
      this.themes.push(theme)
    },

    onRight ({ reset }) {
      this.finalize(reset)
    },

    finalize (reset) {
      this.timer = setTimeout(() => {
        reset()
      }, 1000)
    }
  },
  beforeDestroy () {
    clearTimeout(this.timer)
  },
  computed: {
    ...mapGetters('theme', ['getTheme']),
    filterThemes () {
      return this.filter ? this.getTheme.filter(theme => {
        return theme.name.toLowerCase().includes(this.filter.toLowerCase())
      }) : this.getTheme
    }
  }
}
</script>
