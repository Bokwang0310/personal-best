<template>
  <nav>
    <sidebar-menu
      class="sidebar"
      :menu="menu"
      :disable-hover="true"
      :relative="!isOnMobile"
      :showOneChild="true"
      :collapsed="!isSideBarShow"
      v-show="!isPlaying"
      @toggle-collapse="onToggleCollapse"
    ></sidebar-menu>
    <div
      v-if="isOnMobile && isSideBarShow"
      class="overlay"
      @touchend="setSideBarState(false)"
      @click="setSideBarState(false)"
    />
  </nav>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { SidebarMenu } from "vue-sidebar-menu";
import Dropdown from "./Dropdown.vue";
import Separator from "./Separator.vue";

export default {
  name: "SideBar",
  methods: {
    onToggleCollapse(collapsed) {
      this.setSideBarState(!collapsed);
    },
    listener(e) {
      console.log(e);
    },
    ...mapMutations(["setSideBarState", "setMobileState"])
  },
  computed: {
    menu() {
      return [
        {
          header: true,
          title: "Personal Best",
          hiddenOnCollapse: true,
          element: "header"
        },
        { component: Dropdown, hiddenOnCollapse: true },
        {
          href: "/timer",
          title: "Timer",
          icon: `cubing-icon ${this.currentEvent.icon}`,
          child: [
            {
              header: true,
              title: "Events"
            },
            {
              href: "/timer/333",
              title: "3x3x3",
              icon: "cubing-icon event-333",
              type: "event"
            },
            {
              href: "/timer/222",
              title: "2x2x2",
              icon: "cubing-icon event-222",
              type: "event"
            },
            {
              href: "/timer/444",
              title: "4x4x4",
              icon: "cubing-icon event-444",
              type: "event"
            }
          ]
        },
        { href: "/setting", title: "Settings", icon: "fa fa-cog" },
        {
          component: Separator,
          props: {
            color: "#ffffff"
          }
        },
        {
          title: "Records",
          icon: "fas fa-history",
          hidden: !this.selectedOption.bool,
          child: [{ title: "Under Development", disabled: true }]
        }
      ];
    },
    ...mapState([
      "isSideBarShow",
      "isPlaying",
      "selectedOption",
      "currentEvent",
      "isOnMobile"
    ])
  },
  components: { SidebarMenu }
};
</script>

<style scoped>
.sidebar {
  width: 300px;
  font-size: 20px;
}

.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.5;
  z-index: 900;
}
</style>
