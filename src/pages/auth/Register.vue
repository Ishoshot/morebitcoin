<template>
  <non-auth>
    <template v-slot:body>
      <div class="sp-mb-8 sp-mt-10 container-fluid body">
        <div class="container">
          <div class="mt-2 mb-5 contact-from-wrap">
            <div class="mt-4 contact-form">
              <div class="sec-heading">
                <!-- dipoleDiamond Logo -->

                <h3 class="sec-title">Create an Account</h3>
                <p class="mb-0 text-muted">
                  Other sites let you buy cryptocurrency. We help you invest in
                  it!
                </p>
              </div>

              <div class="p-3 text-center text-danger">
                {{ unHandledBackError }}
              </div>

              <div class="clearfix contact-form">
                <form>
                  <div class="form-group row align-items-end">
                    <!--======= Firstname Field required  ======-->
                    <div class="mb-4 col-sm-6 mb-sm-0">
                      <input
                        type="text"
                        v-model="form.first_name"
                        autocomplete="off"
                        class="form-control ex-inputBox"
                        placeholder="*First Name"
                        :class="{
                          'is-invalid': submitted && $v.form.first_name.$error,
                        }"
                      />

                      <!--======= Validation Messsages =====-->
                      <div
                        v-if="submitted && !$v.form.first_name.required"
                        class="error-messages"
                      >
                        First name field is required.
                      </div>
                      <div
                        class="error-messages"
                        v-else-if="backEndErrors.first_name"
                      >
                        <div class="text-danger" v-if="backEndErrors">
                          {{ backEndErrors.first_name[0] }}
                        </div>
                      </div>
                    </div>

                    <!--======= Lastname Field required  ======-->
                    <div class="col-sm-6">
                      <input
                        type="text"
                        autocomplete="off"
                        v-model="form.last_name"
                        class="form-control ex-inputBox"
                        placeholder="*Last Name"
                        :class="{
                          'is-invalid': submitted && $v.form.last_name.$error,
                        }"
                      />
                      <!--======= Validation Messsages =====-->
                      <div
                        v-if="submitted && !$v.form.last_name.required"
                        class="error-messages"
                      >
                        Last name field is required.
                      </div>

                      <div
                        class="error-messages"
                        v-if="backEndErrors.last_name"
                      >
                        <div class="text-danger">
                          {{ backEndErrors.last_name[0] }}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="form-group row align-items-end">
                    <!--======= Email Field required  ======-->
                    <div class="mb-4 col-sm-6 mb-sm-0">
                      <input
                        type="email"
                        inputmode="email"
                        autocomplete="off"
                        v-model="form.email"
                        class="form-control ex-inputBox"
                        placeholder="*Email Address"
                        :class="{
                          'is-invalid': submitted && $v.form.email.$error,
                        }"
                      />
                      <!--======= Validation Messsages =====-->
                      <div
                        v-if="submitted && !$v.form.email.email"
                        class="error-messages"
                      >
                        Email Address is invalid.
                      </div>
                      <div
                        v-if="submitted && !$v.form.email.required"
                        class="error-messages"
                      >
                        Email field is required.
                      </div>
                      <div class="error-messages" v-if="backEndErrors.email">
                        <div class="text-danger">
                          {{ backEndErrors.email[0] }}
                        </div>
                      </div>
                    </div>

                    <!--======= Password Field required  ======-->
                    <div class="col-sm-6">
                      <input
                        type="password"
                        autocomplete="off"
                        v-model="form.password"
                        class="form-control ex-inputBox"
                        placeholder="*Password"
                        :class="{
                          'is-invalid': submitted && $v.form.password.$error,
                        }"
                      />
                      <!--======= Validation Messsages =====-->

                      <div
                        v-if="submitted && !$v.form.password.required"
                        class="error-messages"
                      >
                        Password field is required.
                      </div>
                      <div
                        v-if="submitted && !$v.form.password.minLength"
                        class="error-messages"
                      >
                        Password must be at least 8 characters
                      </div>
                      <div class="error-messages" v-if="backEndErrors.password">
                        <div class="text-danger">
                          {{ backEndErrors.password[0] }}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="form-group row align-items-end">
                    <!-- Phone Number -->
                    <div class="mb-4 col-sm-6 mb-sm-0">
                      <vue-tel-input
                        inputmode="phone"
                        autocomplete="off"
                        v-model="form.phone"
                        class="p-3 ex-inputBox"
                        placeholder="Phone Number"
                        :class="{
                          'is-invalid': submitted && $v.form.email.$error,
                        }"
                      ></vue-tel-input>

                      <!--======= Validation Messsages =====-->
                      <div
                        v-if="submitted && !$v.form.phone.required"
                        class="error-messages"
                      >
                        Phone Number field is required.
                      </div>
                      <div class="error-messages" v-if="backEndErrors.phone">
                        <div class="text-danger">
                          {{ backEndErrors.phone[0] }}
                        </div>
                      </div>
                    </div>

                    <!-- Password Confirm -->
                    <div class="col-sm-6 mb-sm-0">
                      <input
                        type="password"
                        class="form-control ex-inputBox"
                        autocomplete="off"
                        placeholder="*Confirm Password"
                        v-model="form.password_confirmation"
                        :class="{
                          'is-invalid':
                            submitted && $v.form.password_confirmation.$error,
                        }"
                      />
                      <!--======= Validation Messsages =====-->
                      <div
                        class="error-messages"
                        v-if="
                          submitted && !$v.form.password_confirmation.required
                        "
                      >
                        Confirm Password is required
                      </div>
                      <div
                        class="error-messages"
                        v-else-if="
                          submitted &&
                          !$v.form.password_confirmation.sameAsPassword
                        "
                      >
                        Passwords must match
                      </div>
                      <div
                        class="error-messages"
                        v-if="backEndErrors.password_confirmation"
                      >
                        <div class="text-danger">
                          {{ backEndErrors.password_confirmation[0] }}
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Buttons -->
                  <div class="container row">
                    <button
                      @click.prevent="submitUser"
                      class="btn reg-btn"
                      :disabled="isLoading ? true : false"
                    >
                      {{ isLoading ? "" : "Register" }}
                      <i
                        :class="
                          isLoading ? 'mx-1 fi fi-spinner fi-spin fi-pulse' : ''
                        "
                      ></i>
                    </button>
                    <button type="reset" class="ml-5 btn cancel-btn">
                      <span>Cancel</span>
                    </button>
                  </div>
                </form>

                <!--======== Continue With Auth-0 ========-->
                <section>
                  <div class="mt-4 mb-4 col-md-12">
                    <div class="login-or">
                      <hr class="hr-or" />
                      <span class="span-or">OR</span>
                    </div>
                  </div>

                  <div class="container-fluid">
                    <div class="row justify-content-around align-items-center">
                      <div class="p-2">
                        <button class="auth-btn google-btn"></button>
                      </div>
                    </div>
                  </div>
                </section>
                <!--======== Continue With Auth-0 ========-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </non-auth>
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Register",
  mounted() {},
  data() {
    return {
      isLoading: false,
      delayLoading: 2,
      form: {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        password: "",
        password_confirmation: "",
      },
      submitted: false,
    };
  },
  // Form Validations
  validations: {
    form: {
      email: {
        required,
        email,
      },
      first_name: {
        required,
      },
      last_name: {
        required,
      },
      phone: {
        required,
      },
      password: {
        required,
        minLength: minLength(8),
      },
      password_confirmation: {
        required,
        sameAsPassword: sameAs("password"),
      },
    },
  },

  created() {},

  computed: {
    ...mapGetters(["backEndErrors", "userFirstName", "unHandledBackError"]),
  },

  methods: {
    ...mapActions(["createUser", "clearAfterRegister"]),

    /* -------------------------------------------------------------------------- */
    /*                                Submit User                               */
    /* -------------------------------------------------------------------------- */
    async submitUser() {
      this.isLoading = true;
      this.submitted = true;
      this.$v.$touch();

      if (this.$v.$invalid) {
        this.isLoading = false;
        return;
      } else {
        await this.createUser(this.form);
        this.isLoading = false;
        if (this.userFirstName !== null && this.userFirstName !== "") {
          this.clearAfterRegister();
          this.$router.push({ name: "login" });
        }
      }
    },
  },
};
</script>

