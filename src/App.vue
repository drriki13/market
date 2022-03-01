<template>
  <v-app>
    <NavBar />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import NavBar from "@/views/layouts/NavBar";
import Footer from "@/views/layouts/Footer";

export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  }
};
</script>
