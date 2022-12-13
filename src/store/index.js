import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: [],
  },
  mutations: {
    ADD_USER_DATA: (state, data) => {
      state.userData.push(data);
    },
  },
  actions: {
    addUserData({ commit }, data) {
      commit("setUserData", data);
    },
  },
  getters: {
    loggedIn(state) {
      return state.logged || false;
    },
  },
  modules: {},
});
