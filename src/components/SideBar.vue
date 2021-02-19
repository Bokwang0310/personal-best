<template>
  <aside
    class="sidebar"
    :class="$store.state.isSideBarShow ? '' : 'collapsed'"
    v-show="!$store.state.isPlaying"
  ></aside>
</template>

<script>
export default {
  name: "SideBar",
  methods: {
    onKeyDown(e) {
      if (e.ctrlKey && e.key === "b") {
        this.$store.commit(
          "setSideBarState",
          this.$store.state.isSideBarShow ? false : true
        );
      }
    }
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
.sidebar {
  position: relative;
  height: 100%;
  overflow: auto;
  float: left;
  transition: width 0.35s;
  background: #f2f2f2;
  width: 350px;
  /* border-right: 0.5px #daded5 solid; */
  box-shadow: 3px 0px 25px -13px rgba(0, 0, 0, 0.62);
}

.sidebar.collapsed {
  width: 0;
}

@media (max-width: 700px) {
  .sidebar {
    position: absolute;
    width: 75vw;
  }
}
</style>
