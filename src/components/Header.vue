<template>
    <div class="navbar">
      <p v-if="status" class="status">User: {{user.data.user.email}}</p>
      <a class="header-element" href="/">Home</a>
      <a class="header-element" href="/dashboard">Dashboard</a>   
      <a v-if="!status" class="header-element" href="/register">Register</a>
      <a v-if="!status" class="header-element" href="/login">Login</a>
      <button v-if="status" class="header-element" @click="signOut">Sign out</button>
    </div>
</template>

<script>
import firebase from "firebase";

export default {
  computed: {
    user () {
      return this.$store.getters.user;
    },
    status () {
      return this.$store.getters.user.loggedIn;
    }
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          window.location.href = "/";
        });
    }
  }
}
</script>
 
<style lang="css" scoped>
.navbar{
    width:100%;
    height: 50px;
    padding: 0;
    margin:0;
    /* margin-top:5px; */
    display: flex;
    justify-content: flex-end;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #42b883;
}

.header-element{
  height: 100%;
  width: 100px;
  padding: 0;
  margin: 0;
  margin-right: 5px;
  border: none;
  background-color: transparent;
  /* border: 2px solid #047e47;
  background-color: #05854b; */
  display: flex;
  align-items: center;
  justify-content: center;
  font: 20px bold arial, sans-serif;
  color: white;
  text-decoration: none;
}

.status {
  padding: 0;
  margin: 0;
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: auto;
  margin-left: 10px;
  font: 20px bold arial, sans-serif;
  color: white;

}
</style> 