<template>
  <non-auth>
    <template v-slot:body>
      <div class="sp-mb-6 sp-mt-10 container-fluid body">
        <div class="container">
          <div class="mt-4 mb-5 contact-from-wrap">
            <div class="mt-4 contact-form">
              <div class="sec-heading">
                <h3 class="sec-title">Proceed to Login</h3>
                <p class="mb-0 text-muted">
                  Welcome back 👋
                  <span class="font-weight-bold">{{ userFirstName }}</span
                  >, Provide Credentials to access your account.
                </p>
              </div>

              <p class="mb-0 text-center text-danger" v-if="loginBackEndError">
                {{ loginBackEndError }}
              </p>

              <div class="clearfix contact-form">
                <form>
                  <div class="contact-form form-area">
                    <div class="form-group">
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
                    </div>

                    <div class="form-group">
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
                    </div>

                    <div class="container-fluid">
                      <div
                        class="row justify-content-between align-items-center"
                      >
                        <div class="p-2">
                          <router-link to="/">Forgot Password?</router-link>
                        </div>
                        <div class="p-2">
                          <button
                            @click.prevent="submitData"
                            class="btn login-btn"
                            :disabled="isLoading ? true : false"
                          >
                            {{ isLoading ? "" : "Login" }}
                            <i
                              :class="
                                isLoading
                                  ? 'mx-1 fi fi-spinner fi-spin fi-pulse'
                                  : 'fa fa-lock'
                              "
                            ></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Form Controls/Inputs -->
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </non-auth>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  name: "Login",
  computed: {
    ...mapGetters([
      "userFirstName",
      "loginBackEndError",
      "userDetails",
      "userToken",
    ]),
  },
  mounted() {},

  data() {
    return {
      /* ---------------------------------- Misc ---------------------------------- */
      isLoading: false,
      delayLoading: 2,
      submitted: false,

      /* ---------------------------------  Form -------------------------------- */
      form: {
        email: "",
        password: "",
      },
    };
  },

  validations: {
    form: {
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(8),
      },
    },
  },

  methods: {
    ...mapActions(["login", "clearAfterLogin"]),
    /* -------------------------------------------------------------------------- */
    /*                            Get User Device Info                            */
    /* -------------------------------------------------------------------------- */

    /* -------------------------------------------------------------------------- */
    /*                                   Sign In                                  */
    /* -------------------------------------------------------------------------- */
    async submitData() {
      this.clearAfterLogin();

      this.isLoading = true;
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.isLoading = false;
        return;
      } else {
        const data = {
          email: this.form.email,
          password: this.form.password,
        };
        // console.log(data);
        // Call login
        await this.login(data);
        this.isLoading = false;
        if (Object.keys(this.userDetails).length > 0) {
          this.setUserAuthCredentials();
          this.clearAfterLogin();
          this.$router.push({ name: "dashboard" });
        }
      }
    },

    /* -------------------------------------------------------------------------- */
    /*                Sets Items/Credentails for Auth Users                      */
    /* -------------------------------------------------------------------------- */
    setUserAuthCredentials() {
      localStorage.setItem("token", this.userToken);
      localStorage.setItem(
        "otp_vrd",
        this.userDetails.is_verified == 1 ? 1 : 0
      );
      localStorage.setItem("role", this.userDetails.role.key);
    },

    /* -------------------------------------------------------------------------- */
    /*                                   Loader                                   */
    /* -------------------------------------------------------------------------- */
    load() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, this.delayLoading * 1000);
    },
  },
};
</script>

<style lang="css" scoped>
.body {
  overflow-x: hidden;
  font-family: "Roboto Slab";
}

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

.sign-up-btn {
  max-width: 150px;
  min-width: auto;
  width: 100%;
  height: 50px;
  font-size: 16px;
  text-transform: capitalize;
}

.login-btn {
  text-transform: capitalize !important;
  background-color: #1a74bb !important;
  height: 45px !important;
  width: 200px !important;
}

