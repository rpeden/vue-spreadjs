<template>
  <ChartPanel title="Today's Sales ($)">
    <div class="totalSales">
      <div>${{value}}</div>
    </div>
  </ChartPanel>
</template>

<script>
import ChartPanel from "./ChartPanel";
import { withCommas } from "../util/util";

export default {
  components: {
    ChartPanel: ChartPanel
  },
  props: ["total"],
  computed: {
    value: function() { 
      return withCommas(this.total); 
    }
  }
};
</script>

<style scoped>
.totalSales {
  font-size: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 45px;
}
</style>

