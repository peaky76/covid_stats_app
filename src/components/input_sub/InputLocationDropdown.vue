<template>
  <select v-if="locations">
    <option v-for="(location, index) in locations" :key="index">{{location.areaName}}</option>
  </select>
</template>

<script>
import { eventBus } from '@/main';
import json from '@/db/locations.json';

export default {
  name: "input-location-dropdown",
  data() {
    return {
      locations: []
    }
  },
  mounted() {
    this.locations = json.filter(location => location.areaType != "ltla");
  } 
};
</script>

<style>
</style>

// &filters=areaType=utla;areaName=????