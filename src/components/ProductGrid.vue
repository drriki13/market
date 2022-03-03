<template>
  <div class="container--fluid">
    <h1 class="mt-2 ml-4">New products</h1>
    <v-row>
      <v-col :cols="cols" v-for="product in products" :key="product.title">
        <ProductCart
            :title="product.title"
            :discount="product.discount"
            :img="product.img"
            :price="product.price"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ProductCart from "./ProductCart";

export default {
  name: "ProductGrid",
  components: {
    ProductCart
  },
  props: {
    products: Array,
    cols: {
      default: 2
    }
  }
}
</script>
