<template>
    <div>
    <img src="../assets/logo.png">
    <div style="display: flex">
        <li v-for="">

            ASSIM QUE ABRIR PEGA A TOKEN E FAZ A BUSCA E COLOCA AQUI COM 2 BOTOES, ADD E REMOVE
            
        </li>
    </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "CryptoCofre",
      login: undefined,
      password: undefined,
      tokem: undefined
    };
  },
  methods: {
    get: function () {
      this.$http.get("http://localhost:3000/api/passsword?token="+this.token).then((data)=>{
        console.log("resposta",data)
        console.log(data.token)
      })
    },
    post: function () {
      this.$http.post("http://localhost:3000/api/passsword?token=", {
        login: this.login,
        password: this.password
      }).then((data)=>{
        console.log("resposta",data)
        console.log(data.token)
      })
    },
    delete: function () {
      this.$http.post("http://localhost:3000/api/auth/authenticate", {
        login: this.login,
        password: this.password
      }).then((data)=>{
        console.log("resposta",data)
        console.log(data.token)
      })
    },
  }
};
</script>

<style>

</style>
