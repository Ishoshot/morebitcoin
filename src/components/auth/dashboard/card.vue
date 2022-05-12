<template>
  <div class="container-fluid">
    <div class="balance">
      <div class="cc visa">
        <svg width="100%" height="100%">
          <path d="M 0 0 C 50 50 250 -10 400 100"></path>
        </svg>
        <div class="container">
          <div class="circuit">
            <i class="fa fa-cc-mastercard fa-2x"></i>
          </div>
          <div class="text-center type">
            <small class="text-uppercase font-weight-bold">
              {{ userDetails.email }}
            </small>
          </div>
        </div>
        <div class="holder">
          <span class="mb-1 name d-block">{{ fullName }}</span>
          <span class="amount d-block"> N 200,000.00</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    userDetails: {
      type: Object,
    },
  },

  data: () => ({}),

  computed: {
    fullName() {
      return this.userDetails.first_name + " " + this.userDetails.last_name;
    },
  },

  created() {},

  methods: {},
};
</script>

<style scoped>
.balance .cc {
  position: relative;
  font-family: "Maven Pro", sans-serif;
  font-size: 16px;
  color: white;
  border-radius: 16px;
  box-shadow: 0px 0px 8px -1px #2e2e2e;
}

@media (max-width: 650px) {
  .balance .cc {
    width: 300px;
    height: 180px;
  }
}

@media (min-width: 650px) {
  .balance .cc {
    width: 300px;
    height: 180px;
  }
}

.balance .cc.visa {
  background-image: linear-gradient(to top right, #52b6fe, #6154fe);
}

.balance .cc:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  background-image: linear-gradient(to top, transparent, #ffffff);
  opacity: 30%;
}

.balance .cc svg {
  position: absolute;
  top: 90px;
}

.balance .cc svg path {
  fill: transparent;
  stroke: #ffffff;
  stroke-width: 2px;
  stroke-linecap: round;
}

.balance .cc .container {
  position: absolute;
  top: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.balance .cc .holder {
  position: absolute;
  bottom: 15px;
  left: 25px;
}

.balance .cc .holder .amount {
  font-size: 1.3rem;
  font-weight: bold;
}
</style>
