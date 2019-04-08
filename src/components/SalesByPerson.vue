<template>
  <ChartPanel title="Sales By Salesperson">
    <div class="salesByPerson">
      <div v-for="sale in sales" :key="sale.soldBy" class="personRow">
        <div class="personName">{{sale.soldBy}}</div>
        <div class="personAmount">${{sale.value | withCommas}}</div>
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
.salesByPerson {
  display: flex;
  flex-direction: column;
}

.personRow {
  display: flex;
}
.personName {
  width: 80px;
  margin-right: 40px;
  text-align: right;
  font-weight: 600;
}
</style>
