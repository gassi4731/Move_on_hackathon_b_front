import firebase from "firebase/app";

export default {
  namespaced: true,
  state: {
    userInfo: null
  },
  mutations: {
    addUserInfo(state, { userData }) {
      state.userInfo = userData;
    },
    deleteUserInfo(state) {
      state.userInfo = null;
    }
  },
  actions: {
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
    getUid: state => (state.userInfo ? state.userInfo.userId : null)
  }
};
