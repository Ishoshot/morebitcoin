<template>
  <div>
    <auth>
      <template v-slot:content>
        <div class="container-fluid body">
          <div class="row">
            <div class="col-12 sp-mt-5 align-items-start">
              <h4 class="page-title">
                <i class="fa fa-bank"></i> Investment
                <span class="text-muted ref">
                  {{ singleInvestment.reference }}
                </span>
              </h4>
            </div>
          </div>
          <div
            class="row align-items-center"
            v-if="singleInvestment.status == 'inprogress'"
          >
            <div class="col-md-8 p-0">
              <div
                id="containerr"
                style="min-width: 310px; height: 400px"
              ></div>
            </div>
            <div class="col-md-4">
              <div class="info-card shadow-none border-0">
                <div v-if="singleInvestment.plan == 'Hydrogen'">
                  <p>Duration : {{ hydrogen.duration }}</p>
                  <p>First Payout : {{ hydrogen.first }}</p>
                  <p>Second Payout : {{ hydrogen.second }}</p>
                  <p>Third Payout : {{ hydrogen.third }}</p>
                </div>
                <div v-if="singleInvestment.plan == 'Helium'">
                  <p>Duration : {{ helium.duration }}</p>
                  <p>First Payout : {{ helium.first }}</p>
                  <p>Second Payout : {{ helium.second }}</p>
                  <p>Third Payout : {{ helium.third }}</p>
                </div>
                <div v-if="singleInvestment.plan == 'Lithium'">
                  <p>Duration : {{ lithium.duration }}</p>
                  <p>First Payout : {{ lithium.first }}</p>
                  <p>Second Payout : {{ lithium.second }}</p>
                  <p>Third Payout : {{ lithium.third }}</p>
                </div>
                <div v-if="singleInvestment.plan == 'Beryllium'">
                  <p>Duration : {{ beryllium.duration }}</p>
                  <p>First Payout : {{ beryllium.first }}</p>
                  <p>Second Payout : {{ beryllium.second }}</p>
                  <p>Third Payout : {{ beryllium.third }}</p>
                </div>
                <div v-if="singleInvestment.plan == 'Boron'">
                  <p>Duration : {{ boron.duration }}</p>
                  <p>First Payout : {{ boron.first }}</p>
                  <p>Second Payout : {{ boron.second }}</p>
                  <p>Third Payout : {{ boron.third }}</p>
                </div>
              </div>
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
              <!-- Investment Row  -->
              <div class="row justify-content-center justify-content-md-start">
                <!-- Plan  -->
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
                          {{ singleInvestment.plan }}
                        </div>
                        <div class="amount-label">Investment Plan</div>
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
                            singleInvestment.amountUSD
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
                          {{ singleInvestment.amountBTC }}
                        </div>
                        <div class="amount-label">Amount in BTC</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Transaction Reference Form -->
              <div
                class="row sp-mt-5"
                v-if="singleInvestment.status === 'created'"
              >
                <div class="col-12">
                  <div class="trans-ref-card shadow-none border-0">
                    <div class="ref-info-icon" @click.prevent="completionInfo">
                      <i class="fa fa-info"></i>
                    </div>

                    <form class="form ref-form">
                      <div class="d-flex flex-row justify-content-between">
                        <label>Complete Investment</label
                        ><label class="text-danger"
                          ><i class="fa fa-clock"></i> {{ countDown }}</label
                        >
                      </div>
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control amount_input"
                          placeholder="Investment Reference/Session ID"
                          aria-describedby="trans_ref"
                          v-model="singleInvestment.reference"
                          disabled
                        />
                        <div class="input-group-append">
                          <button
                            class="btn btn-trans m-0"
                            type="button"
                            id="trans_ref"
                            @click.prevent="callUpdateInvestment(1)"
                          >
                            Submit
                          </button>
                        </div>
                      </div>

                      <div
                        class="alert alert-success alert-dismissible fade show"
                        role="alert"
                        v-if="investmentBackEndSuccess"
                      >
                        <button
                          type="button"
                          class="close"
                          data-dismiss="alert"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                        {{ investmentBackEndSuccess }}
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <!-- Investment Status & Date -->
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
                    v-if="singleInvestment.status === 'created'"
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
                        <div class="status-msg">Transaction Created!</div>
                        <div class="status-label text-warning">
                          Please complete the transaction.
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Initiated Status -->
                  <div
                    class="
                      success-card
                      border-0
                      shadow-sm
                      justify-content-center
                    "
                    v-else-if="singleInvestment.status === 'initiated'"
                  >
                    <div class="d-flex flex-row justify-content-around">
                      <div class="pie-icon bg-secondary">
                        <i class="fa fa-angle-double-right text-dark"></i>
                      </div>
                      <div
                        class="
                          d-flex
                          flex-column
                          justify-content-between
                          align-items-start
                        "
                      >
                        <div class="status-msg">Transaction Initiated!</div>
                        <div class="status-label text-secondary">
                          Awaiting Confimation
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Abandoned Status -->
                  <div
                    class="
                      success-card
                      border-0
                      shadow-sm
                      justify-content-center
                    "
                    v-else-if="singleInvestment.status === 'abandoned'"
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
                        <div class="status-msg">Abandoned Transaction</div>
                        <div class="status-label text-danger">
                          Transaction has been abandoned
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Completed Status -->
                  <div
                    class="
                      success-card
                      border-0
                      shadow-sm
                      justify-content-center
                    "
                    v-else-if="singleInvestment.status === 'completed'"
                  >
                    <div class="d-flex flex-row justify-content-around">
                      <div class="pie-icon bg-success">
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
                        <div class="status-msg">Completed Transaction</div>
                        <div class="status-label text-success">
                          Transaction has been completed
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
                        <div class="status-msg">Success!</div>
                        <div class="status-label">
                          Your Investment is Ongoing!!!
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

                        <div class="text-muted">Transaction Date</div>
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
                      singleInvestment.userProfile.last_name +
                      " " +
                      singleInvestment.userProfile.first_name
                    }}
                  </p>
                </div>

                <!-- Email Address -->
                <div class="justify-content-between">
                  <p class="text-secondary font-weight-bold">
                    Email: {{ singleInvestment.user.email }}
                  </p>
                </div>

                <!-- Phone Number -->
                <div class="justify-content-between">
                  <p class="text-secondary font-weight-bold">
                    Phone Number:
                    {{ singleInvestment.userProfile.phone }}
                  </p>
                </div>

                <!-- Country -->
                <div class="justify-content-between">
                  <p class="text-secondary font-weight-bold">
                    Country:
                    {{
                      singleInvestment.userProfile.country
                        ? singleInvestment.userProfile.country
                        : "N/A"
                    }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="row justify-content-center mt-sm-5 sp-mt-5">
            <router-link to="/investments">
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
  name: "Investment",
  data() {
    return {
      countDown: "",
      credit_reference: "",
      hydrogen: {
        duration: "84 days",
        first: "$10 BTC - 7 days",
        second: "$40 BTC - 28 days",
        third: "$100 BTC - 84 days",
      },
      helium: {
        duration: "84 days",
        first: "$500 BTC - 7 days",
        second: "$600 BTC - 28 days",
        third: "$2,000 BTC - 84 days",
      },
      lithium: {
        duration: "35 days",
        first: "$714.28 BTC - Daily",
        second: "$5,000 BTC - 7 days",
        third: "$25,000 BTC - 35 days",
      },
      beryllium: {
        duration: "35 days",
        first: "$2,857.14 BTC - Daily",
        second: "$20,000 BTC - 7 days",
        third: "$100,000 BTC - 35 days",
      },
      boron: {
        duration: "35 days",
        first: "$7,142 BTC - Daily",
        second: "$50,000 BTC - 7 days",
        third: "$250,000 BTC - 35 days",
      },
    };
  },

  computed: {
    ...mapGetters(["singleInvestment", "investmentBackEndSuccess"]),
    // Format Investment Date -@toArray[]
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
        let posted_on = new Date(this.singleInvestment.created_at);
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
    this.callInvestment(this.$route.params.id, "user");
    setTimeout(() => {
      $(document).ready(function () {
        Highcharts.setOptions({
          global: {
            useUTC: false,
          },
        });

        Highcharts.chart("containerr", {
          chart: {
            type: "areaspline",
            animation: Highcharts.svg,
            marginRight: 0,
            events: {
              load: function () {
                var series = this.series[0];
                setInterval(function () {
                  var x = new Date().getTime(),
                    y = Math.random() * (50000 - 44000) + 44000;
                  series.addPoint([x, y], true, true);
                }, 1000);
              },
            },
          },
          title: {
            text: "",
          },
          xAxis: {
            type: "datetime",
            tickPixelInterval: 150,
          },
          yAxis: {
            title: {
              text: "",
            },
            plotLines: [
              {
                value: 0,
                width: 1,
                color: "#808080",
              },
            ],
          },
          tooltip: {
            formatter: function () {
              return (
                "<b>" +
                this.series.name +
                "</b><br/>" +
                Highcharts.dateFormat("%Y-%m-%d %H:%M:%S", this.x) +
                "<br/>" +
                Highcharts.numberFormat(this.y, 2)
              );
            },
          },
          legend: {
            enabled: false,
          },
          exporting: {
            enabled: false,
          },
          series: [
            {
              name: "BTC Investment",
              color: "#54ba5f",
              data: (function () {
                var data = [],
                  time = new Date().getTime(),
                  i;

                for (i = -19; i <= 0; i += 1) {
                  data.push({
                    x: time + i * 1000,
                    y: Math.random(),
                  });
                }
                return data;
              })(),
            },
          ],
        });
      });
    }, 2000);
  },

  methods: {
    ...mapActions(["showInvestment", "updateInvestment"]),
    ...mapMutations(["setInvestmentBackEndSuccess"]),
    /* ---------------------------- Call Investment ---------------------------- */

    async callInvestment(id, mode) {
      let data = {
        id: id,
        mode: mode,
      };
      await this.showInvestment(data);
      // console.log(this.singleInvestment);

      this.elapseIn();
    },

    /* ---------------------------- Render Countdown ---------------------------- */

    elapseIn() {
      const elapseDate = this.singleInvestment.elapse_at;
      if (elapseDate) {
        setInterval(() => {
          var currentDate = new Date();
          currentDate.setHours(currentDate.getHours() - 1);
          var elapseIn = new Date(elapseDate);

          // console.log(currentDate);
          // console.log(elapseIn);

          if (currentDate > elapseIn) {
            //TODO::Change the status on the client
            if (this.singleInvestment.status == "created") {
              this.singleInvestment.status = "abandoned";
            }
            this.countDown = "0:00:00";
          } else {
            var millis = Math.abs(elapseIn - currentDate);

            var hour = Math.floor((millis / 3600 / 1000) % 24);
            hour = (hour < 10 ? "0" : "") + hour;
            var minute = Math.floor((millis / 60000) % 60);
            minute = (minute < 10 ? "0" : "") + minute;
            var seconds = ((millis % 60000) / 1000).toFixed(0);
            seconds = (seconds < 10 ? "0" : "") + seconds;

            var dDate = hour + ":" + minute + ":" + seconds;

            this.countDown = dDate;
          }
        }, 1000);
      } else {
        this.countDown = "-:--:--";
      }
    },

    /* --------------------------- Display Completion information -------------------------- */

    completionInfo() {
      this.$toast.open({
        message:
          "Please complete the Investment by providing <br/> the Session ID / Reference of the Investment.",
        type: "info",
      });
    },

    /* ---------------------------- Update Investment --------------------------- */

    async callUpdateInvestment(type) {
      if (type === 1) {
        const data = {
          id: this.singleInvestment.id,
          credit_reference: this.singleInvestment.reference,
          status: "initiated",
        };

        await this.updateInvestment(data);
        if (this.investmentBackEndSuccess.length > 0) {
          this.credit_reference = "";
          setTimeout(() => {
            this.setInvestmentBackEndSuccess("");
            this.$router.push({
              name: "dashboard",
            });
          }, 1500);
        } else {
          return this.$toast.open({
            message: "Something went wrong, please try again.",
            type: "error",
          });
        }
      } else {
        //   Set Investment to Abandoned
        this.$router.push({
          name: "dashboard",
        });
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
