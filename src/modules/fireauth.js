import firebase from "firebase";

export default {
  namespaced: true,
  state: {
    login_user: null
  },
  mutations: {
    setLoginUser(state, user) {
      state.login_user = user;
    },
    addUserInfo(state, { userData }) {
      state.login_user = userData;
    },
    deleteUserInfo(state) {
      state.login_user = null;
    }
  },
  actions: {
    setLoginUser({ commit }, user) {
      commit("setLoginUser", user);
    },
    // ログイン
    login(commit) {
      firebase
        .auth()
        .signInWithRedirect(new firebase.auth.GoogleAuthProvider())
        .then(function() {
          const user = firebase.auth.currentUser();
          var userData = {};
          userData.uid = user.uid;
          userData.userName = user.displayName;
          userData.photoUrl = user.photoURL;
          commit("addUserInfo", { userData: userData });
        })
        .catch(function(error) {
          alert("認証に失敗しました。");
          console.error("Google SignIn :", error);
        });
    },
    //
    // ログアウト
    async logout(commit) {
      await firebase.auth().signOut();
      commit("deleteUserInfo");
    }
  },

  getters: {
    uid: state => (state.login_user ? state.login_user.uid : null),
    userName: state => (state.login_user ? state.login_user.displayName : ""),
    photoURL: state => (state.login_user ? state.login_user.photoURL : "")
  }
};
