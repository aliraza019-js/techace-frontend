<template>
  <v-app id="inspire">
    <v-container>
      <v-layout align-center justify-center>
        <v-flex xs12 sm12 md12>
          <v-card class="elevation-0">
            <h3>Register</h3>
            <v-card-text>
              <v-form ref="registration">
                <v-row>
                  <v-col v-for="(item, i) in registration" :key="i" cols="6">
                    <label for=""
                      ><strong>{{ item.label }}</strong></label
                    >
                    <v-text-field
                      :name="item.name"
                      v-model="formData[item['name']]"
                      :type="item.type"
                      :placeholder="`Enter ${item.label} Here`"
                      filled
                      :rules="
                        item.type == 'password' &&
                        (item.label == 'Confirm Password'
                          ? confirmPasswordRules
                          : passwordRules)
                      "
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
              <v-btn
                :loading="loading"
                outlined
                color="#cb3744"
                @click="register()"
                >Enjoy Your Profile</v-btn
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
      formData: {},
      loading: false,
      passwordRules: [
        (value) => !!value || "Please type password.",
        (value) => (value && value.length >= 6) || "minimum 6 characters",
      ],
      confirmPasswordRules: [
        (value) => !!value || "type confirm password",
        (value) =>
          value === this.formData.password ||
          "The password confirmation does not match.",
      ],
      registration: [
        {
          name: "full_name",
          label: "Name",
          type: "text",
        },
        {
          name: "user_name",
          label: "User Name",
          type: "text",
        },
        {
          name: "email",
          label: "Email",
          type: "email",
        },
        {
          name: "password",
          label: "Password",
          type: "password",
        },
        {
          name: "password_confirmation",
          label: "Confirm Password",
          type: "password",
        },
      ],
    };
  },
  methods: {
    register() {
      this.loading = true;
      axios.post("/api/user/register", { ...this.formData }).then((res) => {
        console.log(res.data);
        this.loading = false;
        localStorage.setItem("user", JSON.stringify(res.data));
        this.formData.id = res.data.id;
        this.$root.$emit("user-data", this.formData);
        this.$router.push({
          name: "Login", //use name for router push
          params: { userFormData: this.formData },
        });
        // this.$router.push("/login");
      });
    },
  },
};
</script>
   
   <style></style>
   