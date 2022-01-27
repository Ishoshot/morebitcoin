<template>
  <div id="app">
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
let doc = document.body;

import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  components: {},

  computed: {
    ...mapGetters(["sideNavVisibility"]),
  },

  methods: {
    ...mapActions(["toggleSideNavVisibility"]),
  },

  watch: {
    sideNavVisibility: (sideNavVisibility) => {
      if (sideNavVisibility) {
        doc.classList.add("no_scroll");
      } else {
        doc.classList.remove("no_scroll");
      }
    },
  },
};
</script>

<style>
.no_scroll {
  overflow: hidden !important;
}

#page-mask {
  background: rgba(0, 0, 0, 0.8);
  z-index: 10;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.scroll_y {
  overflow-y: auto !important;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
