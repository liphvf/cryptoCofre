<template>
  <div class="hello">
    <div style="display: flex; justify-content: center; width: 100%;">

      <v-card style="width: 50%; height: 20%; padding: 16px;">
        <h4> CryptoCofre</h4>

        <v-form v-model="valid">
          <v-text-field
          label="E-mail"
          v-model="email"
          :rules="emailRules"
          required
          ></v-text-field>
          <v-text-field type="password"
          label="Password"
          v-model="password"
          :rules="passwordRules"
          required
          ></v-text-field>

           <v-btn block color="primary">Login</v-btn>
        </v-form>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      valid: false,
      password: '',
      passwordRules: [
        (v) => !!v || 'Name is required',
        (v) => v.length <= 10 || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 
form {
  width: 100%;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
} */
</style>
