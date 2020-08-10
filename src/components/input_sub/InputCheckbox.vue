<template>
  <div>
    <!-- <div>
      <input
        v-model="cases"
        type="checkbox"
        id="case-id"
        name="cases"
        value="cumCasesByPublishDate"
        v-on:change="arrayMethod"
      />
      <label for="case-id">Cases</label>
    </div>-->
    <div v-for="(filter, index) in filters" :key="index">
      <input
        v-model="selectedFilters"
        :value="`&quot;` + filter.name + `&quot;:&quot;` + filter.name + `&quot;`"
        type="checkbox"
        :id="filter.name"
        v-on:change="arrayMethod"
      />
      <label :for="filter.name">{{filter.prettyName}}</label>
    </div>

    <!-- <div>
      <input v-model="deaths" type="checkbox" id="death-id" name="deaths" value="cumDeathsByPublishDate" v-on:change="arrayMethod" />
      <label for="death-id">Deaths</label>
    </div>
    <div>
      <input  v-model="admissions" type="checkbox" id="admission-id" name="admissions" value="hospitalCases" v-on:change="arrayMethod"/>
      <label for="admission-id">Hospital</label>
    </div>-->
  </div>
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
      cases: null,
      deaths: null,
      admissions: null,
      selectedFilters: [],
    };
  },
  methods: {
    arrayMethod() {
      // const filters = [];
      // if (this.cases === true) {
      //   // filter.prettyName: filterName
      //   this.filters.push('"cumCasesByPublishDate":"cumCasesByPublishDate"');
      // }
      // if (this.deaths === true) {
      //   filters.push('"cumDeathsByPublishDate":"cumDeathsByPublishDate"')
      // };
      // if (this.admissions === true) {
      //   filters.push('"hospitalCases":"hospitalCases"')
      //`
      StatsService.getData(this.selectedFilters.join(","))
        .then((res) => eventBus.$emit("data-received", res))
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    this.filters = FilterBuilder.buildFilters();
  },
};
</script>

<style>
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

