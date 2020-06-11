<template>
  <q-card class="m-changeAvatar">
    <q-card-section class="m-changeAvatar_header">
      <h2 class="o-modal_title">Gerar avatares aleatórios!</h2>
    <q-btn
    flat
    icon="close"
    @click="$emit('selectedAvatar')"/>
    </q-card-section>
    <q-card-section class="m-changeAvatar_content">
      <figure class="m-changeAvatar_item">
        <img :src="`${avatar_path}`">
      </figure>
    </q-card-section>
    <q-card-actions align="center" class="text-primary">
      <q-btn flat @click="random" label="Gerar novo avatar"/>
      <q-btn flat @click="selectedAvatar" label="Escolher esse"/>
    </q-card-actions>
  </q-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'changeAvatar',
  data () {
    return {
      avatar: null
    }
  },
  props: {
    selectAvatar: Boolean
  },
  methods: {
    selectedAvatar () {
      this.$emit('selectedAvatar', { avatar: this.avatar })
    },

    random () {
      this.avatar = Math.random().toString(36).substr(2, 4)
    }
  },
  computed: {
    ...mapGetters('user', ['getUser']),
    avatar_path () {
      return `https://api.adorable.io/avatars/75/lis_avatarGenerator-${this.avatar}.png`
    }
  },
  created () {
    this.avatar_path = this.getUser.avatar
  }
}
</script>
