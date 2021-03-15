<template>
    <div class="container">
        <h1>Hello</h1>
        <form @submit="submitData" method="post">
            <input type="text" name="name" class="form-control" v-model="post.name"/><br><br>
            <input type="text" name="email" class="form-control" v-model="post.email"/><br><br>
            <input type="text" name="password" class="form-control" v-model="post.password" /><br><br>
            <button class="btn btn-danger" type="submit">Post</button>
        </form>
    </div>
</template>
<script>
import axios from 'axios'

export default {
name:"PostComponent",
data(){
    return {
       post:{ 
        name:null,
        email:null,
        password:null
        }
    }
},
methods:{
    submitData(e){

        axios.post('http://127.0.0.1:8000/api/addDataApivue',this.post).then((res)=>{
        console.log(res)
        })
        e.preventDefault()
    }
}
}
</script>
