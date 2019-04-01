<template>
  <ChartPanel title="Sales By Country">
    <wj-flex-chart :items-source="salesData" binding-x="country" style="height: 290px;">
      <wj-flex-chart-series name="Sales" binding="value"></wj-flex-chart-series>
    </wj-flex-chart>
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
