<template>
  <div class="hello">
    <h1>SIMENSIMEN</h1>
    <h1>Dette er pushet nå</h1>
    <h1>Hallo igjen ja</h1>
    <button class="btn" @click="btnClick">Button</button>
    <p>{{response}}</p>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function() {
    return{
      response: ''
    }
  },
  methods: {
    btnClick: function(){
      console.log("HEI");
      axios
      .get('https://api-dot-fluent-webbing-257713.appspot.com/mainpage')
      .then(response => (this.response = response))
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
