import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";

import "@cubing/icons";

import "vue-sidebar-menu/dist/vue-sidebar-menu.css";

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