<style scoped>
.contact-from-wrap {
  background-color: #fff;
  padding: 5px;
  margin: 0% auto;
}

.contact-from-wrap .sec-heading {
  text-align: left;
  margin-bottom: 32px;
}

.contact-form .form-group {
  margin-bottom: 33px;
}

.contact-from-wrap .contact-form label {
  color: #2f2f35;
  display: block;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
}

.contact-from-wrap .contact-form .form-control {
  border-color: #dadada;
  padding: 15px 20px;
  height: auto;
}
.contact-from-wrap .contact-form .btn {
  max-width: 150px;
  min-width: auto;
  width: 100%;
  float: right;
}

.welcome-msg {
  font-size: 1.5rem;
  font-weight: bold;
}

.reg-btn {
  width: 150px !important;
  height: 50px;
  text-transform: capitalize !important;
  background-color: #1a74bb !important;
}
.reg-btn:focus,
.reg-btn:hover {
  color: #fff !important;
  background-color: #4285f4 !important;
  border-color: #4285f4 !important;
  outline: none;
}
.cancel-btn {
  text-transform: capitalize;
  text-transform: capitalize !important;
  background-color: #ff0035 !important;
  height: 50px;
  width: 100px !important;
  outline: none;
}

.is-invalid {
  border: 1px solid #ff0035 !important;
}

