<template>
  <q-btn round class="a-btn -dark -back" icon="arrow_back" @click="back"/>
</template>

<script>
export default {
  name: 'btnBack',
  methods: {
    back () {
      this.$emit('back')
    }
  }
}
</script>
