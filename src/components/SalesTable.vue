<template>
  <TablePanel title="Recent Sales">
    <table class="table">
      <thead>
        <tr>
          <th>Client</th>
          <th>Description</th>
          <th>Value</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="sale in tableData" v-bind:key="sale.id">
          <td>{{sale.client}}</td>
          <td>{{sale.description}}</td>
          <td>{{sale.value}}</td>
          <td>{{sale.itemCount}}</td>
        </tr>
      </tbody>
    </table>
    <gc-spread-sheets :hostClass='spread-host' @workbookInitialized='spreadInitHandle'>
    </gc-spread-sheets>
  </TablePanel>
</template>

<script>
import "@grapecity/spread-sheets/styles/gc.spread.sheets.excel2016colorful.css";

// SpreadJS imports
import "@grapecity/spread-sheets-vue";
import * as GC from "@grapecity/spread-sheets";
import Excel from "@grapecity/spread-excelio";

import TablePanel from "./TablePanel";
export default {
  components: { TablePanel },
  props: ["tableData"],
  methods: {
      spreadInitHandle: function (spread) {
        this._spread = spread;
      },
      fileChange: function (e) {
        if (this._spread) {
          let fileDom = e.target || e.srcElement;
          let excelIO = new Excel.IO();
          let spread = this._spread;
        }
      }
    }
};
</script>

<style scoped>
.spread-host {
  width: 100%;
  height: 500px;
  border: 1px solid lightgray;
}

.fileSelect {
  width: 100%;
  margin-top: 20px;
}
</style>