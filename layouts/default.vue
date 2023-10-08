<template>
  <v-app>
    <nav-bar/>
    <v-container>
      <Nuxt />
    </v-container>
  </v-app>
</template>

<script>
import NavBar from "../components/NavBar.vue";

export default {
  name: 'DefaultLayout',
  components: {NavBar},
}
</script>
