<template>
  <div>
    <h3 v-if="result">{{result[0].areaName}}</h3>
    <h4 v-if="result">Range of Dates: {{result[0].date}} to {{result[result.length - 1].date}}</h4>
    <p v-for="(item, index) in result" :key="index">{{item}}</p>
  </div>
</template>

<script>
export default {
  name: "result-detail",
  props: ["result"],
  data()  {
    return {
      startDate: '',
      endDate: ''
    }
  },
  computed: {
    firstDateGetter() {
      if (this.results) {
        this.startDate = result[0].date
        // this.endDate = result[result.length - 1].date
        return this.startDate
      } else {
        return 'No start date selected';
      }
    },
    lastDateGetter() {
      if (this.results) {
        // this.startDate = result[0].date
        this.endDate = result[result.length - 1].date
        return this.endDate
      } else {
        return 'No end date selected';
      }
    },
    getAreaName() {
      if (this.results) {
        return result[0].areaName
      } else {
        return 'No location selected'
      }
    }
  }
};
</script>

<style>
</style>