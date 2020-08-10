<template>
  <div>
    <div>
      <input v-model="cases" type="checkbox" id="case-id" name="cases" value="cumCasesByPublishDate" v-on:change="arrayMethod" />
      <label for="case-id">Cases</label>
    </div>
    <!-- <div>
      <input v-model="deaths" type="checkbox" id="death-id" name="deaths" value="cumDeathsByPublishDate" v-on:change="arrayMethod" />
      <label for="death-id">Deaths</label>
    </div>
    <div>
      <input  v-model="admissions" type="checkbox" id="admission-id" name="admissions" value="hospitalCases" v-on:change="arrayMethod"/>
      <label for="admission-id">Hospital</label>
    </div> -->

  </div>
</template>

<script>
import { eventBus } from '@/main';
import StatsService from '@/helpers/StatsService.js'

export default {
  name: "input-checkbox",
  data() {
    return {
      filters: [],
      cases: null,
      deaths: null,
      admissions: null,
   
    }
  },
  methods: {
    arrayMethod() {
      const filters = [];
      if (this.cases === true) {
        this.filters.push('"cumCasesByPublishDate":"cumCasesByPublishDate"')
      };
      // if (this.deaths === true) {
      //   filters.push('"cumDeathsByPublishDate":"cumDeathsByPublishDate"')
      // };
      // if (this.admissions === true) {
      //   filters.push('"hospitalCases":"hospitalCases"')
      // };
      StatsService.getData(this.filters)
        .then(res => eventBus.$emit('data-received', res))
        .catch(error=>console.log(error))
    }
  }

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

