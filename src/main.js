import Vue from "vue";
import App from "./App.vue";
import store from "./store/store"
import BootstrapVue from 'bootstrap-vue';
import router from './router'

// Install BootstrapVue
Vue.use(BootstrapVue)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
