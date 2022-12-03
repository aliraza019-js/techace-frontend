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
      let username = this.$route.path.substring(4, 40);
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
      const name = this.user.name;
      axios({
        url: "http://127.0.0.1:8000/api/download-vcf",
        method: "POST",
        data: {
          ...this.user,
        },
        responseType: "blob",
      }).then((response) => {
        this.close_content = false;
        var FILE = window.URL.createObjectURL(new Blob([response.data]));
        var docUrl = document.createElement("a");
        docUrl.href = FILE;
        docUrl.setAttribute("download", name + ".vcf");
        document.body.appendChild(docUrl);
        docUrl.click();
      });
    },
  },
  mounted() {
    this.getUserDetails();
  },
};
</script>

<style lang="scss" scoped>
</style>