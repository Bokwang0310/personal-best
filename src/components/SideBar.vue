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
// import dropdown from "vue-dropdowns";

// <dropdown
//         slot="dropdown-icon"
//         class="dropdown"
//         :options="options"
//         :selected="selectedOption"
//         @updateOption="methodToRunOnSelect"
//       ></dropdown
//     >

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
          title: "Header",
          hiddenOnCollapse: true
        },
        {
          href: "#",
          title: "Play",
          icon: "fa fa-play"
        },
        {
          href: "#",
          title: "Charts",
          icon: "fa fa-chart-area"
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
    ...mapMutations(["toggleSideBar"])
  },
  mounted() {
    window.addEventListener("keydown", this.onKeyDown);
  },
  beforeDestroy() {
    window.removeEventListener("keydown", this.onKeyDown);
  },
  components: { SidebarMenu /*dropdown*/ }
};
</script>

<style scoped>
.dropdown {
  margin: 5rem;
  position: absolute;
}

.sidebar {
  width: 30rem;
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
