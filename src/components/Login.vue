<template>
    <div class="main">
        <h1>LOGIN</h1>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="epost">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="passord">
        </div>
        <button type="submit" class="btn btn-primary" @click="submit">Submit</button>
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
          submit() {
            firebase
            .auth()
            .signInWithEmailAndPassword(this.epost, this.passord)
            .then(() => {
                this.$router.replace({
                    name: "dashboard"
                });
            })
            .catch(err => {
                this.error = err.message;
            });
        },
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