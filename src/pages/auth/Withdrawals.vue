<template>
  <div>
    <auth :active="pageActive">
      <template v-slot:content>
        <div class="container-fluid sp-pt-5">
          <h4 class="font-weight-bold text-uppercase">Manage Withdrawals</h4>

          <div class="row justify-content-center mt-4">
            <div :id="createWithdrawal ? 'page-mask' : ''"></div>

            <!-- Create Beneficiary -->
            <div
              class="
                col-11
                ben-modal
                py-5
                d-flex
                flex-column
                justify-content-center
                shadow-lg
              "
              v-if="createWithdrawal"
            >
              <!-- Close Icon -->
              <i
                class="text-right fi fi-close-a mr-3"
                @click.prevent="toggleCreateWithdrawal"
              ></i>

              <!-- Modal Content -->
              <div>
                <div class="col-12">
                  <create-withdrawal></create-withdrawal>
                </div>
              </div>
            </div>

            <!-- Add New -->
            <div class="col-12">
              <span
                class="
                  float-right
                  btn btn-withdraw btn-sm
                  px-3
                  py-2
                  font-weight-bold
                "
                @click.prevent="toggleCreateWithdrawal"
              >
                Withdraw Funds
              </span>
            </div>

            <!-- Manage Beneficiary -->
            <div class="col-12">
              <manage-withdrawals
                :createWithdrawal="createWithdrawal"
              ></manage-withdrawals>
            </div>
          </div>
        </div>
      </template>
    </auth>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Withdrawals",

  data: () => ({
    createWithdrawal: false,
    pageActive: "withdrawals",
  }),

  computed: {
    ...mapGetters(["userDetails"]),
  },

  created() {
    this.active = true;
  },

  methods: {
    toggleCreateWithdrawal() {
      this.$router.push({
        path: "/security/site/maintenance/",
      });
      return;
      if (this.userDetails.profile.withdrawal_point == 0) {
        this.$toast.open({
          message:
            "You don't have enough withdrawal points to withdraw funds. Invest More to gain more points to withdraw funds.",
          type: "error",
          position: "top-right",
          duration: 5000,
        });
        return;
      } else {
        this.createWithdrawal = !this.createWithdrawal;
      }
    },
  },
};
</script>

<style scoped>
.ben-modal {
  background-color: #fff;
  position: absolute;
  /* height: 100vh; */
  top: 10%;
  z-index: 10;
}

.btn-withdraw {
  background-color: #1781d3 !important;
  border: none !important;
}

.btn-withdraw:hover {
  background-color: #1781d3 !important;
  border: none !important;
}
</style>
