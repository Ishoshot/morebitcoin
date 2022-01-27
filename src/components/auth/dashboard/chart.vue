<template>
  <div class="container-fluid">
    <div class="d-flex flex-column justify-content-between">
      <div>
        <div
          class="
            d-flex
            flex-row
            justify-content-between
            align-items-center
            mb-2
          "
        >
          <div class="overview-title">Overview Of Investments</div>
          <div class="text-view">
            <!-- <router-link to="/manage/beneficiaries">View all</router-link> -->
          </div>
        </div>
        <LineChart :chartInfo="chartData"></LineChart>
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from "./lineChart";
export default {
  name: "chart",
  props: {
    chartData: Object,
  },
  data: () => ({}),
  components: {
    LineChart,
  },
};
</script>

<style scoped>
* {
  text-transform: "capitalize" !important;
}
.text-view {
  color: #5b7cce;
  font-weight: bold;
  font-size: 14px;
}
.overview-title {
  font-weight: bold;
  font-size: 1.3rem;
}
</style>
