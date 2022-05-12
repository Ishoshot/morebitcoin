<template>
  <div>
    <!-- ======= Header ======= -->
    <header
      id="header"
      class="fixed-top header-transparent navbar navbar-expand-sm"
    >
      <div class="container d-flex align-items-center">
        <router-link class="mr-auto navbar-brand" to="/">
          <img
            width="250"
            height="80"
            src="/media/bw_logo.png"
            alt="More Bitcoin"
          />
        </router-link>

        <button
          class="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <nav class="main-nav collapse navbar-collapse" id="collapsibleNavId">
          <ul class="ml-auto navbar-nav dark">
            <li class="active">
              <router-link class="dark" to="/">Home</router-link>
            </li>
            <li>
              <router-link class="dark" to="#plans">Our Plans</router-link>
            </li>
            <li>
              <router-link class="dark" to="#aboutus">About Us</router-link>
            </li>
            <li>
              <router-link class="dark" to="#howitworks"
                >How it works</router-link
              >
            </li>

            <li><router-link class="dark" to="#faq">FAQ</router-link></li>

            <li v-if="!token">
              <router-link class="dark" to="/login">Sign In</router-link>
            </li>
            <li v-if="!token">
              <router-link class="dark" to="/register">Sign Up</router-link>
            </li>
            <li v-if="token">
              <router-link to="/dashboard"
                ><i class="fa fa-user-circle user-icon"> </i>
              </router-link>
            </li>
          </ul>
        </nav>

        <!-- .main-nav-->
      </div>
    </header>
    <!-- End Header -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "NavBar",
  data() {
    return {
      token: localStorage.getItem("token"),
    };
  },

  computed: {
    ...mapGetters(["sideNavVisibility", "userDetails"]),
  },

  methods: {
    ...mapActions(["toggleSideNavVisibility", "logout"]),

    async callLogout() {
      await this.logout();
      if (Object.keys(this.userDetails).length == 0) {
        // Toggle NavBar
        if (this.$store.getters.sideNavVisibility == true) {
          this.$store.dispatch("toggleSideNavVisibility");
        }
        localStorage.clear();
        this.$router.push({
          path: "/",
        });
      }
    },
  },
};
</script>

<style scoped>
.dark {
  color: #000 !important;
}

.user-icon {
  font-size: 1.2rem;
  cursor: pointer;
  color: #1a74bb;
}

@media only screen and (max-width: 991px) {
  .user-icon {
    color: #1a74bb;
  }
}
</style>
