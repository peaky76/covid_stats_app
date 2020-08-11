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
      duration: null
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

    this.duration = moment.duration(endMoment.diff(startMoment, 'days'))
    console.log('duration:', this.duration)
    }
  }
};
</script>

<style>



/* let date = moment.utc(date_str); */
