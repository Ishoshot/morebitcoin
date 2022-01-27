<template>
  <div>
    <non-auth>
      <template v-slot:body>
        <div>
          <hero></hero>

          <advantage></advantage>

          <overview></overview>

          <features></features>

          <!-- start count stats -->

          <section
            id="counter-stats"
            class="wow fadeInRight"
            data-wow-duration="1.4s"
          >
            <div class="container">
              <div class="row">
                <div class="col-md-4 stats">
                  <i class="fa fa-users" aria-hidden="true"></i>
                  <div class="counting" data-count="900000">18,982</div>
                  <h6 class="mt-2">Active Users</h6>
                </div>

                <div class="col-md-4 stats">
                  <i class="fa fa-check" aria-hidden="true"></i>
                  <div class="counting" data-count="280">24,007</div>
                  <h6 class="mt-2">Confirmed Investments</h6>
                </div>

                <div class="col-md-4 stats">
                  <i class="fa fa-money" aria-hidden="true"></i>
                  <div class="counting" data-count="75">41,833</div>
                  <h6 class="mt-2">Withdrawals</h6>
                </div>
              </div>
              <!-- end row -->
            </div>
            <!-- end container -->
          </section>

          <!-- end cont stats -->

          <plans></plans>

          <get-app-in-store></get-app-in-store>

          <testimonial></testimonial>
        </div>
      </template>
    </non-auth>
  </div>
</template>

<script>
// number count for stats, using jQuery animate

export default {
  name: "Index",
  components: {},
  data: () => ({}),
  methods: {},
  created() {},
};
</script>

<style scoped>
body {
  overflow-x: hidden;
  font-family: "Roboto Slab";
}

/*/ start count stats /*/

section#counter-stats {
  display: flex;
  justify-content: center;
  margin-top: 3em;
  margin-bottom: 5em;
}

.stats {
  text-align: center;
  font-size: 35px;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
}

.stats .fa {
  color: #1a74bb;
  font-size: 60px;
}

/*/ end count stats /*/
</style>
