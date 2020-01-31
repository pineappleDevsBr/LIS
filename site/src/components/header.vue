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
          color="white"
          track-color="grey-11"
        >
          {{ progress.xp }}XP
        </q-circular-progress>
        </div>
        <div class="o-header_menu">
          <router-link class="o-header_menu-item -active" :to="{ name: 'home' }">
            Atividades
          </router-link>
          <router-link class="o-header_menu-item" :to="{ name: 'store' }">
            Loja
          </router-link>
          <router-link class="o-header_menu-item" :to="{ name: 'profile' }">
            Perfil
          </router-link>
          <router-link class="o-header_menu-item" :to="{ name: 'hub' }">
            Hub de amigos
          </router-link>
        </div>
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
