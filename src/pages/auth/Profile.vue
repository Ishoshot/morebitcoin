<template>
  <div>
    <auth :active="pageActive">
      <template v-slot:content>
        <div class="body">
          <!--=== Basic Info Card========-->

          <!--=== Basic Info Card========-->

          <personal-details :userDetails="userDetails"></personal-details>

          <modify-profile-card></modify-profile-card>
        </div>
      </template>
    </auth>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "profile",
  data() {
    return {
      pageActive: "profile",
      ip_address: null,
      last_logged_time: null,
    };
  },

  computed: {
    ...mapGetters(["userDetails"]),
  },
  created() {
    console.log(this.userDetails);
  },
};
</script>

<style scoped>
.body {
  /* background: #f2f2f2; */
  font-family: "Roboto Slab";
  margin-bottom: 10%;
}

.profile-letter-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: transparent;
  font-size: 18px;
  color: #111;
  text-align: center;
  line-height: 50px;
  margin: 10px 0;
  border: 1px solid rgba(26, 116, 187, 0.7);
}
.login-ip-info {
  text-align: left;
  font-size: 14px;
}

/* For mobile phones: */
@media (max-width: 720px) {
  .login-ip-info {
    font-size: 12px;
  }
}
</style>
