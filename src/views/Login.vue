<template>
  <div id="home">
    <button @click="loginAction">Googleアカウントでログイン</button>
  </div>
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
