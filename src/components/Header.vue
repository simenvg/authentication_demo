<template>
  <fixed-header>
    <div class="navbar">
      <a href="/" style="margin: 5px;">Home</a>  
      <a href="/register" style="margin: 5px;">Register</a>
      <a href="/login" style="margin: 5px;">Login</a>
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
.navbar{
    display: flex;
    justify-content: flex-end;
}

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