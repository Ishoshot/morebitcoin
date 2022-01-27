<template>
  <div>
    <auth :active="activePage">
      <template v-slot:content>
        <!-- MoreBitcoin Calculator -->
        <onboard-user-on-mifos v-if="userDetails.mifos == null" />

        <!-- BOT: Update Profile -->
        <div class="container-fluid sp-pt-8" v-if="userDetails.score < 70">
          <div
            class="d-flex flex-column justify-content-center align-items-center"
          >
            <div class="text-center col-12 col-lg-8">
              <p>
                <span
                  class="
                    px-2
                    py-2
                    ml-2
                    text-white
                    badge badge-secondary
                    font-weight-bold
                  "
                  >MoreBitcoin BOT</span
                >
              </p>

              <p>
                Hi {{ userDetails.profile.first_name }}, I noticed your profile
                isn't fully setup in order to start investing. Kindly update
                your profile now. I'll be waiting right here for you 😃!
              </p>

              <router-link to="/user/profile">
                <span class="text-primary">Go to Profile</span>
              </router-link>
            </div>
          </div>
        </div>

        <div class="container-fluid sp-pt-8" v-else>
          <div :id="showPaymentModal ? 'page-mask' : ''"></div>

          <!-- Navigation -->
          <ol class="steps">
            <li
              :class="[
                pageState == 'plan' ? 'is-active' : '',
                pageState == 'investment_info' ? 'is-complete' : '',
                pageState == 'summary' ? 'is-complete' : '',
              ]"
              class="step"
              data-step="1"
              @click.prevent="setPageState('plan')"
            >
              Select a Plan
            </li>
            <li
              :class="[
                pageState == 'plan' ? '' : '',
                pageState == 'investment_info' ? 'is-active' : '',
                pageState == 'summary' ? 'is-complete' : '',
              ]"
              class="step"
              data-step="2"
              @click.prevent="validatePlanState()"
            >
              Investment Info
            </li>
            <li
              :class="[
                pageState == 'plan' ? '' : '',
                pageState == 'investment_info' ? '' : '',
                pageState == 'summary' ? 'is-active' : '',
              ]"
              class="step"
              data-step="3"
              @click.prevent="validateInvestmentInfo()"
            >
              Summary
            </li>
          </ol>

          <!-- Plan State -->
          <div class="container sp-my-6" v-if="pageState == 'plan'">
            <section class="pb-5">
              <div class="container">
                <h4 class="state-header">Select a Plan</h4>
                <div class="row align-items-top">
                  <div
                    class="text-left sp-mt-3 col-12 col-sm-10 col-md-6 col-lg-6"
                    @click.prevent="choosePlan('Hydrogen')"
                  >
                    <div
                      class="br plan"
                      :class="plan === 'Hydrogen' ? 'selected' : ''"
                    >
                      <div class="p-3 text-center bg-secon">
                        <h5 class="mb-2 text-white font-weight-bold">
                          Hydrogen
                        </h5>
                      </div>

                      <div class="p-2 text-center">
                        <p>$ Amount - $10 BTC</p>
                        <p>% Return - 100% capital in 7 days</p>
                        <p>Duration in days - 84 days</p>
                        <p>$ First Income - $10 BTC - 7 days</p>
                        <p>$ Second Income - $40 BTC - 28 days</p>
                        <p>$ Third Income - $210 BTC - 84 days</p>
                        <p>Withdrawal Scope - 2</p>
                      </div>
                    </div>
                  </div>

                  <div
                    class="text-left sp-mt-3 col-12 col-sm-10 col-md-6 col-lg-6"
                    @click.prevent="choosePlan('Helium')"
                  >
                    <div
                      class="br plan"
                      :class="plan === 'Helium' ? 'selected' : ''"
                    >
                      <div class="p-3 text-center bg-secon">
                        <h5 class="mb-2 text-white font-weight-bold">Helium</h5>
                      </div>

                      <div class="p-2 text-center">
                        <p>$ Amount - $500 BTC</p>
                        <p>% Return - 100% capital in 7 days</p>
                        <p>Duration in days - 84 days</p>
                        <p>$ First Income - $500 BTC - 7 days</p>
                        <p>$ Second Income - $2,000 BTC - 28 days</p>
                        <p>$ Third Income - $6,000 BTC - 84 days</p>
                        <p>Withdrawal Scope - 2</p>
                      </div>
                    </div>
                  </div>

                  <div
                    class="text-left sp-mt-7 col-12 col-sm-10 col-md-6 col-lg-6"
                    @click.prevent="choosePlan('Lithium')"
                  >
                    <div
                      class="br plan"
                      :class="plan === 'Lithium' ? 'selected' : ''"
                    >
                      <div class="p-3 text-center bg-secon">
                        <h5 class="mb-2 text-white font-weight-bold">
                          Lithium
                        </h5>
                      </div>

                      <div class="p-2 text-center">
                        <p>$ Amount - $5000 BTC</p>
                        <p>% Return - 100% capital in 7 days</p>
                        <p>Duration in days - 35 days</p>
                        <p>$ First Income - $714.28 BTC - Daily</p>
                        <p>$ Second Income - $5,000 BTC - 7 days</p>
                        <p>$ Third Income - $25,000 BTC - 35 days</p>
                        <p>Withdrawal Scope - Daily</p>
                      </div>
                    </div>
                  </div>

                  <div
                    class="text-left sp-mt-7 col-12 col-sm-10 col-md-6 col-lg-6"
                    @click.prevent="choosePlan('Beryllium')"
                  >
                    <div
                      class="br plan"
                      :class="plan === 'Beryllium' ? 'selected' : ''"
                    >
                      <div class="p-3 text-center bg-secon">
                        <h5 class="mb-2 text-white font-weight-bold">
                          Beryllium
                        </h5>
                      </div>

                      <div class="p-2 text-center">
                        <p>$ Amount - $20,000 BTC</p>
                        <p>% Return - 100% capital in 7 days</p>
                        <p>Duration in days - 35 days</p>
                        <p>$ First Income - $2,857.14 BTC - Daily</p>
                        <p>$ Second Income - $20,000 BTC - 7 days</p>
                        <p>$ Third Income - $100,000 BTC - 35 days</p>
                        <p>Withdrawal Scope - Daily</p>
                      </div>
                    </div>
                  </div>

                  <div
                    class="text-left sp-mt-7 col-12 col-sm-10 col-md-6 col-lg-6"
                    @click.prevent="choosePlan('Boron')"
                  >
                    <div
                      class="br plan"
                      :class="plan === 'Boron' ? 'selected' : ''"
                    >
                      <div class="p-3 text-center bg-secon">
                        <h5 class="mb-2 text-white font-weight-bold">Boron</h5>
                      </div>

                      <div class="p-2 text-center">
                        <p>$ Amount - $50,000 BTC</p>
                        <p>% Return - 100% capital in 7 days</p>
                        <p>Duration in days - 35 days</p>
                        <p>$ First Income - $7,142 BTC - Daily</p>
                        <p>$ Second Income - $50,000 BTC - 7 days</p>
                        <p>$ Third Income - $250,000 BTC - 35 days</p>
                        <p>Withdrawal Scope - Daily</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <button
              v-if="plan.length > 0"
              @click.prevent="validatePlanState()"
              class="px-5 py-2 mt-4 ml-3 btn btn-next font-weight-bold"
            >
              Proceed
            </button>
          </div>

          <!-- Investment Info -->
          <div class="container sp-mt-6" v-if="pageState == 'investment_info'">
            <div v-if="!showTerms">
              <h4 class="state-header">Investment Info</h4>
              <p class="mb-2 font-weight-bold">SELECTED PLAN: {{ plan }}</p>

              <p class="mb-2 font-weight-bold">
                AMOUNT IN USD: $ {{ amountUSD }}
              </p>

              <p class="mb-2 font-weight-bold">
                AMOUNT IN BTC: {{ amountBTC }} BTC
              </p>

              <button
                class="px-5 py-2 rounded-0 btn btn-next font-weight-bold"
                @click.prevent="gotoTerms()"
              >
                Next
              </button>
            </div>

            <div v-if="showTerms">
              <p class="mb-2">AMOUNT TO INVEST (USD): $ {{ amountUSD }}</p>
              <p class="mb-2">AMOUNT TO INVEST (BTC): $ {{ amountBTC }}</p>
              <p class="state-header font-weight-bold">Investment Term</p>
              <ol>
                <li>
                  <p>
                    The user is responsible for the investment and the
                    investment is not transferable.
                  </p>
                </li>
              </ol>

              <button
                class="px-5 py-2 mt-4 btn btn-next font-weight-bold"
                @click.prevent="validateInvestmentInfo()"
              >
                Agree and Proceed
              </button>
            </div>
          </div>

          <!-- Summary -->
          <div class="container sp-mt-6" v-if="pageState == 'summary'">
            <div class="flex-row d-flex"></div>
            <h3 class="state-header">Summary</h3>
            <!-- Investment Detials -->
            <div class="p-0 m-0 my-4 container-fluid">
              <h6 class="state-header font-weight-bold">Investment Details</h6>
              <div class="row">
                <div class="mt-2 col-md-4 col-sm-6">
                  <p>
                    <span class="font-weight-bold" v-if="amountUSD">
                      Amount to Invest (USD):
                      {{ amountUSD | formatAmount("USD", "en-US") }}
                    </span>
                    <span v-else>0.00</span>
                  </p>
                </div>
                <div class="mt-2 col-md-4 col-sm-6">
                  <p>
                    <span class="font-weight-bold" v-if="amountBTC">
                      Amount to Invest (BTC):
                      {{ amountBTC }}
                    </span>
                    <span v-else>0</span>
                  </p>
                </div>
                <div class="mt-2 col-md-4 col-sm-6">
                  <p>
                    <span class="font-weight-bold" v-if="amountUSD">
                      Investment Fee:
                      {{ "0" | formatAmount("USD", "en-US") }}
                    </span>
                    <span v-else>0.00</span>
                  </p>
                </div>
              </div>
              <div class="row" v-if="amountUSD == 10">
                <div class="mt-2 col-md-4 col-sm-6">
                  <p>
                    <span class="font-weight-bold">
                      First Income - 7 days: $10 BTC
                    </span>
                  </p>
                </div>
                <div class="mt-2 col-md-4 col-sm-6">
                  <p>
                    <span class="font-weight-bold">
                      Second Income - 28 days: $40 BTC
                    </span>
                  </p>
                </div>
                <div class="mt-2 col-md-4 col-sm-6">
                  <p>
                    <span class="font-weight-bold">
                      Third Income - 84 days: $210 BTC
                    </span>
                  </p>
                </div>
              </div>
              <div class="row" v-if="amountUSD == 500">
                <div class="mt-2 col-md-4 col-sm-6">
                  <p>
                    <span class="font-weight-bold">
                      First Income - 7 days: $500 BTC
                    </span>
                  </p>
                </div>
                <div class="mt-2 col-md-4 col-sm-6">
                  <p>
                    <span class="font-weight-bold">
                      Second Income - 28 days: $2,000 BTC
                    </span>
                  </p>
                </div>
                <div class="mt-2 col-md-4 col-sm-6">
                  <p>
                    <span class="font-weight-bold">
                      Third Income - 84 days: $6,000 BTC
                    </span>
                  </p>
                </div>
              </div>
              <div class="row" v-if="amountUSD == 5000">
                <div class="mt-2 col-md-4 col-sm-6">
                  <p>
                    <span class="font-weight-bold">
                      Daily Income: $714.28 BTC
                    </span>
                  </p>
                </div>
                <div class="mt-2 col-md-4 col-sm-6">
                  <p>
                    <span class="font-weight-bold">
                      Second Income - 7 days: $5,000 BTC
                    </span>
                  </p>
                </div>
                <div class="mt-2 col-md-4 col-sm-6">
                  <p>
                    <span class="font-weight-bold">
                      Third Income - 35 days: $25,000 BTC
                    </span>
                  </p>
                </div>
              </div>
              <div class="row" v-if="amountUSD == 20000">
                <div class="mt-2 col-md-4 col-sm-6">
                  <p>
                    <span class="font-weight-bold">
                      Daily Income: $2,857.14 BTC
                    </span>
                  </p>
                </div>
                <div class="mt-2 col-md-4 col-sm-6">
                  <p>
                    <span class="font-weight-bold">
                      Second Income - 7 days: $20,000 BTC
                    </span>
                  </p>
                </div>
                <div class="mt-2 col-md-4 col-sm-6">
                  <p>
                    <span class="font-weight-bold">
                      Third Income - 35 days: $100,000 BTC
                    </span>
                  </p>
                </div>
              </div>
              <hr />
            </div>

            <!-- Investor details -->
            <div class="p-0 m-0 my-4 container-fluid">
              <h6 class="state-header font-weight-bold">Investor Details</h6>
              <div class="row">
                <div class="mt-2 col-md-4 col-sm-6">
                  <p>
                    <span class="font-weight-bold">Investor Name: </span
                    >{{ userDetails.profile.first_name }}
                    {{ userDetails.profile.last_name }}
                  </p>
                </div>
                <div class="mt-2 col-md-4 col-sm-6">
                  <p>
                    <span class="font-weight-bold">Investor Email: </span>
                    {{ userDetails.email }}
                  </p>
                </div>
                <div class="mt-2 col-md-4 col-sm-6">
                  <p>
                    <span class="font-weight-bold">Investor Phone: </span>
                    {{ userDetails.profile.phone }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Proceed to CheckOut -->
            <div class="row justify-content-center">
              <button
                :class="
                  isLoading
                    ? 'btn btn-outline-danger rounded px-5 py-3 font-weight-bold mx-3'
                    : 'btn proceed px-5 py-3 font-weight-bold mx-3'
                "
                @click.prevent="callCreateInvestment"
                :disabled="isLoading ? true : false"
              >
                <i
                  :class="
                    isLoading
                      ? 'mx-1 fi fi-spinner fi-spin fi-pulse'
                      : 'mx-1 fa fa-send'
                  "
                ></i>
                {{ isLoading ? "Please wait..." : "Proceed" }}
              </button>

              <button
                class="px-5 py-3 mx-3 btn cancel font-weight-bold"
                @click.prevent="cancel()"
              >
                <i class="mx-1 fa fa-times"></i>
                {{ "Cancel" }}
              </button>
            </div>
          </div>

          <!-- Payment Confirmation -->

          <div
            class="payment-modal container-fluid"
            v-if="showPaymentModal && initiatedInvestment"
          >
            <div
              class="
                rounded
                modal-dialog
                modal-lg
                modal-dialog-centered
                modal-dialog-scrollable
              "
            >
              <div class="modal-content">
                <div class="modal-header">
                  <div class="container-fluid">
                    <!-- CountDown -->
                    <p class="modal-title text-secondary">
                      <i class="fa fa-clock"></i> {{ countDown }}
                    </p>
                    <h5
                      class="text-center modal-title"
                      id="staticBackdropLabel"
                    >
                      Confirm Investment
                    </h5>
                  </div>
                  <!-- Close Icon -->
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span
                      aria-hidden="true"
                      v-on:click="callUpdateInvestment(0)"
                      >&times;</span
                    >
                  </button>
                </div>
                <div class="modal-body">
                  <div class="p-0 m-0 container-fluid">
                    <p class="px-3 text-dark">
                      {{ userDetails.profile.first_name }}, We have successfully
                      bootstrapped your investment. To complete, kindly follow
                      the step(s) below.
                    </p>

                    <div class="px-3 steps">
                      <p class="text-dark">
                        You are to deposit a sum of
                        <span class="font-weight-bold"
                          >{{ amountUSD }} BTC
                        </span>
                        to <span class="font-weight-bold">any</span> of the
                        following Bank Accounts...
                      </p>
                      <div class="my-3 row">
                        <div class="mt-2 col-md-6">
                          <div class="bank-card">
                            <p>
                              Wallet Address:
                              {{ accountDetails[0].accountNumber }}
                            </p>
                            <p>
                              Wallet Owner:
                              {{ accountDetails[0].accountName }}
                            </p>
                          </div>
                        </div>
                        <div class="mt-2 col-md-6">
                          <div class="bank-card">
                            <p>
                              Wallet Address:
                              {{ accountDetails[1].accountNumber }}
                            </p>
                            <p>
                              Wallet Owner:
                              {{ accountDetails[1].accountName }}
                            </p>
                          </div>
                        </div>
                      </div>
                      <!--  -->
                      <p class="px-2 py-2 text-white rounded bg-secondary">
                        Enter this reference
                        <span class="font-weight-bold">{{ ref }}</span> as the
                        narration/purpose for the transaction. This reference
                        will also be used to track the progress of your
                        transaction
                      </p>
                      <p class="text-dark">
                        <input type="checkbox" v-model="termsAndCondition" />
                        Accept Terms and Conditions
                      </p>
                      <div class="mt-4 text-justify small text-muted">
                        DISCLAIMER: MoreBitcoin will not be responsible for any
                        loss or damage caused by not adhering to the
                        instructions provided. Be sure to follow suit with
                        respect to the instructions provided while making
                        payments.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <div class="container-fluid" v-if="termsAndCondition">
                    <div class="row align-items-baseline">
                      <div class="col-md-4">
                        <i
                          class="made-transfer"
                          @click="showTransRef = !showTransRef"
                          >I've made this transfer</i
                        >
                      </div>
                      <div class="mt-5 col-md-6" v-if="showTransRef">
                        <div class="input-group">
                          <input
                            type="text"
                            class="form-control amount_input"
                            placeholder="Investment Reference/Session ID"
                            aria-describedby="trans_ref"
                            disabled="true"
                            v-model="ref"
                          />
                          <div class="input-group-append">
                            <button
                              class="m-0 btn btn-trans"
                              type="button"
                              id="trans_ref"
                              @click.prevent="callUpdateInvestment(1)"
                            >
                              Submit
                            </button>
                          </div>
                        </div>
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
                  </div>
                  <div class="container-fluid" v-else>
                    <p class="small">
                      Please ensure you accept the terms and conditions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </auth>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import NProgress from "nprogress";
import { AccountDetails } from "/config";
const axios = require("axios").default;

export default {
  name: "Invest",

  data() {
    return {
      activePage: "invest",
      plan: "",
      pageState: "plan",
      amountUSD: "",
      amountBTC: "",
      showTerms: false,
      amountUSDValidation: "",
      accountDetails: [],
      countDown: "",
      // Utils
      ref: "",
      isLoading: false,
      showPaymentModal: false,
      termsAndCondition: false,
      showTransRef: false,
    };
  },

  computed: {
    ...mapGetters([
      "userDetails",
      "investmentBackEndSuccess",
      "initiatedInvestment",
    ]),
  },

  created() {
    this.accountDetails = AccountDetails;
  },

  methods: {
    ...mapActions(["createInvestment", "updateInvestment"]),

    ...mapMutations(["setInvestmentBackEndSuccess"]),

    cancel() {
      this.$router.go(0);
    },

    /* ------------------------------- Select Plan ------------------------------ */
    async choosePlan(plan) {
      this.plan = plan;
      if (this.plan == "Hydrogen") {
        this.amountUSD = 10;
      } else if (this.plan == "Helium") {
        this.amountUSD = 500;
      } else if (this.plan == "Lithium") {
        this.amountUSD = 5000;
      } else if (this.plan == "Beryllium") {
        this.amountUSD = 20000;
      } else if (this.plan == "Boron") {
        this.amountUSD = 50000;
      } else {
        this.amountUSD = 0;
      }
      await this.convertUSDtoBTC();
    },

    /* ----------------------- Go To Terms and Conditions ----------------------- */
    gotoTerms() {
      if (this.amountUSD == "" || this.amountBTC == "") {
        return;
      } else {
        return (this.showTerms = true);
      }
    },

    /* --------------------------- Convert USD to BTC --------------------------- */
    async convertUSDtoBTC() {
      try {
        const response = await axios.get(
          `https://blockchain.info/tobtc?currency=USD&value=${this.amountUSD}`
        );
        // console.log(response);
        this.amountBTC = response.data;
      } catch (error) {
        console.error(error);
      }
    },

    /* ------------------------- Set Page State Handler ------------------------- */
    setPageState(state) {
      NProgress.start(); //Start NProgress
      this.pageState = state;
      NProgress.done(); //Finish NProgress
    },

    /* ------------- Validate Plan State and Move to Investment Info ------------ */
    validatePlanState() {
      if (this.plan == "") {
        this.$toast.open({
          message: "Please, Select a Plan!",
          type: "warning",
        });
        return;
      } else {
        this.setPageState("investment_info");
        return;
      }
    },

    /* ------------- Validate Investment Info State and Move to Summary ------------ */
    validateInvestmentInfo() {
      if (this.amountUSD == "" || this.amountBTC == "") {
        this.$toast.open({
          message: "Please, Complete the Investment Info!",
          type: "warning",
        });
        return;
      } else {
        this.setPageState("summary");
        return;
      }
    },

    /* ---------------------------- Render Countdown ---------------------------- */
    elapseIn() {
      const elapseDate = this.initiatedInvestment.elapse_at;
      if (elapseDate) {
        setInterval(() => {
          var currentDate = new Date();
          currentDate.setHours(currentDate.getHours() - 1);
          var elapseIn = new Date(elapseDate);

          // console.log(currentDate);
          // console.log(elapseIn);

          if (currentDate > elapseIn) {
            //TODO::Change the status on the client
            if (this.initiatedInvestment.status == "created") {
              this.initiatedInvestment.status = "abandoned";
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

    /* ------------------------ Generate a Random String ------------------------ */
    uuidv4() {
      return "xxxxxxxxxxxxxxx".replace(/[xy]/g, function () {
        var r = (Math.random() * 10) | 0;
        return `${r.toString(15)}`;
      });
    },

    /* --------------------------- Create Investment --------------------------- */
    async callCreateInvestment() {
      this.isLoading = true;
      this.ref =
        this.userDetails.profile.first_name.slice(0, 2) + "-" + this.uuidv4();

      /**
       * Set Investment Data
       * const @InvestmentData
       */
      const InvestmentData = {
        amountUSD: this.amountUSD,
        amountBTC: this.amountBTC,
        plan: this.plan,
        reference: this.ref,
      };
      await this.createInvestment(InvestmentData);
      if (Object.keys(this.initiatedInvestment).length > 1) {
        this.isLoading = false;
        this.showPaymentModal = true;
        //Show CountDown
        this.elapseIn();
      } else {
        this.isLoading = false;
        this.$toast.open({
          message:
            "Oops! An Error was Encountered while creating Investment. <br/> Try Again or Contact Support.",
          type: "error",
        });
      }
    },

    /* ---------------------------- Update Investment --------------------------- */
    async callUpdateInvestment(type) {
      if (type === 1) {
        const data = {
          id: this.initiatedInvestment.id,
          credit_reference: this.ref,
          status: "initiated",
        };

        await this.updateInvestment(data);
        if (this.investmentBackEndSuccess.length > 0) {
          // NOTE
          this.ref = "";
          setTimeout(() => {
            this.setInvestmentBackEndSuccess("");
            this.$router.push({
              name: "dashboard",
            });
          }, 1500);
        } else {
          return this.$toast.open({
            message:
              "Oops! An Error was Encountered while updating Investment. <br/> Try Again or Contact Support.",
            type: "error",
          });
        }
      } else {
        //   Route to the transaction
        this.$router.push({
          path: "/investment/" + this.initiatedInvestment.id,
        });
      }
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Roboto Slab";
}

.bg-secon {
  background-color: #1781d3;
}

.plan {
  cursor: pointer;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  transition: 0.4s all;
}

.plan:hover {
  background-color: #1781d3;
  color: #fff;
}

.selected {
  background-color: #1781d3;
  color: #fff;
}

.btn-next {
  border: 1px solid #1781d3;
  border-top-right-radius: 2rem;
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  color: #fff;
  background-color: #1781d3;
}

.btn-next:hover,
.btn-next:focus,
.btn-next:active {
  background-color: #fff !important;
  color: #1781d3 !important;
}

/*  */

.amount_input {
  border: none;
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

.made-transfer {
  cursor: pointer;
  color: #115b94;
}

.bank-card {
  background-image: linear-gradient(45deg, #7175da, #637ec2);
  padding: 1rem;
  border-radius: 10px;
  font-family: "Montserrat", sans-serif;
  color: #fff;
}

.btn-trans {
  background-image: linear-gradient(45deg, #7175da, #637ec2);
}

.bank-card p {
  font-size: 0.8rem;
}

.payment-modal {
  position: absolute;
  top: 15%;
  z-index: 10;
}

.bg-currency {
  background-color: #5b7cce !important;
  color: #fff !important;
  outline: none !important;
  border: none !important;
}

.amountInput {
  border: none;
  font-size: 1.4rem;
  border: 1px solid rgb(209, 206, 206);
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 17px;
}

.amountInput:focus {
  background-color: #fff !important;
  outline: none !important;
  box-shadow: none !important;
}

.currency {
  border-radius: 0%;
}

.currency:focus {
  outline: none !important;
  background-color: inherit !important;
  color: #fff !important;
  box-shadow: none !important;
}

.icon {
  background-color: #3f3f40;
  color: #fff;
  font-size: 1rem;
  padding-top: 0rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.rate-link {
  color: #000 !important;
  text-decoration: underline;
  font-weight: bold;
}

.init-btn {
  position: absolute;
  bottom: 0%;
  background-color: #ff0035 !important;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  color: #fff !important;
  transition: 0.5s all;
}

.init-btn:hover {
  background-color: #fff !important;
  color: #ff0035 !important;
}

.btn-transact {
  border: 1px solid #115b94;
  border-top-right-radius: 2rem;
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  color: #115b94;
  background-color: #fff;
}

.btn-transact:hover,
.btn-transact:focus {
  background-color: #115b94 !important;
  color: #fff !important;
}

.btn-bank {
  border: 1px solid #115b94;
  border-top-right-radius: 2rem;
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  color: #115b94;
  background-color: #fff;
}

.btn-bank:hover,
.btn-bank:focus {
  background-color: #115b94 !important;
  color: #fff !important;
}

.blur {
  -webkit-filter: blur(1.5px);
  -moz-filter: blur(1.5px);
  -o-filter: blur(1.5px);
  -ms-filter: blur(1.5px);
  filter: blur(1.5px);
}

.text-small {
  font-size: 0.7rem;
}

.text-details {
  font-size: 0.9rem;
}

.text-details > span {
  font-weight: bold !important;
}

.swap {
  color: #ff0035;
  font-size: 1.2rem;
}

.state-header {
  color: #136aad;
}

.text-input,
select[name="bank"] {
  border: none !important;
  font-size: 1rem !important;
  border: 1px solid rgb(209, 206, 206) !important;
  border-radius: 0px !important;
  padding: 17px !important;
  height: 55px !important;
}

.text-input:focus,
select[name="bank"]:focus {
  background-color: #fff !important;
  outline: none !important;
  box-shadow: none !important;
}

.proceed {
  border: 1px solid #115b94;
  border-top-right-radius: 2rem;
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  background-color: #fff;
  color: #115b94;
}

.proceed:hover,
.proceed:focus {
  background-color: #115b94 !important;
  color: #fff !important;
}

.cancel {
  border: 1px solid #ff0035;
  border-top-right-radius: 2rem;
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  background-color: #fff;
  color: #ff0035;
}

.cancel:hover,
.cancel:focus {
  background-color: #ff0035 !important;
  color: #fff !important;
}

/*  */

.steps {
  list-style: none;
  margin: 0;
  padding: 0;
  display: table;
  table-layout: fixed;
  width: 100%;
  color: #929292;
}
.steps > .step {
  position: relative;
  display: table-cell;
  text-align: center;
  font-size: 0.875rem;
  color: #6d6875;
}
.steps > .step:before {
  content: attr(data-step);
  display: block;
  margin: 0 auto;
  background: #ffffff;
  border: 2px solid #e6e6e6;
  color: #e6e6e6;
  width: 2rem;
  height: 2rem;
  text-align: center;
  margin-bottom: -4.2rem;
  line-height: 1.9rem;
  border-radius: 100%;
  position: relative;
  z-index: 1;
  font-weight: 700;
  font-size: 1rem;
}
.steps > .step:after {
  content: "";
  position: absolute;
  display: block;
  background: #e6e6e6;
  width: 100%;
  height: 0.125rem;
  top: 1rem;
  left: 50%;
}
.steps > .step:last-child:after {
  display: none;
}
.steps > .step.is-complete {
  color: #6d6875;
}
.steps > .step.is-complete:before {
  content: "✓";
  color: #115b94;
  background: #fff;
  border: 2px solid #115b94;
}
.steps > .step.is-complete:after {
  background: #115b94;
}
.steps > .step.is-active {
  font-size: 1.2rem;
}
.steps > .step.is-active:before {
  color: #fff;
  border: 2px solid #115b94;
  background: #115b94;
  margin-bottom: -4.5rem;
}
.ex-shadow {
  background-color: #fff;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
}
</style>
