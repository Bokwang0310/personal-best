<template>
  <div>
    <sidebar-menu
      class="sidebar"
      :menu="menu"
      :disable-hover="true"
      :relative="true"
      :showOneChild="true"
      @item-click="onItemClick"
    ></sidebar-menu>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { SidebarMenu } from "vue-sidebar-menu";
import Dropdown from "./Dropdown.vue";

export default {
  name: "SideBar",
  data() {
    return {
      options: [{ name: "No Record" }, { name: "Record" }],
      selectedOption: {
        name: "Choose Mode"
      },
      menu: [
        {
          header: true,
          title: "Personal Best",
          hiddenOnCollapse: true
        },
        { component: Dropdown, hiddenOnCollapse: true },
        {
          href: "/records",
          title: "Records",
          icon: "fas fa-history"
        },
        {
          href: "/pages",
          title: "Events",
          icon: "cubing-icon event-333",
          child: [
            {
              href: "/pages/333",
              title: "3x3x3",
              icon: "cubing-icon event-333"
            }
          ]
        }
      ]
    };
  },
  computed: mapState(["isSideBarShow", "isPlaying"]),
  methods: {
    onKeyDown(e) {
      if (e.ctrlKey && e.key === "b") {
        this.toggleSideBar();
      }
    },
    methodToRunOnSelect(payload) {
      this.selectedOption = payload;
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