.left {
  background-color: #1a74bb !important;
  background-position: left;
  background-size: 0 100%;
  transition: all 0.5s ease-in-out;
  font-size: 16px;
  text-transform: capitalize;
  color: #fff;
  text-decoration: none;
}

.left:hover {
  text-decoration: none;
  background-size: 100% 100%;
  color: #000;
}
/*============ Horizontla line css ==========*/
.login-or {
  position: relative;
  color: #aaa;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
}
.span-or {
  display: block;
  position: absolute;
  left: 50%;
  top: -2px;
  margin-left: -25px;
  background-color: #fff;
  width: 50px;
  text-align: center;
}
.hr-or {
  height: 1px;
  margin-top: 0px !important;
  margin-bottom: 0px !important;
}

/*============ Auth-0 css bottons ==========*/
.auth-btn {
  display: inline-block;
  margin-bottom: 0;
  font-weight: 600;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  padding: 12px 24px 10px;
  border-radius: 3px;
  min-height: 48px;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  outline: none;
}
.google-btn {
  color: #4285f4;
  width: 250px !important;
  background-color: transparent;
  border-color: #4285f4;
  transition: all 0.15s ease-in-out;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxwYXRoIGQ9Ik0yMy4xODIgOS44MThIMTJ2NC42MzdoNi40MzZjLS42IDIuOTQ1LTMuMTA5IDQuNjM2LTYuNDM2IDQuNjM2QTcuMDc3IDcuMDc3IDAgMDE0LjkxIDEyIDcuMDc3IDcuMDc3IDAgMDExMiA0LjkxYzEuNjkgMCAzLjIxOC42IDQuNDE4IDEuNThMMTkuOTEgM0MxNy43ODIgMS4xNDUgMTUuMDU1IDAgMTIgMCA1LjM0NSAwIDAgNS4zNDUgMCAxMnM1LjM0NSAxMiAxMiAxMmM2IDAgMTEuNDU1LTQuMzY0IDExLjQ1NS0xMiAwLS43MS0uMTEtMS40NzMtLjI3My0yLjE4MnoiIGlkPSJhIi8+PHBhdGggZD0iTTIzLjE4MiA5LjgxOEgxMnY0LjYzN2g2LjQzNmMtLjYgMi45NDUtMy4xMDkgNC42MzYtNi40MzYgNC42MzZBNy4wNzcgNy4wNzcgMCAwMTQuOTEgMTIgNy4wNzcgNy4wNzcgMCAwMTEyIDQuOTFjMS42OSAwIDMuMjE4LjYgNC40MTggMS41OEwxOS45MSAzQzE3Ljc4MiAxLjE0NSAxNS4wNTUgMCAxMiAwIDUuMzQ1IDAgMCA1LjM0NSAwIDEyczUuMzQ1IDEyIDEyIDEyYzYgMCAxMS40NTUtNC4zNjQgMTEuNDU1LTEyIDAtLjcxLS4xMS0xLjQ3My0uMjczLTIuMTgyeiIgaWQ9ImMiLz48cGF0aCBkPSJNMjMuMTgyIDkuODE4SDEydjQuNjM3aDYuNDM2Yy0uNiAyLjk0NS0zLjEwOSA0LjYzNi02LjQzNiA0LjYzNkE3LjA3NyA3LjA3NyAwIDAxNC45MSAxMiA3LjA3NyA3LjA3NyAwIDAxMTIgNC45MWMxLjY5IDAgMy4yMTguNiA0LjQxOCAxLjU4TDE5LjkxIDNDMTcuNzgyIDEuMTQ1IDE1LjA1NSAwIDEyIDAgNS4zNDUgMCAwIDUuMzQ1IDAgMTJzNS4zNDUgMTIgMTIgMTJjNiAwIDExLjQ1NS00LjM2NCAxMS40NTUtMTIgMC0uNzEtLjExLTEuNDczLS4yNzMtMi4xODJ6IiBpZD0iZSIvPjxwYXRoIGQ9Ik0yMy4xODIgOS44MThIMTJ2NC42MzdoNi40MzZjLS42IDIuOTQ1LTMuMTA5IDQuNjM2LTYuNDM2IDQuNjM2QTcuMDc3IDcuMDc3IDAgMDE0LjkxIDEyIDcuMDc3IDcuMDc3IDAgMDExMiA0LjkxYzEuNjkgMCAzLjIxOC42IDQuNDE4IDEuNThMMTkuOTEgM0MxNy43ODIgMS4xNDUgMTUuMDU1IDAgMTIgMCA1LjM0NSAwIDAgNS4zNDUgMCAxMnM1LjM0NSAxMiAxMiAxMmM2IDAgMTEuNDU1LTQuMzY0IDExLjQ1NS0xMiAwLS43MS0uMTEtMS40NzMtLjI3My0yLjE4MnoiIGlkPSJnIi8+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2EiLz48L21hc2s+PHBhdGggZmlsbD0iI0ZCQkMwNSIgZmlsbC1ydWxlPSJub256ZXJvIiBtYXNrPSJ1cmwoI2IpIiBkPSJNLTEuMDkgMTkuMDlWNC45MUw4LjE4MSAxMnoiLz48bWFzayBpZD0iZCIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYyIvPjwvbWFzaz48cGF0aCBmaWxsPSIjRUE0MzM1IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG1hc2s9InVybCgjZCkiIGQ9Ik0tMS4wOSA0LjkxTDguMTgxIDEyIDEyIDguNjczbDEzLjA5LTIuMTI4Vi0xLjA5SC0xLjA5eiIvPjxnPjxtYXNrIGlkPSJmIiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNlIi8+PC9tYXNrPjxwYXRoIGZpbGw9IiMzNEE4NTMiIGZpbGwtcnVsZT0ibm9uemVybyIgbWFzaz0idXJsKCNmKSIgZD0iTS0xLjA5IDE5LjA5TDE1LjI3MiA2LjU0Nmw0LjMwOS41NDYgNS41MDktOC4xODJ2MjYuMTgySC0xLjA5MXoiLz48L2c+PGc+PG1hc2sgaWQ9ImgiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2ciLz48L21hc2s+PHBhdGggZmlsbD0iIzQyODVGNCIgZmlsbC1ydWxlPSJub256ZXJvIiBtYXNrPSJ1cmwoI2gpIiBkPSJNMjUuMDkgMjUuMDlMOC4xODMgMTIgNiAxMC4zNjRsMTkuMDktNS40NTV6Ii8+PC9nPjwvZz48L3N2Zz4=);
  background-repeat: no-repeat;
  background-position: center;
}
.google-btn:focus,
.google-btn:hover {
  color: #fff;
  background-color: #4285f4;
  border-color: #4285f4;
  outline: none;
}

