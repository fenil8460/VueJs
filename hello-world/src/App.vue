<template>
  <div>
  <h1>Form with  Vue Js</h1>   
  
    <!--<Login />-->
    <Validation />
    <br>
    <br>
    <Signup />
  </div>
</template>

<script>
import Signup from './components/Signup.vue'
// import Login from './components/Login.vue'
import Validation from './components/Validation.vue'

export default {
  name: 'App',
  components: {
    Signup,
    Validation
    // Login
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
