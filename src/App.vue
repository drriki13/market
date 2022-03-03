<template>
  <v-app>
    <NavBar @openDialog="openDialog" />
    <v-main>
      <v-dialog
          v-model="showDialog"
          max-width="400px"
      >
        <component :is="dialogView"></component>
      </v-dialog>
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
    Footer,
  },
  data() {
    return {
      showDialog: false,
      dialogView: null
    }
  },
  methods: {
    openDialog(e) {
      this.dialogView = () => import('@/views/' + e.name);
      this.showDialog = true;
    }
  }
};
</script>
