<template>
  <div class="m-store">
    <div class="m-store_money">
      <span id="countStore">{{getUser.money}}</span>
      <img class="m-store_coin" src="statics/store/coin.svg" alt="">
    </div>
    <div class="m-spotlight">
      <img class="m-spotlight_icon" src="statics/store/online-store.svg" alt="Store">
      {{ $t('store.title') }}
    </div>
    <div class="m-store_group" v-if="getMyItems.length > 0">
    <h2 class="m-store_title">{{ $t('store.myItems') }}</h2>
      <div class="m-cards" v-if="!getMyItems">
        <q-card class="m-card m-skeleton -center" v-for="index in 2" v-bind:key="`skl_${index}`">
          <q-card-section class="q-pa-xs">
            <q-skeleton type="text" class="m-skeleton_price" />
          </q-card-section>
          <q-card-section class="q-pa-xs">
            <q-skeleton type="QAvatar" class="m-skeleton_avatar -center" />
          </q-card-section>
          <q-card-section class="q-pa-xs">
            <q-skeleton type="text" class="m-skeleton_title -sm -center" />
          </q-card-section>
        </q-card>
      </div>
      <div class="m-cards" v-else>
        <q-card class="m-card" v-for="item in getMyItems" v-bind:key="item.id">
          <q-card-section class="m-store_box-product">
            <div class="m-store_price">
              <strong>{{ item.active === 0 ? 'USAR' : 'EM USO'}}</strong>
            </div>
            <img class="m-store_icon" :src="`statics/store/products/${item.icon}.svg`" alt="">
            <div class="m-store_product">
              <h2 class="m-store_subtitle">{{item.name}}</h2>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <h2 class="m-store_title">{{ $t('store.availableItems') }}</h2>
    <div class="m-cards" v-if="!getItems">
      <q-card class="m-card m-skeleton -center" v-for="index in 3" v-bind:key="`skl_${index}`">
        <q-card-section class="q-pa-xs">
          <q-skeleton type="text" class="m-skeleton_price" />
        </q-card-section>
        <q-card-section class="q-pa-xs">
          <q-skeleton type="QAvatar" class="m-skeleton_avatar -center" />
        </q-card-section>
        <q-card-section class="q-pa-xs">
          <q-skeleton type="text" class="m-skeleton_title -sm -center" />
        </q-card-section>
      </q-card>
    </div>
    <div class="m-cards" v-else>
      <q-card class="m-card" v-for="item in getItems" v-bind:key="item.id" @click="buyProduct(item.id)">
        <q-card-section class="m-store_box-product">
          <div class="m-store_price">
            <strong>{{item.price}}</strong>
            <img class="m-store_coin" src="statics/store/coin.svg" :alt="item.name">
          </div>
          <img class="m-store_icon" :src="`statics/store/products/${item.icon}.svg`" :alt="item.name">
          <div class="m-store_product">
            <h2 class="m-store_subtitle">{{item.name}}</h2>
          </div>
        </q-card-section>
      </q-card>
      <buy :buy="buyConfirm" :product="getItems[productId]" @close="closeBuyConfirm"></buy>
    </div>
  </div>
</template>

<script>
import buy from '../../components/buy-product'
import store from '../../store'
import { mapGetters } from 'vuex'
import { CountUp } from 'countup.js'

export default {
  name: 'Store',
  components: {
    buy
  },
  data () {
    return {
      buyConfirm: false,
      productId: 0,
      currentMoney: 0
    }
  },
  methods: {
    buyProduct (id) {
      if (this.getUser.money >= this.getItems[id - 1].price) {
        this.productId = id - 1
        this.buyConfirm = true
        this.currentMoney = this.getUser.money
      } else {
        this.$q.notify({
          color: 'negative',
          message: 'Moedas insuficientes!',
          icon: 'monetization_on'
        })
      }
    },
    async closeBuyConfirm () {
      const options = { startVal: this.currentMoney }
      let demo = new CountUp('countStore', this.getUser.money, options)
      if (!demo.error) {
        demo.start()
      } else {
        console.error(demo.error)
      }

      await store().dispatch('store/getMyItems')
      this.buyConfirm = false
    }
  },
  computed: {
    ...mapGetters('user', ['getUser']),
    ...mapGetters('store', ['getItems']),
    ...mapGetters('store', ['getMyItems'])
  },
  async mounted () {
    await store().dispatch('store/getItems')
    await store().dispatch('store/getMyItems')
  }
}
</script>
