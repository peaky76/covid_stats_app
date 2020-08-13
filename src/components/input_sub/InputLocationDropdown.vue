<template>
  <div id="location-dropdown-container">
    <label for="location-dropdown" class="input-heading">Pick a location:</label>
    <v-select
      id="location-dropdown"
      label="areaName"
      :options="locations"
      @input="sendLocation"
      v-model="selectedLocation"
    >
      <template id="option-holder" v-slot:option="option">
        <span :class="option.areaType">{{option.areaName}}</span>
      </template>
    </v-select>
  </div>
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
      .filter(
        (location) =>
          location.areaType != "ltla" && location.areaType != "nhsRegion"
      )
      .sort((a, b) => LocationHelper.sortLocations(a, b));
  },
  methods: {
    sendLocation() {
      eventBus.$emit("location", this.selectedLocation);
      eventBus.$emit("selected-area-type", this.selectedLocation.areaType);
    },
  },
};
</script>

<style scoped>
#location-dropdown-container {
  height: 2rem;
  width: 35%;
  margin-right: 20%;
}
.nation {
  color: red;
  text-transform: uppercase;
}
.region {
  color: orange;
}
</style>

