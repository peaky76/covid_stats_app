<template>
  <div id="app">
    <h1>COVID APP</h1>
    <input-form />
    <result-display />
    
  </div>
  
</template>

<script>
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
  background-color: #e1e5f2;
  border: 1px solid black;
}
form,
section,
form > div,
section > div {
  /* border: 1px solid; */
  padding: 1rem;
  margin: 1rem;
  background-color: #e1e5f2;
}
h1 {
  font-family: 'Righteous', cursive;
}
</style>
