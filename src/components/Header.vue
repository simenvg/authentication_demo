<template>
  <fixed-header>
    <div class="navbar">
      <a href="/register">Register</a>
      <a href="/login">Login</a>
    </div>
  </fixed-header>
</template>
 
<script>
import FixedHeader from 'vue-fixed-header'
 
export default {
  components: {
    FixedHeader
  }
}
</script> 
 
<style>
.navbar.vue-fixed-header--isFixed {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
}
fixed-header {
    position: absolute;
    left: 0;
    top: 0;
}
</style> 