<template>
  <div>
    <v-container>
      <v-layout align-center justify-center>
        <v-flex xs12 sm12 md12>
          <v-card class="mx-auto" max-width="434" tile>
            <v-img
              height="100%"
              src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
            >
              <v-row align="end" class="fill-height">
                <v-col align-self="start" class="pa-0" cols="12">
                  <v-avatar class="profile" color="grey" size="164" tile>
                    <v-img
                      src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
                    ></v-img>
                  </v-avatar>
                </v-col>
                <v-col class="py-0">
                  <v-list-item color="rgba(0, 0, 0, .4)" dark>
                    <v-list-item-content>
                      <v-list-item-title class="text-h6">
                        {{ user.name }}
                      </v-list-item-title>
                      <v-list-item-subtitle>{{
                        user.email
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>
            </v-img>
          </v-card>
          <v-btn @click="addToPhone"> Add to Phone </v-btn>
          <v-card class="elevation-0">
            <v-card-text>
              <v-form ref="editProfile">
                <v-row>
                  <v-col v-for="(item, i) in userProfile" :key="i" cols="6">
                    <p>{{ item }}</p>
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" to="/">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      userProfile: [],
      user: {},
    };
  },
  methods: {
    getUserDetails() {
      let username = "aliraza012";
      console.log("this.route.params", username);
      axios
        .get(`http://127.0.0.1:8000/api/user/details/${username}`)
        .then((res) => {
          console.log("res", res);
          this.userProfile = res.data;
          this.user = {
            name: res.data.full_name,
            email: res.data.email,
            jobTitle: res.data.job_title,
            number: res.data.mobile_number,
            address: res.data.address,
          };
        });
    },
    addToPhone() {
      //   var payload = {
      //     name: "this.user.name",
      //     email: "ali@aliraza.com",
      //     jobtitle: "SOftware Engineer",
      //     phone: "03334039462",
      //     address: "Abc",
      //     company: "Techace",
      //   };
      window.csrfToken = document.querySelector(
        'meta[name="csrf-token"]'
      ).content;
      let url = "/download-vcf";
      let baseUrl = "http://127.0.0.1:8000";
    //   var token = localStorage.getItem("auth-token");
      location.href = baseUrl + url + '/8';
    //   axios
    //     .post(
    //       `http://127.0.0.1:8000/download-vcf`,
    //       {
    //         name: "Ali Raza",
    //         email: "ali@aliraza.com",
    //         jobtitle: "SOftware Engineer",
    //         phone: "03334039462",
    //         address: "Abc",
    //         company: "Techace",
    //       },
    //       {
    //         headers: {
    //           Authorization: "Bearer " + token,
    //           "X-CSRF-TOKEN": window.csrfToken,
    //         },
    //       }
    //     )
    //     .then((res) => {
    //       console.log("res", res);
    //     //   location.href = baseUrl + url;
    //     });
    },
  },
  mounted() {
    this.getUserDetails();
  },
};
</script>

<style lang="scss" scoped>
</style>