<template>
  <nav>
    <sidebar-menu
      class="sidebar"
      :menu="menu"
      :disable-hover="true"
      :relative="isOnMobile ? false : true"
      :showOneChild="true"
      :collapsed="isSideBarShow"
      v-show="!isPlaying"
    ></sidebar-menu>
  </nav>
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
  methods: mapMutations(["setSideBarState", "setMobileState"]),
  components: { SidebarMenu }
};
</script>

<style scoped>
.sidebar {
  width: 300px;
  font-size: 20px;
}
</style>
