<template>
    <div>
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
      <form action="/action_page.php">
        Login:<br>
        <input type="text" name="Login" v-model="login">
        <br>
        Password:<br>
        <input type="password" name="password" v-model="password">
        <br><br>
        <input @click.prevent="post" type="submit" value="Submit">

      </form> 

    </div>
</template>

<script>

import auth from "../auth";
export default {
  data() {
    return {
      msg: "CryptoCofre",
      login: undefined,
      password: undefined,
      token: undefined
    };
  },
  methods: {
    post: function () {
      this.$http.post("http://localhost:3000/api/auth/authenticate", {
        login: this.login,
        password: this.password
      }).then((data)=>{
        console.log("resposta",data)
        this.token = data.body.token;
      })
    }
  }
};
</script>

<style>

</style>
