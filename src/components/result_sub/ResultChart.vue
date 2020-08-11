<template>
  <div id="chart-area">
    <GChart type="LineChart" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";

export default {
  name: "result-chart",
  props: ["result"],
  components: {
    GChart,
  },
  data() {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function

      chartOptions: {
        chart: {
          title: "Coronavirus Stats",
          subtitle: "Hull",
        },
      },
    };
  },
  computed: {
    chartData() {
      let dataToDisplay = [];
      if (this.result) {
        const newHeading = this.headings.splice(1, 1)
        dataToDisplay.push(this.headings);
        this.dataRows.forEach((dataRow) => {
          dataToDisplay.push(dataRow);
        });
      }
      return dataToDisplay;
    },
    headings() {
      if (this.result) {
        return Object.keys(this.result[0]);
      }
    },
    dataRows() {
      if (this.result) {
        let dataRows = [];
        this.result.forEach((item) => {
          let dataRow = [];
          this.headings.forEach((heading) => {
            dataRow.push(item[heading]);
          });
          dataRows.push(dataRow);
        });
        return dataRows;
      }
    },
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