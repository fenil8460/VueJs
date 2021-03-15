<template>
    <div>
        <h1>Login Component</h1>
        <!-- <h1 style="white-space: pre-line;" >{{message}}</h1> -->
        <p v-if="error.length">
        <b>Please correct the following errors</b>
        <ul>
            <li style="tex" v-for="e in error" v-bind:key="e.id">{{error}}</li>
        </ul>
        </p>
        <form @submit="login">
            <input type="text" name="username" placeholder="Enter Username" v-model="name"/><br><br>
            <input type="password" name="password" placeholder="Enter Password" v-model="password" /><br><br>
  <!-- <textarea  type="text" name="test" placeholder="Enter Password" v-model="message"/><br><br> -->

            <button type="submit">Login</button>

        </form>
    </div>
</template>
<script>

export default{
    name : 'Validation',
    data(){
        return {
            error:[],
            name:null,
            password:null,
            // message:'helo'
        }
    },
    methods:{
        login(e){
            this.error=[]
            if(this.name && this.password){
                console.log("no error")
            }
            if(!this.name){
                this.error.push("Username is require")
            }
            if(!this.password){
                this.error.push("Password is require")
            }
            console.log("Hello",this.error)
            e.preventDefault();
        }
    }
    
}
</script>
