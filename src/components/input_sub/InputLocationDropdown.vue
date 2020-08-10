<template>
  <select v-model="selectedLocation" v-if="locations" v-on:change="locationMethod">
    <option
      :value="location"
      v-for="(location, index) in locations"
      :key="index"
    >{{location.nation}}: {{location.areaType}} : {{location.areaName}}</option>
  </select>
</template>

<script>
import { eventBus } from "@/main";
import json from "@/db/locations.json";
import LocationHelper from "@/helpers/LocationHelper";

export default {
  name: "input-location-dropdown",
  data() {
    return {
      locations: [],
      selectedLocation: null,
    };
  },
  mounted() {
    this.locations = json
      .filter((location) => location.areaType != "ltla")
      .map((location) =>
        Object({
          areaName: location.areaName,
          areaType: location.areaType,
          nation: LocationHelper.getNation(location.areaCode),
        })
      );
  },
  methods: {
    locationMethod() {
      console.log("pre-eventBus", this.selectedLocation);
      eventBus.$emit("location", this.selectedLocation);
    },
  },
};
</script>

<style>
</style>

// &filters=areaType=utla;areaName=????