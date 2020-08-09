<template>
  <form>
    <input-location-dropdown />
    <input-date-slider />
    <input-checkbox v-for="index in 4" :key="index" />
  </form>
</template>

<script>
import InputCheckbox from "./input_sub/InputCheckbox";
import InputDateSlider from "./input_sub/InputDateSlider";
import InputLocationDropdown from "./input_sub/InputLocationDropdown";

export default {
  name: "input-form",
  components: {
    "input-checkbox": InputCheckbox,
    "input-date-slider": InputDateSlider,
    "input-location-dropdown": InputLocationDropdown,
  },
};
</script>

<style>
</style>