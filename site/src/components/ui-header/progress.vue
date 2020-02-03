<template>
  <div>
    <q-circular-progress
      show-value
      font-size="14px"
      :value="progressXp"
      size="60px"
      :thickness="0.12"
      color="white"
      track-color="grey-11">
      {{ progress.xp }}XP
    </q-circular-progress>
  </div>
</template>

<script>

export default {
  name: 'header-progress',
  data () {
    return {
      progress: {
        value: 0,
        levelUp: 100,
        xp: 15
      }
    }
  },
  computed: {
    progressXp () {
      return ((this.progress.xp * 100) / this.progress.levelUp)
    }
  }
}
</script>
