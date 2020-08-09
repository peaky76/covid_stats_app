<template>
  <div id="app">
    <h1>COVID APP</h1>
    <input-form />
    <result-display />
  </div>
</template>

<script>
import { eventBus } from '@/main';
import InputForm from "./components/InputForm";
import ResultDisplay from "./components/ResultDisplay";
export default {
  name: "covid-stats-app",
  components: {
    "input-form": InputForm,
    "result-display": ResultDisplay,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: palegoldenrod;
  border: 1px solid black;
}

</style>
