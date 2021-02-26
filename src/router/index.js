import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

import Timer from "../views/Timer.vue";
import Setting from "../views/Setting.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/timer/333" },
  { path: "/timer/:event?", component: Timer },
  { path: "/setting", component: Setting }
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (!to.params.event && !from.params.event) {
    store.commit("setCurrentEvent", "333");
    store.commit("makeNewScramble");
  } else if (!to.params.event) {
    store.commit("setCurrentEvent", from.params.event);
    store.commit("makeNewScramble");
  } else if (to.params.event) {
    store.commit("setCurrentEvent", to.params.event);
    store.commit("makeNewScramble");
  }
  next();
});

export default router;
