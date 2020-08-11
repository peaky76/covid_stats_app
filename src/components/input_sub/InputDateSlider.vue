<template>
  <div>
    <input v-model="startDate" type="date" id="start-date" v-on:change="durationConverter">
    <input v-model="endDate" type="date" id="end-date" v-on:change="durationConverter">
    <button >Duration </button>
  </div>
</template>

<script>
import { eventBus } from '@/main';
import moment from 'moment';

export default {
  name: "input-date-slider",
  data() {
    return {
      startDate: '',
      endDate: '',
      dateRanges: []
    }
  },
  mounted() {
    
  },
  methods: {
    dateMethod() {
      eventBus.$emit()
    },
    durationConverter() {
    const startMoment = moment(this.startDate)
    const endMoment = moment(this.endDate)
    console.log('startMoment:', startMoment)
    console.log('endMoment:', endMoment)

    for (let dates = startMoment; dates <= endMoment; dates.add(1, 'days')) {
      this.dateRanges.push(dates.format("YYYY-MM-DD"))
    }
    console.log(this.dateRanges)

    eventBus.$emit("dates", this.dateRanges);

    // let dates = startMoment.add(1, 'days')
    // console.log('dates', dates.format("YYYY-MM-DD"))
    // this.duration = moment.duration(endMoment.diff(startMoment, 'days'))
    // console.log('duration:', this.duration)
    // console.log(this.duration().format())
    }
  }
};
</script>

<style>



/* let date = moment.utc(date_str); */
