<template>
  <ChartPanel title="Sales By Country">
    <div class="salesByCountry">
      <div v-for="sale in sales" :key="sale.country" class="countryRow">
        <div class="countryName">{{sale.country}}</div>
        <div class="countryAmount">${{sale.value | withCommas}}</div>
      </div>
    </div>
  </ChartPanel>
</template>

<script>
import ChartPanel from "./ChartPanel";
import { withCommas } from "../util/util";

export default {
  components: { ChartPanel },
  props: ["salesData"],
  computed: {
      sales: function() {
        return this.salesData.sort((first, second) => second.value - first.value)
      }
  },
  filters: {
    withCommas: withCommas
  }
};
</script>

<style scoped>
.salesByCountry {
  display: flex;
  flex-direction: column;
}

.countryRow {
  display: flex;
}
.countryName {
  width: 100px;
  margin-right: 40px;
  text-align: right;
  font-weight: 600;
}
</style>
