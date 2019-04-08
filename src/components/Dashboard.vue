<template>
  <div style="background-color: #ddd">
    <NavBar title="Awesome Dashboard"/>
    <div class="container">
      <div class="row">
        <TotalSales :total="totalSales"/>
        <SalesByCountry :salesData="chartData"/>
        <SalesByPerson :salesData="personSales"/>
        <SalesTable :tableData="salesTableData"/>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar";
import TotalSales from "./TotalSales";
import SalesByCountry from "./SalesByCountry";
import SalesByPerson from "./SalesByPerson";
import SalesTable from "./SalesTable";
import { groupBySum } from "../util/util";

export default {
  components: { NavBar, SalesByCountry, SalesByPerson, SalesTable, TotalSales },
  computed: {
    totalSales() {
      const items = this.$store.state.recentSales;
      const total = items.reduce(
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
    personSales() {
      const items = this.$store.state.recentSales;
      const groups = groupBySum(items, "soldBy", "value");
      return groups;
    },
    salesTableData() {
      return this.$store.state.recentSales;
    },
  }
};
</script>