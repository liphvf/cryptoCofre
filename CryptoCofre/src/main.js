import Vue from 'vue'
import App from './App.vue'
// import Login from "login";
import VueRouter from "vue-router";
import Routes from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

// Vue.component('login', Login);

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
