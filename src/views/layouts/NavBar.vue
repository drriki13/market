<template>
  <nav>
    <v-app-bar
        app
        color="dark"
        dense
        dark
        clipped-left
    >
      <!-- Brand -->
      <v-app-bar-nav-icon @click.stop="toggleMini = !toggleMini" />
        <v-app-bar-title>Market</v-app-bar-title>
      <v-spacer></v-spacer>

      <!-- Search -->
      <transition
          name="custom-classes-transition"
          enter-active-class="animated slideInDown"
          leave-active-class="animated slideOutUp"
          mode="out-in"
          :duration="{ enter: 800, leave: 700 }"
      >
        <v-text-field
            v-if="isSearch"
            type="text"
            append-icon="fa-search"
            placeholder="Search..."
            color="indigo"
            class="mr-3"
            style="margin-bottom: -20px"
            autofocus
            @blur="isSearch = false"
            key="searchInput"
        ></v-text-field>

        <v-btn class="mr-3"
               v-else
               outlined
               small
               fab
               color="indigo"
               @click="isSearch = !isSearch"
               key="searchBtn"
        >
          <v-icon small>fa-search</v-icon>
        </v-btn>
      </transition>

      <!-- LogIn -->
      <v-btn class="mr-2"
             color="green"
             outlined
             @click="$emit('openDialog', {name: 'LogIn'})"
      >
        <span>Log In</span>
        <v-icon right>fa-sign-in</v-icon>
      </v-btn>

      <!-- Sing In -->
      <v-btn class="mr-2"
             color="info"
             outlined
             @click="$emit('openDialog', {name: 'SingIn'})"
      >
        <span>Sing In</span>
        <v-icon right>fa-key</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- SideBar -->
    <v-navigation-drawer
        v-model="sidebarMenu"
        app
        floating
        permanent
        :mini-variant.sync="mini"
        dark
        color="black"
        clipped
    >
      <v-list
          nav
          dense
      >
        <v-list-item-group
            active-class="deep-purple--text text--accent-4"
        >
          <v-list-item
              v-for="item in items"
              :key="item.title"
              :to="item.href"
          >
            <v-list-item-title>
              <v-icon>{{ item.icon }}</v-icon>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  computed: {
    mini() {
      return (this.$vuetify.breakpoint.smAndDown) || this.toggleMini
    },
  },
  data () {
    return {
      sidebarMenu: true,
      toggleMini: true,
      isSearch: false,
      items: [
        { title:"Home", href:"/", icon:"mdi-home-outline" },
        { title:"Test", href:"/test", icon:"mdi-shield-account" },
        { title:"Components", href:"/comp", icon:"mdi-palette-swatch" },
        { title:"Customers", href:"/customers", icon:"mdi-account-search-outline" },
        { title:"Orders", href:"/orders", icon:"mdi-bus-clock" },
      ],
    }
  }
}
</script>
