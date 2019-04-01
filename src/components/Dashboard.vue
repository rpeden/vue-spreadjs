<template>
  <div style="background-color: #ddd">
    <NavBar title="Awesome Dashboard"/>
    <div class="container">
      <div class="row">
        <Gauge :gaugeValue="gaugeData"/>
        <SalesChart :salesData="chartData"/>
        <SalesPie :salesData="pieData"/>
        <SalesTable :tableData="salesTableData"/>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar";
import Gauge from "./Gauge";
import SalesChart from "./SalesChart";
import SalesPie from "./SalesPie";
import SalesTable from "./SalesTable";
import { groupBySum } from "../util/util";

export default {
  components: { NavBar, SalesChart, SalesPie, SalesTable, Gauge },
  computed: {
    gaugeData() {
      const total = this.$store.state.recentSales.reduce(
        (acc, sale) => (acc += sale.value),
        0
      );
      return parseInt(total);
    },
    chartData() {
      const items = this.$store.state.recentSales;
      const groups = groupBySum(items, "country", "value");
      return groups;
    },
    pieData() {
      const items = this.$store.state.recentSales;
      const groups = groupBySum(items, "soldBy", "value");
      return groups;
    },
    salesTableData() {
      return this.$store.state.recentSales;
    }
  }
};
</script>