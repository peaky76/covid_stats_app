import Vue from "vue";
import App from "./App.vue";
import VueGoogleCharts from "vue-google-charts";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

Vue.component("v-select", vSelect);
Vue.use(VueGoogleCharts);

Vue.config.productionTip = false;

export const eventBus = new Vue();

new Vue({
  render: (h) => h(App),
}).$mount("#app");
