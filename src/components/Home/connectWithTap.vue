<template>
  <div class="main-connect-with-tap-container">
    <v-row>
      <v-col :cols="8">
        <div class="heading-container">
          <span class=" connect-with-tap">
            Connect with a Tap Anywhere, Anytime
          </span>
        </div>
      </v-col>
      <v-col :cols="4">
        <v-img width="400" :src="require('@/assets/connect-with-tap.png')">
        </v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.connect-with-tap {
  color: #bfbfbf;
  font-family: "Work Sans", Sans-serif;
  font-size: 44px;
  padding: 0;
  margin: 0;
  line-height: 1;
}
.heading-container {
  width: 717px;
  max-width: 717px;
  margin: 60px 60px !important
}
.main-connect-with-tap-container {
  height: 300px;
  background-color: #346e67 !important;
}
</style>