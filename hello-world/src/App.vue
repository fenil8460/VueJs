<template>
  <div>
  <h1>Form with checkbox and radio button in Vue Js</h1>   
    <Signup />
  </div>
</template>

<script>
import Signup from './components/Signup.vue'

export default {
  name: 'App',
  components: {
    Signup
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
