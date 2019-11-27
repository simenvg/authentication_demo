<template>
    <div class="main">
        <h1>REGISTER</h1>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="epost">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="passord">
        </div>
        <button class="btn btn-primary" @click="submit">Submit</button>
        <br>
        <br>
        <div v-if="error !== ''" class="card" style="width: 400px; border: 2px solid red">
            <h5 class="card-header h5">ERROR</h5>
            <div class="card-body">
                <h5 class="card-title">{{error}}</h5>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from "firebase";

export default {
    data: function() {
        return{
            epost: '',
            passord: '',
            error: ''
        }
    },
    methods: {
        submit: function() {
            firebase
            .auth()
            .createUserWithEmailAndPassword(this.epost, this.passord)
            .then(data => {
                data.user
                .updateProfile({
                displayName: this.name
            })
                .then(() => {
                console.log(data);
                });
            })
            .catch(err => {
            this.error = err.message;
            });
        },
        submit2: function(){
            console.log(this.epost);
            console.log(this.passord);
        }
    }
    
}
</script>

<style lang="css" scoped>
    .main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .form-group{
        width:350px;
    }
</style>