<template>
  <div>
    <q-circular-progress
      class="m-progress_circular"
      @click="showXP = true"
      show-value
      font-size="14px"
      :value="progressXp"
      size="60px"
      :thickness="0.12"
      color="accent"
      track-color="gray-11">
      Nível&nbsp;<span id="countXp">{{ setLevelUp.level }}</span>
    </q-circular-progress>
    <q-dialog v-model="showXP">
      <q-card class="m-card">
        <q-card-section>
          <div class="text-h6">Próximo nível</div>
        </q-card-section>

        <q-card-section>
          <progressBar :progress="{ showValue: true, levelUp: this.setLevelUp.xp, xp: this.getUser.xp }"/>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import progressBar from '../ui/progress-bar'
import levelUp from '../../utils/levelUp'
import { mapGetters } from 'vuex'
import { CountUp } from 'countup.js'

export default {
  name: 'header-progress',
  components: {
    progressBar
  },
  data () {
    return {
      showXP: false
    }
  },
  computed: {
    ...mapGetters('user', ['getUser']),
    progressXp () {
      const options = { duration: 0.8 }
      let demo = new CountUp('countXp', this.setLevelUp.level, options)
      if (!demo.error) {
        demo.start()
      } else {
        console.error(demo.error)
      }
      return ((this.getUser.xp * 100) / this.setLevelUp.xp)
    },
    setLevelUp () {
      return levelUp(this.getUser.xp)
    }
  }
}
</script>
