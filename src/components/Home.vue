<template>
  <div class="hello">
    <h1>Google Cloud demo</h1>
    <h3>Test av Google Identity Platform, Google Cloud App Engine etc.</h3>
    <br>
    <br>
    <br>
    <br>
    <button class="btn" @click="btnClick">Sjekk kontakt med API i App Engine</button>
    <p>{{resp}}</p>
    <br>
    <br>

  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Home',
  props: {
    msg: String
  },
  data: function() {
    return{
      resp: '',
    }
  },
  methods: {
    btnClick: function(){
      console.log("HEI");
      axios.get('https://test-dot-api-dot-fluent-webbing-257713.appspot.com/mainpage/').then(response => (this.resp = response))
    }
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
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>
