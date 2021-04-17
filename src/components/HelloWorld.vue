<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img :src="require('../assets/logo.png')" class="my-3" contain height="100px" />
      </v-col>

      <v-col cols="6">
        <h1 style="color: #4BBBAC">自分の知識を<br />メンターたちに教えよう</h1>
        <router-link to="/tips"><img src="../assets/tips.svg" class="nav"/></router-link>
      </v-col>
      <v-col cols="6">
        <h1 style="color: #005497">わからないことは<br />メンターたちに聞こう</h1>
        <router-link to="/qa"><img src="../assets/qa.svg" class="nav"/></router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({})
};
</script>

<style scoped>
h1 {
  margin-top: 100px;
}
.nav {
  margin-top: 15px;
  width: 300px;
}
</style>
