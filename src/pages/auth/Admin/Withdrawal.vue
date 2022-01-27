<template>
  <div>
    <auth>
      <template v-slot:content>
        <div class="container-fluid body">
          <div class="row">
            <div class="col-12 sp-mt-5 align-items-start">
              <h4 class="page-title">
                <i class="fa fa-bank"></i> Withdrawal
                <span class="text-muted ref">
                  {{ singleWithdrawal.uid }}
                </span>
              </h4>
            </div>
          </div>
          <div class="row">
            <div
              class="
                col-lg-8
                order-2 order-lg-1
                mt-sm-5
                sp-mt-5
                align-items-start
              "
            >
              <!-- Withdrawal Row  -->
              <div class="row justify-content-center justify-content-md-start">
                <!-- Withdrawal ID  -->
                <div
                  class="
                    col-md-4 col-sm-6 col-10
                    d-flex
                    justify-content-md-center
                  "
                >
                  <div
                    class="
                      card
                      top-card
                      border-0
                      shadow-sm
                      justify-content-center
                      mt-1
                    "
                  >
                    <div
                      class="
                        d-flex
                        flex-row
                        justify-content-around
                        align-items-center
                      "
                    >
                      <div class="wallet-icon">
                        <i class="fi fi-wallet text-primary"></i>
                      </div>
                      <div
                        class="
                          d-flex
                          flex-column
                          justify-content-between
                          align-items-start
                        "
                      >
                        <div class="amount">
                          {{ singleWithdrawal.uid }}
                        </div>
                        <div class="amount-label">Withdrawal ID</div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Amount USD -->
                <div
                  class="
                    col-md-4 col-sm-6 col-10
                    d-flex
                    justify-content-md-center
                  "
                >
                  <div
                    class="
                      card
                      top-card
                      border-0
                      shadow-sm
                      justify-content-center
                      mt-1
                    "
                  >
                    <div
                      class="
                        d-flex
                        flex-row
                        justify-content-around
                        align-items-center
                      "
                    >
                      <div class="pie-icon">
                        <i class="fi fi-wallet text-success"></i>
                      </div>
                      <div
                        class="
                          d-flex
                          flex-column
                          justify-content-between
                          align-items-start
                        "
                      >
                        <div class="amount">
                          {{
                            singleWithdrawal.amountUSD
                              | formatAmount("USD", "en-US")
                          }}
                        </div>
                        <div class="amount-label">Amount in USD</div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Investment Amount BTC -->
                <div
                  class="col-md-4 col-sm-6 col-10 d-flex justify-content-md-end"
                >
                  <div
                    class="
                      card
                      top-card
                      border-0
                      shadow-sm
                      justify-content-center
                      mt-1
                    "
                  >
                    <div
                      class="
                        d-flex
                        flex-row
                        justify-content-around
                        px-sm5
                        align-items-center
                      "
                    >
                      <div class="deduct-icon">
                        <i class="fa fa-percent text-danger"></i>
                      </div>
                      <div
                        class="
                          d-flex
                          flex-column
                          justify-content-between
                          align-items-start
                        "
                      >
                        <div class="amount">
                          {{ singleWithdrawal.amountBTC }}
                        </div>
                        <div class="amount-label">Amount in BTC</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Withdrawal Status & Date -->
              <div class="row">
                <!-- Status Card -->
                <div class="col-md-6 sp-mt-5 justify-content-center">
                  <!-- Created Status -->
                  <div
                    class="
                      success-card
                      border-0
                      shadow-sm
                      justify-content-center
                    "
                    v-if="singleWithdrawal.status === 'pending'"
                  >
                    <div class="d-flex flex-row justify-content-around">
                      <div class="pie-icon bg-secondary">
                        <i class="fa fa-check-circle text-warning"></i>
                      </div>
                      <div
                        class="
                          d-flex
                          flex-column
                          justify-content-between
                          align-items-start
                        "
                      >
                        <div class="status-msg">Withdrawal Initiated!</div>
                        <div class="status-label text-warning">
                          Awaiting Admin.
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Rejected Status -->
                  <div
                    class="
                      success-card
                      border-0
                      shadow-sm
                      justify-content-center
                    "
                    v-else-if="singleWithdrawal.status === 'rejected'"
                  >
                    <div class="d-flex flex-row justify-content-around">
                      <div class="pie-icon bg-danger">
                        <i class="fa fa-check-circle text-white"></i>
                      </div>
                      <div
                        class="
                          d-flex
                          flex-column
                          justify-content-between
                          align-items-start
                        "
                      >
                        <div class="status-msg">Withdrawal Rejected!</div>
                        <div class="status-label text-danger">
                          Withdrawal has been Rejected
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Success Status -->
                  <div
                    class="
                      success-card
                      border-0
                      shadow-sm
                      justify-content-center
                    "
                    v-else
                  >
                    <div class="d-flex flex-row justify-content-around">
                      <div class="pie-icon">
                        <i class="fa fa-check-circle text-success"></i>
                      </div>
                      <div
                        class="
                          d-flex
                          flex-column
                          justify-content-between
                          align-items-start
                        "
                      >
                        <div class="status-msg">Withdrawal Processed!</div>
                        <div class="status-label">
                          Your Withdrawal has been Processed.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Transaction Date CARD -->
                <div
                  class="
                    col-md-6
                    sp-mt-5
                    mb-md-0
                    sp-mb-10
                    justify-content-center
                  "
                >
                  <div
                    class="
                      date-card
                      border-0
                      shadow-none
                      justify-content-center
                    "
                  >
                    <div
                      class="
                        d-flex
                        flex-row
                        justify-content-around
                        align-items-center
                      "
                    >
                      <div class="calender-icon">
                        <i class="fi fi-calendar text-secondary"></i>
                      </div>
                      <div
                        class="
                          d-flex
                          flex-column
                          justify-content-between
                          align-items-start
                        "
                      >
                        <div class="amount text-secondary">
                          {{
                            _transdate.day +
                            ", " +
                            _transdate.date +
                            " " +
                            _transdate.month +
                            " " +
                            _transdate.year
                          }}
                        </div>

                        <div class="text-muted">Withdrawal Date</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!--  -->
            <!--  -->
            <!--  -->

            <div class="col-lg-4 order-1 order-lg-2 sp-mt-5">
              <div
                class="
                  info-card
                  shadow-none
                  border-0
                  d-flex
                  flex-column
                  justify-content-between
                "
              >
                <!-- Card Title -->
                <div
                  class="
                    font-weight-bold
                    d-flex
                    flex-row
                    justify-content-between
                  "
                >
                  <p>Investor Information</p>
                  <i class="fa fa-user-circle text-secondary"></i>
                </div>

                <!-- Name -->
                <div class="justify-content-between">
                  <p class="text-secondary font-weight-bold">
                    Full Name:
                    {{
                      singleWithdrawal.userProfile.last_name +
                      " " +
                      singleWithdrawal.userProfile.first_name
                    }}
                  </p>
                </div>

                <!-- Email Address -->
                <div class="justify-content-between">
                  <p class="text-secondary font-weight-bold">
                    Email: {{ singleWithdrawal.user.email }}
                  </p>
                </div>

                <!-- Phone Number -->
                <div class="justify-content-between">
                  <p class="text-secondary font-weight-bold">
                    Phone Number:
                    {{ singleWithdrawal.userProfile.phone }}
                  </p>
                </div>

                <!-- Country -->
                <div class="justify-content-between">
                  <p class="text-secondary font-weight-bold">
                    Country:
                    {{
                      singleWithdrawal.userProfile.country
                        ? singleWithdrawal.userProfile.country
                        : "N/A"
                    }}
                  </p>
                </div>
              </div>

              <!--  -->
              <!-- Set Status -->
              <div
                v-if="singleWithdrawal.status !== 'processed'"
                class="
                  mt-5
                  info-card
                  shadow-none
                  border-0
                  d-flex
                  flex-column
                  justify-content-between
                "
              >
                <!-- Card Title -->
                <div
                  class="
                    font-weight-bold
                    mb-3
                    d-flex
                    flex-row
                    justify-content-between
                  "
                >
                  <p>Update Withdrawal Status</p>
                  <i class="fa fa-star text-secondary"></i>
                </div>

                <!--  -->
                <div class="d-flex flex-column justify-content-between">
                  <div class="col-12 input-group-text p-2 bg-currency">
                    <v-select
                      class="form-control border-0 rounded-0 bg-dark"
                      :options="withdrawalOptions"
                      :reduce="(option) => option.status"
                      label="status"
                      v-model="withdrawalStatus"
                      placeholder="~ Please Select a Status ~"
                      @input="callUpdateWithdrawal()"
                    />
                  </div>
                  <div
                    class="
                      mt-3
                      col-12
                      alert alert-success alert-dismissible
                      fade
                      show
                    "
                    role="alert"
                    v-if="withBackEndSuccess"
                  >
                    <button
                      type="button"
                      class="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                    Withdrawal Status Updated Successfully.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row justify-content-center mt-sm-5 sp-mt-5">
            <router-link to="/withdrawals">
              <button class="btn btn-send font-weight-bold">
                <i class="mx-1 fi fi-arrow-left"></i>
                Go Back
              </button>
            </router-link>
          </div>
        </div>
      </template>
    </auth>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "Withdrawal",

  data: () => ({
    pageActive: "withdrawals",
    withdrawalStatus: "",
    withdrawalOptions: [
      {
        id: 1,
        status: "pending",
      },
      {
        id: 2,
        status: "rejected",
      },
      {
        id: 3,
        status: "processed",
      },
    ],
  }),

  computed: {
    ...mapGetters([
      "singleWithdrawal",
      "withBackEndSuccess",
      "withBackEndError",
    ]),
    // Format Withdrawal Date -@toArray[]
    _transdate: {
      get() {
        const months = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];

        const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
        let posted_on = new Date(this.singleWithdrawal.created_at);
        let formatted_date = {
          day: days[posted_on.getDay()],
          date: posted_on.getDate(),
          month: months[posted_on.getMonth()],
          year: posted_on.getFullYear(),
        };

        return formatted_date;
      },
      set(formatted_date) {
        return formatted_date;
      },
    },
  },

  created() {
    this.callWithdrawal(this.$route.params.id, "admin");
  },

  methods: {
    ...mapActions(["showWithdrawal", "updateWithdrawal"]),
    ...mapMutations(["setWithBackEndSuccess", "setWithBackEndError"]),

    /* ---------------------------- Call Withdrawal ---------------------------- */
    async callWithdrawal(id, mode) {
      let data = {
        id: id,
        mode: mode,
      };
      await this.showWithdrawal(data);
      // console.log(this.singleWithdrawal);
    },

    /* ---------------------------- Update Withdrawal --------------------------- */
    async callUpdateWithdrawal() {
      if (this.singleWithdrawal.status == this.withdrawalStatus) {
        this.$toast.open({
          message:
            "The selected status is the same as the current status. <br/> Choose another status and Try Again.",
          type: "warning",
        });
      } else {
        const data = {
          id: this.singleWithdrawal.id,
          status: this.withdrawalStatus,
        };

        await this.updateWithdrawal(data);
        if (this.withBackEndSuccess.length > 0) {
          setTimeout(() => {
            this.setWithBackEndSuccess("");
            this.withdrawalStatus = "";
            this.callWithdrawal(this.singleWithdrawal.id, "admin");
          }, 1000);
        } else {
          //toast.error
          return this.$toast.open({
            message: this.withBackEndError,
            type: "error",
          });
        }
      }
    },
  },
};
</script>

