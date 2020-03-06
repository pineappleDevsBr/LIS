<template>
  <div>
    <q-circular-progress
      show-value
      font-size="14px"
      :value="progressXp"
      size="60px"
      :thickness="0.12"
      color="white"
      track-color="gray-11">
      {{ getUser.xp }}XP
    </q-circular-progress>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'header-progress',
  data () {
    return {
      progress: {
        value: 0,
        levelUp: 100
      }
    }
  },
  computed: {
    ...mapGetters('user', ['getUser']),
    progressXp () {
      return ((this.getUser.xp * 100) / this.progress.levelUp)
    }
  }
}
</script>
