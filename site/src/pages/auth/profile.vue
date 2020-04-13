<template>
  <div class="o-profile">
    <div class="m-profile_info">
      <img class="m-profile_avatar" :src="`https://api.adorable.io/avatars/75/lis-avatar${getUser.id}.png`" alt="avatar adorable">
      <p class="m-profile_username">{{ getUser.nickname }}</p>
      <q-btn class="m-profile_edit" no-caps flat :label="$t('profile.editData')" @click="openSettings = true"/>
    </div>
    <div class="m-profile_achievements" v-if="achievements.length > 0">
      <h2 class="m-profile_title">Conquistas</h2>

      <q-card class="m-card" v-for="item in achievements" v-bind:key="item.id">
        <q-card-section class="m-profile_card">
          <img class="m-profile_icon" :src="`statics/profile/achievements/${item.icon}`" alt="">
          <div>
            <h2 class="m-profile_subtitle q-dark_title">{{item.title}}</h2>
            <p class="m-profile_description">{{item.description}}</p>
          </div>
        </q-card-section>
        <q-card-section>
          <progressBar :progress="item.progress"></progressBar>
        </q-card-section>
      </q-card>
    </div>
    <settings :settings="openSettings" @closeSettings="closeSettings"></settings>
  </div>
</template>

<script>
import progressBar from '../../components/progress-bar'
import settings from '../../components/settings'
import store from '../../store'
import { mapGetters } from 'vuex'

export default {
  name: 'Profile',
  components: {
    progressBar,
    settings
  },
  data () {
    return {
      openSettings: false,
      achievements: [
        { id: 1, title: 'Resistencia', description: 'Faça 10 dias consecutivos de atividades', icon: 'shield.svg', progress: { showValue: true, levelUp: 10, xp: 10 } },
        { id: 2, title: 'Modo NERD', description: 'Leia 20 textos do nível 3', icon: 'book.svg', progress: { showValue: true, levelUp: 20, xp: 14 } }
      ]
    }
  },
  methods: {
    closeSettings () {
      this.openSettings = false
    }
  },
  computed: {
    ...mapGetters('user', ['getUser'])
  },
  async mounted () {
    await store().dispatch('user/getUser')
  }
}
</script>
