<template>
  <div>
    <p v-for="(item, index) in result.data" :key="index">{{item}}</p>
  </div>
</template>

<script>
export default {
  name: "result-detail",
  props: ["result"],
};
</script>

<style>
</style>