<template>
    <div>
    <h1 v-if="show">Hello from Home component</h1>
    <h1 v-else>Hello from Home component Else  </h1>
    <!--<h2>{{data}}</h2>
    <h2>{{msg}}</h2>-->
    <button v-on:click="display">Toggle Element</button>
    <button v-on:mouseover="hello">Call Hello Function</button>
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
        return {show:true}
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
