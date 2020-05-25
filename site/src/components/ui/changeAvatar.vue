<template>
  <q-dialog v-model="selectAvatar" persistent>
     <q-card class="m-card">
        <q-card-section class="m-changeAvatar">
          <figure class="m-changeAvatar_item" v-for="avatar in avatars" v-bind:key="avatar.id" @click="selectedAvatar(avatar.image)">
            <img :src="`https://api.adorable.io/avatars/50/${avatar.image}`">
          </figure>
        </q-card-section>
     </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: 'changeAvatar',
  data () {
    return {
      avatars: [
        { id: 1, image: 'lis-avatar1.png' },
        { id: 2, image: 'lis-avatar2.png' },
        { id: 3, image: 'lis-avatar3.png' },
        { id: 4, image: 'lis-avatar4.png' },
        { id: 5, image: 'lis-avatar5.png' },
        { id: 6, image: 'lis-avatar6.png' }
      ]
    }
  },
  props: {
    selectAvatar: Boolean
  },
  methods: {
    selectedAvatar (avatar) {
      if (avatar) this.$emit('selectedAvatar', { avatar })
      else this.$emit('selectedAvatar')
    }
  }
}
</script>
