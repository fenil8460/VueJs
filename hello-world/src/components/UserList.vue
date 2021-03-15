<template>
    <div>
        <h1>User list</h1>

        <table  class="table table-striped">
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
            </tr>
            <tr v-for="lists in list" v-bind:key="lists.id">
                <td>{{lists.name}}</td>
                <td>{{lists.email}}</td>
                <td>{{lists.password}}</td>
            </tr>
        </table>
        
        </div>
</template>
<script>


import axios from 'axios'


export default{
     name:"UserList",
     data(){
         return {
             list:undefined
         }
     },
     mounted()
     {
        axios.get('http://127.0.0.1:8000/api/datavue').then(
            res => {
                this.list = res.data
                console.log(res.data)
            }
        )
     }
}
</script>
<style scoped>

</style>
