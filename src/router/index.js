import Vue from "vue";
import VueRouter from "vue-router";

import Timer from "../views/Timer.vue";
import Setting from "../views/Setting.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Timer },
  { path: "/setting", component: Setting }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
