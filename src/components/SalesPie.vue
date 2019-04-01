<template>
  <ChartPanel title="Sales By Salesperson">
    <wj-flex-pie
      :items-source="salesData"
      binding="value"
      binding-name="soldBy"
      style="height: 290px;"
    ></wj-flex-pie>
  </ChartPanel>
</template>

<script>
import ChartPanel from "./ChartPanel";
import "wijmo/wijmo.vue2.chart";
export default {
  components: { ChartPanel },
  props: ["salesData"]
};
</script>
