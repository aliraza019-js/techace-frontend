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
        <v-btn v-if="canShowLogin" @click="logOut" to="/login" text>
          <span class="mr-2">Log out</span>
        </v-btn>
        <v-btn v-if="!canShowLogin" to="/login" text>
          <span class="mr-2">Log In</span>
        </v-btn>
      </v-app-bar>
    </v-container>

    <v-main class="pt-0 w-100">
      <router-view></router-view>
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
    token: null,
    canShowLogin: false,
    menuItems: [
      { title: "Home", path: "/" },
      { title: "Emergency Card", path: "/shop" },
      { title: "Business Card", path: "/shop" },
      { title: "Haj Card", path: "/shop" },
      { title: "Contact us", path: "/contact-us" },
    ],
  }),
  methods: {
    setToken(value) {
      this.token = value;
    },
    clearToken() {
      this.token = null;
    },
    logOut() {
      this.clearToken();
      this.canShowLogin = false;
      this.$router.push({ name: "Login" });
    },
  },
  computed: {
    isLoggedOut() {
      if (this.$route.path != "/login") {
        return true;
      } else {
        return false;
      }
    },
  },
  mounted() {
    this.token = localStorage.getItem("auth-token");
    this.$root.$on("userlogin", (item) => {
      this.canShowLogin = item;
    });
    if(this.token){
      this.canShowLogin = true
    }
  },
};
</script>
<style>
.w-100 {
  width: 100% !important;
}
</style>

