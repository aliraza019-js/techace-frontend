<template>
  <v-app id="inspire">
    <v-container class="mt-5">
      <v-card max-width="1000px" class="mx-auto bg" elevation="2">
        <v-card-title>Edit Profile</v-card-title>
        <!-- <v-img class="" height="200px" :src="require('@/assets/our-products.png')"
          gradient="150deg, rgb(185 224 255 / 58%) 0%, rgb(243 220 246 / 52%) 35%, rgb(223 255 242 / 74%) 74%">
        </v-img> -->
        <span>
          <!-- <img :src="image" alt="card_image"> -->
          <v-btn @click="$refs.coverUpload.click()" class="upload-btn-cover" large icon>
            <v-icon> mdi-camera </v-icon>
          </v-btn>
          <v-img class="" height="200px" :src="coverImage ? coverImage : require('@/assets/our-products.png')"
            gradient="150deg, rgb(185 224 255 / 58%) 0%, rgb(243 220 246 / 52%) 35%, rgb(223 255 242 / 74%) 74%">
          </v-img>
          <input @change="handleCoverImage" class="d-none" ref="coverUpload" type="file" accept="image*">
        </span>
        <div class="d-flex justify-center align-center pa-0">
          <!-- <img :src="image" alt="card_image"> -->
          <v-avatar class="profile avatar-center-heigth avatar-shadow" color="grey" size="164">
            <v-btn @click="$refs.fileUpload.click()" class="upload-btn" x-large icon>
              <v-icon> mdi-camera </v-icon>
            </v-btn>
            <v-img :src="image"></v-img>
          </v-avatar>
          <input @change="handleImage" class="custom-input d-none" ref="fileUpload" type="file" accept="image*">
        </div>
        <v-row color=" #0000" class="profile-text-name ma-4 pt-16">
          <v-col v-for="(item, i) in businessCard" :key="i" cols="6">
            <label for="">{{ item.label }}</label>
            <v-text-field :name="item.name" :type="item.type" :disabled="item.name == 'user_name'"
              v-model="formData[item['name']]" :placeholder="`Enter ${item.label} Here`" filled></v-text-field>
          </v-col>
        </v-row>
        <div class="float-end">
          <v-btn :loading="loading" outlined color="#cb3744" @click="updateUser()">Submit</v-btn>
        </div>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  components: {},
  data() {
    return {
      formData: {},
      image: '',
      coverImage: '',
      imageUrl: null,
      coverImageUrl: null,
      loading: false,
      snackbar: false,
      snackbarData: {
        icon: "",
        text: "",
        color: "",
      },
      timeout: 2000,
      avatar: null,
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
        {
          name: "Linkedin",
          label: "linkedin",
          type: "text",
        },
      ],
    };
  },
  methods: {
    handleImage(e) {
      const selectedImage = e.target.files[0]; // get first file
      this.createBase64Image(selectedImage);
    },
    createBase64Image(fileObject) {
      const reader = new FileReader();

      reader.onload = (e) => {
        this.image = e.target.result;
        console.log('image', this.image)
        this.uploadImage();
      };
      reader.readAsDataURL(fileObject);
    },
    uploadImage() {
      const { image } = this;
      let id = this.formData.id
      axios.post(`api/upload-image/${id}`, { image })
        .then((response) => {
          console.log(response)
          this.imageUrl = response.data;
        })
        .catch((err) => {
          return new Error(err.message);
        })
    },
    handleCoverImage(e) {
      const selectedCoverImage = e.target.files[0]; // get first file
      this.createBase64CoverImage(selectedCoverImage);
    },
    createBase64CoverImage(fileObjectcover) {
      const reader = new FileReader();

      reader.onload = (e) => {
        this.coverImage = e.target.result;
        console.log('coverImage', this.coverImage)
        this.uploadCoverImage();
      };
      reader.readAsDataURL(fileObjectcover);
    },
    uploadCoverImage() {
      // const { coverimage } = this;
      let id = this.formData.id
      axios.post(`api/upload-cover-image/${id}`, { coverImage : this.coverImage })
        .then((res) => {
          console.log(res)
          this.coverImageUrl = res.data;
        })
        .catch((err) => {
          return new Error(err.message);
        })
    },
    updateUser() {
      this.loading = true;
      let id = this.formData.id;
      axios
        .put(`api/user/update/${id}`, {
          ...this.formData,
          image: this.imageUrl,
          coverImage: this.coverImageUrl
          // fd,
        })
        .then((res) => {
          this.loading = false;
          console.log("res", res);
          this.$router.push("/");
        })
        .catch((err) => {
          console.log("err", err);
          this.loading = false;
          // this.snackbar = true;
          // this.snackbarData.text = err.response.data;
          // this.snackbarData.color = "error";
          // this.snackbarData.icon = "alert";
        });
    },
  },
  mounted() {
    console.log("this.route", this.$route.params.userData);
    var userData = JSON.parse(localStorage.getItem("user"));
    this.formData = Object.assign({}, userData);
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

.upload-btn {
  position: absolute !important;
  z-index: 999;
  top: 121px;
  color: cadetblue;
  background: blueviolet;
  background: rgb(125, 198, 163);
  background: linear-gradient(50deg,
      rgba(125, 198, 163, 1) 0%,
      rgba(35, 216, 227, 1) 72%);
}

.upload-btn-cover {
  position: absolute !important;
  z-index: 999;
  right: 5px;
  top: 70px;
  color: cadetblue;
  background: blueviolet;
  background: rgb(125, 198, 163);
  background: linear-gradient(50deg,
      rgba(125, 198, 16, 1) 0%,
      rgba(35, 216, 220, 1) 72%);
}

.bg {
  background: rgb(255, 197, 185);
  background: linear-gradient(0deg,
      rgba(255, 197, 185, 0.711922268907563) 0%,
      rgba(220, 246, 223, 0.6671043417366946) 35%,
      rgba(255, 255, 255, 0.7539390756302521) 74%),
    url();
}

.avatar-shadow {
  box-shadow: 0px 0px 10px 0px rgba(50, 12, 112, 0.75);
  -webkit-box-shadow: 0px 0px 10px 0px rgba(50, 12, 112, 0.75);
  -moz-box-shadow: 0px 0px 10px 0px rgba(50, 12, 112, 0.75);
}

.font-12 {
  font-size: 12px;
}
</style>