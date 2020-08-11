<template>
  <span id="filters">
    <fieldset v-for="(stat, index) in stats" :key="index">
      <legend>{{stat}}</legend>
      <span class="filter-checkbox" v-for="(filter, index) in checkboxesForStat(stat)" :key="index">
        <input
          v-model="selectedFilters"
          :value="`&quot;` + filter.name + `&quot;:&quot;` + filter.name + `&quot;`"
          type="checkbox"
          :id="filter.name"
          v-on:change="sendFilters"
          :disabled="filter.excludeFor.includes(currentAreaType)"
        />
        <label :for="filter.name">{{filter.criterion}}</label>
      </span>
    </fieldset>
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
  computed: {
    stats() {
      const allStats = this.filters.map((filter) => filter.stat);
      const distinctStats = [...new Set(allStats)];
      return distinctStats;
    },
  },
  methods: {
    checkboxesForStat(stat) {
      return this.filters.filter((filter) => filter.stat === stat);
    },
    sendFilters() {
      const filters = this.selectedFilters.join(",");
      eventBus.$emit("filters", filters);
    },
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
#filters {
  display: flex;
}
fieldset {
  display: flex;
  flex-direction: column;
  width: 12rem;
}
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

