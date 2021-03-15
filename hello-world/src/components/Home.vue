<template>
<div>

    <h1 class="text-primary">{{name}}</h1>
</div>
    
</template>
<script>


export default{
    name:"Home",
    data(){
    return {
      name:"Fenil"
    }
  },
  //before create and created method
  beforeCreate(){
    console.log("Beforecreated",this.name)
  },
  created(){
    //   this.name="Fm"
    console.log("created",this.name)
  },
  //before mount and mounted method
  beforeMount(){
      console.log("beforemount",this.$el)
  },
  mounted(){
      console.log("mounted",this.$el)
  }
}
</script>
