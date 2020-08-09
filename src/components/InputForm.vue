<template>
  <form>
    <input-location-dropdown />
    <input-date-slider />
    <div id="input-checkboxes">
      <input-checkbox v-for="index in 4" :key="index" />
    </div>
  </form>
</template>

<script>
import { eventBus } from '@/main';
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

<style scoped>
form {
  display: flex;
  flex-wrap: wrap;
  background-color: palevioletred;
}
#input-checkboxes {
  width: 100%;
}
</style>