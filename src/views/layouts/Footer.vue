<template>
  <v-footer
      dark
      padless
  >
    <v-card
        flat
        tile
        class="lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
        >
          <v-icon size="24px" class="fa-brands">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Info about company!
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>My market</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data () {
    return {
      icons: [
          'fa-vk',
          'fa-instagram',
          'fa-twitter',
      ]
    }
  }
}
</script>