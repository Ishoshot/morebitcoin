<template>
  <div>
    <div class="py-5 mt-5 text-center container-fluid sponsor">
      <img src="/media/background/sponsors.png" alt="Sponsors" />
    </div>

    <div class="container px-4 overview sp-py-7 sp-mt-7">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="mt-4 content-box">
            <span class="tagline bar font-weight-bold">ABOUT US </span>
            <h3 class="mt-4 font-weight-bold">
              Transfer Money in a Minute with Secure Way
            </h3>
            <p class="mt-4 text-justify">
              We offer the maximum return percentages to the customer at the
              smallest possible investment amounts. You do not need to be very
              strong monetarily to start investing with us. As an investor, you
              can start with a small sum of money. Our financial experts would
              guide you about the best investment options that match your
              financial standing. Our experts work very hard so that our
              customers can earn higher profit sums. Our company does not commit
              expected profits without comprehensive analysis. We have
              experienced financial experts who perform detailed risk analysis
              and calculations for profitable investment options. Our investment
              systems have been designed with a flexible strategy so that
              customers are not pressurized about making large investments.
              People who choose us to make investments can be absolutely sure
              that their money would not be lost. Through our quality financial
              models, we make sure that customers do not face financial losses.
              In addition to that, there are no hidden terms which investors are
              not told about.
            </p>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="row">
            <!-- 24/7 Service -->
            <div class="mt-4 col-sm-6">
              <div class="p-4 text-center bg-white shadow-sm box">
                <img
                  src="/media/services.svg"
                  alt=""
                  height="120"
                  width="120"
                />

                <h4 class="overview-heading font-weight-bold">24/7 Services</h4>
                <p class="mt-3">
                  We ensure our platform is always active for our users.
                </p>
              </div>
            </div>

            <!-- Instant Cash -->

            <div class="mt-4 col-sm-6">
              <div class="p-4 text-center bg-white shadow-sm box">
                <img src="/media/money.svg" alt="" height="120" width="120" />

                <h4 class="overview-heading font-weight-bold">
                  Instant Transaction
                </h4>
                <p class="mt-3">
                  Deposits and Withdrawals are instant upon approval.
                </p>
              </div>
            </div>

            <!-- Fully Encrypted -->

            <div class="mt-4 col-sm-6">
              <div class="p-4 text-center bg-white shadow-sm box">
                <img src="/media/encrypt.svg" alt="" height="120" width="120" />

                <h4 class="overview-heading font-weight-bold">
                  Fully Encrypted
                </h4>
                <p class="mt-3">
                  Every transaction is fully encrypted and secured.
                </p>
              </div>
            </div>

            <!-- Easy, Safe and Fast -->

            <div class="mt-4 col-sm-6">
              <div class="p-4 text-center bg-white shadow-sm box">
                <img src="/media/easy.svg" alt="" height="120" width="120" />

                <h4 class="overview-heading font-weight-bold">Easy and Safe</h4>
                <p class="mt-3">
                  We provide a safe and secure platform for our customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Overview",
};
</script>

<style scoped>
.sponsor {
  background: #000;
}

.overview {
  background-color: #e6f0ff;
  border-radius: 1rem;
}

.overview-heading {
  font-size: 1rem;
}

.box > p {
  font-size: 0.8rem;
}
</style>