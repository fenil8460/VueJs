<template>
    <div>
    <input type="text" placeholder="Enter Your Name" v-model="signup.username" /> <br><br>
    <input type="Password" placeholder="Enter Your Password" v-model="signup.password" /> <br><br>
    <input type="checkbox" id="cricket" value="cricket" v-model="signup.hobbies" />
    <label for="cricket">Cricket
    </label>
    <input type="checkbox" id="football" value="football" v-model="signup.hobbies" />
    <label for="football">Football
    </label><br><br>
    <input type="radio" id="male" value="male" v-model="signup.gender" />
    <label for="male">Male
    </label>
    <input type="radio" id="female" value="female" v-model="signup.gender" />
    <label for="female">Female
    </label><br><br>
    <button v-on:click="signupUser">Submit</button>

    </div>
</template>
<script>

export default{
    name : 'Signup',
    data(){
        return{
            signup:{
                    username:null,
                    password:null,
                    hobbies:[],
                    gender:null
            }
        }
    },
    methods:{
        signupUser(){
            console.log(this.signup)
        }
    }
}
</script>
