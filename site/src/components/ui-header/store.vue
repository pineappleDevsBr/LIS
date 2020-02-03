<template>
  <div class="o-header_title o-header_money">
    {{money}}
    <img class="o-header_coin" :src="`statics/store/coin.svg`" alt="">
  </div>
</template>

<script>
export default {
  name: 'header-store',
  data () {
    return {
      money: 420
    }
  }
}
</script>
