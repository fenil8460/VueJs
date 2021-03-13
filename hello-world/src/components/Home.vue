<template>
    <div>
    <h1 v-if="show">Hello from Home component</h1>
    <h1 v-else>Hello from Home component Else  </h1>
    <!--<h2>{{data}}</h2>
    <h2>{{msg}}</h2>-->
    <button v-on:click="display">Toggle Element</button>
    <button v-on:mouseover="hello">Call Hello Function</button><br>
    <!--for loop start-->
    <table border="1px solid">
    <tr>
        <td>ID</td>
        <td>Name</td>
        <td>Email</td>
    </tr>
     <tr v-for="user in users" :key="user.id">
        <td>{{user.id}}</td>
        <td>{{user.name}}</td>
        <td>{{user.email}}</td>
    </tr>
    
    </table>
    <!--for loop End-->
        
    </div>
</template>
<script>

export default {
    name : "Home",
    props:{
        data:String,
        msg:String
    },
    //conditional render || if condition start
    data()
    {
        return {
            users : [
                {id:1,name:'fenil',email:'fenil@gmail.com'},
                {id:2,name:'darshan',email:'darshan@gmail.com'},
                {id:3,name:'nehal',email:'nehal@gmail.com'},
                {id:4,name:'hiren',email:'hiren@gmail.com'}
            ]
        }
        //,{show:true}
    },
     //conditional render || if condition End
    methods: {
        hello()
        {
             console.log("Hello console called")
            alert("hello i am fenil")
        },
        //toggle method
        display(){

            this.show=!this.show 

        }
    },
}
</script>
