<template>
  <div>
    <!-- Start Date: -->
    <input v-model="startDate" type="date" id="start-date" v-on:change="sendDates" />
    <!-- End Date: -->
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
      let endMoment;

      if (this.endDate) {
        endMoment = moment(this.endDate);
      } else {
        endMoment = moment(this.startDate);
      }

      console.log(endMoment);
      let allDates = [];
      for (let dates = startMoment; dates <= endMoment; dates.add(1, "days")) {
        allDates.push(dates.format("YYYY-MM-DD"));
      }
      return allDates;
    },
  },
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
input {
  background-color: #1f7a8c;
}
</style>
/* let date = moment.utc(date_str); */
