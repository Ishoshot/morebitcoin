<template>
  <div>
    <div class="sidebar" data-color="white" data-active-color="primary">
      <div class="logo d-flex justify-content-center">
        <router-link to="/dashboard">
          <img
            src="/media/logo.png"
            alt="More Bitcoin"
            width="200"
            height="100"
            class="p-0 text-center img-fluid"
          />
        </router-link>
      </div>
      <div class="sidebar-wrapper">
        <ul class="nav">
          <li :class="pageActive == 'dashboard' ? 'active' : ''">
            <router-link to="/dashboard">
              <i class="nc-icon nc-chart-pie-36"></i>
              <p>Dashboard</p></router-link
            >
          </li>

          <li :class="pageActive == 'invest' ? 'active' : ''">
            <router-link to="/invest/start">
              <i class="nc-icon nc-money-coins"></i>
              <p>Invest</p></router-link
            >
          </li>
          <li :class="pageActive == 'investments' ? 'active' : ''">
            <router-link to="/investments">
              <i class="nc-icon nc-credit-card"></i>
              <p>Investments</p></router-link
            >
          </li>
          <li :class="pageActive == 'profile' ? 'active' : ''">
            <router-link to="/user/profile">
              <i class="nc-icon nc-single-02"></i>
              <p>Profile</p></router-link
            >
          </li>
          <li :class="pageActive == 'withdrawals' ? 'active' : ''">
            <router-link to="/withdrawals">
              <i class="nc-icon nc-bank"></i>
              <p>Withdrawals</p></router-link
            >
          </li>
          <li>
            <router-link to="#">
              <div class="logout" @click.prevent="callLogout">
                <i class="nc-icon nc-button-power"></i>
                <p>Logout</p>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "SideNav",
  props: {
    role: {
      type: String,
    },
    pageActive: {
      type: String,
      default: "dashboard",
    },
  },
  computed: {
    ...mapGetters(["userDetails"]),
  },

  methods: {
    ...mapActions(["logout"]),

    async callLogout() {
      await this.logout();
      if (Object.keys(this.userDetails).length == 0) {
        localStorage.clear();
        this.$router.push({
          path: "/login",
        });
      }
    },
  },
};
</script>

<style scoped>
li a {
  color: #2e2e2e !important;
  text-transform: capitalize !important;
  font-size: 0.95rem !important;
}
</style>
