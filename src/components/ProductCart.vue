<template>
  <v-hover v-slot="{ hover }">
    <v-card
        class="mx-auto mt-4"
        max-width="220"
        :elevation="hover ? 6 : 2"
    >
      <div class="ribbon-wrapper" v-if="discount">
        <div class="ribbon green">-{{discount}}%</div>
      </div>
      <v-img
          :src="getImg"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="130px"
      >
        <v-card-title v-text="title"></v-card-title>
      </v-img>
      <v-card-actions>
        {{ totalPrice }} р

        <v-spacer></v-spacer>

        <v-btn icon color="success">
          <v-icon>mdi-cart</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: "ProductCart",
  props: {
    title: String,
    img: null,
    price: String,
    discount: null
  },
  computed: {
    getImg() {
      let path = require('@/assets/img/products/no_img.png');
      if (this.img != null) {
        path = require('@/assets/img/products/' + this.img + '.png');
      }
      return path;
    },
    discountSum() {
      if (this.discount == null) {
        return 0;
      }

      return Math.floor((this.price / 100) * this.discount);
    },
    totalPrice() {
      return this.price - this.discountSum;
    }
  }
}
</script>

<style>
.ribbon-wrapper {
  width: 85px;
  height: 88px;
  overflow: hidden;
  position: absolute;
  top: -3px;
  right: -3px;
  z-index: 3;
}
.ribbon {
  font-size: 12px;
  color: #FFF;
  text-transform: uppercase;
  font-family: 'Montserrat Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  letter-spacing: .05em;
  line-height: 15px;
  text-align: center;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, .4);
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  position: relative;
  padding: 7px 0;
  right: -11px;
  top: 10px;
  width: 100px;
  height: 28px;
  -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, .3);
  box-shadow: 0 0 3px rgba(0, 0, 0, .3);
  background-color: #dedede;
  background-image: -webkit-linear-gradient(top, #ffffff 45%, #dedede 100%);
  background-image: -o-linear-gradient(top, #ffffff 45%, #dedede 100%);
  background-image: linear-gradient(to bottom, #ffffff 45%, #dedede 100%);
  background-repeat: repeat-x;
  filter: progid: DXImageTransform.Microsoft.gradient(startColorstr='#ffffffff', endColorstr='#ffdedede', GradientType=0)
}

.ribbon:before,
.ribbon:after {
  content: "";
  border-top: 3px solid #9e9e9e;
  border-left: 3px solid transparent;
  border-right: 3px solid transparent;
  position: absolute;
  bottom: -3px
}

.ribbon:before {
  left: 0
}

.ribbon:after {
  right: 0
}

.ribbon.green {
  background-color: #ffba00;
  background-image: -webkit-linear-gradient(top, #ffba00 45%, #ffa500 100%);
  background-image: -o-linear-gradient(top, #ffba00 45%, #ffa500 100%);
  background-image: linear-gradient(to bottom, #ffba00 45%, #ffa500 100%);
  background-repeat: repeat-x;
  filter: progid: DXImageTransform.Microsoft.gradient(startColorstr='#ffba00', endColorstr='#ffa500', GradientType=0)
}

.ribbon.green:before,
.ribbon.green:after {
  border-top: 3px solid #e6a519
}

.ribbon.red {
  background-color: #bc1a3a;
  background-image: -webkit-linear-gradient(top, #a61733 45%, #bc1a3a 100%);
  background-image: -o-linear-gradient(top, #a61733 45%, #bc1a3a 100%);
  background-image: linear-gradient(to bottom, #a61733 45%, #bc1a3a 100%);
  background-repeat: repeat-x;
  filter: progid: DXImageTransform.Microsoft.gradient(startColorstr='#ffa61733', endColorstr='#ffbc1a3a', GradientType=0)
}

.ribbon.red:before,
.ribbon.red:after {
  border-top: 3px solid #8f142c
}
</style>
