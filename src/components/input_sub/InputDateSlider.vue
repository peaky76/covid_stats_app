<template>
  <div>
    <input v-model="startDate" type="date" id="start-date" v-on:change="sendDates" />
    <input v-if="startDate" v-model="endDate" type="date" id="end-date" v-on:change="sendDates" />
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
  },
};
</script>

<style>
input {
  background-color: #1f7a8c;
}
</style>
