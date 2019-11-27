<template>
    <div class="navbar">
      <p class="status">User: {{status}}</p>
      <a class="header-element" href="/">Home</a>  
      <a class="header-element" href="/register">Register</a>
      <a class="header-element" href="/login">Login</a>
    </div>
</template>

<script>
export default {
  computed: {
    status () {
      return this.$store.getters.user;
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
  /* border: 2px solid #047e47;
  background-color: #05854b; */
  display: flex;
  align-items: center;
  justify-content: center;
  font: 20px bold arial, sans-serif;
  color: white;
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