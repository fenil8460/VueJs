<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div>

    <h1 v-if="display">Filter in vue js</h1>
    <button class="btn btn-danger"  v-on:click="toggle">Toggle</button>
    <!-- <h1>{{name}}</h1> -->
    <Home />
    <UserList />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue'
import UserList from './components/UserList.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    Home,
    UserList
  },
  data(){
    return {
      name:"fenil",
      display:true
    }
  },
  methods:{
      toggle(){
        this.display = !this.display
      }
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
