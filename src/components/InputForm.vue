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
    };
  },
  components: {
    "input-checkbox": InputCheckbox,
    "input-date-slider": InputDateSlider,
    "input-location-dropdown": InputLocationDropdown,
  },
  methods: {
    refreshData() {
      if (
        this.selectedLocation &&
        this.selectedFilters.length > 0
        // this.selectedDates.length > 0
      ) {
        StatsService.getData(
          this.selectedLocation,
          this.selectedFilters
          // this.selectedDates
        )
          .then((res) => eventBus.$emit("data-received", res))
          .catch((error) => console.log(error));
      }
    },
  },
  mounted() {
    eventBus.$on("filters", (filters) => {
      this.selectedFilters = filters;
    }),
      eventBus.$on("location", (location) => {
        this.selectedLocation = location;
      });
  },
};
</script>

<style scoped>
form {
  background-color: #e1e5f2;;
}
#input-selectors {
  display: flex;
  align-items: center;
}
#input-checkboxes {
  display: flex;
  align-items: center;
}
</style>