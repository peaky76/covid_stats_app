<template>
  <div id="app">
    <header>
      <img id="virus" src="./assets/virus.png" />
      <h1>COVID STATS</h1>
    </header>
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
#app,
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #e1e5f2;
}
#app {
  width: calc(80% - 16px);
  float: left;
  padding-top: 16px;
  padding-left: 16px;
}
header {
  display: flex;
}
#virus {
  width: 5em;
  margin-right: 1em;
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
  font-family: "Righteous", cursive;
}
input,
label {
  color: white;
}
body {
  margin: 0;
}
.input-heading {
  font-family: "Righteous", cursive;
  margin-bottom: 5px;
  color: black;
}
</style>
