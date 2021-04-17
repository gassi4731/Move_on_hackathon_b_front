<template>
  <v-app>
    <v-app-bar absolute color="#20A4AF" elevate-on-scroll scroll-target="#scrolling-techniques-7">
      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <div v-if="photoURL">
        <v-btn depressed color="#20A4AF">HOME</v-btn>
        <v-btn depressed color="#20A4AF">TIPS</v-btn>
        <v-btn depressed color="#20A4AF">QUESTION</v-btn>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <button v-on="on">
              <v-avatar>
                <img v-if="photoURL" :src="photoURL" />
              </v-avatar>
            </button>
          </template>
          <v-list>
            <v-list-item
              ><v-list-item-title>{{ userName }}</v-list-item-title></v-list-item
            >
            <v-list-item @click="logout"><v-list-item-title>Logout</v-list-item-title></v-list-item>
          </v-list>
        </v-menu>
      </div>
      <v-btn v-else outlined color="#ffef00">LOGIN</v-btn>
    </v-app-bar>
    <v-sheet id="scrolling-techniques-7" class="overflow-y-auto" max-height="100vh">
      <v-container style="height: 100vh; padding-top:64px;">
        <router-view />
      </v-container>
    </v-sheet>
  </v-app>
</template>

<script>
import firebase from "firebase";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "App",
  created() {
    firebase.auth().onAuthStateChanged(user => {
      this.setLoginUser(user);
      const nowRouteName = this.$router.currentRoute.name;
      // ログイン済
      if (user) {
        // ログイン画面にいる場合は、ホームに遷移
        if (nowRouteName === "Login") this.$router.push({ name: "Home" });
      }
      // ログインまだ
      else {
        if (nowRouteName != "Login") this.$router.push({ name: "Login" });
      }
    });
  },
  methods: {
    ...mapActions("fireauth", ["logout", "setLoginUser"])
  },
  data() {
    return {
      items: [{ title: "Click Me" }, { title: "Click Me55Click Me55Click Me55" }, { title: "Click Me" }, { title: "Click Me 2" }]
    };
  },
  computed: {
    ...mapGetters("fireauth", ["userName", "photoURL"])
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.v-toolbar__content {
  color: #ffef00;
  .v-btn__content {
    color: #ffef00;
  }
}
</style>
