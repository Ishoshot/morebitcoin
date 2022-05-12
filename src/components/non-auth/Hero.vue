<template>
  <div>
    <!-- ======= Hero Section ======= -->
    <section id="hero" class="clearfix">
      <div class="container d-flex h-100">
        <div
          class="row justify-content-center align-self-center"
          data-aos="fade-up"
        >
          <!-- Intro -->
          <div class="col-lg-6 col-md-12 col-sm-12 intro-info">
            <!-- <div class="mt-1 text-sub">SIMPLE, EASY AND ELEGANT WAY TO</div> -->
            <h2 class="mt-4 text-white">
              Invest in <span class="keyword">Cryptocurrency</span> with no
              trading skills.
            </h2>
            <div class="mt-2">
              <div class="p-0 m-0 col-sm-12">
                <p class="text-justify intro-text">
                  Choosing a reliable company for making financial investments
                  requires intelligent thinking. We are an experienced
                  investment company that offers diverse business options to
                  customers. We trade in monetary, financial and crypto currency
                  in various large scaled markets. Our company aims at achieving
                  great milestones for her customers.
                </p>
              </div>
              <div class="p-0 m-0 col-sm-12">
                <router-link to="/login">
                  <button class="px-5 py-3 btn init font-weight-bold">
                    <i class="mx-1 fa fa-hand-o-down"></i> Get Started
                  </button>
                </router-link>
              </div>
            </div>
          </div>

          <!-- Hero Image -->
          <div class="mt-5 col-lg-6 col-md-12 col-sm-12 col-12">
            <div class="container hero_image">
              <!-- Image -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Hero -->

    <div class="container sp-mt-8">
      <div class="row justify-content-center align-self-center d-lg-none">
        <img src="/media/background/hero.png" class="img" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  methods: {},
  computed: {},
};
</script>

<style scoped>
.img {
  width: 30rem;
  height: 30rem;
}

.hero_image {
  background: url("/media/background/hero.png");
  width: 100%;
  height: 100%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

#hero {
  background: linear-gradient(to bottom, #2689fd, #343996);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.mt-10 {
  margin-top: 17em;
}

.intro-text {
  font-size: 1rem;
  color: #e2edff;
}

.text-sub {
  color: #e2edff;
}

.keyword {
  color: #3aaeef !important;
}

.init {
  border: 1px solid #fff;
  border-top-right-radius: 2rem;
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  background-color: transparent;
  transition: 0.5s all;
}

.init:hover,
.init:focus {
  background-color: #fff !important;
  color: #000 !important;
}
</style>
