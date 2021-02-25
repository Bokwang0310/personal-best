<template>
  <div id="app">
    <SideBar />
    <div class="contents" :class="isOnMobile ? 'onmobile' : ''">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import SideBar from "@/components/SideBar.vue";

export default {
  name: "App",
  computed: mapState(["isOnMobile"]),
  components: { SideBar },
  methods: {
    onResize() {
      if (window.innerWidth <= 767) {
        this.setMobileState(true);
        this.setSideBarState(false);
      } else {
        this.setMobileState(false);
        this.setSideBarState(true);
      }
    },
    onKeyDown(e) {
      if (e.ctrlKey && e.key === "b") this.toggleSideBar();
    },
    ...mapMutations(["setSideBarState", "setMobileState", "toggleSideBar"])
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize);
    window.addEventListener("keydown", this.onKeyDown);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
    window.removeEventListener("keydown", this.onKeyDown);
  }
};
</script>

<style>
* {
  margin: 0;
  font-family: "Roboto", sans-serif;
}

html {
  font-size: 62.5%;
}

html,
body,
#app {
  width: 100%;
  height: 100vh;
}

#app {
  display: flex;
}

.contents {
  height: 100%;
  width: 100%;
}

.onmobile {
  margin-left: 50px;
}

@media (max-width: 1050px) {
  html {
    font-size: 8px;
  }
}

@media (max-width: 900px) {
  html {
    font-size: 6.5px;
  }
}

@media (max-width: 700px) {
  html {
    font-size: 5px;
  }
}
</style>
