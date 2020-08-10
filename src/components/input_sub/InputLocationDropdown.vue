<template>
  <select v-model="selectedLocation" v-if="locations" v-on:select="locationMethod">
    <option :value="location" v-for="(location, index) in locations" :key="index">{{location.areaName}}</option>
  </select>
</template>

<script>
import { eventBus } from '@/main';
import json from '@/db/locations.json';

export default {
  name: "input-location-dropdown",
  data() {
    return {
      locations: [],
      selectedLocation: null
    }
  },
  mounted() {
    this.locations = json.filter(location => location.areaType != "ltla");
  }, 
  methods: {
    locationMethod() {
      eventBus.$emit( 'location', this.selectedLocation )
    }
  }
};
</script>

<style>
</style>

// &filters=areaType=utla;areaName=????