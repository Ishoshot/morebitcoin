<template>
  <div>
    <div class="container py-5">
      <div
        class="row justify-content-center align-self-center"
        data-aos="fade-up"
      >
        <div class="col-12 text-center mb-5">
          <h2 class="title">Our Biggest Advantage</h2>
        </div>
        <!-- Intro -->
        <div
          class="col-lg-6 col-md-12 col-sm-12 intro-info"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <h3 class="mt-4 sub-title font-weight-bold">
            We minimize risks. Hence, Having Increased performance.
          </h3>
          <div class="mt-2">
            <p class="intro-text text-justify">
              The cryptocurrency market is complex, young, and highly volatile.
              MoreBitcoin has your best interest at heart and aims to simplify
              and enhance the experience of investing in cryptocurrencies. We
              enable users to invest in the crypto market with zero learning
              curve required.
            </p>
            <div class="container-fluid">
              <img src="/media/background/profit.svg" alt="" />
            </div>
          </div>
        </div>

        <!-- Image -->
        <div class="col-lg-6 col-md-12 col-sm-12">
          <div class="container-fluid advantage_image"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Advantage",
  mounted() {},
  data: () => ({}),
  methods: {},
  computed: {},
};
</script>

<style scoped>
.advantage_image {
  background: url("/media/background/advantage.png");
  width: 100%;
  height: 100%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.title {
  color: #2689fd;
  font-size: 2.5rem;
  font-weight: bold;
}

.sub-title {
  color: #000;
  font-size: 1.7rem;
}
</style>