<style scoped>
.body {
  background: "#f2f4f8";
  height: 100vh;
}
.card {
  background: #2f40571a !important;
  /* min-width: 260px !important; */
  width: inherit !important;
  height: 110px !important;
  padding: 1rem !important;
  border-radius: 10px !important;
  display: flex;
  flex-direction: column;
}

.date-card {
  background: #2f40571a;
  width: inherit !important;
  display: flex;
  flex-direction: column;
  height: 130px;
  padding: 1rem;
  border-radius: 10px;
}

.trans-ref-card {
  background: #2f40571a;
  min-width: 245px;
  height: 130px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.trans-ref-card label {
  font-weight: bold;
  color: grey;
}
.ref-form {
  width: 70%;
  margin: 0 auto;
}

/*====== Status CSS ========*/

/* Success */
.success-card {
  background: rgba(6, 25, 53, 0.829);
  /* min-width: 350px; */
  width: inherit !important;
  display: flex;
  flex-direction: column;
  height: 130px;
  padding: 1rem;
  border-radius: 10px;
}

.status-msg {
  font-family: "Roboto Slab";
  font-weight: bold;
  font-size: 18px;
  color: #f9f9f9;
}

.status-label {
  font-family: "Montserrat", sans-serif;
  font-size: 13px;
  color: #29a745;
  text-align: center;
  font-weight: bold;
}

/* Error */
.error-card {
  background: rgb(255, 1, 53, 0.5);
  /* min-width: 350px; */
  width: inherit !important;

  height: 110px;
  padding: 1rem;
  border-radius: 10px;
}
/*====== Status CSS Ends Here ========*/

.info-card {
  background: #2f40571a;
  min-width: 245px;
  height: auto;
  padding: 1rem;
  border-radius: 10px;
}
.pie-icon {
  background: rgb(41, 167, 69, 0.3);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  text-align: center;
  line-height: 50px;
  font-size: 1.8rem;
}

.calender-icon {
  background: rgb(108, 117, 125, 0.3);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  text-align: center;
  line-height: 50px;
  font-size: 1.2rem;
}
.date-msg {
  font-family: "Roboto Slab";
  font-weight: bold;
  font-size: 15px;
  color: #f9f9f9;
}
.wallet-icon {
  background: rgb(66, 135, 235, 0.3);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  text-align: center;
  line-height: 50px;
  font-size: 1.8rem;
}

.deduct-icon {
  background: rgb(255, 1, 53, 0.3);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  text-align: center;
  line-height: 50px;
  font-size: 1.5rem;
}

.amount {
  font-family: "Roboto Slab";
  font-weight: bold;
  font-size: 18px;
}

.amount-label {
  font-family: "Montserrat", sans-serif;
  font-size: 13px;
  color: grey;
  text-align: center;
}

.info p {
  font-family: "Roboto Slab", sans-serif;
  font-size: 13px;
  color: grey;
  text-align: center;
}

.amount_input {
  border: none;
  width: 100px;
  height: 40px;
  font-size: 0.8rem;
  border-radius: 0%;
  border: 1px solid rgb(158, 158, 158);
  transition: 0.3s all;
}

.amount_input:focus {
  outline: none !important;
  box-shadow: none !important;
  opacity: 0.9;
}

.btn-trans {
  background-image: linear-gradient(45deg, #7175da, #637ec2);
}

.ref-info-icon {
  position: relative;
  top: 0;

  background: rgba(6, 25, 53, 0.829);
  width: 30px;
  height: 30px;
  /* border-radius: 20%; */
  border-top-left-radius: 4px;
  text-align: center;
  color: white;
  font-weight: bold;
  display: inline;
  cursor: pointer;
  /* margin-top: -3%; */
}
.page-title {
  font-family: "Roboto Slab";
  font-weight: bold;
  font-size: 25px;
  color: #2f4057;
}

.ref:hover {
  transition: 0.2s all;
  border-bottom: 1px solid #d3d5d8;
}
/* For mobile phones: */
@media (min-width: 576px) {
  .ref-info-icon {
    margin-top: -2.9%;
  }
}
@media (min-width: 768px) {
  .ref-info-icon {
    margin-top: -2.9%;
  }
}
@media (min-width: 992px) {
  .ref-info-icon {
    margin-top: -2.9%;
  }
}
@media (min-width: 1200px) {
  .ref-info-icon {
    margin-top: -1.1%;
  }
}

.btn-send {
  width: 250px;
  height: 60px;
  color: #1a7abb !important;
  border: 1px solid #1a7abb !important;
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  background-color: transparent !important;
  transition: 0.5s all;
  text-transform: capitalize;
  text-align: center;
  margin: 0px auto;
}

.btn-send:hover {
  background-color: #1a7abb !important;
  color: #fff !important;
}
</style>
