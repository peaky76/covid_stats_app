<template>
  <div>
    <input type="checkbox" />
    <div v-for="(filter, index) in filters" :key="index">{{filter}}</div>
  </div>
</template>

<script>
import { eventBus } from "@/main";
import FilterBuilder from "@/helpers/FilterBuilder.js";

export default {
  name: "input-checkbox",
  data() {
    return {
      filters: [],
    };
  },
  mounted() {
    this.filters = FilterBuilder.buildFilters();
  },
};
</script>

<style>
</style>