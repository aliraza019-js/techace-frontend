import Vue from "vue";
import App from "./App.vue";
import firebase from "firebase/compat/app";
import router from "./router";
import store from "./store";
import axios from 'axios'
import vuetify from "./plugins/vuetify";
import { firebaseconfig } from "./firebase-config.js";
import "firebase/compat/firestore";

firebase.initializeApp(firebaseconfig);
export const db = firebase.firestore();
console.log("firebse", db);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // if (error.response.status === 401) {
    //   localStorage.removeItem("vue-authenticate.vueauth_token");
    //   router.push('/login')
    // }
    if (error.response && 419 === error.response.status) {
      window.location.reload()
  }

    return Promise.reject(error);
  }
);


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
