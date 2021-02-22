<template>
  <div>
    <sidebar-menu
      class="sidebar"
      :menu="menu"
      :disable-hover="true"
      :relative="true"
      :showOneChild="true"
      @item-click="onItemClick"
      :collapsed="isSideBarShow"
      v-show="!isPlaying"
    ></sidebar-menu>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { SidebarMenu } from "vue-sidebar-menu";
import Dropdown from "./Dropdown.vue";
import Separator from "./Separator.vue";

export default {
  name: "SideBar",
  computed: {
    menu() {
      return [
        {
          header: true,
          title: "Personal Best",
          hiddenOnCollapse: true
        },
        { component: Dropdown, hiddenOnCollapse: true },
        { href: "/", title: "Timer", icon: "fas fa-stopwatch" },
        { href: "/setting", title: "Settings", icon: "fa fa-cog" },
        {
          component: Separator,
          props: {
            color: "#ffffff"
          }
        },
        {
          title: "Events",
          icon: "cubing-icon event-333",
          child: [
            { title: "3x3x3", icon: "cubing-icon event-333" },
            { title: "2x2x2", icon: "cubing-icon event-222" },
            { title: "4x4x4", icon: "cubing-icon event-444" }
          ]
        },
        {
          title: "Records",
          icon: "fas fa-history",
          hidden: !this.selectedOption.bool,
          child: [{ title: "1" }]
        }
      ];
    },
    ...mapState(["isSideBarShow", "isPlaying", "selectedOption"])
  },
  methods: {
    onKeyDown(e) {
      if (e.ctrlKey && e.key === "b") this.toggleSideBar();
    },
    onItemClick() {},
    ...mapMutations(["toggleSideBar"])
  },
  mounted() {
    window.addEventListener("keydown", this.onKeyDown);
  },
  beforeDestroy() {
    window.removeEventListener("keydown", this.onKeyDown);
  },
  components: { SidebarMenu }
};
</script>

<style scoped>
.sidebar {
  width: 300px;
  font-size: 20px;
}

/* @media (max-width: 700px) {
  .sidebar-container {
    position: absolute;
  }
  .sidebar {
    width: 75vw;
  }
} */
</style>
