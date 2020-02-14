<template>
  <q-dialog v-model="buy" persistent>
    <q-card class="m-card m-buy">
      <q-card-section class="m-buy_cash">
        Preço: {{product.price}}
        <img class="m-buy_cash-icon" :src="`statics/store/coin.svg`" alt="">
      </q-card-section>
      <q-card-section class="m-buy_product">
        <h2 class="m-buy_product-name">{{product.name}}</h2>
        <img class="m-buy_product_icon" :src="`statics/store/products/${product.icon}`" alt="">
        <p class="m-buy_product_description">{{product.description}}</p>
      </q-card-section>

      <q-card-actions class="m-buy_add">
        Quantidade: {{qtde}}
        <div>
          <q-btn class="m-buy_add-btn" push round dense icon="remove" @click="remove" />
          <q-btn class="m-buy_add-btn" push round dense icon="add" @click="add" />
        </div>
      </q-card-actions>

      <q-card-section class="m-buy_value">
        Valor total: {{value}}
      </q-card-section>
      <q-separator />

      <q-card-actions align="right">
        <q-btn @click="close" flat class="a-btn_actions" label="Cancelar" />
        <q-btn @click="finishBuy" flat class="a-btn_actions" label="Comprar" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'buy',
  props: {
    buy: Boolean,
    product: Object
  },
  data () {
    return {
      qtde: 1
    }
  },
  methods: {
    remove () {
      if (this.qtde > 1) {
        this.qtde -= 1
      }
    },
    add () {
      if ((this.value + this.product.price) <= this.getUser.money) {
        this.qtde += 1
      }
    },
    finishBuy () {
      this.$emit('close')
    },
    close () {
      this.$emit('close')
    }
  },
  computed: {
    ...mapGetters('user', ['getUser']),
    value () {
      return this.qtde * this.product.price
    }
  }
}
</script>
