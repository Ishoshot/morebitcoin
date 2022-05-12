<template>
  <div>
    <auth :showActions="false">
      <template v-slot:content>
        <div class="resend-body" style="max-width: 440px">
          <div class="check-icon">
            <svg
              width="54"
              height="54"
              viewBox="0 0 54 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27 52.5H27.0017C33.762 52.4926 40.2432 49.8038 45.0235 45.0235C49.8038 40.2432 52.4926 33.762 52.5 27.0017V27C52.5 21.9566 51.0044 17.0264 48.2025 12.833C45.4005 8.63952 41.4179 5.37112 36.7584 3.44108C32.0989 1.51105 26.9717 1.00606 22.0252 1.98999C17.0787 2.97391 12.535 5.40255 8.96878 8.96879C5.40255 12.535 2.97391 17.0787 1.98999 22.0252C1.00606 26.9717 1.51105 32.0989 3.44108 36.7584C5.37112 41.4179 8.63951 45.4005 12.833 48.2025C17.0264 51.0045 21.9566 52.5 27 52.5Z"
                fill="#197abb"
              ></path>
              <path
                d="M22.2001 39.0002C21.5636 39.0001 20.9532 38.7471 20.5033 38.297L13.3033 31.097C13.074 30.8756 12.8912 30.6108 12.7654 30.318C12.6396 30.0252 12.5734 29.7102 12.5706 29.3916C12.5679 29.0729 12.6286 28.7569 12.7493 28.4619C12.87 28.167 13.0482 27.899 13.2735 27.6736C13.4988 27.4483 13.7668 27.2701 14.0618 27.1494C14.3567 27.0288 14.6727 26.968 14.9914 26.9708C15.3101 26.9736 15.625 27.0398 15.9178 27.1655C16.2106 27.2913 16.4755 27.4742 16.6969 27.7034L22.2001 33.2066L37.3032 18.1034C37.7559 17.6662 38.3621 17.4243 38.9914 17.4298C39.6207 17.4352 40.2226 17.6876 40.6676 18.1326C41.1126 18.5776 41.365 19.1796 41.3705 19.8088C41.3759 20.4381 41.134 21.0444 40.6968 21.497L23.8968 38.297C23.4469 38.7471 22.8365 39.0001 22.2001 39.0002Z"
                fill="white"
              ></path>
            </svg>
          </div>
          <h3>Hi {{ userDetails.first_name }} 👋 , Please Check your email</h3>
          <p>
            We've sent a message to <b>{{ userDetails.email }}</b> with a code
            to activate your account.
          </p>

          <span class="text-danger" v-show="err">{{ err }}</span>

          <form method="POST">
            <div class="p-0 m-0 container-fluid form-row">
              <div class="col-md-9">
                <input
                  type="text"
                  v-model="otp"
                  id="otp"
                  placeholder="Enter Verification Code"
                  class="mt-2 form-control ex-inputBox"
                />
              </div>

              <div class="col-md-3">
                <button
                  class="px-2 py-1 mt-2 btn btn-send font-weight-bold"
                  @click.prevent="verifyOTP"
                  :disabled="isLoading ? true : false"
                >
                  {{ isLoading ? "Verifying..." : "Verify" }}
                </button>
              </div>
            </div>
          </form>
        </div>
      </template>
    </auth>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "verifyEmail",

  data() {
    return {
      message: "",
      otp: "",
      err: "",
      isLoading: false,
    };
  },
  computed: {
    ...mapGetters(["verificationResult", "userDetails"]),
  },

  methods: {
    ...mapActions(["OTPVerification", "clearAfterVerify"]),

    async verifyOTP() {
      if (this.otp == "") {
        return (this.err = "Please Enter a Verification Code");
      }
      if (this.otp.length < 6) {
        return (this.err = "Verification Code must be 6 digits long");
      }
      this.isLoading = true;
      let data = {
        id: this.userDetails.id,
        otp: this.otp,
      };
      await this.OTPVerification(data);
      this.isLoading = false;

      switch (this.verificationResult.case) {
        case "success":
          this.$toast.open({
            message: this.verificationResult.message,
            type: "success",
          });
          this.clearAfterVerify();
          localStorage.setItem("otp_vrd", 1);
          this.$router.push({ name: "dashboard" });
          break;

        case "error":
          this.$toast.open({
            message: this.verificationResult.message,
            type: "warning",
          });
          this.clearAfterVerify();

          break;
      }
    },
  },
};
</script>

<style scoped>
.resend-body {
  margin: 90px auto;
  display: flex;
  max-width: 400px;
  flex-direction: column;
  padding: 0px 20px;
  font-family: "Roboto Slab";
  justify-content: "center";
}

.resend-body h3 {
  text-align: center;
  margin: 10px 0px 0px;
  font-weight: bold;
  color: rgb(0, 0, 0);
}

.resend-body p {
  text-align: center;
  margin-bottom: 30px;
  margin-top: 30px;
  color: rgb(0, 0, 0);
  font-size: 16px;
  line-height: 26px;
}
.check-icon {
  margin: 10px 0px;
  text-align: center;
}

.btn-send {
  color: #1a7abb !important;
  border: 1px solid #1a7abb !important;
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  background-color: transparent !important;
  transition: 0.5s all;
  text-transform: capitalize;
  margin: 0px auto;
}

.btn-send:hover,
.btn-send:hover {
  background-color: #1a7abb !important;
  color: #fff !important;
}
</style>
