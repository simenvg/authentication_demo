import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    user: {
      loggedIn: false,
      data: null,
      idToken: ''
    }
  },
  getters: {
    user(state){
      return state.user
    },
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data, idToken) {
      state.user.data = data;
      state.user.idToken = idToken;
    }
  },
  actions: {
    fetchUser({ commit }, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        commit("SET_USER", {
          user: user[0],
          idToken: user[1]
        });
      } else {
        commit("SET_USER", null);
      }
    }
  }
});