<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1>Tips集</h1>
      </v-col>

      <v-col cols="6">
        <TipsCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TipsCard from "@/components/TipsCard.vue";

export default {
  name: "HelloWorld",
  components: {
    TipsCard
  },
  data: () => ({})
};
</script>

<style scoped>
h1 {
  font-size: 60px;
}
.nav {
  margin-top: 15px;
  width: 300px;
}
</style>
