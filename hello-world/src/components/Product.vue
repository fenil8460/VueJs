<template>
    <div class="users">
  <h1>Product Component : </h1>
  <h1 v-for="user in users" :key="user.name">Name: {{user.name}}, Email: {{user.email}}</h1>
    </div>
</template>

<script>
export default {
    name:'Product',
    props:['users']
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
