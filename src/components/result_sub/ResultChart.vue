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
  props: ["displayData"],
  components: {
    GChart,
  },
  data() {
    return {
      chartOptions: {
        title: "",
        height: 480,
        backgroundColor: "#bfdbf7",
        colors: ["#ffff00", "#cccc00", "999900", "666600", "333300"],
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
  mounted() {
    eventBus.$on("location", (location) => {
      this.chartOptions.title = location.areaName;
    });
  },
};
</script>

<style scoped>
#chart-area {
  width: 70%;
  padding: 0;
}
</style>