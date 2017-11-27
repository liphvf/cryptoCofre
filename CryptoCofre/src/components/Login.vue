<template>
<div id="app">
  <v-app id="inspire">
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-media src="http://products.translucent.dk/images/crypto.png" height="200px">
          </v-card-media>
          <v-card-title primary-title>
            <div>
            <v-form v-model="valid">
              <v-text-field
                label="Login"
                v-model="login"
                :rules="loginRules"
                required
              ></v-text-field>
              <v-text-field
                label="Password"
                v-model="password"
                :rules="passwordRules"
                required
              ></v-text-field>
            </v-form>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="blue">Entrar</v-btn>
            <v-btn flat color="orange">Cadastrar</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-app>
</div>
</template>

<script>
export default {
    login: "Login",
    el: "#app",
    data() {
        return {
            card_text:
                "Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.",
        valid: false,
        login: '',
        loginRules: [
          (v) => !!v || 'login is required',
        ],
        password: '',
        passwordRules: [
          (v) => !!v || 'E-mail is required',
          (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ]
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#app {
  margin: 0px;
}

form {
  width: 100%;
}

.input-group__input {
  width: 100%
}
/* 
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
