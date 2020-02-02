<template>
  <div>
    <q-header class="o-header">
      <q-toolbar class="flex column">
        <div class="o-header_head">
          <q-toolbar-title class="a-text o-header_title">
            <q-icon name="arrow_back" v-if="title !== 'LIS'"/>
            {{ title }}
          </q-toolbar-title>
          <div v-if="routerActive === 'home'">
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
          <div v-else-if="routerActive === 'store'" class="o-header_title o-header_money">
            {{money}}
            <img class="o-header_coin" :src="`statics/store/coin.svg`" alt="">
          </div>
          <div v-else-if="routerActive === 'profile'">
            <q-btn flat dense round no-ripple :to="{ name: 'settings' }">
              <img class="o-header_settings" :src="`statics/profile/cog.svg`" alt="">
            </q-btn>
          </div>
          <div v-else-if="routerActive === 'hub'">
            <q-btn flat dense round no-ripple>
              <img class="o-header_add-friends" :src="`statics/hub/add-friend.svg`" alt="">
            </q-btn>
          </div>
        </div>
        <div class="o-header_menu" v-if="title === 'LIS'">
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
      money: 420,
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
    },

    routerActive () {
      return this.$route.name
    },

    title () {
      if (this.routerActive === 'settings') return 'Configurações'
      else return 'LIS'
    }
  }
}
</script>
