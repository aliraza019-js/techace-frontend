<template>
  <v-app id="inspire">
    <v-container class="my-auto">
      <v-layout wrap>
        <v-flex sm12 md6 offset-md3>
          <v-card elevation="4" width="500px" light tag="section">
            <v-card-title>
              <v-layout align-center justify-space-between>
                <v-flex>
                  <v-img
                    contain
                    height="48px"
                    position="center"
                    :src="require('@/assets/logo.png')"
                  ></v-img>
                </v-flex>
              </v-layout>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <p class="text-center">Sign in with your Email and password:</p>
              <v-form>
                <label><strong>Email</strong></label>
                <v-text-field
                  name="email"
                  placeholder="Enter your Email here"
                  outlined
                  autocomplete="new-password"
                  v-model="form.email"
                  type="text"
                ></v-text-field>  
                <label><strong>Password</strong></label>
                <v-text-field
                  id="password"
                  name="password"
                  outlined
                  autocomplete="new-password"
                  placeholder="Enter your password here"
                  v-model="form.password"
                  type="password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn :loading="loading" color="primary" @click="login()"
                >Login</v-btn
              >
            </v-card-actions>
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
      axios.post("api/user/login", { ...this.form }).then((res) => {
        localStorage.setItem("auth-token", res.data.accessToken);
        this.$root.$emit('userlogin' , true)
        this.$router.push({
          name: "EditUser", //use name for router push
          params: { userData: this.userData },
        });
      });
    },
  },
  beforeMount() {
    localStorage.removeItem("auth-token");
    // this.$route.params.userFormData
    console.log(
      "this.$route.params.userFormData",
      this.$route.params.userFormData
    );
    this.userData = this.$route.params.userFormData;
    if (this.userData) {
      this.form.password = this.userData.password;
      this.form.email = this.userData.email;
      this.login();
    }
    // this.$root.$on("user-data", (item) => {
    //   console.log("BEFORE MOUNT item", item);
    //   this.userData = item;
    //   if (item) {
    //     this.form.password = item.password;
    //     this.form.email = item.email;
    //     this.login();
    //   }
    // });
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
 