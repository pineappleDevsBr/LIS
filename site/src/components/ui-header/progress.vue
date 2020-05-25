<template>
  <div>
    <q-circular-progress
      show-value
      font-size="14px"
      :value="progressXp"
      size="60px"
      :thickness="0.12"
      color="accent"
      track-color="gray-11">
      {{ getUser.xp }}XP
    </q-circular-progress>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import levelUp from '../../utils/levelUp'

export default {
  name: 'header-progress',
  computed: {
    ...mapGetters('user', ['getUser']),
    progressXp () {
      return ((this.getUser.xp * 100) / this.setLevelUp)
    },
    setLevelUp () {
      return levelUp(this.getUser.xp)
    }
  }
}
</script>
