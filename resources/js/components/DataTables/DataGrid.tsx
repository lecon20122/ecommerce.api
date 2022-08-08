import { ColDef, ColumnApi, GridOptions, RowClickedEvent } from 'ag-grid-community';
import React from 'react'
import { AgGridReact, AgGridReactProps } from 'ag-grid-react';

interface DataGridProps<T> {
  showNoRowsOverlay?: boolean,
  size?: React.CSSProperties;
  gridData: T[];
  colDef: ColDef[];
  rowClickHandler?: (event: RowClickedEvent) => void;
  rowHeight?: number
}



export default function DataGrid<T>({ size, showNoRowsOverlay, gridData, colDef, rowClickHandler = undefined , rowHeight }: DataGridProps<T>) {

  const gridOptions: GridOptions = {
    rowData: gridData,
    columnDefs: colDef,
    colResizeDefault: 'shift',
    // onGridReady: (event) => event.columnApi.sizeColumnsToFit(1486),
  }

  return (
    <div className='container p-6 mx-auto ag-theme-material' style={size} >
      <AgGridReact
        rowSelection={'multiple'}
        defaultColDef={{
          resizable: true,
          filter: true,
        }}
        onRowClicked={rowClickHandler}
        gridOptions={gridOptions}
        pagination
        paginationAutoPageSize
        animateRows
        rowHeight={rowHeight}
      />
    </div>
  )
}

export type DataGridType = typeof DataGrid
