<template>
  <div>
    <q-header class="o-header">
      <q-toolbar class="flex column">
        <div class="o-header_head">
          <q-toolbar-title class="a-text o-header_title">
          Lis
          </q-toolbar-title>
          <q-circular-progress
          show-value
          font-size="14px"
          :value="progressXp"
          size="60px"
          :thickness="0.12"
          color="negative"
          track-color="grey-3"
        >
          {{ progress.xp }}XP
        </q-circular-progress>
        </div>
        <q-tabs
        inline-label
        shrink
        v-model="tab"
        narrow-indicator
        class="bg-primary text-white o-header_menu">
          <q-tab class="o-header_menu-item" name="activities" label="Atividades" />
          <q-tab class="o-header_menu-item" name="store" label="Loja" />
          <q-tab class="o-header_menu-item" name="profile" label="Perfil" />
          <q-tab class="o-header_menu-item" name="hub" label="Hub de amigos" />
        </q-tabs>
      </q-toolbar>
    </q-header>
  </div>
</template>

<script>
export default {
  name: 'qheader',
  data () {
    return {
      tab: 'activities',
      progress: {
        value: 0, // porcentagem
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
