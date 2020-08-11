<template>
  <div>
    <h3 v-if="result">{{result[0].areaName}}</h3>
    <h4>{{this.dateGetter}}</h4> -->
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
    dateGetter() {
      if (this.results) {
        this.startDate = result[0].date
        this.endDate = result[result.length - 1].date
        return `Range of Dates: ${startDate} to ${endDate}`
      } else {
        return 'No date(s) selected';
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