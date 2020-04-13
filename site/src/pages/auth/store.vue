<template>
  <div class="m-store">
    <div class="m-store_money">
      {{getUser.money}}
      <img class="m-store_coin" src="statics/store/coin.svg" alt="">
    </div>
    <div class="m-spotlight">
      <img class="m-spotlight_icon" src="statics/store/online-store.svg" alt="Store">
      {{ $t('store.title') }}
    </div>
    <div class="m-store_group" v-if="myItems.length > 0">
    <h2 class="m-store_title">{{ $t('store.myItems') }}</h2>
      <div class="m-cards">
        <q-card class="m-card" v-for="item in myItems" v-bind:key="item.id">
          <q-card-section class="m-store_box-product">
            <div class="m-store_price">
              <strong>{{item.qtde}}</strong>x
            </div>
            <img class="m-store_icon" :src="`statics/store/products/${item.icon}`" alt="">
            <div class="m-store_product">
              <h2 class="m-store_subtitle">{{item.name}}</h2>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <h2 class="m-store_title">{{ $t('store.availableItems') }}</h2>
    <div class="m-cards">
      <q-card class="m-card" v-for="item in products" v-bind:key="item.id" @click="buyProduct(item.id)">
        <q-card-section class="m-store_box-product">
          <div class="m-store_price">
            <strong>{{item.price}}</strong>
            <img class="m-store_coin" src="statics/store/coin.svg" :alt="item.name">
          </div>
          <img class="m-store_icon" :src="`statics/store/products/${item.icon}`" alt="">
          <div class="m-store_product">
            <h2 class="m-store_subtitle">{{item.name}}</h2>
          </div>
        </q-card-section>
      </q-card>
      <buy :buy="buyConfirm" :product="products[productId]" @close="closeBuyConfirm"></buy>
    </div>
  </div>
</template>

<script>
import buy from '../../components/buy-product'
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
        { id: 1, name: 'Vale-presente', price: 100, icon: 'gift-card.svg', qtde: 2, description: 'Você pode comprar para presentear um amigo com um item surpresa 😁' },
        { id: 2, name: 'Dobro de XP', price: 120, icon: 'magic.svg', qtde: 2, description: 'Durante 24h você vai duplicar todo o xp que você ganhar!' },
        { id: 3, name: '10% dinheiro', price: 220, icon: 'money.svg', qtde: 2, description: '10% dinheiro: você receberá 10% a mais de todo o dinheiro que você ganhar nas próximas 12h!' }
      ],
      myItems: [
        { id: 1, name: 'Vale-presente', qtde: 1, icon: 'gift-card.svg', description: 'Você pode comprar para presentear um amigo com um item surpresa 😁' },
        { id: 2, name: 'Dobro de XP', price: 120, icon: 'magic.svg', qtde: 3, description: 'Durante 24h você vai duplicar todo o xp que você ganhar!' }
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
