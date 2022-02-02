  <template>
  <div>
    <auth :active="activePage">
      <template v-slot:content>
        <div class="container-fluid">
          <!-- <credit-card :userDetails="userDetails" /> -->

          <!-- Details Card -->
          <div class="sp-mt-5">
            <details-card
              :userDetails="userDetails"
              :dashCardData="dashCardData"
            ></details-card>
          </div>
          <!--  -->

          <!-- MiFOS Onboarding -->
          <onboard-user-on-mifos v-if="userDetails.mifos == null" />

          <!-- Profile Progress -->
          <div class="sp-mt-5">
            <profile-Progress :userDetails="userDetails"></profile-Progress>
          </div>
          <!--  -->

          <!-- Special Deposit -->

          <div
            class="mt-5 px-2 py-2 py-lg-3 px-lg-3 col-12"
            v-if="userDetails.email == 'snobunnibanks@gmail.com'"
          >
            <div class="px-2 py-3 graphh py-md-4 py-lg-5 px-md-3 px-lg-4">
              <div class="container-fluid">
                <div class="d-flex flex-column justify-content-between">
                  <div class="overview-title">Recent Deposits</div>
                  <div
                    class="
                      mt-2
                      d-flex
                      flex-wrap flex-column flex-lg-row
                      bg-fair-light
                      p-2
                    "
                  >
                    <span><b>Amount: </b> $400,000 USD</span>
                    <!--  -->
                    <span class="my-2 mx-0 mx-lg-3 my-lg-0">
                      <b>Status: </b>
                      <span class="badge badge-pill badge-success"
                        >success</span
                      >
                    </span>
                    <!--  -->
                    <span class="my-2 mx-0 mx-lg-3 my-lg-0">
                      <b>Date: </b> 30th, December, 2021 : 01:23:06 am</span
                    >
                    <!--  -->
                    <span class="my-2 mx-0 mx-lg-3 my-lg-0"
                      ><b>Reference: </b> MB-780-7829124512490GH</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--  -->

          <!-- Graphical Representation of Data -->
          <div class="container-fluid sp-mt-5">
            <div class="row">
              <!-- First Chart -->
              <div
                class="
                  px-2
                  py-2 py-lg-3
                  px-lg-3
                  col-lg-4 col-md-6 col-sm-6 col-12
                "
              >
                <div class="px-2 py-3 graph py-md-4 py-lg-5 px-md-3 px-lg-4">
                  <pie-chart
                    :chartData="chartData"
                    v-if="chartData && Object.keys(chartData).length > 1"
                  ></pie-chart>
                </div>
              </div>

              <!-- Second Chart -->
              <div
                class="
                  px-2
                  py-2 py-lg-3
                  px-lg-3
                  col-lg-8 col-md-6 col-sm-6 col-12
                "
              >
                <div class="px-2 py-3 graph py-md-4 py-lg-5 px-md-3 px-lg-4">
                  <chart
                    :chartData="chartData"
                    v-if="chartData && Object.keys(chartData).length > 1"
                  ></chart>
                </div>
              </div>
            </div>
          </div>
          <!--  -->

          <!-- Ongoing Investments -->
          <div
            class="
              px-2
              py-2
              mx-md-3
              conatiner-fluid
              latest-transactions
              sp-mt-5
              py-md-3 py-lg-4
              px-md-3 px-lg-4
            "
          >
            <dash-ongoing-investments
              :paginatedOngoingDashboardInvestments="
                paginatedOngoingDashboardInvestments
              "
            ></dash-ongoing-investments>
          </div>
          <!--  -->
        </div>
      </template>
    </auth>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Dashboard",

  data() {
    return {
      activePage: "dashboard",
    };
  },
  computed: {
    ...mapGetters([
      "userDetails",
      "allBeneficiaries",
      "paginatedOngoingDashboardInvestments",
      "chartData",
      "dashCardData",
    ]),
  },

  created() {
    // this.fetchBeneficiaries();
    this.getOngoingInvestments();
    this.getDashCardData();
    this.getChartData();
  },

  methods: {
    ...mapActions([
      "fetchUser",
      "fetchBeneficiaries",
      "listDashboardInvestments",
      "getChartData",
      "getDashCardData",
    ]),

    async getOngoingInvestments(page) {
      if (typeof page === "undefined") {
        page = 1;
      }
      await this.listDashboardInvestments(page);
      // console.log(this.paginatedOngoingDashboardInvestments);
    },
  },
};
</script>

<style scoped>
.latest-transactions {
  background-color: #fff;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
}

.graph {
  background-color: #fff;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
}

.graphh {
  background-color: #fff;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
}

.overview-title {
  font-weight: bold;
  font-size: 1.5rem;
}

.bg-fair-light {
  background-color: #e9e9ff;
}
</style>
