<template>
  <v-app id="inspire">
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card rounded="3" class="elevation-6">
            <v-toolbar dark color="black">
              <v-toolbar-title>Login form</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  name="email"
                  label="Email"
                  v-model="form.email"
                  type="text"
                ></v-text-field>
                <v-text-field
                  id="password"
                  name="password"
                  v-model="form.password"
                  label="Password"
                  type="password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn :loading="loading" color="primary" @click="login()"
                >Login</v-btn
              >
            </v-card-actions>
            <div class="text-center">
              <p>Please Register <a href="/register">here</a></p>
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>
 
 <script>
import axios from "axios";

export default {
  name: "Login",
  props: {
    source: String,
  },
  data() {
    return {
      form: {},
      userData: {},
      loading: false,
    };
  },
  methods: {
    login() {
      axios
        .post("http://127.0.0.1:8000/api/user/login", { ...this.form })
        .then((res) => {
          localStorage.setItem("auth-token", res.data.accessToken);
          
          this.$router.push({
            name: "EditUser", //use name for router push
            params: { userData: this.userData },
          });
        });
    },
  },
  beforeMount() {
    this.$root.$on("user-data", (item) => {
      console.log("BEFORE MOUNT item", item);
      this.userData = item;
      if (item) {
        this.form.password = item.password;
        this.form.email = item.email;
        this.login();
      }
    });
  },
  mounted() {
    this.$root.$on("user-data", (item) => {
      console.log("item", item);
      // if (item) {
      //   this.form.password = item.password;
      //   this.form.email = item.email;
      //   this.login()
      // }
    });
  },
};
</script>
 
 <style></style>
 