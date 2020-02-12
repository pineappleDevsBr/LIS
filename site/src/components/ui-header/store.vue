<template>
  <div class="o-header_title o-header_money">
    {{getUser.money}}
    <img class="o-header_coin" :src="`statics/store/coin.svg`" alt="">
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'header-store',
  computed: {
    ...mapGetters('user', ['getUser'])
  }
}
</script>
