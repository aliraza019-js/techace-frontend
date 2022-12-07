<template>
  <v-app id="inspire">
    <v-container>
      <v-layout align-center justify-center>
        <v-flex xs12 sm12 md12>
          <v-card class="elevation-0">
            <h3>Edit Profile</h3>
            <v-card-text>
              <v-form ref="editProfile">
                <v-row>
                  <!-- <v-col cols="12">
                    <div class="d-flex justify-center">
                      <v-avatar>
                        <img
                          :src="
                            showImage
                              ? showImage
                              : 'https://cdn.vuetifyjs.com/images/john.jpg'
                          "
                          alt="John"
                        />
                      </v-avatar>
                      <input
                        class="d-none"
                        ref="fileUpload"
                        type="file"
                        accept="image/*"
                        @change="pickImage"
                      />
                      <v-icon class="mt-4" @click="uploadImage">
                        mdi-upload
                      </v-icon>
                    </div>
                  </v-col> -->
                  <v-col v-for="(item, i) in businessCard" :key="i" cols="6">
                    <v-text-field
                      :name="item.name"
                      :label="item.label"
                      :type="item.type"
                      v-model="formData[item['name']]"
                      :placeholder="`Enter ${item.label} Here`"
                      filled
                    ></v-text-field>
                  </v-col>
                </v-row>
                <!-- <v-text-field
                      name="name"
                      label="Name"
                      type="text"
                    ></v-text-field>
                    <v-text-field
                      id="password"
                      name="password"
                      label="Password"
                      type="password"
                    ></v-text-field> -->
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="updateUser()">Submit</v-btn>
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
  data() {
    return {
      formData: {},
      showImage: null,
      selectFile: null,
      businessCard: [
        {
          name: "full_name",
          label: "Full Name",
          type: "text",
        },
        {
          name: "email",
          label: "Email",
          type: "email",
        },
        {
          name: "job_title",
          label: "Job title",
          type: "text",
        },
        {
          name: "company_name",
          label: "Company name",
          type: "text",
        },
        {
          name: "mobile_number",
          label: "Mobile number",
          type: "number",
        },
        {
          name: "phone_no",
          label: "Phone no",
          type: "number",
        },
        {
          name: "address",
          label: "Address",
          type: "text",
        },
        {
          name: "user_name",
          label: "User Name",
          type: "text",
        },
        {
          name: "website",
          label: "Website",
          type: "text",
        },
      ],
    };
  },
  methods: {
    pickImage(event) {
      console.log(event);
      this.selectFile = event.target.files[0];
    },
    uploadImage() {
      this.$refs.fileUpload.click();
    },
    updateUser() {
      let id = this.$route.params.userData.id;
      // console.log("id", id);
      // const fd = new FormData();
      // fd.append("image", this.selectFile, this.selectFile.name);
      // console.log('fd' , fd)
      axios
        .put(`api/user/update/${id}`, {
          ...this.formData,
          // fd,
        })
        .then((res) => {
          console.log("res", res);
          this.$router.push("/");
        });
    },
},
  mounted() {
    console.log("this.route", this.$route.params.userData);
    this.formData = Object.assign({}, this.$route.params.userData);
  },
};
</script>

<style>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>