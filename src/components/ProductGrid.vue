<template>
  <div class="container--fluid mb-5">
    <h1 class="mt-2 ml-8">New products</h1>
    <v-row>
      <v-col :cols="cols" v-for="product in products" :key="product.id"
             @click="$router.push({name: 'Product', params: {id: product.id}})">
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
  computed: {
    cols() {
      return this.$store.state.productCols;
    },
    products() {
      return this.$store.state.products;
    }
  },
  methods: {
    goProduct(id) {
      console.log(id);
      this.$router.push({name: 'Product'})
    }
  }
}
</script>
