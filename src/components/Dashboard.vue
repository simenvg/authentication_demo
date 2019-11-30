<template>
  <div class="container">
    <div class="sidenav">
      <a>Threads</a>
      <hr>
      <ChatHeader v-for="obj in objs" v-bind:key="obj.index" @chatClick="chatClicked" :header="obj.header" :createdBy="obj.createdBy" :index="obj.index" :isActive="checkIsActive(obj.index)"/>
      <br>
      <br>
      <br>
      <br>
    </div>

    <!-- Page content -->
    <div class="main">
      <h1 v-if="activeChatIndex !== null">{{objs[activeChatIndex].header}}</h1>
      <br>
      <p>HEI</p>
      <button @click="getThreads">GET THREADS</button>
      <p>{{resp}}</p>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import ChatHeader from "./ChatHeader"
import axios from 'axios';
export default {
  data: function() {
        return{
            activeChatIndex: null,
            objs: [
              {header: "header0", createdBy: "createdBy0", index: 0},
              {header: "header1", createdBy: "createdBy1", index: 1},
              {header: "header2", createdBy: "createdBy2", index: 2},
              {header: "header3", createdBy: "createdBy3", index: 3},
              {header: "header4", createdBy: "createdBy4", index: 4},
              {header: "header5", createdBy: "createdBy5", index: 5},
              {header: "header6", createdBy: "createdBy6", index: 6},
            ],
            resp: ''
        }
    },
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user",
    })
  },
  components: {
    ChatHeader
  },
  methods: {
    chatClicked: function(index){
      this.activeChatIndex = index;
    },
    checkIsActive: function(index){
      if (this.activeChatIndex === null){
        return false;
      } else if (this.activeChatIndex === index){
        return true;
      } else{
        return false;
      }
    },
    getThreads: function(){
      axios.get('https://api-dot-fluent-webbing-257713.appspot.com/getthreads/').then(response => (this.resp = response.data)).catch(error => {
      this.resp = error.response.data
    }
  }
};
</script>

<style lang="css" scoped>
/* The sidebar menu */
.sidenav {
  height: 100%; /* Full-height: remove this if you want "auto" height */
  width: 300px; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 50px; /* Stay at the top */
  left: 0;
  background-color: #111; /* Black */
  overflow-x: hidden; /* Disable horizontal scroll */
  overflow-y: auto;
  padding-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

/* The navigation menu links */
.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color: #f1f1f1;
}

/* Style page content */
.main {
  margin-left: 160px; /* Same as the width of the sidebar */
  padding: 0px 10px;
}

hr {
  width: 80%;
  border: 1px solid white;
}

/* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>