<template>
  <div id="app">
 
  
  <!-- <router-link to="/">Home</router-link> |
      <router-link to="/postc">Post</router-link> -->
      <nav>
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li><router-link to="/user">User</router-link></li>
          
        </ul>
      </nav>
      <User />

    
</div>
</template>

<script>

// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import User from './components/User.vue'
// Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)

export default {
  name: 'App',
  components: {
    // HelloWorld
    User
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
