<template>
  <div>
    <input v-model="startDate" type="date" id="start-date" v-on:change="sendDates" />
    <input v-model="endDate" type="date" id="end-date" v-on:change="sendDates" />
  </div>
</template>

<script>
import { eventBus } from "@/main";
import moment from "moment";

export default {
  name: "input-date-slider",
  data() {
    return {
      startDate: "",
      endDate: "",
    };
  },
  computed: {
    dateRange() {
      const startMoment = moment(this.startDate);
      const endMoment = moment(this.endDate);
      let allDates = [];
      for (let dates = startMoment; dates <= endMoment; dates.add(1, "days")) {
        allDates.push(dates.format("YYYY-MM-DD"));
      }
      return allDates;
    },
  },
  mounted() {},
  methods: {
    sendDates() {
      eventBus.$emit("dates", this.dateRange);
    },
    // let dates = startMoment.add(1, 'days')
    // console.log('dates', dates.format("YYYY-MM-DD"))
    // this.duration = moment.duration(endMoment.diff(startMoment, 'days'))
    // console.log('duration:', this.duration)
    // console.log(this.duration().format())
  },
};
</script>

<style>
/* let date = moment.utc(date_str); */
