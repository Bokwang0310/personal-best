<template>
  <div id="app">
    <SideBar />
    <Scramble />
    <StopWatch />
  </div>
</template>

<script>
import StopWatch from "./components/StopWatch.vue";
import SideBar from "./components/SideBar.vue";
import Scramble from "./components/Scramble.vue";

export default {
  name: "App",
  components: {
    StopWatch,
    SideBar,
    Scramble
  }
};
</script>

<style>
* {
  margin: 0;
  font-family: "Roboto", sans-serif;
  user-select: none;
}

html {
  font-size: 62.5%;
}

html,
body,
#app {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}
</style>
