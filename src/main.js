import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase/app";
import { firebaseConfig } from "./../config/firebase-config.js";
import router from "./router";

Vue.config.productionTip = false;

firebase.initializeApp(firebaseConfig);

new Vue({
  store: store,
  vuetify: vuetify,
  router,
  render: h => h(App)
}).$mount("#app");
