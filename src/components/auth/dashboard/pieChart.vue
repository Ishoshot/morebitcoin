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
          <div class="text-view">Investment Statistics</div>
        </div>
        <PieChart :chartInfo="chartData"></PieChart>
      </div>
    </div>
  </div>
</template>

<script>
import PieChart from "./pie";
export default {
  name: "chart",
  props: {
    chartData: Object,
  },
  data: () => ({}),
  components: {
    PieChart,
  },
};
</script>

<style scoped>
* {
  text-transform: "capitalize" !important;
}
.text-view {
  font-weight: bold;
  font-size: 1.3rem;
}
</style>
