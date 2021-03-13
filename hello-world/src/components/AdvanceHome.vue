<template>
    <div>
  <h1>AdvanceHome Component</h1>
  <Users />
    </div>
</template>

<script>
import Users from './Users'

export default {
    name:'AdvanceHome',
    components:{
        Users
    }
}
</script>

<style  scoped>

div {
    background-color: #cbd2d2;
    height: 500px;
}


</style>