.google-btn:focus,
.google-btn:hover {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxwYXRoIGQ9Ik0yMy4xODIgOS44MThIMTJ2NC42MzdoNi40MzZjLS42IDIuOTQ1LTMuMTA5IDQuNjM2LTYuNDM2IDQuNjM2QTcuMDc3IDcuMDc3IDAgMDE0LjkxIDEyIDcuMDc3IDcuMDc3IDAgMDExMiA0LjkxYzEuNjkgMCAzLjIxOC42IDQuNDE4IDEuNThMMTkuOTEgM0MxNy43ODIgMS4xNDUgMTUuMDU1IDAgMTIgMCA1LjM0NSAwIDAgNS4zNDUgMCAxMnM1LjM0NSAxMiAxMiAxMmM2IDAgMTEuNDU1LTQuMzY0IDExLjQ1NS0xMiAwLS43MS0uMTEtMS40NzMtLjI3My0yLjE4MnoiIGlkPSJhIi8+PC9kZWZzPjx1c2UgZmlsbD0iI0ZGRiIgeGxpbms6aHJlZj0iI2EiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==);
}

/* ================Error Message Css======================== */
.apply-error-effect {
  background-color: #ffdfdf;
  font-size: 0.875rem;
  line-height: 24px;
  position: relative;
  border-radius: 3px;
  border-width: 0;
  margin-top: 12px;
  padding: 5px;
}
.apply-error-effect:before {
  content: " ";
  position: absolute;
  display: block;
  width: 10px;
  height: 10px;
  left: 20px;
  top: -5px;
  transform: rotate(45deg);
  background-color: inherit;
}

/* For mobile phones: */
@media (max-width: 720px) {
  .contact-from-wrap {
    min-height: 100%;
    height: 100%;
  }
}
</style>
