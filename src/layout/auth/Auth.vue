<template>
  <div>
    <div class="loader" v-if="!userDetails.id">
      <vue-loaders
        name="ball-clip-rotate-multiple"
        color="#ff0035"
        scale="2"
      ></vue-loaders>
    </div>

    <div class="pb-5 wrapper" v-else>
      <auth-sidebar :role="userRole" :pageActive="active"></auth-sidebar>

      <div class="main-panel" style="background: #fff">
        <auth-topbar></auth-topbar>

        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Auth",
  props: {
    active: String,
  },
  data() {
    return {};
  },

  computed: {
    ...mapGetters(["userRole", "userDetails"]),
  },

  created() {
    // console.log(this.userDetails);
    this.callFetchUser();
  },

  methods: {
    ...mapActions(["fetchUser"]),
    async callFetchUser() {
      await this.fetchUser();
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Roboto Slab";
}

.wrapper {
  overflow-y: scroll;
  background-color: #fff;
}

.loader {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.admin-actions {
  border-left: 1px solid #1a74bb;
}
</style>
