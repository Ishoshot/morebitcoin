<template>
  <div>
    <!-- ======= Call To Action Section ======= -->
    <section id="call-to-action" class="call-to-action mt-4">
      <div class="container py-4" data-aos="zoom-out">
        <div class="row">
          <div class="col-lg-9 text-center text-lg-left">
            <h3 class="cta-title">Join MoreBitcoin</h3>
            <p class="cta-text">
              Investing in cryptocurrency can be intimidating, especially for
              beginners. Sometimes managing a crypto investment is daunting due
              to the uncertainty and volatility of the market, as well as the
              time investment needed to be successful.
            </p>
          </div>
          <div class="col-lg-3 cta-btn-container text-center">
            <router-link to="/register" class="btn init px-4 py-3 align-middle"
              >Create an Account</router-link
            >
          </div>
        </div>
      </div>
    </section>

    <!--  End Call To Action Section -->

    <!-- ======= Features Section ======= -->
    <section id="features" class="features">
      <div class="container" data-aos="fade-up">
        <div class="row feature-item align-items-center">
          <div
            class="col-lg-4 order-md-first order-last"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <img
              src="/media/background/comingsoon.jpeg"
              class="img-fluid tilt"
              id="tilt"
              alt=""
            />
          </div>
          <div
            class="col-lg-8 order-md-last order-first wow fadeInUp pt-5 pt-lg-0"
            data-aos="fade-left"
            data-aos-delay="150"
          >
            <h4 class="text-white">
              Our mobile app is coming soon to the App Store and Google
              Playstore.
            </h4>

            <div class="d-flex p-0 m-0">
              <div class="col-sm-6 px-2 px-md-0">
                <router-link to="#">
                  <img
                    src="/media/app-store.svg"
                    alt="App Store"
                    height="150"
                    width="150"
                  />
                </router-link>
              </div>
              <div class="col-sm-6 px-2 px-md-0">
                <router-link to="#">
                  <img
                    src="/media/google-play.svg"
                    alt="Google Play"
                    height="150"
                    width="150"
                  />
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Features Section -->
  </div>
</template>

<script>
export default {
  name: "GetAppInStore",
  methods: {
    tilt() {
      const image = document.querySelector(".tilt");

      image.addEventListener("mousemove", (event) => {
        const { top, bottom, left, right } =
          event.target.getBoundingClientRect();

        const middleX = (right - left) / 2;
        const middleY = (bottom - top) / 2;

        const clientX = event.clientX;
        const clientY = event.clientY;

        const offsetX = (clientX - middleX) / middleX;
        const offsetY = (middleY - clientY) / middleY;

        event.target.style.transform = `perspective(1000px) rotateY(${
          offsetX * 5
        }deg) rotateX(${offsetY * 5}deg) scale3d(1, 1, 1)`;
      });
    },
  },
  mounted() {
    setTimeout(() => {
      this.tilt();
    }, 5000);
  },
};
</script>

<style scoped>
.mt-6 {
  margin-top: 6rem;
}

.mobile-device {
  background-image: url("/media/mobile.svg");
  height: 50vh;
  width: 100%;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}

.content > h2 {
  color: #ff0035 !important;
}

.cta-title {
  color: #2689fd !important;
}

.init {
  border: 1px solid #2689fd;
  color: #fff;
  font-weight: bold;
  border-top-right-radius: 2rem;
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  background-color: #2689fd;
  transition: 0.5s all;
}

.init:hover,
.init:focus {
  background-color: #fff !important;
  color: #2689fd !important;
}

#features {
  background-color: #191919;
}
</style>