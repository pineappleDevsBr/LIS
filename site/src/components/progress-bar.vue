<template>
  <div class="m-progressBar">
    <q-linear-progress rounded size="15px" class="m-progressBar-item" color="accent" :value="progressXp"/>
    <div v-if="progress.showValue" class="m-progressBar-item">
      <span class="m-progressBar-value">{{progress.xp}}/</span><span :class="`m-progressBar-value ${progress.xp === progress.levelUp ? '' : '-negative'}`">{{progress.levelUp}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'progress',
  data () {
    return {
      progress: {
        showValue: false,
        value: 0,
        levelUp: 100,
        xp: 10
      }
    }
  },
  computed: {
    progressXp () {
      return (((this.progress.xp * 100) / this.progress.levelUp) / 100)
    }
  }
}
</script>
