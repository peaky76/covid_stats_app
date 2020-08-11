<template>
  <select v-model="selectedLocation" v-if="locations" v-on:change="locationMethod">
    <option
      :value="location"
      v-for="(location, index) in locations"
      :key="index"
      :class="location.areaType"
    >{{location | locationFormatter}}</option>
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
  filters: {
    locationFormatter: function (location) {
      if (location.areaType === "nation") {
        return location.areaName.toUpperCase();
      } else if (location.areaType === "region") {
        return "~" + location.areaName + "~";
      } else {
        return location.areaName;
      }
    },
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
    locationMethod() {
      console.log("pre-eventBus", this.selectedLocation);
      eventBus.$emit("location", this.selectedLocation);
      eventBus.$emit("selected-area-type", this.selectedLocation.areaType);
    },
  },
};
</script>

<style scoped>
select {
  background-color: yellow;
  height: 2rem;
  width: 30%;
}
/* .nation {
  color: red;
  background-color: darkgrey;
  text-transform: uppercase;
}
.region {
  color: orange;
  background-color: lightgrey;
} */
</style>

// &filters=areaType=utla;areaName=????