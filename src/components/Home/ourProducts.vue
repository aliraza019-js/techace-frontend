<template>
  <div class="our-product-container">
    <div class="heading">
      <h1 class="text-center">Our Products</h1>
    </div>
    <div>

    <v-img :src="require('@/assets/our-products.png')"> </v-img>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.our-product-container {
  background-color: #f1f2f2 !important;
}
.heading {
  color: #39308a;
  font-size: 28px;
  font-weight: 500;
}
</style>