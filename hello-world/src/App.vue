<template>
  <!--<img alt="Vue logo" src="./assets/logo.png">-->
  
 
  <!--<Home data="Fenil is here" msg="hii From Fenil"/>-->
  
  <AdvanceHome />
 
</template>

<script>

// import Home from './components/Home.vue'
import AdvanceHome from './components/AdvanceHome.vue'
// import Child from './components/Child.vue'
export default {
  name: 'App',
  components: {
    AdvanceHome,
    // Child 
    // Home
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
