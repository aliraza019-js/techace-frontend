<template>
  <v-footer color="black" padless>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col class="black py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>Tech Ace</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script>
export default {
  data() {
    return {
      links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"],
    };
  },
};
</script>

<style lang="scss" scoped>
.footer-main-container {
  background-color: black !important;
  .footer-headings {
    color: #39308a;
    font-size: 18px;
    font-weight: 500;
  }
  .footer-links-title {
    color: rgba(255, 255, 255, 0.79);
    padding-left: 0px;
    font-size: 14px;
    font-weight: 300;
    margin-left: 50px;
    line-height: 2;
  }
}
</style>