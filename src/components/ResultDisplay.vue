<template>
  <section>
    <result-detail :displayData="filteredData" :areaName="areaName" />
    <result-chart :displayData="displayData" :areaName="areaName" />
  </section>
</template>

<script>
import { eventBus } from "@/main";
import moment from "moment";
import ResultChart from "./result_sub/ResultChart";
import ResultDetail from "./result_sub/ResultDetail";
import FilterBuilder from "@/helpers/FilterBuilder.js";

export default {
  name: "result-display",
  components: {
    "result-chart": ResultChart,
    "result-detail": ResultDetail,
  },
  data() {
    return {
      fullData: null,
      selectedDates: [],
    };
  },
  computed: {
    areaName() {
      return this.fullData[0].areaName;
    },
    filteredData() {
      if (this.fullData) {
        let unpackedData = this.fullData;
        let filteredData = unpackedData.filter((dataItem) =>
          this.selectedDates.includes(dataItem.date)
        );
        filteredData.forEach(function (dataItem) {
          dataItem.date = moment(dataItem.date).format("D MMM YYYY");
          delete dataItem.areaName;
        });
        return filteredData.reverse();
      }
    },
    displayData() {
      let displayData = [];
      if (this.filteredData) {
        displayData.push(this.prettyHeadings);
        this.dataRows.forEach((dataRow) => {
          displayData.push(dataRow);
        });
      }
      return displayData;
    },
    headings() {
      if (this.filteredData) {
        return Object.keys(this.filteredData[0]);
      }
    },
    prettyHeadings() {
      return this.headings.map((heading) => FilterBuilder.makePretty(heading));
    },
    dataRows() {
      if (this.filteredData) {
        let dataRows = [];
        this.filteredData.forEach((item) => {
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
  mounted() {
    eventBus.$on("dates", (dates) => {
      console.log("post-eBus dates:", dates);
      this.selectedDates = dates;
    }),
      eventBus.$on("data-received", (res) => {
        this.fullData = res.data;
      });
  },
};
</script>

<style scoped>
section {
  display: flex;
  background-color: #e1e5f2;;
}
</style>