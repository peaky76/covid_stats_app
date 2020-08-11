<template>
  <span>
    <span class="filter-checkbox" v-for="(filter, index) in filters" :key="index">
      <input
        v-model="selectedFilters"
        :value="`&quot;` + filter.name + `&quot;:&quot;` + filter.name + `&quot;`"
        type="checkbox"
        :id="filter.name"
        v-on:change="sendFilters"
        :disabled="filter.excludeFor.includes(currentAreaType)"
      />
      <label :for="filter.name">{{filter.prettyName}}</label>
    </span>
  </span>
</template>

<script>
import { eventBus } from "@/main";
import StatsService from "@/helpers/StatsService.js";
import FilterBuilder from "@/helpers/FilterBuilder.js";

export default {
  name: "input-checkbox",
  data() {
    return {
      filters: [],
      selectedFilters: [],
      currentAreaType: null,
    };
  },
  methods: {
    sendFilters() {
      const filters = this.selectedFilters.join(",");
      eventBus.$emit("filters", filters);
    },
    toggleFilters() {},
  },
  mounted() {
    this.filters = FilterBuilder.buildFilters();

    eventBus.$on("selected-area-type", (areaType) => {
      this.currentAreaType = areaType;
    });
  },
};
</script>

<style scoped>
.filter-checkbox {
  margin-right: 1rem;
}
input:disabled + label {
  color: grey;
}
</style>

// newCasesByPublishDate
// cumCasesByPublishDate
// newCasesBySpecimenDate
// cumCasesBySpecimenDate
// maleCases
// femaleCases

// newAdmissions
// cumAdmissions
// cumAdmissionsByAge

// cumTestsByPublishDate
// newTestsByPublishDate

// covidOccupiedMVBeds
// hospitalCases

// plannedCapacityByPublishDate

// newDeathsByPublishDate
// cumDeathsByPublishDate
// newDeathsByDeathDate
// cumDeathsByDeathDate
// femaleDeaths
// maleDeaths



'"filterPrettyName": "filterActualName"'


&structure={"banana":"cumCasesBySpecimenDate","deaths":"newDeathsByPublishDate"}'

