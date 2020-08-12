<template>
  <div v-if="filteredData">
    <h3>{{areaName}}</h3>
    <h4>Range of Dates: {{filteredData[0].date}} to {{filteredData[filteredData.length - 1].date}}</h4>
    <p v-for="(item, index) in filteredData" :key="index">
      Date: {{item.date}}
      <ul v-for="(value, key) in item" :key="key">
       <li v-if="key !== 'date'">{{key | prettyName}}: {{value}}</li>
      </ul>
    </p>
    
  </div>
</template>

<script>
import FilterBuilder from "@/helpers/FilterBuilder.js";

export default {
  name: "result-detail",
  props: ["filteredData", "areaName"],
  filters: {
    prettyName(string) {
      return FilterBuilder.makePretty(string)
    }
  },
};
</script>

<style scoped>
div {
  height: 448px;
  width: 30%;
  background-color: #bfdbf7;
  overflow:auto;
}
</style>