import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import fireauth from "../modules/fireauth";

Vue.use(Vuex);

/* eslint-disable no-new */
const store = new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
    fireauth: fireauth
  }
});

export default store;
