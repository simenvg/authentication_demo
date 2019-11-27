import Vue from 'vue'
import App from './App.vue'
import { routes } from './routes'
import VueRouter from 'vue-router'
import store from "./store";
import * as firebase from "firebase";

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.config.productionTip = false

var config = {
  apiKey: "AIzaSyB-puayQ4D-_l19cfSTOxA4CW38heMT9eU",
  authDomain: "fluent-webbing-257713.firebaseapp.com",
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(user => {
  firebase.auth().currentUser.getIdToken(true).then(function(idToken){
    store.dispatch("fetchUser", [user, idToken]);
  });
  
});

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
