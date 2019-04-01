import Vue from 'vue'
import Vuex from "vuex";
import App from './App.vue'
import { recentSales } from "./data/data";

Vue.config.productionTip = false

import "./style.css";
import "wijmo/styles/wijmo.css";

Vue.config.productionTip = false;
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    recentSales
  }
});

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
