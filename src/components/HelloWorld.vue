<template>
  <div class="hello">
    <h1>SIMENSIMEN</h1>
    <h1>Dette er pushet nå</h1>
    <h1>Hallo igjen ja</h1>
    <button class="btn" @click="btnClick">Button</button>
    <p>{{resp}}</p>
    <br>
    <br>
    <input v-model="epost" placeholder="epost">
    <input v-model="passord" placeholder="passord">
    <input v-model="name" placeholder="name">
    <button class="btn" @click="submit">Button</button>

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
      resp: 'lol',
      epost: 'fds',
      passord: 'fds',
      name: 'fdsafd'
    }
  },
  methods: {
    btnClick: function(){
      console.log("HEI");
      axios.get('https://test-dot-api-dot-fluent-webbing-257713.appspot.com/mainpage/').then(response => (this.resp = response))
    },
    showResp: function(){
      console.log(this.resp);
    },
    submit1: function(){
      console.log(this.epost);
      console.log(this.passord);
      console.log(this.name);
    },
    submit() {
      window.firebase
        .auth()
        .createUserWithEmailAndPassword(this.epost, this.passord)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.name
            })
            .then(() => {
              console.log(data);
            });
        })
        .catch(err => {
          this.error = err.message;
        });
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
