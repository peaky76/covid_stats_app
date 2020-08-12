<template>
  <div id="dates">
    
    <div id="start">
      <label for="start-date">Pick a start date</label>
      <input v-model="startDate" type="date" id="start-date" v-on:change="sendDates" />
    </div>
    <div v-if="startDate" id="end">
      <label for="end-date">Pick a end date</label>
      <input v-model="endDate" type="date" id="end-date" v-on:change="sendDates" />
    </div>
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

<style scoped>
#dates {
  display: flex;
  flex-direction: row;
}
#start {
display: flex;
  flex-direction: column;
}
#end {
display: flex;
  flex-direction: column;
}
label {
  background-color: #1f7a8c;
}
input {
  background-color: #1f7a8c;
}
</style>
