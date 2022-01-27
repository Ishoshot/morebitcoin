<template>
  <div class="container-fluid">
    <!--  -->
    <div class="flex-row flex-wrap d-flex">
      <p class="font-weight-bold">Your Profile Score:</p>
      <div class="ml-3">
        <p
          class="px-3 py-1 showProfile"
          v-if="!showProfileScore"
          @click="toggleProfileScore()"
        >
          SHOW
        </p>
        <p
          class="px-3 py-1 hideProfile"
          v-if="showProfileScore"
          @click="toggleProfileScore()"
        >
          HIDE
        </p>
      </div>
    </div>
    <!--  -->
    <div class="mt-1 user-score" v-if="showProfileScore">
      <div class="progress score">
        <div
          class="progress-bar"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
          :style="progressStyle"
        ></div>
      </div>
      <!--  -->
      <div class="text-right score">
        <span class="pr-1 text-score">{{ userDetails.score }} %</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "profileProgress",
  props: {
    userDetails: Object,
  },
  data: () => ({
    showProfileScore: true,
  }),
  created() {},
  computed: {
    progressStyle() {
      return {
        width: `${this.userDetails.score}%`,
      };
    },
  },
  methods: {
    toggleProfileScore() {
      this.showProfileScore = !this.showProfileScore;
    },
  },
};
</script>

<style scoped>
.score {
  width: 100%;
  height: 90%;
  position: absolute;
}

.showProfile {
  font-size: 0.6rem;
  border: 1px solid #1781d3;
  border-radius: 1em;
  color: #1781d3;
  font-weight: bold;
  cursor: pointer;
  transition: 0.5s all;
}

.hideProfile {
  font-size: 0.6rem;
  border: 1px solid #ff0035;
  border-radius: 1em;
  color: #ff0035;
  font-weight: bold;
  cursor: pointer;
  transition: 0.5s all;
}

.hideProfile:hover {
  background-color: #ff0035;
  color: #fff;
}

.showProfile:hover {
  background-color: #1781d3;
  color: #fff;
}

.user-score {
  height: 25px;
  position: relative;
}

.progress-bar {
  background-color: #1781d3;
}

.text-score {
  font-weight: bold;
  color: #fff;
}
</style>
