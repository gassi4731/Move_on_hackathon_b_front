<template>
  <v-container class="text-center">
    <v-img :src="require('../assets/logo.png')" class="my-3" contain height="150" />
    <h1>Googleアカウントで</h1>
    <button style="color: #005497; font-size: 60px" @click="loginAction">ログイン</button>
  </v-container>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      msg: "Welcome to Moh_b"
    };
  },
  methods: {
    loginAction() {
      this.$store.dispatch("fireauth/login");
    }
  }
};
</script>
