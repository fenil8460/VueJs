<template>
    <div>
 

  <p v-html="rowHtml"></p>
  <h1 v-once>AdvanceHome Component {{name}}</h1>
  <!--style binding-->
  <h1 v-bind:style="{color:'blue'}">AdvanceHome Component </h1>
  <!--class binding-->
  <h1 v-bind:class="{display:show}">Class Binding </h1>
  <!--class binding with array-->
  <h1 v-bind:class="[aclass]">Class Binding with Array </h1>
  <!--oprater-->
  <h1 v-bind:class="[show?'display':aclass]">Class Binding with Array </h1>
 
  <!-- v-model -->
  <h1 style="white-space:pre-line">{{message}}</h1>

  <input type="text" v-model="message"><br><br>
  <textarea type="text" v-model="message" />

  <h3>{{19+30}}</h3>
  <h3>{{a+b}}</h3>
  <h3>{{ok?"YES":"NO"}}</h3>
  <button v-bind:disabled="disableBtn" v-on:click="updateText">Click me</button>
  <button  v-on:click="updateText2">disabled</button>
  <Users />
  <Product v-bind:users="users"/>
   <Child v-on:changeTitle="updateTitle($event)"/>
   
    <h1>{{title}}</h1>
    </div>
</template>

<script>
//Multiple Components add
import Users from './Users'
import Product from './Product'
import Child from './Child'

export default {
    name:'AdvanceHome',
    components:{
        Users,
        Product,
        Child
    },
    data(){
        return {
            // More property view follow this link: https://v3.vuejs.org/guide/template-syntax.html#interpolations
            name:"fenil",
            a:10,
            b:20,
            ok:true,
            rowHtml:" <h1>AdvanceHome Component</h1>",
            disableBtn:false,
            show:true,
            aclass:"arrayClass",
            message:"Hello",
            users:[
                    {name:"Fenil",email:"fenil@gmail.com"},
                    {name:"Darshan",email:"darshan@gmail.com"},
                    {name:"Nehal",email:"nehal@gmail.com"},
                    {name:"Hiren",email:"hiren@gmail.com"}
                ],
            title:"Props tutorials"
            }
    },
    methods:{
        updateText(){
            this.ok=!this.ok
        },
        updateText2(){
            this.disableBtn=!this.disableBtn
            this.show=!this.show
        },
        updateTitle(title){
            this.title=title
        }

    }
}
</script>

<style  scoped>

div {
    background-color: #cbd2d2;
    
}
.display {
    color:orange;
}
.arrayClass{
    color:orangered;
}


</style>
