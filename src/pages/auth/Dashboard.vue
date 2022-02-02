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
/* 
.profile-progress {
  background-color: #fff;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
} */

.graph {
  background-color: #fff;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
}
</style>
