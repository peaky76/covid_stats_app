<template>
  <div>
    <h3 v-if="result">{{result[0].areaName}}</h3>
    <h4 v-if="result">Range of Dates: {{result[0].date}} to {{result[result.length - 1].date}}</h4>
    <p v-for="(item, index) in result" :key="index">Date: {{item.date}}</p>
  </div>
</template>

<script>
export default {
  name: "result-detail",
  props: ["result"],
  // data()  {
  //   return {
  //     startDate: '',
  //     endDate: ''
  //   }
  // },
  computed: {
    headings() {
      if (this.result) {
        return Object.keys(this.result[0]);
      }
    },
    chartData() {
      let dataToDisplay = [];
      if (this.result) {
        const newHeading = this.headings.splice(0, 2)
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
  }
  //   firstDateGetter() {
  //     if (this.results) {
  //       this.startDate = result[0].date
  //       // this.endDate = result[result.length - 1].date
  //       return this.startDate
  //     } else {
  //       return 'No start date selected';
  //     }
  //   },
  //   lastDateGetter() {
  //     if (this.results) {
  //       // this.startDate = result[0].date
  //       this.endDate = result[result.length - 1].date
  //       return this.endDate
  //     } else {
  //       return 'No end date selected';
  //     }
  //   },
  //   getAreaName() {
  //     if (this.results) {
  //       return result[0].areaName
  //     } else {
  //       return 'No location selected'
  //     }
  //   }
  // }
};
</script>

<style>
</style>