<template>
  <div>
    <v-snackbar
      absolute
      top
      :color="color"
      outlined
      left
      v-model="snackbar"
      :timeout="timeout"
    >
      {{ text }}
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: "snackbar",
  data() {
    return {
      snackbar: false,
      text: "",
      timeout: 2000,
      color: "green",
    };
  },
  mounted() {
    this.$root.$on("on-snackbar", (item) => {
      console.log("item", item);
      this.snackbar = true;
      this.text = item.text;
      this.color = item.color;
    });
  },
};
</script>

<style lang="scss" scoped>
</style>