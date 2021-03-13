<template>
    <div class="users">
  <h1>Child Component : </h1>
  <button v-on:click="updateTitle">Update Parent title</button>
    </div>
</template>

<script>
export default {
    name:'Child',
    methods:{
        updateTitle(){
            this.$emit('changeTitle','Like this Effect')
        }
    },
}
</script>

<style  scoped>

.users{
    background-color: #9e9e9e;
    
    width: auto;
    padding: 40px;
     margin-bottom: 20px;
}

</style>
