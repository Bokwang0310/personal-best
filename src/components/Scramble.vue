<template>
  <div class="scramble" v-show="!isPlaying">
    {{ scramble }}
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Scramble",
  computed: mapState(["isPlaying", "scramble"])
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
