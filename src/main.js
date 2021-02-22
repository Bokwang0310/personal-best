import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import VueSideBarMenu from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";
Vue.use(VueSideBarMenu);

library.add(faBars);
Vue.component("font-awesome-icon", FontAwesomeIcon);

import dropdown from "vue-dropdowns";
Vue.component("dropdown", dropdown);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
