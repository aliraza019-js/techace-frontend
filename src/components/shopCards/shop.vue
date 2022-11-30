<template>
  <div>
    <v-container fluid class="my-10">
      <v-row>
        <v-col cols="6">
          <v-img
            class="ma-2"
            height="700px"
            :src="require('@/assets/shop-image.png')"
          ></v-img>
        </v-col>
        <v-col cols="6">
          <div class="my-14">
            <div>
              <h3 class="plastic">STEP 1</h3>
              <span>
                <v-img
                  class="img"
                  width="50"
                  :src="require('@/assets/step.png')"
                ></v-img>
              </span>
            </div>

            <div>
              <h3 class="plastic">SELECT MODEL & QUANTITY</h3>
            </div>
            <p>
              Our Standard and Custom Models come programmed with your contact
              and networking details. However, our Standard Models come with an
              exterior pre-made design that cannot be personalized or customized
              for print.
            </p>
            <div>
              <h4>About</h4>
            </div>
            <p>
              This is also an inexpensive option. The credit card is thick for
              extra durability. We have cut it with curved corners to prevent
              very sharp edges that can injure the skin. It has a sturdy feel,
              elegant design, and indestructibility that will put prospects at
              your mercy. Perfect for the budget-conscious, desiring a
              long-lasting and water-proof card You can manage and share our
              business cards easily. It comes with other unique features.
            </p>
          </div>
          <v-btn
            class="align-center"
            v-if="!canShowRegistrationfrom"
            @click="canShowRegistrationfrom = true"
            color="primary"
            >Next</v-btn
          >
          <registration v-if="canShowRegistrationfrom"></registration>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import registration from "../../views/Auth/registration.vue";

export default {
  components: { registration },
  data() {
    return {
      canShowRegistrationfrom: false,
    };
  },
};
</script>

<style scoped>
.plastic {
  font-family: Poppins;
  font-weight: 600;
  text-transform: none;
  line-height: 1.5;
  color: #2b2b2b;
  font-size: 30px;
  text-align: center;
}
.img {
  height: auto;
  max-width: 100%;
  border: none;
  border-radius: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
}
</style>