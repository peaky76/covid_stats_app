<template>
  <section>
    <result-detail :result="result" />
    <result-chart :result="result" />
  </section>
</template>

<script>
import { eventBus } from "@/main";
import ResultChart from "./result_sub/ResultChart";
import ResultDetail from "./result_sub/ResultDetail";

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
    result() {
      if (this.fullData) {
        let unpackedData = this.fullData.data;
        let filteredData = unpackedData.filter((item) =>
          this.selectedDates.includes(item.date)
        );
        return filteredData;
      }
    },
  },
  mounted() {
    // const baseURL = 'https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=nation&structure={%22date%22:%22date%22,%22areaType%22:%22areaType%22,%22name%22:%22areaName%22,%20%22areaCode%22:%22areaCode%22}&latestBy=newCasesByPublishDate'

    //   fetch(baseURL)
    //     .then(res => res.json())
    //  .then(res => this.result = res);
    eventBus.$on("dates", (dates) => {
      console.log("post-eBus dates:", dates);
      this.selectedDates = dates;
    }),
      eventBus.$on("data-received", (res) => {
        this.fullData = res;
      });
  },
};
</script>

<style scoped>
section {
  display: flex;
  background-color: palegreen;
}
</style>