<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
    <bottom-nav />
  </v-app>
</template>

<script>
import BottomNav from "./components/BottomNav.vue";
export default {
  components: { BottomNav },
  name: "App",
  data: () => ({
    //
  }),
};
</script>
