<template>
  <div>
    <auth :active="active">
      <template v-slot:content>
        <div class="mx-auto sp-w-90 mobile-width">
          <div class="card shadow-sm border-0 rounded-0 p-4">
            <div class="row justify-content-between">
              <div class="p-2">
                <h5>
                  <i class="fa fa-edit" aria-hidden="true"></i>
                  Edit Profile
                </h5>
              </div>

              <div class="p-2">
                <router-link to="/user/profile" class="text-danger"
                  ><i class="fi fi-close-a"></i
                ></router-link>
              </div>
            </div>

            <hr />
            <div class="container p-3">
              <div class="text-danger">{{ updateUserUnhandledError }}</div>
              <form>
                <div class="row">
                  <!-- FirstName Field -->
                  <div class="col-sm-6 mb-4 mb-sm-0">
                    <label>First Name</label>
                    <input
                      type="text"
                      autocomplete="off"
                      name="first_name"
                      class="form-control ex-inputBox"
                      v-model="form.first_name"
                    />
                    <!-- Back End Validation -->
                    <div
                      class="error-messages"
                      v-if="updateUserBackEndError.first_name"
                    >
                      <div class="text-danger">
                        {{ updateUserBackEndError.first_name[0] }}
                      </div>
                    </div>

                    <!-- Front End Validation -->
                    <div
                      class="error-messages"
                      v-if="submitted && !$v.form.first_name.minLength"
                    >
                      First Name must be at least 3 characters
                    </div>
                  </div>

                  <!-- Last Name Field -->
                  <div class="col-sm-6">
                    <label>Last Name</label>
                    <input
                      type="text"
                      autocomplete="off"
                      name="last_name"
                      class="form-control ex-inputBox"
                      v-model="form.last_name"
                    />

                    <!-- BackEnd Validation -->
                    <div
                      class="error-messages"
                      v-if="updateUserBackEndError.last_name"
                    >
                      <div class="text-danger">
                        {{ updateUserBackEndError.last_name[0] }}
                      </div>
                    </div>
                    <!-- Front End  Validation-->
                    <div
                      class="error-messages"
                      v-if="submitted && !$v.form.last_name.minLength"
                    >
                      Last Name must be at least 3 characters
                    </div>
                  </div>
                </div>

                <div class="row mt-4">
                  <div class="col-sm-6 mb-4 mb-sm-0">
                    <label>Phone Number</label>
                    <input
                      type="text"
                      autocomplete="off"
                      name="phone"
                      class="form-control ex-inputBox"
                      v-model="form.phone"
                    />
                  </div>

                  <div class="col-sm-6">
                    <label>Email Address</label>
                    <input
                      type="text"
                      autocomplete="off"
                      name="email"
                      class="form-control ex-inputBox"
                      :value="userDetails.email"
                      disabled
                    />
                  </div>
                </div>

                <div class="row mt-4">
                  <div class="col-sm-6 mb-4 mb-sm-0">
                    <label>Address [First Line]</label>
                    <input
                      type="text"
                      autocomplete="off"
                      name="address"
                      class="form-control ex-inputBox"
                      v-model="form.address"
                    />
                  </div>
                  <div class="col-sm-6">
                    <label>ZipCode</label>
                    <input
                      type="text"
                      autocomplete="off"
                      name="zip_code"
                      class="form-control ex-inputBox"
                      v-model="form.zip_code"
                    />
                  </div>
                </div>

                <div class="row mt-4">
                  <div class="col-sm-4 mb-4 mb-sm-0">
                    <label>Country </label>
                    <select
                      class="custom-select ex-inputBox"
                      name="country"
                      id="country"
                      v-on:change="getStates"
                      v-model="selectedCountryObj"
                    >
                      <option
                        v-for="country in countries"
                        :key="country.id"
                        :value="country"
                      >
                        {{ country.name }}
                      </option>
                    </select>
                    <label
                      >Your Current Country:
                      {{ userDetails.profile.country }}</label
                    >
                  </div>

                  <div class="col-sm-4 mb-4 mb-sm-0">
                    <label
                      >State
                      <i
                        class="fi fi-spinner-refresh fi-spin text-ex-primary"
                        v-if="isFetching"
                      ></i
                    ></label>

                    <select
                      class="custom-select ex-inputBox"
                      name="state"
                      id="state"
                      v-model="selectedStateObj"
                      :disabled="Object.keys(states).length < 0 ? true : false"
                    >
                      <option
                        v-for="state in states"
                        :key="state.id"
                        :value="state"
                      >
                        {{ state.name }}
                      </option>
                    </select>
                    <label
                      >Your Current State:
                      {{ userDetails.profile.state }}</label
                    >
                  </div>

                  <div class="col-sm-4 mb-4 mb-sm-0">
                    <label>City</label>
                    <input
                      type="text"
                      autocomplete="off"
                      name="city"
                      class="form-control ex-inputBox"
                      v-model="form.city"
                    />
                  </div>
                </div>
                <div class="row justify-content-center mt-5">
                  <div class="col-12">
                    <button
                      class="btn btn-lg btn-block reg-btn"
                      @click.prevent="saveData"
                      :disabled="isLoading ? true : false"
                    >
                      <div v-if="!isLoading">
                        <i class="fi fi-save-1"></i>
                        Save Details
                      </div>
                      <i class="fi fi-spinner fi-spin fi-pulse" v-else></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </template>
    </auth>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { minLength } from "vuelidate/lib/validators";

