<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import Home from "./view/Home/Home.vue";

//import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!-- <Home></Home> -->
  <router-view />
  <div class="copyright">by houzuo1.02</div>
</template>

<style>
body {
  background: #f6f6f6;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
  padding-bottom: 15px;
  /* margin-top: 60px; */
}
.copyright{
  margin-top:20px;
  font-size: 14px;
  color:#818589
}
</style>
