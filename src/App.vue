<template>
  <div id="app">
    <SideBar />
    <Contents />
  </div>
</template>

<script>
import SideBar from "./components/SideBar.vue";
import Contents from "./components/Contents.vue";

export default {
  name: "App",
  components: {
    SideBar,
    Contents
  }
};
</script>

<style>
* {
  margin: 0;
  font-family: "Roboto", sans-serif;
  background-color: #fafafa;
}

html {
  font-size: 62.5%;
}

html,
body,
#app {
  width: 100%;
  height: 100vh;
}

#app {
  display: flex;
}
</style>
