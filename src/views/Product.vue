<template>
  <div class="container mb-5">
    <v-row>
      <v-col cols="6">
        <v-img
            :src="getImg"
            width="50%"
        >
          <v-card-title v-text="title"></v-card-title>
        </v-img>
      </v-col>
      <v-col cols="6" style="max-width: 500px;">
        <h1>{{product.title}}</h1>
        <h3>Описание:</h3>
        <span>{{product.description}}</span>

        <v-row class="mt-5">
          <v-col cols="6">{{totalPrice}} p.</v-col>
          <v-col cols="6"><v-btn color="success">Купить</v-btn></v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "ProductPage",
  computed: {
    id() {
      return this.$route.params.id;
    },
    product() {
      return this.$store.state.products.find( p => p.id == this.id );
    },
    getImg() {
      let path = require('@/assets/img/products/no_img.png');
      if (this.product.img != null) {
        path = require('@/assets/img/products/' + this.product.img + '.png');
      }
      return path;
    },
    discountSum() {
      if (this.product.discount == null) {
        return 0;
      }

      return Math.floor((this.product.price / 100) * this.product.discount);
    },
    totalPrice() {
      return this.product.price - this.discountSum;
    }
  }
}
</script>
