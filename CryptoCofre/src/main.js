import Vue from 'vue'
import App from './App.vue'
// import Login from "login";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import Routes from "./routes";

Vue.use(VueRouter);
Vue.use(VueResource);

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
