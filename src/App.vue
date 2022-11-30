<template>
  <v-app>
    <v-container fluid>
      <v-app-bar class="px-2" app color="black" dark>
        <div class="d-flex align-center">
          <v-img
            alt="Logo"
            class="shrink mr-2"
            contain
            :src="require('@/assets/logo.png')"
            transition="scale-transition"
            width="70"
          />
        </div>

        <v-spacer></v-spacer>

        <v-btn v-for="item in menuItems" :key="item.title" :to="item.path" text>
          <span class="mr-2">{{ item.title }}</span>
        </v-btn>
      </v-app-bar>
    </v-container>


    <v-main class="pt-0 w-100">
      <router-view />
    <Footer></Footer>
    </v-main>
  </v-app>
</template>

<script>
import Footer from "./components/common/footer.vue";
export default {
  components: { Footer },
  name: "App",

  data: () => ({
    menuItems: [
      { title: "Home", path: "/" },
      { title: "Emergency Card", path: "/shop" },
      { title: "Business Card", path: "/shop" },
      { title: "Haj Card", path: "/shop" },
      { title: "Contact us", path: "/contact-us" },
      { title: "Log In", path: "/login" },
    ],
  }),
};
</script>
<style>
.w-100 {
  width: 100% !important;
}
</style>

