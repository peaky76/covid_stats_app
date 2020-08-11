<template>
  <section>
    <result-detail :result="result" />
    <result-chart />
  </section>
</template>

<script>
import ResultChart from "./result_sub/ResultChart";
import ResultDetail from "./result_sub/ResultDetail";

export default {
  name: "result-display",
  props: ["result"],
  components: {
    "result-chart": ResultChart,
    "result-detail": ResultDetail,
  },
};
</script>

<style scoped>
section {
  display: flex;
  background-color: palegreen;
}
</style>