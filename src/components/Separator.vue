<template>
  <hr :style="`border-color: ${color};`" />
</template>

<script>
export default {
  name: "Seperator",
  props: ["color"]
};
</script>

<style scoped>
hr {
  margin: 20px;
  border-bottom: 0px;
}
</style>
