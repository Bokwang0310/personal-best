<template>
  <dropdown
    class="dropdown"
    :options="options"
    :selected="selectedOption"
    @updateOption="methodToRunOnSelect"
  ></dropdown>
</template>

<script>
import { mapMutations } from "vuex";
import dropdown from "vue-dropdowns";

export default {
  name: "Dropdown",
  data() {
    return {
      options: [
        { name: "No Record", bool: false },
        { name: "Record", bool: true }
      ],
      selectedOption: this.$store.state.selectedOption
    };
  },
  methods: {
    methodToRunOnSelect(payload) {
      this.setSelectedOption(payload);
    },
    ...mapMutations(["setSelectedOption"])
  },
  components: { dropdown }
};
</script>

<style scoped>
.dropdown {
  margin-left: 25%;
}
</style>
