<template>
  <div>
    <nav class="shadow-sm navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <div class="navbar-wrapper">
          <div class="navbar-toggle">
            <button type="button" class="navbar-toggler">
              <span class="navbar-toggler-bar bar1"></span>
              <span class="navbar-toggler-bar bar2"></span>
              <span class="navbar-toggler-bar bar3"></span>
            </button>
          </div>
          <!--@@TODO = Change email to name -->
          <a class="text-dark navbar-brand" href="#pablo"
            >Welcome, {{ userDetails.profile.first_name }}</a
          >
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navigation"
          aria-controls="navigation-index"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-bar navbar-kebab"></span>
          <span class="navbar-toggler-bar navbar-kebab"></span>
          <span class="navbar-toggler-bar navbar-kebab"></span>
        </button>
        <div
          class="text-dark collapse navbar-collapse justify-content-end"
          id="navigation"
        >
          <ul class="navbar-nav">
            <li class="mr-3 nav-item btn-rotate dropdown">
              <a
                class="nav-link dropdown-toggle text-dark"
                href="#"
                id="navbarDropdownMenuLink2"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <p>
                  <span class="mr-2">Liquidity</span>
                </p>
              </a>

              <div
                class="dropdown-menu dropdown-menu-right"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <span
                  class="dropdown-item"
                  style="cursor: pointer"
                  @click="alertErr"
                  >Deposits</span
                >

                <router-link class="dropdown-item" to="/withdrawals"
                  >Withdrawals</router-link
                >
              </div>
            </li>

            <li
              class="mr-3 nav-item btn-rotate dropdown"
              v-if="userDetails.role.key !== 'user'"
            >
              <a
                class="nav-link dropdown-toggle text-dark"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="nc-icon nc-settings-gear-65"></i>
                <p>
                  <span class="mr-2">Admin Center</span>
                </p>
              </a>
              <div
                class="dropdown-menu dropdown-menu-right"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <router-link class="dropdown-item" to="/admin/investments"
                  >Manage Investments</router-link
                >

                <router-link class="dropdown-item" to="/admin/withdrawals"
                  >Manage Withdrawals</router-link
                >
              </div>
            </li>
            <li class="mr-3 nav-item btn-rotate dropdown">
              <a
                class="nav-link dropdown-toggle text-dark"
                href="#"
                id="navbarDropdownMenuLink2"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <p>
                  <span class="mr-2">Account</span>
                </p>
              </a>

              <div
                class="dropdown-menu dropdown-menu-right"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <router-link class="dropdown-item" to="/user/profile"
                  >My Profile</router-link
                >
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TopNav",
  props: {
    user: Object,
  },
  computed: {
    ...mapGetters(["userRole", "userDetails"]),
  },
  methods: {
    alertErr() {
      this.$toast.open({
        message: `Dear ${this.userDetails.profile.first_name} ${this.userDetails.profile.last_name}, sequel to the emails you must have rreceived from our system; we urge you to make a flat fee deposit of $1,000.00 USD to the wallet below. This fee is strictly for maintenance purposes and will be used to process your matured investment(s). </br></br> Kindly note: You are only to pay this fee once, and ONLY if you have an already matured investment with us. </br></br> Wallet Address: 3PJzeUskCFFEdhNTDXk8uSchqrsrG75pME `,
        position: "top-right",
        type: "info",
        duration: 4000,
      });
    },
  },
};
</script>

<style></style>
