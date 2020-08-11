<template>
  <div id="chart-area">
    <GChart type="LineChart" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";

export default {
  name: "result-chart",
  components: {
    GChart,
  },
  data() {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ["Date", "Deaths"],
        ["1 Aug", 200],
        ["2 Aug", 250],
        ["3 Aug", 300],
        ["4 Aug", 350],
      ],
      chartOptions: {
        chart: {
          title: "Coronavirus Stats",
          subtitle: "Hull",
        },
      },
    };
  },
};
</script>

<style scoped>
#chart-area {
  width: 300px;
}
div {
  border: 0;
  padding: 0;
  margin: 0;
}
</style>