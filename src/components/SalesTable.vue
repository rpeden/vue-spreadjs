<template>
  <TablePanel title="Recent Sales">
    <gc-spread-sheets :hostClass='hostClass' @workbookInitialized='workbookInit'>
      <gc-worksheet :dataSource='tableData' :name="sheetName" :autoGenerateColumns='autoGenerateColumns'>
        <gc-column
            :width='50'
            :dataField="'id'"
            :headerText="'ID'"
            :visible = 'visible'
            :resizable = 'resizable'
          ></gc-column>
        <gc-column
            :width='200'
            :dataField="'client'"
            :headerText="'Client'"
            :visible = 'visible'
            :resizable = 'resizable'
          ></gc-column>
        <gc-column
            :width="320"
            :headerText="'Description'"
            :dataField="'description'"
            :visible = 'visible'
            :resizable = 'resizable'
          ></gc-column>
        <gc-column
            :width="100"
            :dataField="'value'"
            :headerText="'Value'"
            :visible = 'visible'
            :formatter = 'priceFormatter'
            :resizable = 'resizable'
          ></gc-column>
          <gc-column
            :width="100"
            :dataField="'itemCount'"
            :headerText="'Quantity'"
            :visible = 'visible'
            :resizable = 'resizable'
          ></gc-column>
          <gc-column
            :width="100"
            :dataField="'soldBy'"
            :headerText="'Sold By'"
            :visible = 'visible'
            :resizable = 'resizable'
          ></gc-column>
          <gc-column
            :width="100"
            :dataField="'country'"
            :headerText="'Country'"
            :visible = 'visible'
            :resizable = 'resizable'
          ></gc-column>
      </gc-worksheet>
    </gc-spread-sheets>
    <div class="dashboardRow">
      <button class="btn btn-primary dashboardButton" @click="exportSheet">Export to Excel</button>
      <div>
        <b>Import Excel File:</b>
        <div>
          <input type="file" class="fileSelect" @change='fileChange($event)' />
        </div>
      </div>
    </div>
  </TablePanel>
</template>

<script>
/* eslint-disable */
import "@grapecity/spread-sheets/styles/gc.spread.sheets.excel2016colorful.css";

// SpreadJS imports
import "@grapecity/spread-sheets-vue";
import Excel from "@grapecity/spread-excelio";
import { saveAs } from 'file-saver';

import TablePanel from "./TablePanel";

export default {
  components: { TablePanel },
  props: ["tableData"],
  data(){
      return {
        sheetName: 'Sales Data',
        hostClass:'spreadsheet',
        autoGenerateColumns:true,
        width:200,
        visible:true,
        resizable:true,
        priceFormatter:"$ #.00"
      }
    },
  methods: {
      workbookInit: function(spread) {
        this._spread = spread;
      },
      fileChange: function (e) {
        if (this._spread) {
          let fileDom = e.target || e.srcElement;
          let excelIO = new Excel.IO();
          let spread = this._spread;

          excelIO.open(fileDom.files[0], (data) => {
            spread.fromJSON(data);
          });
        }
      },
      exportSheet: function() {
        const spread = this._spread;
        const fileName = "SalesData.xlsx";

        const sheet = spread.getSheet(0);
        const excelIO = new Excel.IO();
        const json = JSON.stringify(spread.toJSON());

        excelIO.save(json, function(blob){
          saveAs(blob, fileName);
        }, function (e) {  
          alert(e);  
        });
      }
    }
};
</script>

<style scoped>
.spreadsheet {
  width: 100%;
  height: 400px;
  border: 1px solid lightgray;
}

.fileSelect {
  width: 100%;
  margin-top: 20px;
}
</style>