export default {
  name: "EditProfile",

  data: () => ({
    active: "editprofile",
    states: {},
    countries: {},
    selectedStateObj: {},
    selectedCountryObj: {},
    isLoading: false,
    isFetching: false,
    submitted: false,
    form: {
      first_name: "",
      last_name: "",
      phone: "",
      address: "",
      city: "",
      zip_code: "",
      country: "",
      state: "",
    },
  }),

  // Form Validations
  validations: {
    form: {
      first_name: {
        minLength: minLength(3),
      },
      middle_name: {
        minLength: minLength(3),
      },
      last_name: {
        minLength: minLength(3),
      },
    },
  },
  computed: {
    ...mapGetters([
      "userDetails",
      "updateUserBackEndError",
      "updateUserUnhandledError",
    ]),
  },
  created() {
    // Set form Values
    this.form.first_name = this.userDetails.profile.first_name;
    this.form.last_name = this.userDetails.profile.last_name;
    this.form.phone = this.userDetails.profile.phone;
    this.form.city = this.userDetails.profile.city;
    this.form.address = this.userDetails.profile.address;
    this.form.zip_code = this.userDetails.profile.zip;
    this.selectedStateObj.name = this.userDetails.profile.state;
    this.selectedCountryObj.name = this.userDetails.profile.country;

    /* --------------------- Fetch All Countries--------------------- */
    fetch("https://api.countrystatecity.in/v1/countries", {
      headers: {
        "X-CSCAPI-KEY": process.env.VUE_APP_X_CSCAPI_KEY,
      },
    })
      .then((results) => results.json())
      .then((data) => {
        this.countries = data;
      });
  },

  methods: {
    ...mapActions(["updateUser", "clearAfterUpdate"]),

    /* ------------------ Fetch All States of the Selected Country ------------------ */
    getStates() {
      this.isFetching = true;
      fetch(
        `https://api.countrystatecity.in/v1/countries/${this.selectedCountryObj.iso2}/states`,
        {
          headers: {
            "X-CSCAPI-KEY": process.env.VUE_APP_X_CSCAPI_KEY,
          },
        }
      )
        .then((results) => results.json())
        .then((data) => {
          // console.log(data);
          this.states = data;
          this.isFetching = false;
        });
    },

    /* ------------------------- Save Modified User Data ------------------------- */
    async saveData() {
      this.submitted = true;
      this.isLoading = true;
      this.$v.$touch();

      if (this.$v.$invalid) {
        this.isLoading = false;
        return;
      } else {
        const data = {
          first_name: this.form.first_name,
          last_name: this.form.last_name,
          phone: this.form.phone,
          address: this.form.address,
          zip: this.form.zip_code,
          city: this.form.city,
          state: this.selectedStateObj.name,
          country: this.selectedCountryObj.name,
        };
        // console.log(data);
        await this.updateUser(data);
        this.isLoading = false;
        if (
          Object.keys(this.updateUserBackEndError) !== 0 ||
          this.updateUserUnhandledError !== "" ||
          this.updateUserUnhandledError !== null
        ) {
          this.clearAfterUpdate();
          this.$router.push({ name: "profile" });
        }
      }
    },
  },
};
</script>

<style scoped>
.reg-btn {
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
/* For mobile phones: */
@media (max-width: 720px) {
  .mobile-width {
    width: 100% !important;
  }
}
</style>
