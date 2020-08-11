<template>

  <form v-on:change="refreshData">
    <div id="input-selectors">
      <input-location-dropdown />
      <input-date-slider />
    </div>
    <div id="input-checkboxes">
      <input-checkbox />
    </div>
  </form>
</template>

<script>
import { eventBus } from "@/main";
import InputCheckbox from "./input_sub/InputCheckbox";
import InputDateSlider from "./input_sub/InputDateSlider";
import InputLocationDropdown from "./input_sub/InputLocationDropdown";
import StatsService from "@/helpers/StatsService";

export default {
  name: "input-form",
  data() {
    return {
      selectedLocation: null,
      selectedFilters: [],
      selectedDates: [],
    };
  },
  components: {
    "input-checkbox": InputCheckbox,
    "input-date-slider": InputDateSlider,
    "input-location-dropdown": InputLocationDropdown,
  },
  methods: {
    refreshData() {
<<<<<<< HEAD
    StatsService.getData(this.selectedLocation, this.selectedFilters, this.selectedDates)
        .then((res) => eventBus.$emit('data-received', res))
=======
      StatsService.getData(this.selectedLocation, this.selectedFilters)
        .then((res) => eventBus.$emit("data-received", res))
>>>>>>> a536ed99b539b66ed5cd142b66d0c4c6631c7146
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    eventBus.$on("filters", (filters) => {
      this.selectedFilters = filters;
    }),
<<<<<<< HEAD
    eventBus.$on('location', location => {
      console.log('post-eventBus', location)
      this.selectedLocation = location;
    }),
    eventBus.$on('dates', dates => {
      this.selectedDates = dates;
    })

  }
=======
      eventBus.$on("location", (location) => {
        console.log("post-eventBus", location);
        this.selectedLocation = location;
      });
  },
>>>>>>> a536ed99b539b66ed5cd142b66d0c4c6631c7146
};
</script>

<style scoped>
form {
  background-color: palevioletred;
}
#input-selectors,
#input-checkboxes {
  display: flex;
  align-items: center;
}
</style>