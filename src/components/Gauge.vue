<template>
  <ChartPanel title="Today's Sales ($)">
    <div class="gauge">
      <wj-radial-gauge
        :min="0"
        :max="500000"
        :step="50"
        :is-read-only="true"
        :show-ranges="false"
        :value="value"
        :thickness="0.15"
      />
    </div>
  </ChartPanel>
</template>

<script>
import ChartPanel from "./ChartPanel";
import "wijmo/wijmo.vue2.gauge";

export default {
  components: {
    ChartPanel: ChartPanel
  },
  props: ["gaugeValue"],
  computed: {
    value: function() { 
      return parseInt(this.gaugeValue); 
    }
  }
};
</script>

