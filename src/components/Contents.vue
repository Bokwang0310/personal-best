<template>
  <div class="contents-container">
    <font-awesome-icon class="menu" icon="bars" size="4x" @click="onClick" />
    <Scramble />
    <StopWatch />
  </div>
</template>

<script>
import Scramble from "./Scramble.vue";
import StopWatch from "./StopWatch.vue";

export default {
  name: "Contents",
  methods: {
    onClick() {
      this.$store.commit(
        "setSideBarState",
        this.$store.state.isSideBarShow ? false : true
      );
    }
  },
  components: {
    Scramble,
    StopWatch
  }
};
</script>

<style scoped>
.menu {
  position: fixed;
  left: 20px;
  top: 20px;
  cursor: pointer;
  user-select: none;
}

.contents-container {
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
