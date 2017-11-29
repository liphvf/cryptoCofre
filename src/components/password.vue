<template>
    <div>
    <div  class="app">
        <!-- <li v-for="">

            ASSIM QUE ABRIR PEGA A TOKEN E FAZ A BUSCA E COLOCA AQUI COM 2 BOTOES, ADD E REMOVE
            
        </li> -->
        <div style="display: block;">
        <button @click.prevent="get">Pegar Senha</button>
        </div>

        <div v-for="pwd in passwords" :key="pwd.name" class="password">
         <div>Name: {{pwd.name}}</div>
         <div>Password: {{pwd.password}}</div>
         <button>Delete</button>
        </div>
        
        <div>
          
          <form action="">
            Name:
            <input type="text" name="login" value="" ref="name">
            Password:
            <input type="password" name="password" id="" value="" ref="password">
            <input @click.prevent="post" type="button" value="Add New Password">
          </form>
          
          </div>        


    </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      passwords: [],
      token: this.$route.query.token
    };
  },
  // created: () => {
  //   // token = this.$route.params.token;
  //   // console.log("xuxu");
  //   // console.log(this.$route);
  //   this.get();
  // },
  methods: {
    get: function () {
      this.$http.get("http://localhost:3000/api/password?token="+this.token).then((data)=>{
        console.log(data.body);
        this.passwords = data.body;
      })
    },
    post: function () {
      console.log("post");
      console.log(this.$refs.name.value, this.$refs.password.value);
      this.$http.post("http://localhost:3000/api/password?token="+this.token, {
        name: this.$refs.name.value,
        password: this.$refs.password.value
      }).then((data)=>{
        console.log(data.body);
        this.passwords = data.body;
        this.get();
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

.password {

}
.app {
  display: flex;
  flex-wrap: wrap;
}

</style>
