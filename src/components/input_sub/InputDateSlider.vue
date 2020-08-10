<template>
  <div>
    <input v-model="startDate" type="date" id="start-date">
    <input v-model="endDate" type="date" id="end-date">
    DATE SLIDER HERE</div>
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
    }
  },
  methods: {
  }
};
</script>

<style>



/* let date = moment.utc(date_str); */
