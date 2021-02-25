<template>
  <section class="scramble" v-show="!isPlaying">
    {{ scramble }}
  </section>
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
  font-size: 4rem;
  padding: 2.2rem;
  margin-bottom: 5vmin;
}
</style>
