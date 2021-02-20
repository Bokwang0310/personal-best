<template>
  <div class="scramble" v-show="!$store.state.isPlaying">
    {{ $store.state.scramble }}
  </div>
</template>

<script>
export default {
  name: "Scramble"
};
</script>
<style scoped>
.scramble {
  text-align: center;
  font-size: 3.5vmax;
  padding: 2.2rem;
  margin-bottom: 5vmin;
}
</style>
