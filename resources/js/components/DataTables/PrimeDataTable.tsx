import React from 'react';
import {
  DataTable,
  DataTableHeaderTemplateType,
  DataTableRowExpansionTemplate,
  DataTableRowToggleParams
} from 'primereact/datatable';

interface Props {
  rowExpansionTemplate?(data: any, options: DataTableRowExpansionTemplate): React.ReactNode;

  children?: React.ReactNode,
  data?: any[]
  expandedRows?: any[]
  header?: DataTableHeaderTemplateType;

  onRowToggle?(e: DataTableRowToggleParams): void;
}


export default function PrimeDataTable({
                                         rowExpansionTemplate,
                                         data,
                                         expandedRows,
                                         children,
                                         header,
                                         onRowToggle
                                       }: Props) {
  return (
    <div className="w-full">
      <DataTable value={data}
                 className={'mx-auto'}
                 expandedRows={expandedRows}
                 onRowToggle={onRowToggle}
                 responsiveLayout="scroll"
                 paginator
                 currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={10}
                 rowsPerPageOptions={[10, 20, 50]}
                 rowExpansionTemplate={rowExpansionTemplate} dataKey="id" header={header}>
        {children}
      </DataTable>
    </div>
  );
}
