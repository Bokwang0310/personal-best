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

@media (max-width: 1050px) {
  html {
    font-size: 8px;
  }
}

@media (max-width: 900px) {
  html {
    font-size: 6.5px;
  }
}

@media (max-width: 700px) {
  html {
    font-size: 5px;
  }
}
</style>
