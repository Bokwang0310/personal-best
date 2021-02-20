<template>
  <div class="sidebar-container">
    <aside
      class="sidebar"
      :class="isSideBarShow ? '' : 'collapsed'"
      v-show="!isPlaying"
    ></aside>
    <font-awesome-icon
      class="menu"
      icon="bars"
      size="4x"
      @click="toggleSideBar"
    />
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "SideBar",
  computed: mapState(["isSideBarShow", "isPlaying"]),
  methods: {
    onKeyDown(e) {
      if (e.ctrlKey && e.key === "b") {
        this.toggleSideBar();
      }
    },
    ...mapMutations(["toggleSideBar"])
  },
  mounted() {
    window.addEventListener("keydown", this.onKeyDown);
  },
  beforeDestroy() {
    window.removeEventListener("keydown", this.onKeyDown);
  }
};
</script>

<style scoped>
.sidebar-container {
  height: 100%;
}

.menu {
  position: absolute;
  margin-left: 2rem;
  margin-top: 1.5rem;
  cursor: pointer;
  user-select: none;
}

.sidebar {
  position: relative;
  height: 100%;
  overflow: auto;
  float: left;
  transition: width 0.35s;
  background: #f2f2f2;
  width: 350px;
  box-shadow: 3px 0px 25px -13px rgba(0, 0, 0, 0.62);
}

.sidebar.collapsed {
  width: 0;
}

@media (max-width: 700px) {
  .sidebar-container {
    position: absolute;
  }
  .sidebar {
    width: 75vw;
  }
}
</style>
