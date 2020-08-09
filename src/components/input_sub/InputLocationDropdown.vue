<template>
  <select>
    <option v-for="index in 10" :key="index">A LOCATION OPTION</option>
  </select>
</template>

<script>
import { eventBus } from './main';

export default {
  name: "input-location-dropdown",
};
</script>

<style>
</style>