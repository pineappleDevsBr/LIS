<template>
  <div class="m-cards">
    <q-card class="m-card" v-for="item in products" v-bind:key="item.id" @click="buyProduct(item.id)">
      <q-card-section class="m-store_box-product">
        <div class="m-store_price">
          <strong>{{item.price}}</strong>
          <img class="m-store_coin" :src="`statics/store/coin.svg`" alt="products[1]">
        </div>
        <img class="m-store_icon" :src="`statics/store/products/${item.icon}`" alt="">
        <div class="m-store_product">
          <h2 class="m-store_title">{{item.name}}</h2>
        </div>
      </q-card-section>
    </q-card>
    <buy :buy="buyConfirm" :product="products[productId]" @close="closeBuyConfirm"></buy>
  </div>
</template>

<script>
import buy from '../components/buy-product'
import { mapGetters } from 'vuex'

export default {
  name: 'Store',
  components: {
    buy
  },
  data () {
    return {
      buyConfirm: false,
      productId: 0,
      products: [
        { id: 1, name: 'Vale-presente', price: 100, icon: 'gift-card.svg', description: 'Vale-presente: você pode comprar para presentear um amigo com um item surpresa 😁' },
        { id: 2, name: 'Vale-presente', price: 100, icon: 'gift-card.svg', description: 'Vale-presente: você pode comprar para presentear um amigo com um item surpresa 😁' },
        { id: 3, name: 'Vale-presente', price: 100, icon: 'gift-card.svg', description: 'Vale-presente: você pode comprar para presentear um amigo com um item surpresa 😁' },
        { id: 4, name: 'Vale-presente', price: 100, icon: 'gift-card.svg', description: 'Vale-presente: você pode comprar para presentear um amigo com um item surpresa 😁' },
        { id: 5, name: 'Vale-presente', price: 100, icon: 'gift-card.svg', description: 'Vale-presente: você pode comprar para presentear um amigo com um item surpresa 😁' }
      ]
    }
  },
  methods: {
    buyProduct (id) {
      if (this.getUser.money >= this.products[id - 1].price) {
        this.productId = id - 1
        this.buyConfirm = true
      } else {
        this.$q.notify({
          color: 'negative',
          message: 'Moedas insuficientes!',
          icon: 'monetization_on'
        })
      }
    },
    closeBuyConfirm () {
      this.buyConfirm = false
    }
  },
  computed: {
    ...mapGetters('user', ['getUser'])
  }
}
</script>
