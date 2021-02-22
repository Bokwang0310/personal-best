<template>
  <dropdown
    class="dropdown"
    :options="options"
    :selected="selectedOption"
    @updateOption="methodToRunOnSelect"
    placeholder="Select Mode"
  ></dropdown>
</template>

<script>
import dropdown from "vue-dropdowns";

export default {
  name: "Dropdown",
  data() {
    return {
      options: [{ name: "No Record" }, { name: "Record" }],
      selectedOption: {}
    };
  },
  methods: {
    methodToRunOnSelect(payload) {
      this.selectedOption = payload;
    }
  },
  components: { dropdown }
};
</script>
<style scoped>
.dropdown {
  margin-left: 25%;
}
</style>
