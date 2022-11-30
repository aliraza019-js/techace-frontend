<template>
  <div class="w-100">
    <Hero />
    <connect-with-tap></connect-with-tap>
    <our-products></our-products>
  </div>
</template>
  
  <script>
import ConnectWithTap from "../components/Home/connectWithTap.vue";
import Hero from "../components/Home/hero.vue";
import OurProducts from "../components/Home/ourProducts.vue";

export default {
  name: "Home",

  components: {
    Hero,
    ConnectWithTap,
    OurProducts,
  },
};
</script>
  