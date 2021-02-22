<template>
  <div class="contents-container">
    <Scramble />
    <StopWatch />
  </div>
</template>

<script>
import Scramble from "@/components/Scramble.vue";
import StopWatch from "@/components/StopWatch.vue";

export default {
  name: "Timer",
  components: {
    Scramble,
    StopWatch
  }
};
</script>

<style scoped>
.contents-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100vw;
}
</style>
