<template>
  <div v-if="displayData" id="chart-area">
    <GChart type="LineChart" :data="displayData" :options="chartOptions" />
  </div>
</template>

<script>
import { eventBus } from "@/main";
import { GChart } from "vue-google-charts";

export default {
  name: "result-chart",
  props: ["areaName", "displayData"],
  components: {
    GChart,
  },
  data() {
    return {
      chartOptions: {
        height: 480,
        backgroundColor: "#bfdbf7",
        colors: ["#1f7a8c", "#1f8c31", "#1f7a8c", "#8c1f7a", "#8c311f"],
        vAxis: {
          format: "0",
          gridlines: {
            count: 5,
          },
        },
        hAxis: {
          textPosition: "out",
          minTextSpacing: 100,
          showEveryText: 7,
          viewWindow: {
            min: 0,
          },
          slantedText: true,
        },
        legend: {
          position: "bottom",
        },
        animation: {
          duration: 1000,
          easing: "in-out",
          startup: true,
        },
      },
    };
  },
};
</script>

<style scoped>
#chart-area {
  width: 70%;
  padding: 0;
}
</style>