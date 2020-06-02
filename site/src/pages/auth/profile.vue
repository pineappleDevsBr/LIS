<template>
  <div class="o-profile">
    <div class="m-profile_info">
      <div>
        <q-skeleton type="QAvatar" class="m-skeleton_avatar -md -center" v-if="!getUser.nickname"/>
        <img class="m-profile_avatar" :src="`https://api.adorable.io/avatars/75/lis-avatar${getUser.id}.png`" alt="avatar adorable" v-else>
      </div>
      <div>
        <q-skeleton type="text" class="m-skeleton_title -high" v-if="!getUser.nickname"/>
        <p class="m-profile_username" v-else>{{ getUser.nickname }}</p>
      </div>
      <q-btn class="m-profile_edit" no-caps flat :label="$t('profile.editData')" @click="openSettings = true"/>
    </div>
    <div class="m-profile_achievements">
      <h2 class="m-profile_title">Notificações</h2>
      <div class="a-text">
        Você não tem nenhuma notificação!
      </div>
    </div>
    <settings :settings="openSettings" @closeSettings="closeSettings"></settings>
  </div>
</template>

<script>
import settings from '../../components/settings'
import store from '../../store'
import { mapGetters } from 'vuex'

export default {
  name: 'Profile',
  components: {
    settings
  },
  data () {
    return {
      avatar: '',
      title: '',
      openSettings: this.$route.params.view
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
