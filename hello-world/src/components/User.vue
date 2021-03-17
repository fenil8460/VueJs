<template>
    <div class="container">
        <h1>Hello</h1>
        <table class="table">
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Action</th>
                <th>Update</th>
            </tr>
            <tr v-for="(item , index) in users" v-bind:key="index">
                <td>{{item.name}}</td>
                <td>{{item.email}}</td>
                <td>{{item.password}}</td>
                <td><button v-on:click="deleteUser(item.id)" class="btn btn-primary">Delete</button></td>
                <td><button v-on:click="updateUser(item.id)" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal1">Update</button></td>
            </tr>
        </table>
<!-- add user -->
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Add User
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal"  tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <!-- @submit="submitData" method="post" -->
        <form  ref="insertform">
            <input type="text" name="name" class="form-control" placeholder="Enter Name"  /><br><br>
            <input type="text" name="email" class="form-control" placeholder="Enter Email"  /><br><br>
            <input type="text" name="password" class="form-control" placeholder="Enter Password"  /><br><br>
            <button class="btn btn-danger postData" type="submit" @click="submitData">Post</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </form>
      </div>
      
    </div>
  </div>
</div>


<!-- update User -->


<!-- Modal -->
<div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Update user</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form ref="editform">
            <table v-for="(updateU , index) in updateusers" v-bind:key="index">
                <tr>
                    <td></td>
            <td><input type="hidden" name="id" class="form-control" placeholder="Enter Name" v-model="updateU.id" /></td>
            </tr>
            <tr>
                    <td><label> Name:</label></td>
            <td><input type="text" name="name" class="form-control" placeholder="Enter Name" v-model="updateU.name"  /></td>
            </tr>
            <tr>
                    <td><label> Email:</label></td>
            <td>
            <input type="text" name="email" class="form-control" placeholder="Enter Email" v-model="updateU.email" /></td>
            </tr>
            <tr>
                    <td><label> Password:</label></td>
            <td>
            <input type="text" name="password" class="form-control" placeholder="Enter Password" v-model="updateU.password"  /></td>
            </tr>
            <tr>
                    <td></td>
            <td>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button class="btn btn-danger postData" @click="updateData" type="button">Post</button></td>
            </tr>
            
            </table>
        </form>
      </div>
      
    </div>
  </div>
</div>
<!-- computed prpetry -->
<h1>{{getresult}}</h1>

<!-- watcher -->
<h1>{{count}}</h1>
<button v-on:click="count = count+1">+</button>
<button v-on:click="count = count-1">-</button>
    </div>
</template>
<script>

import axios from 'axios'

export default {
name:"User",
data(){
    return {
        users:null,
        updateusers:null,
        // computed property
        dollor:100,
        rupeeVal:73,
        discount:10,
        count:0
    }
},//computed prperty
computed:{
  getresult(){
      return (this.dollor * this.rupeeVal) - this.discount;
  }
},//watcher property (value change in )
watch:{
  count(val,prev){
    if(val>5 && val>prev){
    //  alert(this.count + "stop counting")
    this.count = 0;
    }
  }
},
mounted(){
    this.getUsers();
},
methods:{
    getUsers(){
        axios.get('http://127.0.0.1:8000/api/datavue').then((result)=>{
        console.log(result)
        this.users = result.data
    })
    },
    deleteUser(id){
    var config = {
  method: 'delete',
  url: 'http://127.0.0.1:8000/api/deleteDataApivue/' + id,
};

axios(config).then((response) => {
  console.log(response.data);
  this.getUsers(response);
  
})
    },
    updateUser(id){
 axios.get('http://127.0.0.1:8000/api/datavue/'+id).then((result)=>{
        console.log(result)
        this.updateusers = result.data
    })
    },
    //  submitData(e){

    //     axios.post('http://127.0.0.1:8000/api/addDataApivue',this.post).then((res)=>{
    //     console.log(res)
    //     })
    //     e.preventDefault()
    // },insertform
    
    submitData(e){
      let data = {
          name:this.$refs.insertform.name.value,
          email:this.$refs.insertform.email.value,
          password:this.$refs.insertform.password.value,
        
        }
    var config = {
  method: 'post',
  url: 'http://127.0.0.1:8000/api/addDataApivue',
  data:data
};

axios(config).then((response) => {
  console.log(response.data);
  this.$emit('close');
  this.getUsers(response);
})
e.preventDefault()
    },
    updateData(){
        var id = this.$refs.editform.id.value;
        let data = {
          name:this.$refs.editform.name.value,
          email:this.$refs.editform.email.value,
          password:this.$refs.editform.password.value,
        
        }

         var config = {
  method: 'put',
  url: 'http://127.0.0.1:8000/api/putDataApivue/'+id,
  data:data
};

axios(config).then((response) => {
  console.log(response.data);
  this.getUsers(response);
})
},
    
    
}

}
</script>
<style scoped>
button.btn.btn-secondary {
    margin-left: 20px;
}
button.btn.btn-primary {
    margin-left: 20px;
}
</style>
