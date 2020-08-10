<template>
  <div id="app">
    <h1>COVID APP</h1>
    <input-form />
    <result-display :result="result"/>
  </div>
</template>

<script>
import { eventBus } from '@/main';
import InputForm from "./components/InputForm";
import ResultDisplay from "./components/ResultDisplay";
export default {
  name: "covid-stats-app",
  data() {
    return {
      result: null
    };
  },
  components: {
    "input-form": InputForm,
    "result-display": ResultDisplay,
  },
  mounted() {
    // const baseURL = 'https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=nation&structure={%22date%22:%22date%22,%22areaType%22:%22areaType%22,%22name%22:%22areaName%22,%20%22areaCode%22:%22areaCode%22}&latestBy=newCasesByPublishDate'

    //   fetch(baseURL)
    //     .then(res => res.json())
    //     .then(res => this.result = res);
    eventBus.$on('data-recieved', (res) => {
      this.result = res;
    })
  }
    
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: palegoldenrod;
  border: 1px solid black;
}
form, section, div {
  border: 1px solid black;
  padding: 1rem;
  margin: 1rem;
}

</style>
