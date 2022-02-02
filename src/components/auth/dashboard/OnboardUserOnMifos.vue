<template>
  <div>
    <div class="fixed px-3 py-4 border-0 card" v-if="showCard">
      <div class="card-body">
        <div class="close">
          <i class="fa fa-close" @click="toggleCard()"></i>
        </div>
        <div class="mb-2 text-head">Welcome to MoreBitcoin</div>
        <p class="mb-0 card-text">
          We are a platform that allows you to invest in bitcoin with zero
          learning curve required.
        </p>
        <div class="mt-3 action">
          <router-link to="/invest/start" class="m-0 btn"
            >Let's get started</router-link
          >
        </div>
      </div>
    </div>

    <div class="fixed p-3 border-0 rounded-circle" v-if="!showCard">
      <div class="mr-4 notification-icon">
        <i class="bell fi fi-bell-alt" @click="toggleCard()"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "OnboardUserOnMifos",
  created() {},
  data() {
    return {
      showCard: true,
    };
  },
  computed: {
    ...mapGetters(["userDetails"]),
  },
  props: {},
  methods: {
    toggleCard() {
      this.showCard = !this.showCard;
    },
  },
};
</script>

<style lang="css" scoped>
.fixed {
  position: fixed;
  bottom: 10px;
  right: 30px;
  z-index: 10;
}

.card {
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 20px 48px rgb(0 0 0 / 20%) !important;
  max-width: 420px;
  width: 100%;
  transition: 2s opacity;
  transition-timing-function: ease-in-out;
}

.synapse {
  color: #ff0035;
  cursor: pointer;
}

@media screen and (max-width: 490px) {
  .card {
    width: 80%;
  }
}

.text-head {
  font-weight: bold;
  font-size: 1.4rem;
}

.close i {
  font-weight: 100 !important;
  font-size: 1rem;
}

.btn {
  background-color: #1a74bb !important;
  text-transform: none;
  font-size: 1rem;
  transition: 0.5s all;
}

.btn:hover {
  background-color: #1a74bb !important;
  opacity: 0.8;
}

.bell {
  color: #1a74bb;
  font-size: 2rem;
  cursor: pointer;
}
</style>