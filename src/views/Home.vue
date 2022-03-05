<template>
  <div class="content">
    <v-carousel v-model="slider" cycle>
      <v-carousel-item v-for="slide in sliders" :key="slide">
        <v-img :src="slide">
          <template v-slot:placeholder>
            <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
            >
              <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-carousel-item>
    </v-carousel>

    <ProductGrid cols="2" />
  </div>
</template>

<script>
import ProductGrid from "@/components/ProductGrid";

export default {
  name: "HomePage",
  components: {
    ProductGrid
  },
  data() {
    return {
      slider: 0,
      sliders: [
        require('@/assets/img/sliders/slider_1.png'),
        require('@/assets/img/sliders/slider_2.png'),
        require('@/assets/img/sliders/slider_3.png'),
        require('@/assets/img/sliders/slider_4.png'),
      ]
    }
  }
}
</script>