.link {
  background-image: url("data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAyMSA3OS4xNTU3NzIsIDIwMTQvMDEvMTMtMTk6NDQ6MDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE0IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNDcyQTY0NjlGRjIxMUU1ODEwQUVEQjU2M0YyQjZDNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNDcyQTY0NzlGRjIxMUU1ODEwQUVEQjU2M0YyQjZDNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU0NzJBNjQ0OUZGMjExRTU4MTBBRURCNTYzRjJCNkM3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU0NzJBNjQ1OUZGMjExRTU4MTBBRURCNTYzRjJCNkM3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fHwEHBwcNDA0YEBAYGhURFRofHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8f/8AAEQgACgAKAwERAAIRAQMRAf/EAEsAAQEAAAAAAAAAAAAAAAAAAAAIAQEAAAAAAAAAAAAAAAAAAAAAEAEAAAAAAAAAAAAAAAAAAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCqQAAAf//Z");
  background-repeat: no-repeat;
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
.google-btn.focus,
.google-btn:focus,
.google-btn:hover {
  color: #fff;
  background-color: #4285f4;
  border-color: #4285f4;
}

.google-btn:focus,
.google-btn:hover {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxwYXRoIGQ9Ik0yMy4xODIgOS44MThIMTJ2NC42MzdoNi40MzZjLS42IDIuOTQ1LTMuMTA5IDQuNjM2LTYuNDM2IDQuNjM2QTcuMDc3IDcuMDc3IDAgMDE0LjkxIDEyIDcuMDc3IDcuMDc3IDAgMDExMiA0LjkxYzEuNjkgMCAzLjIxOC42IDQuNDE4IDEuNThMMTkuOTEgM0MxNy43ODIgMS4xNDUgMTUuMDU1IDAgMTIgMCA1LjM0NSAwIDAgNS4zNDUgMCAxMnM1LjM0NSAxMiAxMiAxMmM2IDAgMTEuNDU1LTQuMzY0IDExLjQ1NS0xMiAwLS43MS0uMTEtMS40NzMtLjI3My0yLjE4MnoiIGlkPSJhIi8+PC9kZWZzPjx1c2UgZmlsbD0iI0ZGRiIgeGxpbms6aHJlZj0iI2EiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==);
}

.btn-facebook {
  color: #3b5998;
  background-color: transparent;
  border-color: #3b5998;
  transition: all 0.15s ease-in-out;
  width: 250px !important;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIyLjU4MiAwSDEuMzE5Qy41OSAwIDAgLjU5MSAwIDEuMzE5djIxLjI2M2MwIC43MjkuNTkgMS4zMTkgMS4zMTkgMS4zMTloMTEuNDQ3di05LjI1Nkg5LjY1MXYtMy42MDdoMy4xMTV2LTIuNjZjMC0zLjA4NyAxLjg4Ni00Ljc2OCA0LjYzOS00Ljc2OCAxLjMxOSAwIDIuNDUzLjA5OCAyLjc4My4xNDJ2My4yMjZsLTEuOTEuMDAxYy0xLjQ5OCAwLTEuNzg4LjcxMi0xLjc4OCAxLjc1NnYyLjMwM2gzLjU3MmwtLjQ2NSAzLjYwN0gxNi40OXY5LjI1Nmg2LjA5MWMuNzI5IDAgMS4zMTktLjU5MSAxLjMxOS0xLjMxOVYxLjMxOUMyMy45LjU5IDIzLjMwOSAwIDIyLjU4MSAwIiBmaWxsPSIjM0I1OTk4Ii8+PC9zdmc+);
  background-repeat: no-repeat;
  background-position: center;
}

.btn-facebook:focus,
.btn-facebook:hover {
  color: #fff;
  background-color: #3b5998;
  border-color: #3b5998;
}

.btn-facebook:focus,
.btn-facebook:hover {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIyLjU4MiAwSDEuMzE5Qy41OSAwIDAgLjU5MSAwIDEuMzE5djIxLjI2M2MwIC43MjkuNTkgMS4zMTkgMS4zMTkgMS4zMTloMTEuNDQ3di05LjI1Nkg5LjY1MXYtMy42MDdoMy4xMTV2LTIuNjZjMC0zLjA4NyAxLjg4Ni00Ljc2OCA0LjYzOS00Ljc2OCAxLjMxOSAwIDIuNDUzLjA5OCAyLjc4My4xNDJ2My4yMjZsLTEuOTEuMDAxYy0xLjQ5OCAwLTEuNzg4LjcxMi0xLjc4OCAxLjc1NnYyLjMwM2gzLjU3MmwtLjQ2NSAzLjYwN0gxNi40OXY5LjI1Nmg2LjA5MWMuNzI5IDAgMS4zMTktLjU5MSAxLjMxOS0xLjMxOVYxLjMxOUMyMy45LjU5IDIzLjMwOSAwIDIyLjU4MSAwIiBmaWxsPSIjZmZmIi8+PC9zdmc+);
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

.error-messages {
  color: #c22e2e;
  background-color: #ffdfdf;
  font-size: 0.875rem;
  line-height: 24px;
  position: relative;
  border-radius: 3px;
  border-width: 0;
  margin-top: 12px;
  padding: 5px;
}
.error-messages:before {
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

/* ===========Loader=============== */
input.delay {
  margin-bottom: 15px;
}

.loading-overlay {
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(100, 100, 100, 0.5);
}

i.fa.fa-cog {
  font-size: 3em;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

/* For mobile phones: */
@media (max-width: 720px) {
  .contact-from-wrap {
    min-height: 100%;
    height: 100%;
  }
  .form-area {
    margin-top: 5em;
  }

  .login-btn {
    width: 100px !important;
  }
}
</style>
