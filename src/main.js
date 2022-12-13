import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import vuetify from "./plugins/vuetify";
axios.defaults.baseURL = 'https://backend.techace.co' 

// Axios base url
// axios.defaults.baseURL = "http://127.0.0.1:8000";

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
      window.location.reload();
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
