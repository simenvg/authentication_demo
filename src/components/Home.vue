<template>
  <div class="hello">
    <h1>Google Cloud demo</h1>
    <h3>Test of Google Identity Platform, Google Cloud App Engine etc.</h3>
    <br>
    <br>
    <p v-if="!status">You are not logged in, register user or log in to use the dashboard</p>
    <p v-if="status">You are logged in</p>
    <br>
    <br>
    <div class="btns">
      <button class="btn" @click="openEndpoint">Open endpoint</button>
      <button class="btn" @click="closedEndpoint">Protected endpoint</button>
      <button class="btn" @click="closedEndpointHeader">Protected with idToken in header</button>
    </div>
    <div v-if="this.resp !== ''" class="response">
      <div class="card">
        <div class="card-header">
          Response
        </div>
        <div class="card-body">
          <p class="card-text">{{this.resp}}</p>
        </div>
      </div>
    </div>
    <br>
    <br>

  </div>
</template>

<script>

import axios from 'axios';
export default {
  name: 'Home',
  computed: {
    status () {
      return this.$store.getters.user.loggedIn;
    }
  },
  props: {
    msg: String
  },
  data: function() {
    return{
      resp: '',
    }
  },
  methods: {
    openEndpoint: function(){
      console.log("HEI");
      axios.get('https://api-dot-fluent-webbing-257713.appspot.com/open/').then(response => (this.resp = response.data))
    },
    closedEndpoint: function(){
      console.log("HEI");
      axios.get('https://api-dot-fluent-webbing-257713.appspot.com/closed/').then(response => (this.resp = response.data)).catch(error => {
      this.resp = error.response.data
      });
    },
    closedEndpointHeader: function(){
      console.log("HEI");
      if (this.$store.getters.user.loggedIn){
        var idToken = this.$store.getters.user.data.idToken;
      } else{
        idToken = null;
      }
      
      axios.get('https://api-dot-fluent-webbing-257713.appspot.com/closed/', { 'headers': { 'idToken': idToken } }).then(response => (this.resp = response.data)).catch(error => {
      this.resp = error.response.data
      });
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.btn {
  background-color: #42b883; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
}

  .btns{
    display: flex;
    justify-content: center
  }

  .card {
    width: 300px;
    margin: 15px;
  }

  .response {
    display: flex;
    justify-content: center;
    margin: 10px;
    width: 100%;
  }
</style>
