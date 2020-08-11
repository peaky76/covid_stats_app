<template>
  <div id="chart-area">
    {{headings}}
    {{dataRows}}
    <!-- <GChart type="LineChart" :data="chartData" :options="chartOptions" /> -->
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
      chartData: [
        // {date: 2020-08-01, newDeathByDeathDate: 265}
        // {date: 2020-08-02, newDeathByDeathDate: 268}
        // {date: 2020-08-03, newDeathByDeathDate: 265}
        // ["Date", "Deaths"],
        // ["1 Aug", 200],
        // ["2 Aug", 250],
        // ["3 Aug", 300],
        // ["4 Aug", 350],
      ],
      chartOptions: {
        chart: {
          title: "Coronavirus Stats",
          subtitle: "Hull",
        },
      },
    };
  },
  computed: {
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