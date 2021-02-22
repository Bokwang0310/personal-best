<template>
  <div>
    <sidebar-menu
      class="sidebar"
      :menu="menu"
      :disable-hover="true"
      :relative="true"
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
          href: "#",
          title: "Records",
          icon: "fas fa-history"
        },
        { href: "#", title: "Events", icon: "" }
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
