<template>
    <div>
        
        <h1>Login Component</h1>
<input type="text" name="username" placeholder="Enter Username" v-model="loginForm.username"/><br><br>
  <input type="password" name="password" placeholder="Enter Password" v-model="loginForm.password"/><br><br>
  <button v-on:click="loginData">Login</button>
    </div>
</template>
<script>

export default{
    name : 'Login',
    methods:{
        loginData(){
            console.log(this.loginForm)
        }
    },
    data(){
        return {
            loginForm:{
                username:null,
                password:null
            }
        }
    }
}
</script>
