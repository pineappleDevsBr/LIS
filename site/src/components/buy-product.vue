<template>
  <q-dialog v-model="buy">
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
        <q-btn class="m-buy_add-btn" push round dense icon="add" @click="qtde += 1" />
      </q-card-actions>

      <q-card-section class="m-buy_value">
        Valor total: {{value}}
      </q-card-section>
      <q-separator />

      <q-card-actions align="right">
        <q-btn v-close-popup flat class="m-buy_btn" label="Cancelar" />
        <q-btn v-close-popup flat class="m-buy_btn" label="Comprar" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
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
  computed: {
    value () {
      return this.qtde * this.product.price
    }
  }
}
</script>
