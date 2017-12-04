<template>
    <div>
    <div  class="app">
        <div style="display: block;">
        <button @click.prevent="get">Pegar Senha</button>
        </div>

        <div v-for="(pwd, index) in passwords" :key="pwd.name" class="password">
          {{index}}
         <div>Name: {{pwd.name}}</div>
         <div>Password: {{pwd.password}}</div>
         <button @click.prevent="del(index)">Delete</button>
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
    del: function (index) {
      console.log("index",index);
      console.log("index",this.passwords);
      let id = this.passwords[index]._id;
      console.log("id",id);
      this.$http.delete(`http://localhost:3000/api/password/${id}?token=${this.token}`).then((data)=>{
        this.get();
      });
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
