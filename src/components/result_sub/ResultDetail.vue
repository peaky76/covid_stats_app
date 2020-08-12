<template>
  <div>
    <h3 v-if="displayData">{{areaName}}</h3>
    <h4 v-if="displayData">Range of Dates: {{displayData[0].date}} to {{displayData[displayData.length - 1].date}}</h4>
    <p v-for="(item, index) in displayData" :key="index">
      Date: {{item.date}}
      
      <ul v-for="(value, key) in item" :key="key">
       <li v-if="key !== 'date'">{{key}}: {{value}}</li>
       <!-- : {{item[heading]}}</li> -->
      </ul>
    </p>
    
  </div>
</template>

<script>
export default {
  name: "result-detail",
  props: ["displayData", "areaName"],
  computed: {

    // chartData() {
    //   let dataToDisplay = [];
    //   if (this.result) {
    //     const newHeading = this.headings.splice(0, 2);
    //     dataToDisplay.push(this.headings);
    //     this.dataRows.forEach((dataRow) => {
    //       dataToDisplay.push(dataRow);
    //     });
    //   }
    //   return dataToDisplay;
    // },
    // headings() {
    //   if (this.result) {
    //     return Object.keys(this.result[0]);
    //   }
    // },
    // dataRows() {
    //   if (this.result) {
    //     let dataRows = [];
    //     this.result.forEach((item) => {
    //       let dataRow = [];
    //       this.headings.forEach((heading) => {
    //         dataRow.push(item[heading]);
    //       });
    //       dataRows.push(dataRow);
    //     });
    //     return dataRows;
    //   }
    // },
    // filteredResult() {      
    //     if (this.displayData) {
    //     // const splicedStuff = this.displayData.splice(0, 1);
    //     // return this.displayData
    //     let filteredResult = this.displayData
    //     filteredResult.forEach(function (dataItem) {
    //       delete dataItem.date;
    //     })
    //     return filteredResult
    //     }
    // }
  },
};
</script>

<style scoped>
div {
  width: 30%;
  background-color: #bfdbf7;;
}
</style>